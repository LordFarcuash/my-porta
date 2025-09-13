<script lang="ts">
	import ButtonsNav from '$lib/components/buttonsNav.svelte';
	import TittleNav from '$lib/components/tittleNav.svelte';
	import Loadscreen from '$lib/components/loadscreen.svelte';
	import Object3d from '$lib/components/object3d.svelte';
	import Aside from '$lib/components/aside.svelte';
</script>

<Loadscreen />
<main class="main">
	<div class="navbar">
		<ButtonsNav />
		<TittleNav />
	</div>

	<Object3d />
	<Aside />
</main>

<style>
	.main {
		display: flex;
	}

	.navbar {
		width: 0;
		height: 0;
		border-left: 0vh solid transparent;
		border-right: 100vh solid transparent;
		border-top: 50vh solid #3e413b;
		filter: drop-shadow(0px 4px 6px rgba(0, 0, 0, 0.4));
		position: relative;
		z-index: 3;
	}
</style>
