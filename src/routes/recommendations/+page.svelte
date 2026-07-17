<script lang="ts">
	import logo from "$lib/images/logos/logo.svg"
	import Deck from "./Deck.svelte"
	import Card from "./Card.svelte"
	import {isGroup, type List} from "./types"
	import {withFlip} from "./flip"

	////////////////////////////////////////////////////////////////////////////////

	const recommendations: List = [
		{
			name: "Manifestos",
			items: [
				{title: "Agile Manifesto", link: "https://agilemanifesto.org/", author: "Kent Beck et al."},
				{title: "The 12 Principles of Agile", link: "https://agilemanifesto.org/principles.html", author: "Kent Beck et al."},
				{title: "The Cult of Done Manifesto", link: "https://medium.com/@bre/the-cult-of-done-manifesto-724ca1c2ff13", author: "Bre Pettis"},
				{title: "A Brief Guide to World Domination", link: "https://content.chrisguillebeau.com/wp-content/uploads/2023/05/worlddomination.pdf", author: "Chris Guillebeau"},
				{title: "The Tyranny of Structurelessness", link: "https://www.jofreeman.com/joreen/tyranny.htm", author: "Jo Freeman"},
				{title: "The Twelve-Factor App", link: "https://12factor.net/", author: "Adam Wiggins"},
				{title: "The Best Way to Count", link: "https://youtu.be/rDDaEVcwIJM?si=SMRy32925p7w-1_5", author: "Jan Misali"},
			]
		},
		{
			name: "Books",
			items: [
				{title: "Books (spreadsheet)", link: "https://docs.google.com/spreadsheets/d/1KRnU3sqC9SOir41nX-W9bFKeoXA2moFyOQl5owUbIY0/edit?usp=sharing", description: "My reading list. To be expanded into individual cards."},
			]
		},
		{
			name: "Games",
			items: [
				{title: "4D Golf", link: "https://store.steampowered.com/app/2147950/4D_Golf/"},
				{title: "Fez", link: "https://store.steampowered.com/app/224760/FEZ/"},
				{title: "Antichamber", link: "https://store.steampowered.com/app/219890/Antichamber/"},
				{title: "Captain Sonar", link: "https://boardgamegeek.com/boardgame/171131/captain-sonar"},
				{title: "Hyperbolica", link: "https://store.steampowered.com/app/1256230/Hyperbolica/"},
				{title: "Superliminal", link: "https://store.steampowered.com/app/1049410/Superliminal/"},
				{title: "5D Chess With Multiverse Time Travel", link: "https://store.steampowered.com/app/1349230/5D_Chess_With_Multiverse_Time_Travel/"},
				{title: "Outer Wilds", link: ""},
				{title: "Daybreak", link: ""},
			]
		},
		{
			name: "Organizations",
			items: [
				{title: "GapMinder", link: "https://www.gapminder.org/"},
				{title: "The School of Life", link: "https://www.theschooloflife.com/"},
			]
		},
		{
			name: "Creators",
			items: [
				{
					name: "Math & Science",
					items: [
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
					]
				},
				{
					name: "Design & Music",
					items: [
						{title: "Alto Clef", link: "https://www.youtube.com/@AltoClef"},
						{title: "Razbuten", link: "https://www.youtube.com/@razbuten"},
						{title: "Extra Credits", link: "https://www.youtube.com/@extracredits"},
						{title: "Sideways", link: "https://www.youtube.com/@Sideways440"},
						{title: "Tantacrul", link: "https://www.youtube.com/@Tantacrul"},
						{title: "Twoset Violin", link: "https://www.youtube.com/@twosetviolin"},
					]
				},
				{
					name: "Lifestyle & Philosophy",
					items: [
						{title: "Answer in Progress", link: "https://www.youtube.com/@answerinprogress"},
						{title: "PhilosophyTube", link: "https://www.youtube.com/@PhilosophyTube"},
						{title: "Tom Scott", link: "https://www.youtube.com/@TomScottGo"},
						{title: "Vlogbrothers", link: "https://www.youtube.com/@vlogbrothers"},
						{title: "Vsauce", link: "https://www.youtube.com/@Vsauce"},
						{title: "Wheezy Waiter", link: "https://www.youtube.com/@wheezywaiter"},
					]
				},
				{
					name: "History & Politics & Language",
					items: [
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
			]
		},
	]

	let openTop = $state<number | null>(null)
	let gridEl = $state<HTMLDivElement | null>(null)
	function toggleTop(i: number) {
		withFlip(gridEl, ":scope > .deck, :scope > a", () => {
			openTop = openTop === i ? null : i
		})
	}
</script>

<nav class="flex items-center gap-4 p-3">
	<a href="/"><img src={logo} alt="Logo" class="w-6 min-w-6"></a>
	<a href="/about" class="hover:underline">About</a>
	<a href="/projects" class="hover:underline">Projects</a>
	<a href="/notes" class="hover:underline">Notes</a>
	<a href="/recommendations" class="underline">Recommendations</a>
</nav>
<main class="p-6">
	<h1 class="text-center font-title text-4xl mb-6">Recommendations</h1>
	<div class="grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3 monitor:grid-cols-4 gap-6" bind:this={gridEl}>
		{#each recommendations as node, i}
			{#if isGroup(node)}
				<Deck group={node} isOpen={openTop === i} onToggle={() => toggleTop(i)} />
			{:else}
				<Card item={node} />
			{/if}
		{/each}
	</div>
</main>