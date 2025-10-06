<script>
	const messages = {
		Home: "I'm Ledanis, a Full-Stack developer with a background in programming analysis. I enjoy working on self-driven projects, approach problem-solving with patience, and constantly seek newperspectives to strengthen my critical thinking as a programmer",
		About:
			"I'm Daniel Puentes and i see that you are interest about my person, for starting im 23 Years old, Living in Santiago de Chile. I Just finish my intership on data analyst, what i like to do in my free time is playing video games, listen to music (I really like vocaloid and rock), sometimes i do excersice too, im much of a homeboy and thanks for reading all of that btw <3."
	};

	import { urlState } from './stores/currentURL.svelte';

	console.log('Ruta Actual: ' + urlState.url);
</script>

<aside class="aside place-items-end">
	<h1 class="text-zinc-400">Welcome Visitor!</h1>
	{#if urlState.url === 'home'}
		<h2
			class="text-[2.5rem] transition-all duration-700 ease-out opacity-0 translate-y-2 animate-fadeInUp"
		>
			{messages.Home}
		</h2>
	{:else if urlState.url === 'about'}
		<h2
			class="text-[2rem] transition-all duration-700 ease-out opacity-0 translate-y-2 animate-fadeInUp"
		>
			{messages.About}
		</h2>
	{/if}
</aside>

<style>
	.aside {
		background-color: rgb(133, 133, 133);
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
	}

	.aside h1 {
		padding-right: 10rem;
		padding-top: 5rem;
		font-size: 5rem;
		font-family: 'Kode Mono', system-ui, sans-serif;
		color: white;
	}

	.aside h2 {
		padding-right: 10rem;
		padding-left: 105vh;
		padding-top: 5rem;
		font-family: 'Kode Mono', system-ui, sans-serif;
		color: rgb(32, 32, 32);
	}
</style>
