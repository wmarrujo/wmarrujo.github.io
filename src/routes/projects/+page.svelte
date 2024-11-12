<script lang="ts">
	import logo from "$lib/images/logos/logo.svg"
	import Card from "./card.svelte"
	// images
	import TradeSeek from "$lib/images/projects/tradeseek.webp"
	import FactoryTwin from "$lib/images/projects/factory-twin.webp"
	import MinneapolisChoirCoOp from "$lib/images/projects/minneapolis-choir-co-op.webp"
	import EvidenceBasedScheduler from "$lib/images/projects/evidence-based-scheduler.webp"
	import MealPlanner from "$lib/images/projects/meal-planner.webp"
	import ISAIAHWiki from "$lib/images/projects/isaiah-wiki.webp"
	// got icons from https://devicon.dev
	import Supabase from "$lib/images/projects/supabase.svg?raw"
	import Typescript from "$lib/images/projects/typescript.svg?raw"
	import Svelte from "$lib/images/projects/svelte.svg?raw"
	import Postgres from "$lib/images/projects/postgres.svg?raw"
	import FSharp from "$lib/images/projects/fsharp.svg?raw"
	import DotNetCore from "$lib/images/projects/dotnet-core.svg?raw"
	import Vuejs from "$lib/images/projects/vuejs.svg?raw"
	import Vuetify from "$lib/images/projects/vuetify.svg?raw"
	import Docker from "$lib/images/projects/docker.svg?raw"
	import DigitalOcean from "$lib/images/projects/digitalocean.svg?raw"
	import Squarespace from "$lib/images/projects/squarespace.svg?raw"
	import Wikijs from "$lib/images/projects/wikijs.svg?raw"
	import D3js from "$lib/images/projects/d3js.svg?raw"
	// other icons
	import Done from "$lib/images/projects/done.svg?raw"
	import UnderConstruction from "$lib/images/projects/under-construction.svg?raw"
	
	////////////////////////////////////////////////////////////////////////////////
</script>

<nav class="flex items-center gap-4 p-3">
	<a href="/"><img src={logo} alt="Logo" class="w-6 min-w-6"></a>
	<a href="/#about" class="hover:underline">About</a>
	<a href="/projects" class="underline">Projects</a>
	<a href="/notes" class="hover:underline">Notes</a>
	<a href="/recommendations" class="hover:underline">Recommendations</a>
</nav>
<main class="flex gap-10 flex-wrap justify-center py-10 laptop:p-10">
	<Card href="https://tradeseek.co" class="p-4 rounded-xl w-[24rem] h-[32rem] bg-secondary flex flex-col gap-2">
		<img src={TradeSeek} alt="TradeSeek landing page" class="h-[16rem] w-full object-cover rounded-md">
		<div class="flex flex-col grow">
			<h1 class="text-3xl py-2 font-title">TradeSeek</h1>
			<p>A website connecting tradespeople and trades companies in a competitive marketplace.</p>
		</div>
		<div class="flex gap-1">
			<div class="h-6 w-6">{@html Svelte}</div>
			<div class="h-6 w-6">{@html Typescript}</div>
			<div class="h-6 w-6">{@html Supabase}</div>
			<div class="h-6 w-6">{@html Postgres}</div>
			<div class="h-6 w-6">{@html DigitalOcean}</div>
			<span class="grow"></span>
			<div class="h-6 w-6">{@html UnderConstruction}</div>
		</div>
	</Card>
	<Card href="https://www.factory-twin.com" class="p-4 rounded-xl w-[24rem] h-[32rem] bg-secondary flex flex-col gap-2">
		<img src={FactoryTwin} alt="Factory Twin screenshot" class="h-[16rem] w-full object-cover rounded-md">
		<div class="flex flex-col grow">
			<h1 class="text-3xl py-2 font-title">FactoryTwin</h1>
			<p>The software company I previously worked at. I was the tech lead and built their software from the ground up in the early days.</p>
		</div>
		<div class="flex gap-1">
			<div class="h-6 w-6">{@html FSharp}</div>
			<div class="h-6 w-6">{@html DotNetCore}</div>
			<div class="h-6 w-6">{@html Postgres}</div>
			<div class="h-6 w-6">{@html Docker}</div>
			<div class="h-6 w-6">{@html Vuejs}</div>
			<div class="h-6 w-6">{@html Vuetify}</div>
			<span class="grow"></span>
			<div class="h-6 w-6">{@html Done}</div>
		</div>
	</Card>
	<Card href="https://www.minneapolischoircoop.com" class="p-4 rounded-xl w-[24rem] h-[32rem] bg-secondary flex flex-col gap-2">
		<img src={MinneapolisChoirCoOp} alt="Minneapolis Choir Co-Op landing page" class="h-[16rem] w-full object-cover rounded-md">
		<div class="flex flex-col grow">
			<h1 class="text-3xl py-2 font-title">Minneapolis Choir Co-Op Website</h1>
			<p>A website for my choir.</p>
		</div>
		<div class="flex gap-1">
			<div class="h-6 w-6">{@html Squarespace}</div>
			<span class="grow"></span>
			<div class="h-6 w-6">{@html Done}</div>
		</div>
	</Card>
	<Card href="https://wmarrujo.github.io/evidence-based-scheduler" class="p-4 rounded-xl w-[24rem] h-[32rem] bg-secondary flex flex-col gap-2">
		<img src={EvidenceBasedScheduler} alt="Evidence-Based Scheduler landing page" class="h-[16rem] w-full object-cover rounded-md">
		<div class="flex flex-col grow">
			<h1 class="text-3xl py-2 font-title">Evidence-Based Scheduler</h1>
			<p>A project management software.</p>
		</div>
		<div class="flex gap-1">
			<div class="h-6 w-6">{@html Svelte}</div>
			<div class="h-6 w-6">{@html Typescript}</div>
			<div class="h-6 w-6">{@html D3js}</div>
			<span class="grow"></span>
			<div class="h-6 w-6">{@html UnderConstruction}</div>
		</div>
	</Card>
	<Card href="https://wmarrujo.com/meal-planner" class="p-4 rounded-xl w-[24rem] h-[32rem] bg-secondary flex flex-col gap-2">
		<img src={MealPlanner} alt="Meal Planner landing page" class="h-[16rem] w-full object-cover rounded-md">
		<div class="flex flex-col grow">
			<h1 class="text-3xl py-2 font-title">Meal Planner</h1>
			<p>A meal organizer and macro calculator.</p>
		</div>
		<div class="flex gap-1">
			<div class="h-6 w-6">{@html Svelte}</div>
			<div class="h-6 w-6">{@html Typescript}</div>
			<div class="h-6 w-6">{@html Supabase}</div>
			<span class="grow"></span>
			<div class="h-6 w-6">{@html UnderConstruction}</div>
		</div>
	</Card>
	<Card href="https://isaiah.wmarrujo.com" class="p-4 rounded-xl w-[24rem] h-[32rem] bg-secondary flex flex-col gap-2">
		<img src={ISAIAHWiki} alt="ISAIAH Wiki example page screenshot" class="h-[16rem] w-full object-cover rounded-md">
		<div class="flex flex-col grow">
			<h1 class="text-3xl py-2 font-title">ISAIAH Wiki</h1>
			<p>A wiki site for ISAIAH of MN.</p>
		</div>
		<div class="flex gap-1">
			<div class="h-6 w-6">{@html Wikijs}</div>
			<span class="grow"></span>
			<div class="h-6 w-6">{@html UnderConstruction}</div>
		</div>
	</Card>
</main>
