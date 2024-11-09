<script lang="ts">
	import {onMount} from "svelte"
	import {page} from "$app/stores"
	
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

<div class="h-lvh w-full laptop:flex laptop:flex-row">
	<div class="w-full laptop:w-[calc(100%-25rem)] h-2/3 laptop:h-lvh z-10 relative overflow-x-clip laptop:overflow-x-visible laptop:overflow-y-clip">
		<div id="profile-shadow" class="h-full">
			<div id="profile-container" class="h-full">
				<enhanced:img id="profile" src={profile.image} alt="William in some cool place" />
			</div>
		</div>
		<h1 id="title" class="font-title text-8xl absolute top-0 left-0 pt-10 px-5 laptop:pt-20 laptop:px-20">William Marrujo</h1>
	</div>
	<nav class="w-full laptop:h-full laptop:w-[25rem] flex flex-col justify-between {$page.url.hash == "#about" && "laptop:hidden"}">
		<img src={logo} id="logo" alt="logo" class="w-1/5 max-w-32 laptop:w-1/3 mt-5 mb-10 laptop:mt-20 self-center">
		<ul class="flex flex-col text-3xl laptop:text-4xl items-end gap-2">
			<li class="w-11/12 laptop:w-full hidden laptop:list-item"><a href="#about" class="h-full block nav-link pt-1 pb-1.5 pl-3 ml-6 text-primary">About</a></li>
			<li class="w-11/12 laptop:w-full"><a href="projects" class="h-full block nav-link pt-1 pb-1.5 pl-3 ml-4 text-primary">Projects</a></li>
			<li class="w-11/12 laptop:w-full"><a href="notes" class="h-full block nav-link pt-1 pb-1.5 pl-3 ml-2 text-primary">Notes</a></li>
			<li class="w-11/12 laptop:w-full"><a href="recommendations" class="h-full block nav-link pt-1 pb-1.5 pl-3 text-primary">Recommendations</a></li>
		</ul>
		<div class="flex flex-row justify-between w-full px-10 laptop:pl-0 laptop:pr-20 my-10">
			<a href="https://tradeseek.co"><img src={tradeseek} alt="TradeSeek Icon" class="flex-1 h-12 quick-link"></a>
			<a href="https://github.com/wmarrujo"><img src={github} alt="Github Logo" class="flex-1 h-12 quick-link"></a>
			<a href="https://linkedin.com/in/wmarrujo"><img src={linkedin} alt="LinkedIn Logo" class="flex-1 h-12 quick-link"></a>
		</div>
	</nav>
	<main id="about" class="w-full laptop:h-full laptop:w-[calc(25rem)] flex justify-center {$page.url.hash != "#about" && "laptop:hidden"}">
		<article class="max-w-96 laptop:max-w-full laptop:w-[calc(25rem+100vh/6-3rem)] laptop:right-0 laptop:fixed laptop:h-full laptop:pr-6 mx-6 mb-6 laptop:m-0">
			<div class="wedge hidden {$page.url.hash == "#about" && "laptop:block"}"></div>
			<a href="/" class="nav-link hidden laptop:block my-10 text-lg text-primary w-56 z-0">← Back</a>
			<h1 class="text-white text-center text-4xl hidden laptop:inline-block">About</h1>
			<p class="text-lg pt-4">Problem-Solver and Engineer with 5+ years of expertise in Full-Stack Web Development, Database Design & Management, Mathematical Optimization, and Project Management.</p>
			<p class="text-lg pt-4">I&apos;m an Aerospace Engineer by training and have developed strong technical, design, and communication skills.</p>
			<p class="text-lg pt-4">I&apos;m a Detail-Oriented, Self-Taught programmer who can learn anything and enjoys a challenge.</p>
		</article>
	</main>
</div>

<style lang="postcss" scoped>
	#title {
		text-shadow: 1px 0.5px 0px lightgray, -1px 6px 4px rgba(0, 0, 0, 0.8);
	}
	
	#logo {
		filter: drop-shadow(2px 4px 1px black);
	}
	
	#profile-shadow {
		filter: drop-shadow(-2px 3px 4px black);
		@screen laptop {
			filter: drop-shadow(3px -2px 4px black);
		}
	}
	
	#profile-container {
		clip-path: polygon(0 0, 100% 0, 100% calc(100% - 100vw/6), 0 100%);
		@screen laptop {
			clip-path: polygon(0 0, 100% 0, calc(100% - 100vh/6) 100%, 0 100%);
		}
	}
	
	#profile {
		height: 100%;
		object-fit: cover;
		image-resolution: 300dpi;
		transform: scale(1.1);
	}
	
	.nav-link {
		background-size: 220% auto;
		background-image: linear-gradient(-0.2turn, #FFD60A 0%, #FFD60A 45%, #FFF1AD 50%, #FFD60A 55%, #FFD60A 100%);
		background-position: right center;
		transition: 0.5s;
		box-shadow: 2px 2px 4px black;
	}
	
	.nav-link:hover {
		background-position: left -5rem center;
		text-decoration: none;
		box-shadow: 2px 4px 4px black;
		transform: scale(1.02);
	}
	
	.nav-link:active {
		transform: scale(0.95);
	}
	
	.quick-link {
		filter: drop-shadow(2px 2px 4px black);
		transition: 0.5s;
	}
	
	.quick-link:hover {
		filter: drop-shadow(2px 4px 4px black);
		transform: scale(1.05);
	}
	
	#about .wedge {
		clip-path: polygon(0 0, 100% 0, 0 100%, 0 100%);
		shape-outside: polygon(0 0, 100% 0, 0 100%, 0 100%);
		float: left;
		width: calc(100vh/6);
		height: 100%;
	}
</style>
