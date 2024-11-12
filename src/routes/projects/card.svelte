<script lang="ts">
	import {type Snippet} from "svelte"
	
	////////////////////////////////////////////////////////////////////////////////
	
	let {
		children,
		class: className = "",
		href = ""
	}: {
		children?: Snippet
		class?: string
		href?: string
	} = $props()
	
	const maxRotation = 5 // the minimum rotation, in degrees
	
	let x = $state(0.5) // the percentage (as a number from 0 to 1) of how far it is along the x-axis of the box (left is 0)
	let y = $state(0.5) // the percentage (as a number from 0 to 1) of how far it is along the y-axis of the box (top is 0)
	
	let style = $derived(`
		--xangle: ${(x * 2 - 1) * maxRotation}deg;
		--yangle: ${-(y * 2 - 1) * maxRotation}deg;
		--brightness: ${-(y * 0.4 - 0.2) + 1};
	`)
	
	function onMouseMove(event: MouseEvent) {
		const child = (event.target as HTMLDivElement).getBoundingClientRect() // the rect of the child that received the mouse event directly (so it can be the children of the element we put this listener on)
		const card = (event.currentTarget as HTMLDivElement).getBoundingClientRect() // the rect of the intended element (the element we put this listener on)
		x = (child.left + event.offsetX - card.left) / card.width
		y = (child.top + event.offsetY - card.top) / card.height
		// NOTE: (event.offsetX, event.offsetY) is the mosue position relative to the element which the mouse is directly over, which is usually a child element of the one we bound this function to as a listener
	}
	
	// reset the card position
	function onMouseLeave() { x = 0.5; y = 0.5 }
</script>

{#if href}
	<a {href} onmousemove={onMouseMove} onmouseleave={onMouseLeave} class="card" style={style ?? ""}>
		<div class="card-inner {className}">
			{@render children?.()}
		</div>
	</a>
{:else}
	<div onmousemove={onMouseMove} onmouseleave={onMouseLeave} role="listitem" class="card" style={style ?? ""}>
		<div class="card-inner {className}">
			{@render children?.()}
		</div>
	</div>
{/if}

<style lang="postcss">
	.card {
		--xangle: 0;
		--yangle: 0;
		--brightness: 1;
		
		transform: scale(1);
		perspective: 600px;
		transition: all 250ms ease-out;
	}
	
	.card:hover {
		transform: scale(1.05);
		filter: drop-shadow(4px 4px 4px rgba(0, 0, 0, 0.5));
	}
	
	.card-inner {
		transition: all 250ms ease-out;
		transform: rotateY(var(--xangle)) rotateX(var(--yangle));
		filter: brightness(var(--brightness));
	}
</style>
