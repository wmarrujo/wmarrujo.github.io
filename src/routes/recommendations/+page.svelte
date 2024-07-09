<script lang="ts">
	import {AppShell} from "@skeletonlabs/skeleton"
	import {AppBar} from "@skeletonlabs/skeleton"
	import logo from "$lib/images/logos/logo-dark.svg"
</script>

<AppShell>
	<AppBar>
		<svelte:fragment slot="lead">
			<a href="/"><img src={logo} alt="Logo" class="w-5"></a>
		</svelte:fragment>
	</AppBar>
	<div class="flex justify-center">
		<article class="prose lg:prose-xl prose-invert shadow-lg p-10">
			<h1 class="h1 text-center">Recommendations</h1>
			<ul>
				<li><a href="https://docs.google.com/spreadsheets/d/1KRnU3sqC9SOir41nX-W9bFKeoXA2moFyOQl5owUbIY0/edit?usp=sharing" class="text-2xl underline">Book List</a></li>
			</ul>
		</article>
	</div>
</AppShell>
