<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/shinobg.png';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
	<link
		href="https://fonts.googleapis.com/css2?family=Anton&family=Kode+Mono:wght@400..700&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

{@render children?.()}
