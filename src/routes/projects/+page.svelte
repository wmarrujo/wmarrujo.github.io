<script lang="ts">
	import logo from "$lib/images/logos/logo.svg"
	import Card from "./card.svelte"
	// images
	import TradeSeek from "$lib/images/projects/tradeseek.webp"
	import FactoryTwin from "$lib/images/projects/factory-twin.webp"
	import MinneapolisChoirCoOp from "$lib/images/projects/minneapolis-choir-co-op.webp"
	import EvidenceBasedScheduler from "$lib/images/projects/evidence-based-scheduler.webp"
	import MealSense from "$lib/images/projects/meal-sense.webp" // FIXME: put the right logo for MealSense
	import ISAIAHWiki from "$lib/images/projects/isaiah-wiki.webp"
	// got icons from https://devicon.dev
	import Supabase from "$lib/images/technologies/supabase.svg?raw"
	import Typescript from "$lib/images/technologies/typescript.svg?raw"
	import Svelte from "$lib/images/technologies/svelte.svg?raw"
	import Postgres from "$lib/images/technologies/postgres.svg?raw"
	import FSharp from "$lib/images/technologies/fsharp.svg?raw"
	import DotNetCore from "$lib/images/technologies/dotnet-core.svg?raw"
	import Vuejs from "$lib/images/technologies/vuejs.svg?raw"
	import Vuetify from "$lib/images/technologies/vuetify.svg?raw"
	import Docker from "$lib/images/technologies/docker.svg?raw"
	import DigitalOcean from "$lib/images/technologies/digitalocean.svg?raw"
	import Squarespace from "$lib/images/technologies/squarespace.svg?raw"
	import Wikijs from "$lib/images/technologies/wikijs.svg?raw"
	import D3js from "$lib/images/technologies/d3js.svg?raw"
	// other icons
	import Done from "$lib/images/projects/status/done.svg?raw"
	import UnderConstruction from "$lib/images/projects/status/under-construction.svg?raw"
	import Abandoned from "$lib/images/projects/status/abandoned.svg?raw" // FIXME: put the right image for abandoned
	
	////////////////////////////////////////////////////////////////////////////////
</script>

<nav class="flex items-center gap-4 p-3">
	<a href="/"><img src={logo} alt="Logo" class="w-6 min-w-6"></a>
	<a href="/about" class="hover:underline">About</a>
	<a href="/projects" class="underline">Projects</a>
	<a href="/notes" class="hover:underline">Notes</a>
	<a href="/recommendations" class="hover:underline">Recommendations</a>
