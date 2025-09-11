<script>
	import ButtonsNav from '$lib/components/buttonsNav.svelte';
</script>

<div class="navbar">
	<ButtonsNav />
</div>

<style>
	.navbar {
		width: 0;
		height: 0;
		border-left: 0vh solid transparent; /* lado inclinado */
		border-right: 100vh solid transparent; /* otro lado */
		border-top: 50vh solid #3e413b; /* color del navbar */
		filter: drop-shadow(0px 4px 6px rgba(0, 0, 0, 0.4));
	}
</style>
