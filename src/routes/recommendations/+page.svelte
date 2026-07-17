<script lang="ts">
	import logo from "$lib/images/logos/logo.svg"

	////////////////////////////////////////////////////////////////////////////////

	type Recommendation = {
		title: string;
		link: string;
		image?: string;
		author?: string;
		thesis?: string;
		pitch?: string;
	}
	type List = Recommendation[] | {[group: string]: List}

	const recommendations: List = {
		"Manifestos": [
			{title: "Agile Manifesto", link: "https://agilemanifesto.org/", author: "Kent Beck et al."},
			{title: "The 12 Principles of Agile", link: "https://agilemanifesto.org/principles.html", author: "Kent Beck et al."},
			{title: "The Cult of Done Manifesto", link: "https://medium.com/@bre/the-cult-of-done-manifesto-724ca1c2ff13", author: "Bre Pettis"},
			{title: "A Brief Guide to World Domination", link: "https://content.chrisguillebeau.com/wp-content/uploads/2023/05/worlddomination.pdf", author: "Chris Guillebeau"},
			{title: "The Tyranny of Structurelessness", link: "https://www.jofreeman.com/joreen/tyranny.htm", author: "Jo Freeman"},
			{title: "The Twelve-Factor App", link: "https://12factor.net/", author: "Adam Wiggins"},
			{title: "The Best Way to Count", link: "https://youtu.be/rDDaEVcwIJM?si=SMRy32925p7w-1_5", author: "Jan Misali"},
		],
		"Books": {
			"Politics & Philosophy": [
				{title: "What's Our Problem?", author: "Tim Urban", thesis: "The Psychology Behind the Politics", pitch: "Why is America (and the world) so divided? Why are republicans burning anything the left touches? Why is the left cancelling everything? What are the Implications? Read how we got here, building up the psychology from first principles.", link: "https://waitbutwhy.com/whatsourproblem"},
				{title: "High Conflict", author: "Amanda Ripley", thesis: "How to see & stop High Conflict", pitch: "Many conflicts are a trap, however much you fight and struggle, the conflict deepens. This book talks about why that happens, how to see it for what it is, and what you can do to get out of it and to build cultures resilient to it.", link: "https://www.amandaripley.com/high-conflict"},
			],
			"Entrepreneurship & Leadership": [
				{title: "The Millionaire Fastlane", author: "M.J. DeMarco", thesis: "3 roads to life, take the fastlane", pitch: "Proposes that there are 3 roads to life, the sidewalk, the slowlane, and the fastlane. They each have their formulas for relating to money and strategies for getting wealthy. This book tells you about the author's path to wealth and implores you to take a bet on the fastlane. It gives direct advice on what to do and what mindsets to shift.", link: "https://www.themillionairefastlane.com/"},
				{title: "Dream Year", author: "Ben Arment", thesis: "Instructions on how to start", pitch: "Why did you put your dreams to the side? Take a risk. This book explains what to expect, and how to get through it.", link: "https://www.penguinrandomhouse.com/books/316435/dream-year-by-ben-arment/"},
			],
			"Lifestyle": [
				{title: "King Warrior Magician Lover", author: "Robert Moore & Douglas Gillette", thesis: "The 4 Archetypes of a Man", pitch: "What is manhood? especially today? uses archetypes to help understand the different aspects of what makes great men, and what aspects can make bad men. How boys become men.", link: "https://www.barnesandnoble.com/w/king-warrior-magician-lover-robert-moore/1100537240"},
				{title: "Building a Second Brain", author: "Tiago Forte", thesis: "Structured Note Taking & Mindset", pitch: "Your brain is good at ideas, but bad at remembering and keeping track of things. Here is a framework that you can follow that will work to be that part, which frees up your brain to do what it's good at. It points to a new way of thinking about your knowledge.", link: "https://www.buildingasecondbrain.com/book"},
			]
		},
		"Games": [
			{title: "4D Golf", link: "https://store.steampowered.com/app/2147950/4D_Golf/"},
			{title: "Fez", link: "https://store.steampowered.com/app/224760/FEZ/"},
			{title: "Antichamber", link: "https://store.steampowered.com/app/219890/Antichamber/"},
			{title: "Captain Sonar", link: "https://boardgamegeek.com/boardgame/171131/captain-sonar"},
			{title: "Hyperbolica", link: "https://store.steampowered.com/app/1256230/Hyperbolica/"},
			{title: "Superliminal", link: "https://store.steampowered.com/app/1049410/Superliminal/"},
			{title: "5D Chess With Multiverse Time Travel", link: "https://store.steampowered.com/app/1349230/5D_Chess_With_Multiverse_Time_Travel/"},
			{title: "Outer Wilds", link: "https://store.steampowered.com/app/753640/Outer_Wilds/"},
			{title: "Daybreak", link: "https://boardgamegeek.com/boardgame/334986/daybreak"},
		],
		"Organizations": [
			{title: "GapMinder", link: "https://www.gapminder.org/"},
			{title: "The School of Life", link: "https://www.theschooloflife.com/"},
		],
		"Creators": {
			"Math & Science": [
				{title: "Nicky Case", link: "https://ncase.me/"},
				{title: "3Blue1Brown", link: "https://www.youtube.com/@3blue1brown"},
				{title: "AlphaPhoenix", link: "https://www.youtube.com/@AlphaPhoenixChannel"},
				{title: "BrainCraft", link: "https://www.youtube.com/@braincraft"},
				{title: "CGPGrey", link: "https://www.youtube.com/@CGPGrey"},
				{title: "Geography Now", link: "https://www.youtube.com/@GeographyNow"},
				{title: "Jay Foreman", link: "https://www.youtube.com/@JayForeman"},
				{title: "Journey to the Microcosmos", link: "https://www.youtube.com/@journeytomicro"},
				{title: "Kurzgesagt", link: "https://www.youtube.com/@kurzgesagt"},
				{title: "Looking Glass Universe", link: "https://www.youtube.com/@LookingGlassUniverse"},
				{title: "Mark Rober", link: "https://www.youtube.com/@MarkRober"},
				{title: "Minute Earth", link: "https://www.youtube.com/@MinuteEarth"},
				{title: "Minute Physics", link: "https://www.youtube.com/@MinutePhysics"},
				{title: "PBS Infinite Series", link: "https://www.youtube.com/@pbsinfiniteseries"},
				{title: "PBS Idea Channel", link: "https://www.youtube.com/@pbsideachannel"},
				{title: "PBS SpaceTime", link: "https://www.youtube.com/@pbsspacetime"},
				{title: "Practical Engineering", link: "https://www.youtube.com/@PracticalEngineeringChannel"},
				{title: "Primer", link: "https://www.youtube.com/@PrimerBlobs"},
				{title: "Real Engineering", link: "https://www.youtube.com/@RealEngineering"},
				{title: "Reducible", link: "https://www.youtube.com/@Reducible"},
				{title: "Scott Manley", link: "https://www.youtube.com/@scottmanley"},
				{title: "SciShow Space", link: "https://www.youtube.com/@scishowspace"},
				{title: "Smarter Every Day", link: "https://www.youtube.com/@smartereveryday"},
				{title: "Stand-Up Maths", link: "https://www.youtube.com/@standupmaths"},
				{title: "Steve Mould", link: "https://www.youtube.com/@SteveMould"},
				{title: "The Backyard Scientist", link: "https://www.youtube.com/@TheBackyardScientist"},
				{title: "This Place", link: "https://www.youtube.com/@ThisPlaceChannel"},
				{title: "Tier Zoo", link: "https://www.youtube.com/@TierZoo"},
				{title: "Veritasium", link: "https://www.youtube.com/@veritasium"},
				{title: "Vihart", link: "https://www.youtube.com/@Vihart"},
				{title: "Zach Star", link: "https://www.youtube.com/@zachstar"},
				{title: "ZoggFromBetelgeuse", link: "https://www.youtube.com/@ZoggFromBetelgeuse"},
			],
			"Design & Music": [
				{title: "Alto Clef", link: "https://www.youtube.com/@AltoClef"},
				{title: "Razbuten", link: "https://www.youtube.com/@razbuten"},
				{title: "Extra Credits", link: "https://www.youtube.com/@extracredits"},
				{title: "Sideways", link: "https://www.youtube.com/@Sideways440"},
				{title: "Tantacrul", link: "https://www.youtube.com/@Tantacrul"},
				{title: "Twoset Violin", link: "https://www.youtube.com/@twosetviolin"},
			],
			"Lifestyle & Philanthropy": [
				{title: "Answer in Progress", link: "https://www.youtube.com/@answerinprogress"},
				{title: "PhilosophyTube", link: "https://www.youtube.com/@PhilosophyTube"},
				{title: "Tom Scott", link: "https://www.youtube.com/@TomScottGo"},
				{title: "Vlogbrothers", link: "https://www.youtube.com/@vlogbrothers"},
				{title: "Vsauce", link: "https://www.youtube.com/@Vsauce"},
				{title: "Wheezy Waiter", link: "https://www.youtube.com/@wheezywaiter"},
			],
			"History, Politics, & Language": [
				{title: "ClimateTown", link: "https://www.youtube.com/@ClimateTown"},
				{title: "Extra History", link: "https://www.youtube.com/@extrahistory"},
				{title: "Kraut", link: "https://www.youtube.com/@Kraut_the_Parrot"},
				{title: "Not Just Bikes", link: "https://www.youtube.com/@NotJustBikes"},
				{title: "Rare Earth", link: "https://www.youtube.com/@RareEarthSeries"},
				{title: "Rational Animations", link: "https://www.youtube.com/@RationalAnimations"},
				{title: "NativLang", link: "https://www.youtube.com/@NativLang"},
				{title: "Xidnaf", link: "https://www.youtube.com/@Xidnaf"},
			]
		},
	}

	function openDialog(e: Event) {
		((e.currentTarget as HTMLElement).nextElementSibling as HTMLDialogElement).showModal()
	}