</nav>
<main class="flex gap-10 flex-wrap justify-center py-10 laptop:p-10">
	<div class="w-full"></div>
	<Card href="https://tradeseek.co" class="p-4 rounded-xl w-[24rem] h-[32rem] bg-secondary flex flex-col gap-2">
		<img src={TradeSeek} alt="TradeSeek landing page" class="h-[16rem] w-full object-cover rounded-md">
		<div class="flex flex-col grow">
			<h1 class="text-3xl py-2 font-title">TradeSeek</h1>
			<p>A website connecting tradespeople and trades companies in a competitive marketplace.</p>
		</div>
		<div class="flex gap-1">
			<div class="h-6 w-6" title="Svelte">{@html Svelte}</div>
			<div class="h-6 w-6" title="Typescript">{@html Typescript}</div>
			<div class="h-6 w-6" title="Supabase">{@html Supabase}</div>
			<div class="h-6 w-6" title="PostgreSQL">{@html Postgres}</div>
			<div class="h-6 w-6" title="DigitalOcean">{@html DigitalOcean}</div>
			<span class="grow"></span>
			<div class="h-6 w-6" title="Abandoned">{@html Abandoned}</div>
		</div>
	</Card>
	<Card href="https://www.factory-twin.com" class="p-4 rounded-xl w-[24rem] h-[32rem] bg-secondary flex flex-col gap-2">
		<img src={FactoryTwin} alt="Factory Twin screenshot" class="h-[16rem] w-full object-cover rounded-md">
		<div class="flex flex-col grow">
			<h1 class="text-3xl py-2 font-title">FactoryTwin</h1>
			<p>The software company I previously worked at. I was the tech lead and built their software from the ground up in the early days.</p>
		</div>
		<div class="flex gap-1">
			<div class="h-6 w-6" title="F#">{@html FSharp}</div>
			<div class="h-6 w-6" title=".NET Core">{@html DotNetCore}</div>
			<div class="h-6 w-6" title="PostgreSQL">{@html Postgres}</div>
			<div class="h-6 w-6" title="Docker">{@html Docker}</div>
			<div class="h-6 w-6" title="Vue.js">{@html Vuejs}</div>
			<div class="h-6 w-6" title="Vuetify">{@html Vuetify}</div>
			<span class="grow"></span>
			<div class="h-6 w-6" title="Done">{@html Done}</div>
		</div>
	</Card>
	<Card href="https://www.minneapolischoircoop.com" class="p-4 rounded-xl w-[24rem] h-[32rem] bg-secondary flex flex-col gap-2">
		<img src={MinneapolisChoirCoOp} alt="Minneapolis Choir Co-Op landing page" class="h-[16rem] w-full object-cover rounded-md">
		<div class="flex flex-col grow">
			<h1 class="text-3xl py-2 font-title">Minneapolis Choir Co-Op Website</h1>
			<p>A website for my choir.</p>
		</div>
		<div class="flex gap-1">
			<div class="h-6 w-6" title="Squarespace">{@html Squarespace}</div>
			<span class="grow"></span>
			<div class="h-6 w-6" title="Done">{@html Done}</div>
		</div>
	</Card>
	<Card href="https://wmarrujo.github.io/evidence-based-scheduler" class="p-4 rounded-xl w-[24rem] h-[32rem] bg-secondary flex flex-col gap-2">
		<img src={EvidenceBasedScheduler} alt="Evidence-Based Scheduler landing page" class="h-[16rem] w-full object-cover rounded-md">
		<div class="flex flex-col grow">
			<h1 class="text-3xl py-2 font-title">Evidence-Based Scheduler</h1>
			<p>A project management software.</p>
		</div>
		<div class="flex gap-1">
			<div class="h-6 w-6" title="Svelte">{@html Svelte}</div>
			<div class="h-6 w-6" title="Typescript">{@html Typescript}</div>
			<div class="h-6 w-6" title="D3.js">{@html D3js}</div>
			<span class="grow"></span>
			<div class="h-6 w-6" title="Under Construction">{@html UnderConstruction}</div>
		</div>
	</Card>
	<Card href="https://wmarrujo.com/meal-sense" class="p-4 rounded-xl w-[24rem] h-[32rem] bg-secondary flex flex-col gap-2">
		<img src={MealSense} alt="Meal Sense landing page" class="h-[16rem] w-full object-cover rounded-md">
		<div class="flex flex-col grow">
			<h1 class="text-3xl py-2 font-title">Meal Sense</h1>
			<p>A meal prepping organizer and macro calculator.</p>
		</div>
		<div class="flex gap-1">
			<div class="h-6 w-6" title="Svelte">{@html Svelte}</div>
			<div class="h-6 w-6" title="Typescript">{@html Typescript}</div>
			<div class="h-6 w-6" title="Supabase">{@html Supabase}</div>
			<span class="grow"></span>
			<div class="h-6 w-6" title="Under Construction">{@html UnderConstruction}</div>
		</div>
	</Card>
	<Card href="https://isaiah.wmarrujo.com" class="p-4 rounded-xl w-[24rem] h-[32rem] bg-secondary flex flex-col gap-2">
		<img src={ISAIAHWiki} alt="ISAIAH Wiki example page screenshot" class="h-[16rem] w-full object-cover rounded-md">
		<div class="flex flex-col grow">
			<h1 class="text-3xl py-2 font-title">ISAIAH Wiki</h1>
			<p>A wiki site for ISAIAH of MN.</p>
		</div>
		<div class="flex gap-1">
			<div class="h-6 w-6" title="Wiki.js">{@html Wikijs}</div>
			<span class="grow"></span>
			<div class="h-6 w-6" title="Abandoned">{@html Abandoned}</div>
		</div>
	</Card>
</main>
