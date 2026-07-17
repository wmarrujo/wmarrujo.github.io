<script lang="ts">
	import {fade} from "svelte/transition"
	import type {Group, Item} from "./types"
	import {isGroup} from "./types"
	import {withFlip} from "./flip"
	import Card from "./Card.svelte"
	import PileCard from "./PileCard.svelte"
	import Self from "./Deck.svelte"

	let {
		group,
		isOpen,
		onToggle
	}: {
		group: Group
		isOpen: boolean
		onToggle: () => void
	} = $props()

	const subgroups = group.items.filter(isGroup)
	const cards = group.items.filter((i): i is Item => !isGroup(i))
	const hasSubs = subgroups.length > 0
	const total = cards.length

	// 2–5 card-backs in the closed stack, based on direct children count.
	const stackShow = Math.min(Math.max(group.items.length, 2), 5)

	let openSub = $state<number | null>(null)
	let gridEl = $state<HTMLDivElement | null>(null)
	function toggleSub(i: number) {
		withFlip(gridEl, ":scope > .deck", () => {
			openSub = openSub === i ? null : i
		})
	}

	// --- open list: left pile | spread | right pile ---
	let listEl = $state<HTMLDivElement | null>(null)
	let start = $state(0)
	let spreadCount = $state(1)
	let peek = $state(40)
	let push = $state(0)
	let pilePeek = $state(40)

	const hasLeftPile = $derived(start > 0)
	const hasRightPile = $derived(start + spreadCount < total)
	const spreadCards = $derived(cards.slice(start, start + spreadCount))

	function move(dir: 1 | -1) {
		const maxStart = Math.max(0, total - spreadCount)
		start = Math.max(0, Math.min(maxStart, start + dir))
	}

	function compute() {
		if (!listEl) return
		const listWidth = listEl.clientWidth
		const cardW = Math.min(272, window.innerWidth * 0.85)
		let n = listWidth < 500 ? 1 : listWidth < 900 ? 3 : 5
		n = Math.max(1, Math.min(n, total))

		// shrink n until cards don't overlap too far
		for (;;) {
			const right = total > n
			const p = n > 1 ? 40 : 0
			const pk = n > 1 ? (n - 1) * p : 40
			const reserved = pk + (right ? pk : 0) // left pile + (right pile absorbs hover-push)
			const q = n > 1 ? (listWidth - reserved - cardW) / (n - 1) : 40
			if (q >= 30 || n <= 1) {
				spreadCount = n
				push = right && n > 1 ? 40 : 0
				pilePeek = pk
				peek = q
				listEl.style.setProperty("--card-w", cardW + "px")
				listEl.style.setProperty("--pile-peek", pk + "px")
				listEl.style.setProperty("--peek", q + "px")
				listEl.style.setProperty("--push", push + "px")
				return
			}
			n -= 1
		}
	}

	$effect(() => {
		// recompute when the list mounts or the window resizes
		compute()
	})
	$effect(() => {
		// recompute when start changes (piles appear/disappear)
		start
		compute()
	})
	$effect(() => {
		const handler = () => compute()
		window.addEventListener("resize", handler)
		return () => window.removeEventListener("resize", handler)
	})

	// keep start in range when spreadCount changes
	$effect(() => {
		const max = Math.max(0, total - spreadCount)
		if (start > max) start = max
	})

	// swipe to advance
	let pointerStartX = 0
	function onPointerDown(e: PointerEvent) {
		pointerStartX = e.clientX
	}
	function onPointerUp(e: PointerEvent) {
		const dx = e.clientX - pointerStartX
		if (dx > 40) move(-1)
		else if (dx < -40) move(1)
	}
</script>

