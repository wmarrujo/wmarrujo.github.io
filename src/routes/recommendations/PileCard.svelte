<script lang="ts">
	import type {Item} from "./types"

	let {
		item,
		side,
		onAdvance
	}: {
		item: Item
		side: "left" | "right"
		onAdvance: () => void
	} = $props()
</script>

<button class="pile {side}" onclick={onAdvance} aria-label={side === "right" ? "Next" : "Previous"}>
	<div class="pile-face">
		{#if item.image}
			<img src={item.image} alt={item.title} class="face-img">
		{:else}
			<div class="face-img placeholder">{item.title.charAt(0)}</div>
		{/if}
		<div class="face-body">
			<h4 class="face-title">{item.title}</h4>
		</div>
	</div>
</button>

<style lang="postcss">
	.pile {
		position: relative;
		width: var(--pile-peek, 40px);
		aspect-ratio: 3 / 4;
		flex-shrink: 0;
		overflow: hidden;
		background: none;
		border: none;
		padding: 0;
		cursor: pointer;
	}

	/* the full face-up card, clipped to a peek; only the edge facing the spread shows */
	.pile-face {
		position: absolute;
		top: 0;
		width: var(--card-w, 17rem);
		aspect-ratio: 3 / 4;
		display: flex;
		flex-direction: column;
		border-radius: 0.75rem;
		background: #002a52; /* secondary */
		/* offset solid shadows hint at more cards stacked behind */
		box-shadow:
			0 4px 6px rgba(0, 0, 0, 0.4),
			6px 6px 0 -1px #002a52,
			10px 10px 0 -2px #002a52;
		overflow: hidden;
		transition: transform 200ms ease-out;
	}

	.pile.left .pile-face {
		right: 0;
	}

	.pile.right .pile-face {
		left: 0;
	}

	.pile:hover .pile-face {
		transform: translateY(-4px);
	}

	.face-img {
		width: 100%;
		height: 60%;
		object-fit: cover;
	}

	.placeholder {
		display: flex;
		align-items: center;
		justify-content: center;
		background: #003566; /* primary */
		color: #ffc300; /* accent */
		font-family: "Josefin Sans", sans-serif;
		font-size: 4rem;
	}

	.face-body {
		padding: 0.5rem;
	}

	.face-title {
		font-family: "Josefin Sans", sans-serif;
		font-size: 1.5rem;
		line-height: 1.1;
	}
</style>