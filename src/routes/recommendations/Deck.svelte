<script lang="ts">
	import {slide} from "svelte/transition"
	import type {Group, Item} from "./types"
	import {isGroup} from "./types"
	import Card from "./Card.svelte"
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

	// 2–5 card-backs in the closed stack, based on direct children count.
	const stackShow = Math.min(Math.max(group.items.length, 2), 5)

	let openSub = $state<number | null>(null)
	function toggleSub(i: number) {
		openSub = openSub === i ? null : i
	}

	let strip = $state<HTMLDivElement | null>(null)
	let canLeft = $state(false)
	let canRight = $state(true)

	function onScroll() {
		if (!strip) return
		const max = strip.scrollWidth - strip.clientWidth
		canLeft = strip.scrollLeft > 4
		canRight = strip.scrollLeft < max - 4
	}

	function advance(dir: 1 | -1) {
		if (!strip) return
		const c = strip.querySelector<HTMLElement>("[data-card]")
		const w = c ? c.getBoundingClientRect().width : 384
		strip.scrollBy({left: dir * (w + 16), behavior: "smooth"}) // 16 = gap
	}

	// Update arrow visibility when the strip mounts (open) or on resize.
	$effect(() => {
		if (!strip) return
		onScroll()
	})
	$effect(() => {
		const handler = () => onScroll()
		window.addEventListener("resize", handler)
		return () => window.removeEventListener("resize", handler)
	})
</script>

<section class="deck" class:col-span-full={isOpen}>
	<button class="header" onclick={onToggle} aria-expanded={isOpen}>
		<span class="chev" aria-hidden="true">{isOpen ? "▼" : "▶"}</span>
		<span class="name">{group.name}</span>
	</button>

	{#if isOpen}
		<div class="content" transition:slide={{duration: 250}}>
			{#if hasSubs}
				<div class="grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3 monitor:grid-cols-4 gap-6">
					{#each subgroups as sub, i}
						<Self group={sub} isOpen={openSub === i} onToggle={() => toggleSub(i)} />
					{/each}
				</div>
			{:else}
				<div class="strip-wrap">
					{#if canLeft}
						<button class="arrow left" onclick={() => advance(-1)} aria-label="Previous">‹</button>
					{/if}
					{#if canRight}
						<button class="arrow right" onclick={() => advance(1)} aria-label="Next">›</button>
					{/if}
					<div class="strip" bind:this={strip} onscroll={onScroll}>
						{#each cards as card}
							<Card item={card} />
						{/each}
					</div>
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
		gap: 0.5rem;
		width: 100%;
		background: none;
		border: none;
		padding: 0.25rem 0;
		color: inherit;
		font-family: "Josefin Sans", sans-serif;
		font-size: 1.25rem;
		cursor: pointer;
		text-align: left;
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

	/* horizontal strip */
	.strip-wrap {
		position: relative;
		overflow: hidden;
	}

	.strip {
		display: flex;
		gap: 1rem;
		overflow-x: auto;
		scroll-snap-type: x mandatory;
		padding: 0.5rem;
		scrollbar-width: none; /* Firefox */
	}

	.strip::-webkit-scrollbar {
		display: none; /* Chrome/Safari */
	}

	.arrow {
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		z-index: 10;
		width: 2rem;
		height: 2rem;
		border-radius: 9999px;
		border: none;
		background: rgba(0, 53, 102, 0.8);
		color: #ffc300; /* accent */
		font-size: 1.25rem;
		line-height: 1;
		display: flex;
		align-items: center;
		justify-content: center;
		cursor: pointer;
	}

	.arrow:hover {
		background: rgba(0, 53, 102, 1);
	}

	.arrow.left {
		left: 0.25rem;
	}

	.arrow.right {
		right: 0.25rem;
	}

	/* closed stack of face-down card-backs */
	.stack {
		position: relative;
		width: 100%;
		max-width: 24rem;
		aspect-ratio: 3 / 4;
		margin: 0 auto;
		background: none;
		border: none;
		padding: 0;
		cursor: pointer;
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

	/* subtle noise texture on the card back */
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