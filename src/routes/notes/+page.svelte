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
		<h1 class="h1">Notes</h1>
	</div>
</AppShell>
