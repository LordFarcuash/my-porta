<script lang="ts">
	import Loadscreen from '$lib/components/loadscreen.svelte';
	import Aside from '$lib/components/aside.svelte';
	import Navbar from '$lib/components/navbar/navbar.svelte';
	import Modal from '$lib/components/modal.svelte';
</script>

<Loadscreen />
<main class="">
	<Navbar />
	<Aside />
	<Modal />
</main>

<style>
</style>