<section class="deck" class:col-span-full={isOpen}>
	{#if isOpen}
		<button class="header" onclick={onToggle} aria-expanded={isOpen}>
			<span class="chev" aria-hidden="true">▼</span>
			<span class="name">{group.name}</span>
		</button>
		<div class="content" transition:fade={{duration: 200}}>
			{#if hasSubs}
				<div class="grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3 monitor:grid-cols-4 gap-6" bind:this={gridEl}>
					{#each subgroups as sub, i}
						<Self group={sub} isOpen={openSub === i} onToggle={() => toggleSub(i)} />
					{/each}
				</div>
			{:else}
				<div
					class="list"
					bind:this={listEl}
					onpointerdown={onPointerDown}
					onpointerup={onPointerUp}
					onpointercancel={onPointerUp}
				>
					{#if hasLeftPile}
						<PileCard item={cards[start - 1]} side="left" onAdvance={() => move(-1)} />
					{/if}
					<div class="spread">
						{#each spreadCards as card}
							<div class="spread-card"><Card item={card} /></div>
						{/each}
					</div>
					{#if hasRightPile}
						<PileCard item={cards[start + spreadCount]} side="right" onAdvance={() => move(1)} />
					{/if}
				</div>
			{/if}
		</div>
	{:else}
		<button class="stack" onclick={onToggle} aria-label={`Open ${group.name}`}>
			{#each Array(stackShow) as _, i}
				<div
					class="back"
					style="--ox: {(stackShow - 1 - i) * 4}px; --oy: {(stackShow - 1 - i) * 4}px;"
				>
					{#if i === stackShow - 1}
						<span class="back-name">{group.name}</span>
					{/if}
				</div>
			{/each}
		</button>
	{/if}
</section>

<style lang="postcss">
	.deck {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}

	.header {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 0.5rem;
		width: 100%;
		background: none;
		border: none;
		padding: 0.5rem 0;
		color: inherit;
		font-family: "Josefin Sans", sans-serif;
		font-size: 1.5rem;
		cursor: pointer;
	}

	.header:hover {
		text-decoration: underline;
	}

	.chev {
		display: inline-block;
		width: 1.25rem;
		text-align: center;
		opacity: 0.8;
	}

	.content {
		width: 100%;
	}

	/* open list: piles + overlapping spread */
	.list {
		display: flex;
		align-items: flex-start;
		width: 100%;
		overflow: hidden;
		touch-action: pan-y;
	}

	.spread {
		display: flex;
		align-items: flex-start;
		flex: 1;
		min-width: 0;
	}

	.spread-card {
		position: relative;
		left: 0;
		width: var(--card-w, 17rem);
		flex-shrink: 0;
		margin-left: calc(var(--peek, 40px) - var(--card-w, 17rem));
		transition: left 0.4s ease-out, transform 0.4s ease-out;
	}

	.spread-card:first-child {
		margin-left: 0;
	}

	.spread-card:hover {
		transform: translateY(-20px);
	}

	/* hovering a card shoves the cards after it to the right */
	.spread-card:hover ~ .spread-card {
		left: var(--push, 0px);
	}

	/* closed stack of face-down card-backs */
	.stack {
		position: relative;
		width: 100%;
		max-width: 17rem;
		aspect-ratio: 3 / 4;
		margin: 0 auto;
		background: none;
		border: none;
		padding: 0;
		cursor: pointer;
		transition: transform 200ms ease-out;
	}

	.stack:hover {
		transform: translateY(-4px) scale(1.02);
	}

	.back {
		position: absolute;
		inset: 0;
		border-radius: 0.75rem;
		background: #002a52; /* secondary */
		box-shadow: 0 4px 6px rgba(0, 0, 0, 0.4);
		transform: translate(var(--ox, 0), var(--oy, 0));
		display: flex;
		align-items: center;
		justify-content: center;
		overflow: hidden;
	}

	.back::before {
		content: "";
		position: absolute;
		inset: 0;
		border-radius: inherit;
		background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
		opacity: 0.08;
		pointer-events: none;
	}

	.back-name {
		position: relative;
		font-family: "Josefin Sans", sans-serif;
		font-size: clamp(1rem, 4vw, 1.5rem);
		text-align: center;
		padding: 0 0.5rem;
	}
</style>