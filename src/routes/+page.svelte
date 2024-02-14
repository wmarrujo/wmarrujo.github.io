<script lang="ts">
	import logo from "$lib/images/logos/logo-dark.svg"
	import aaosc from "$lib/images/logos/aaosc-dark.svg"
	import github from "$lib/images/logos/github-dark.svg"
	import linkedin from "$lib/images/logos/linkedin-dark.svg"
	
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
	
	// const profiles = import.meta.glob("$lib/images/profiles/*.jpeg", {query: {enhanced: true}})
	const profiles = [capri, forum, hike, neil, orvieto, riomaggiore, rocks, spanish, vernazza, villa, zoo]
	const profile = profiles[Math.floor(Math.random() * profiles.length)]
	
	function pointerMoved(event: MouseEvent) {
		let pixelsFromCenter = {x: event.clientX - window.innerWidth/2, y: event.clientY - window.innerHeight/2}
		document.querySelector<HTMLImageElement>("#profile")!.style.objectPosition = `calc(50% - ${pixelsFromCenter.x * 0.02}px) calc(50% - ${pixelsFromCenter.y * 0.02}px)`
	}
</script>

<div class="h-lvh w-full flex flex-col md:flex-row overflow-x-hidden" on:pointermove={pointerMoved}>
	<div class="w-full md:w-2/3 h-2/3 md:h-lvh relative">
		<div id="profile-container" class="h-full">
			<enhanced:img id="profile" src={profile} alt="William in some cool place" />
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
			<a href="https://factory-twin.com"><img src={aaosc} alt="Advisory Aerospace Icon" class="w-12"></a>
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
