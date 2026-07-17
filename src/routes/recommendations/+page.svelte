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

	let open = $state<string[]>([])
	function isOpen(path: string[]): boolean {
		return open.length >= path.length && path.every((n, i) => open[i] === n)
	}
	function openList(path: string[]) { open = path }
	function closeList(path: string[]) { if (isOpen(path)) open = path.slice(0, -1) }
</script>

<nav class="flex items-center gap-4 p-3">
	<a href="/"><img src={logo} alt="Logo" class="w-6 min-w-6"></a>
	<a href="/about" class="hover:underline">About</a>
	<a href="/projects" class="hover:underline">Projects</a>
	<a href="/notes" class="hover:underline">Notes</a>
	<a href="/recommendations" class="underline">Recommendations</a>
</nav>

<main class="p-4">
	<ul>
		{#each Object.entries(recommendations as Record<string, List>) as [name, items]}
			{@render deck([], name, items)}
		{/each}
	</ul>
</main>

{#snippet card(item: Recommendation)}
	<li><a class="card" href={item.link}>{item.title}</a></li>
{/snippet}

{#snippet deck(path: string[], name: string, items: List)}
	<li>
		<button class="card" aria-expanded={isOpen([...path, name])}
			onclick={() => (isOpen([...path, name]) ? closeList([...path, name]) : openList([...path, name]))}>
			{name}
		</button>
		{#if isOpen([...path, name])}
			<div class="panel">
				{#if Array.isArray(items)}
					<ul>
						{#each items as item}
							{@render card(item)}
						{/each}
					</ul>
				{:else}
					<ul>
						{#each Object.entries(items) as [subName, subItems]}
							{@render deck([...path, name], subName, subItems)}
						{/each}
					</ul>
				{/if}
			</div>
		{/if}
	</li>
{/snippet}

<style lang="postcss">
	ul {
		list-style: none;
		padding: 0;
		margin: 0;
		display: grid;
		grid-template-columns: repeat(auto-fit, 12rem);
		justify-content: space-evenly;
		gap: 1rem;
	}

	li {
		display: contents;
	}

	.panel {
		grid-column: 1 / -1;
	}

	.card {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 12rem;
		aspect-ratio: 3 / 4;
		border-radius: 0.75rem;
		background: #002a52;
		box-shadow: 0 4px 6px rgba(0, 0, 0, 0.4);
		text-align: center;
		padding: 1rem;
		font-size: 1.15rem;
	}

	button.card {
		border: none;
		color: inherit;
		font-family: "Josefin Sans", sans-serif;
		font-size: 1.5rem;
		cursor: pointer;
	}
</style>
