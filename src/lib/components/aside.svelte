<script>
	const messages = {
		Home: "I'm Ledanis, a Full-Stack developer with a background in programming analysis. I enjoy working on self-driven projects, approach problem-solving with patience, and constantly seek newperspectives to strengthen my critical thinking as a programmer",
		About:
			"I'm Daniel Puentes and i see that you are interest about my person, for starting im 23 Years old, Living in Santiago de Chile. I Just finish my intership on data analyst, what i like to do in my free time is playing video games, listen to music (I really like vocaloid and rock), sometimes i do excersice too, thanks for reading this little about me <3."
	};

	import { urlState } from './stores/currentURL.svelte';

	console.log('Ruta Actual: ' + urlState.url);
</script>

<aside class="aside place-items-end">
	{#if urlState.url === 'home'}
		<h1
			class="text-zinc-400 transition-all duration-700 ease-out opacity-0 translate-y-2 animate-fadeInUp"
		>
			Welcome Visitor!
		</h1>
		<h2
			class="text-[2.5rem] transition-all duration-700 ease-out opacity-0 translate-y-2 animate-fadeInUp"
		>
			{messages.Home}
		</h2>
	{:else if urlState.url === 'about'}
		<h1
			class="text-zinc-400 transition-all duration-700 ease-out opacity-0 translate-y-2 animate-fadeInUp"
		>
			¿About Ledanis?
		</h1>
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
		margin-right: 10rem;
		margin-top: 5rem;
		font-size: 5rem;
		font-family: 'Kode Mono', system-ui, sans-serif;
		color: white;
	}

	.aside h2 {
		margin-right: 10rem;
		margin-left: 105vh;
		padding-top: 5rem;
		font-family: 'Kode Mono', system-ui, sans-serif;
		color: rgb(32, 32, 32);
	}

	@media (max-width: 769px) {
		.aside {
			background-color: rgb(133, 133, 133);
			width: 200vw; /* mejor usar el ancho de la pantalla */
			height: 200vh;
			display: flex;
			flex-direction: column;
			align-items: center; /* centra horizontalmente */
			justify-content: flex-start; /* empieza desde arriba */
			padding-top: 5rem; /* espacio desde arriba */
			overflow: hidden;
		}

		.aside h1 {
			margin-top: 15rem;
			margin-left: 10rem;
			font-size: 3rem;
			text-align: center; /* centra el h1 */
		}

		.aside h2 {
			margin: 2rem 1rem 0 1rem; /* margen arriba y lateral pequeño */
			font-size: 2.5rem;
			text-align: center; /* centra el texto */
			max-width: 150vw; /* evita que se salga del viewport */
			word-wrap: break-word; /* rompe palabras largas si es necesario */
		}
	}
</style>
