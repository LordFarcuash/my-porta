<script lang="ts">
	import Loadscreen from '$lib/components/loadscreen.svelte';
	import Object3d from '$lib/components/object3d.svelte';
	import Aside from '$lib/components/aside.svelte';
	import Navbar from '$lib/components/navbar/navbar.svelte';
	import { onMount } from 'svelte';

	let isDesktop = false;

	onMount(() => {
		isDesktop = window.innerWidth >= 768;

		const handleResize = () => {
			isDesktop = window.innerWidth >= 768;
		};

		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	});
</script>

<!-- <Loadscreen /> -->
<main class="">
	<Navbar />
	<!-- {#if isDesktop}
		<Object3d />
	{/if} -->
	<Aside />
</main>

<style>
</style>
