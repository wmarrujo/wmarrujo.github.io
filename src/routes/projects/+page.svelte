<script lang="ts">
	import {AppShell} from "@skeletonlabs/skeleton"
	import {AppBar} from "@skeletonlabs/skeleton"
	import logo from "$lib/images/logos/logo.svg"
</script>

<AppShell>
	<AppBar>
		<svelte:fragment slot="lead">
			<a href="/"><img src={logo} alt="Logo" class="w-5 mr-3"></a>
			<a href="/about" class="mx-2 hover:underline">About</a>
			<a href="/notes" class="mx-2 hover:underline">Notes</a>
			<a href="/projects" class="mx-2 underline">Projects</a>
			<a href="/recommendations" class="mx-2 hover:underline">Recommendations</a>
		</svelte:fragment>
	</AppBar>
	<div class="flex justify-center">
		<article class="prose lg:prose-xl prose-invert shadow-lg p-10">
			<h1 class="h1 text-center">Projects</h1>
			<ul>
				<li><a href="https://www.factory-twin.com/" class="text-2xl underline">FactoryTwin</a> - The company I previously worked for. I was the tech lead until 2024 and was there since the founding.</li>
				<li><a href="https://wmarrujo.github.io/evidence-based-scheduler/" class="text-2xl underline">Evidence-Based Scheduler</a> - A project management software</li>
			</ul>
		</article>
	</div>
</AppShell>
