<script lang="ts">
	import {onMount} from "svelte"
	
	import logo from "$lib/images/logos/logo.svg"
	import tradeseek from "$lib/images/logos/tradeseek.svg"
	import github from "$lib/images/logos/github.svg"
	import linkedin from "$lib/images/logos/linkedin.svg"
	
	import capri from "$lib/images/profiles/capri.jpeg?enhanced"
	import forum from "$lib/images/profiles/forum.jpeg?enhanced"
	import hike from "$lib/images/profiles/hike.jpeg?enhanced"
	import neil from "$lib/images/profiles/neil.jpeg?enhanced"
	import orvieto from "$lib/images/profiles/orvieto.jpeg?enhanced"
	import riomaggiore from "$lib/images/profiles/riomaggiore.jpeg?enhanced"
	import rocks from "$lib/images/profiles/rocks.jpeg?enhanced"
	import spanish from "$lib/images/profiles/spanish.jpeg?enhanced"
	import vernazza from "$lib/images/profiles/vernazza.jpeg?enhanced"
	import villa from "$lib/images/profiles/villa.jpeg?enhanced"
	import zoo from "$lib/images/profiles/zoo.jpeg?enhanced"
	
	// has the images, and the vertical line in the image with my face on it, so we can center it properly on a thin screen
	const profiles = [
		{image: capri, face: 0.60},
		{image: forum, face: 0.20},
		{image: hike, face: 0.30},
		{image: neil, face: 0.40},
		{image: orvieto, face: 0.30},
		{image: riomaggiore, face: 0.80},
		{image: rocks, face: 0.50},
		{image: spanish, face: 0.70},
		{image: vernazza, face: 0.30},
		{image: villa, face: 0.70},
		{image: zoo, face: 0.50},
	]
	const profile = profiles[Math.floor(Math.random() * profiles.length)]
	
	onMount(() => {
		document.querySelector<HTMLImageElement>("#profile")!.style.objectPosition = `${profile.face * 100}% 50%` // NOTE: no good way to stop jitter when mouse first moves after page loads
		
		if (window.matchMedia("(pointer:fine)").matches) addEventListener("mousemove", pointerMoved) // if the device has a mouse
		// else addEventListener("deviceorientation", deviceOrientationChanged) // if the device doesn't have a mouse // TODO: enable parallax on device tilting for phones & tablets
	})
	
	function pointerMoved(event: MouseEvent) {
		let fromCenter = {x: (event.clientX/window.innerWidth - 0.5) * 2, y: (event.clientY/window.innerHeight - 0.5) * 2} // -1 to 1 with 0 being in the center
		document.querySelector<HTMLImageElement>("#profile")!.style.objectPosition =
			`calc(${profile.face * 100}% - ${fromCenter.x * 20}px) calc(50% - ${fromCenter.y * 20}px)` // move by 20 pixels maximum
	}
</script>

<div class="h-lvh w-full md:flex md:flex-row overflow-x-hidden md:overflow-y-hidden">
	<div class="w-full md:w-2/3 h-2/3 md:h-lvh relative">
		<div id="profile-container" class="h-full">
			<enhanced:img id="profile" src={profile.image} alt="William in some cool place" />
		</div>
		<h1 class="font-heading-token text-8xl absolute top-0 left-0 pt-10 px-5 md:pt-20 md:px-20 drop-shadow-lg">William Marrujo</h1>
	</div>
	<nav class="w-full md:w-1/3 flex flex-col justify-between">
		<img src={logo} alt="logo" class="w-1/5 md:w-1/3 m-10 md:m-20 self-center">
		<ul class="grow flex flex-col pr-10 md:pr-20 text-3xl md:text-4xl items-end">
			<li class="grow hover:text-yellow-200"><a href="about" class="h-full">About</a></li>
			<li class="grow hover:text-yellow-200"><a href="notes" class="h-full">Notes</a></li>
			<li class="grow hover:text-yellow-200"><a href="projects" class="h-full">Projects</a></li>
			<li class="grow hover:text-yellow-200"><a href="recommendations" class="h-full">Recommendations</a></li>
		</ul>
		<div class="flex flex-row justify-between py-10 md:py-20 px-10 md:pr-20">
			<a href="https://tradeseek.co"><img src={tradeseek} alt="TradeSeek Icon" class="w-12"></a>
			<a href="https://github.com/wmarrujo"><img src={github} alt="Github Logo" class="w-12"></a>
			<a href="https://linkedin.com/in/wmarrujo"><img src={linkedin} alt="LinkedIn Logo" class="w-12"></a>
		</div>
	</nav>
</div>

<style lang="postcss">
	#profile-container {
		clip-path: polygon(0 0, 100% 0, 100% 90%, 0 100%);
		@screen md {
			clip-path: polygon(0 0, 100% 0, 80% 100%, 0 100%);
		}
	}
	
	#profile {
		height: 100%;
		object-fit: cover;
		image-resolution: 300dpi;
		transform: scale(1.1);
	}
</style>