</script>

<nav class="flex items-center gap-4 p-3 sticky top-0 z-10 bg-primary">
	<a href="/"><img src={logo} alt="Logo" class="w-6 min-w-6"></a>
	<a href="/about" class="hover:underline">About</a>
	<a href="/projects" class="hover:underline">Projects</a>
	<a href="/notes" class="hover:underline">Notes</a>
	<a href="/recommendations" class="underline">Recommendations</a>
</nav>

<main class="p-4">
	<ul class="grid grid-cols-[repeat(auto-fit,12rem)] justify-evenly gap-4">
		{#each Object.entries(recommendations as Record<string, List>) as [name, items]}
			{@render deck(name, items)}
		{/each}
	</ul>
</main>

{#snippet card(item: Recommendation)}
	<li class="w-48 aspect-[3/4]">
		{#if item.link}
			<a class="flex items-center justify-center w-full h-full rounded-xl bg-secondary shadow-md text-center p-4 text-lg text-white no-underline" href={item.link}>{item.title}</a>
		{:else}
			<span class="flex items-center justify-center w-full h-full rounded-xl bg-secondary shadow-md text-center p-4 text-lg text-white">{item.title}</span>
		{/if}
	</li>
{/snippet}

{#snippet deck(name: string, items: List)}
	<li class="w-48 aspect-[3/4]">
		<button class="flex items-center justify-center w-full h-full rounded-xl bg-secondary shadow-md text-center p-4 font-title text-2xl text-white border-none cursor-pointer" onclick={openDialog} aria-haspopup="dialog">{name}</button>
		<dialog aria-label={name}>
			<div class="flex items-center justify-between gap-4 p-4">
				<h2 class="m-0 font-title text-2xl">{name}</h2>
				<form method="dialog"><button class="border-none rounded-lg bg-secondary text-white font-sans p-2 px-4 cursor-pointer">Close</button></form>
			</div>
			<ul class="grid grid-cols-[repeat(auto-fit,12rem)] justify-evenly gap-4 flex-1 overflow-auto p-4">
				{#if Array.isArray(items)}
					{#each items as item}
						{@render card(item)}
					{/each}
				{:else}
					{#each Object.entries(items) as [subName, subItems]}
						{@render deck(subName, subItems)}
					{/each}
				{/if}
			</ul>
		</dialog>
	</li>
{/snippet}

<style lang="postcss">
	:global(:root) {
		--nav-height: 3rem;
	}

	/* the opened list: a full-screen modal below the nav bar */
	dialog[open] {
		position: fixed;
		inset: var(--nav-height) 0 0 0;
		margin: 0;
		width: auto;
		height: auto;
		max-width: none;
		max-height: none;
		padding: 0;
		border: none;
		background: #003566;
		color: inherit;
		display: flex;
		flex-direction: column;
		overflow: hidden;
	}

	dialog::backdrop {
		inset: var(--nav-height) 0 0 0;
		background: rgba(0, 0, 0, 0.5);
	}
</style>
