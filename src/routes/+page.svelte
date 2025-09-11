<script>
	import ButtonsNav from '$lib/components/buttonsNav.svelte';
	import TittleNav from '$lib/components/tittleNav.svelte';
	import Loadscreen from '$lib/components/loadscreen.svelte';
</script>

<Loadscreen />
<div class="navbar">
	<ButtonsNav />
	<TittleNav />
</div>

<style>
	.navbar {
		width: 0;
		height: 0;
		border-left: 0vh solid transparent;
		border-right: 100vh solid transparent;
		border-top: 50vh solid #3e413b;
		filter: drop-shadow(0px 4px 6px rgba(0, 0, 0, 0.4));
		position: relative;
		z-index: 1;
	}
</style>
