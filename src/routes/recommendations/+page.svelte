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
			<a href="/projects" class="mx-2 hover:underline">Projects</a>
			<a href="/recommendations" class="mx-2 underline">Recommendations</a>
		</svelte:fragment>
	</AppBar>
	<div class="flex justify-center">
		<article class="prose lg:prose-xl prose-invert shadow-lg p-10">
			<h1 class="h1 text-center">Recommendations</h1>
			<ul class="text-2xl">
				<li><a href="https://docs.google.com/spreadsheets/d/1KRnU3sqC9SOir41nX-W9bFKeoXA2moFyOQl5owUbIY0/edit?usp=sharing">Book List</a></li>
				<li><a href="https://medium.com/@bre/the-cult-of-done-manifesto-724ca1c2ff13">The Cult of Done</a></li>
				<li>Mind-Bending Games
					<ul>
						<li><a href="https://store.steampowered.com/app/2147950/4D_Golf/">4D Golf</a></li>
						<li><a href="https://store.steampowered.com/app/1349230/5D_Chess_With_Multiverse_Time_Travel/">5D Chess with Multiverse Time Travel</a></li>
						<li><a href="https://store.steampowered.com/app/219890/Antichamber/">Antichamber</a></li>
						<li><a href="https://store.steampowered.com/app/224760/FEZ/">Fez</a></li>
						<li><a href="https://store.steampowered.com/app/1256230/Hyperbolica/">Hyperbolica</a></li>
						<li><a href="https://store.steampowered.com/app/1049410/Superliminal/">Superliminal</a></li>
					</ul>
				</li>
			</ul>
		</article>
	</div>
</AppShell>
