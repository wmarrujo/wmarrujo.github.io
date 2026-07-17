<script lang="ts">
	import type {Item} from "./types"

	let {item}: {item: Item} = $props()
</script>

<a
	href={item.link}
	target="_blank"
	rel="noopener noreferrer"
	class="card"
	data-card
>
	{#if item.image}
		<img src={item.image} alt={item.title} class="card-img">
	{:else}
		<div class="card-img placeholder">{item.title.charAt(0)}</div>
	{/if}
	<div class="card-body">
		<h3 class="card-title">{item.title}</h3>
		{#if item.author}
			<p class="card-author">{item.author}</p>
		{/if}
		{#if item.description}
			<p class="card-desc">{item.description}</p>
		{/if}
	</div>
</a>

<style lang="postcss">
	.card {
		width: min(24rem, 85vw);
		flex-shrink: 0;
		display: flex;
		flex-direction: column;
		aspect-ratio: 3 / 4;
		border-radius: 0.75rem;
		padding: 1rem;
		background: #002a52; /* secondary */
		box-shadow: 0 4px 6px rgba(0, 0, 0, 0.4);
		overflow: hidden;
		scroll-snap-align: start;
		transition: transform 200ms ease-out, box-shadow 200ms ease-out;
	}

	.card:hover {
		transform: scale(1.05);
		box-shadow: 0 10px 20px rgba(0, 0, 0, 0.6);
	}

	.card-img {
		width: 100%;
		height: 60%;
		object-fit: cover;
		border-radius: 0.375rem;
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

	.card-body {
		display: flex;
		flex-direction: column;
		gap: 0.25rem;
		padding-top: 0.5rem;
		flex: 1;
		min-height: 0;
	}

	.card-title {
		font-family: "Josefin Sans", sans-serif;
		font-size: 1.5rem;
		line-height: 1.1;
	}

	.card-author {
		font-size: 0.875rem;
		opacity: 0.7;
	}

	.card-desc {
		font-size: 0.875rem;
		opacity: 0.85;
		overflow: hidden;
		display: -webkit-box;
		-webkit-line-clamp: 3;
		-webkit-box-orient: vertical;
	}
</style>