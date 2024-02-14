<script lang="ts">
	import logo from "$lib/images/logos/logo-dark.svg"
	import aaosc from "$lib/images/logos/aaosc-dark.svg"
	import github from "$lib/images/logos/github-dark.svg"
	import linkedin from "$lib/images/logos/linkedin-dark.svg"
	
	// const profiles = import.meta.glob("$lib/images/profiles/*.jpeg", {query: {enhanced: true}})
	import profile from "$lib/images/profiles/capri.jpeg?enhanced"
</script>

<div class="h-lvh w-full flex flex-col md:flex-row overflow-x-hidden">
	<div class="w-full md:w-2/3 h-2/3 md:h-lvh relative">
		<enhanced:img id="profile" src={profile} alt="William in some cool place" class="h-full" />
		<h1 id="name" class="text-8xl absolute top-0 left-0 pt-10 px-5 md:pt-20 md:px-20 drop-shadow-lg">William Marrujo</h1>
	</div>
	<nav class="w-full md:w-1/3 flex flex-col justify-between">
		<img src={logo} alt="logo" class="w-1/5 md:w-1/3 m-10 md:m-20 self-center">
		<ul class="grow flex flex-col pr-10 md:pr-20 text-3xl md:text-4xl items-end">
			<li class="grow"><a href="about" class="h-full">About</a></li>
			<li class="grow"><a href="notes" class="h-full">Notes</a></li>
			<li class="grow"><a href="projects" class="h-full">Projects</a></li>
			<li class="grow"><a href="recommendations" class="h-full">Recommendations</a></li>
		</ul>
		<div class="flex flex-row justify-between py-10 md:py-20 px-10 md:pr-20">
			<img src={aaosc} alt="Advisory Aerospace Icon" class="w-12">
			<img src={github} alt="Github Logo" class="w-12">
			<img src={linkedin} alt="LinkedIn Logo" class="w-12">
		</div>
	</nav>
</div>

<style lang="postcss">
	#name {
		font-family: "Josefin Sans", sans-serif;
	}
	
	#profile {
		object-fit: cover;
		
		clip-path: polygon(0 0, 100% 0, 100% 90%, 0 100%);
		@screen md {
			clip-path: polygon(0 0, 100% 0, calc(100% - theme(spacing.40)) 100%, 0 100%);
		}
		
	}
</style>
