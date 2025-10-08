<script>
	import { urlState } from './stores/currentURL.svelte';
	import { modalState } from './stores/currentModalstate.svelte';

	console.log('Ruta Actual: ' + urlState.url);
	const messages = {
		Home: "I'm Ledanis, a Full-Stack developer with a background in programming analysis. I enjoy working on self-driven projects, approach problem-solving with patience, and constantly seek newperspectives to strengthen my critical thinking as a programmer",
		About:
			"I'm Daniel Puentes and i see that you are interest about my person, for starting im 23 Years old, Living in Santiago de Chile. I Just finish my intership on data analyst, what i like to do in my free time is playing video games, listen to music (I really like vocaloid and rock), sometimes i do excersice too, thanks for reading this little about me <3.",
		Knoledge:
			'Right here you can see a resume of all my knoledge about programming, and what im currently working on, side proyects that i have and a list of what id like to learn in the future.'
	};
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
	{:else if urlState.url === 'knoledge'}
		<h1
			class="text-zinc-400 transition-all duration-700 ease-out opacity-0 translate-y-2 animate-fadeInUp pl-4"
		>
			My knoledge
		</h1>

		<h2
			class="text-[2rem] transition-all duration-700 ease-out opacity-0 translate-y-2 animate-fadeInUp"
		>
			{messages.Knoledge}
		</h2>

		<div
			class="table bg-neutral-500 w-[45rem] h-[20rem] mr-45 mt-10 rounded-xl text-[2rem] transition-all duration-700 ease-out opacity-0 translate-y-2 animate-fadeInUp"
		>
			<p class="text-[2rem] ml-30 mt-2 bg-neutral-400 rounded-sm w-[30rem] text-center">
				Programming Lenguagues
			</p>
			<!-- src/routes/+page.svelte -->
			<div class="flex">
				<div class="mt-5">
					<div
						class="font-selector text-[12px] mb-2 ml-6 bg-gray-400 rounded-xl w-[7rem] text-center"
					>
						I use the most
					</div>
					<p class="w-20 h-20 bg-gray-900 rounded-xl pt-3.5 pl-3.5 ml-10">
						<i class="devicon-typescript-plain colored text-[50px]"></i>
					</p>
					<p class="w-20 h-20 bg-gray-900 rounded-xl mt-2 pt-3.5 pl-3.5 ml-10">
						<i class="devicon-python-plain colored text-[50px]"></i>
					</p>
				</div>
				<div class="mt-5">
					<div
						class="font-selector text-[11px] mb-2 ml-6 bg-gray-400 rounded-xl w-[7rem] text-center"
					>
						I want to learn
					</div>
					<p class="w-20 h-20 bg-gray-300 rounded-xl pt-3.5 pl-3.5 ml-10">
						<i class="devicon-java-plain colored text-[50px]"></i>
					</p>
					<p class="w-20 h-20 bg-gray-300 rounded-xl mt-2 pt-3.5 pl-3.5 ml-10">
						<i class="devicon-cplusplus-plain colored text-[50px]"></i>
					</p>
				</div>
				<div class="mt-5">
					<div
						class="font-selector text-[12px] mb-2 ml-6 bg-gray-400 rounded-xl w-[7rem] text-center"
					>
						Want Strengthen
					</div>
					<p class="w-20 h-20 bg-gray-200 rounded-xl pt-3.5 pl-3.5 ml-10">
						<i class="devicon-amazonwebservices-plain colored text-[50px]"></i>
					</p>
					<p class="w-20 h-20 bg-gray-200 rounded-xl mt-2 pt-3.5 pl-3.5 ml-10">
						<i class="devicon-linux-plain colored text-[50px]"></i>
					</p>
				</div>
				<div class="mt-5">
					<div
						class="font-selector text-[12px] mb-2 ml-6 bg-gray-400 rounded-xl w-[7rem] text-center"
					>
						NEED to learn
					</div>
					<p class="w-20 h-20 bg-gray-300 rounded-xl pt-3.5 pl-3.5 ml-10">
						<i class="devicon-docker-plain colored text-[50px]"></i>
					</p>
					<p class="w-20 h-20 bg-gray-300 rounded-xl mt-2 pt-3.5 pl-3.5 ml-10">
						<i class="devicon-cloudflare-plain colored text-[50px]"></i>
					</p>
				</div>
				<div class="mt-5">
					<div
						class="font-selector text-[12px] mb-2 ml-6 bg-gray-400 rounded-xl w-[7rem] text-center"
					>
						I HATE
					</div>
					<p class="w-20 h-20 bg-gray-900 rounded-xl pt-3.5 pl-3.5 ml-10">
						<i class="devicon-php-plain colored text-[50px]"></i>
					</p>
					<p class="w-20 h-20 bg-gray-900 rounded-xl mt-2 pt-3.5 pl-3.5 ml-10">
						<i class="devicon-php-plain colored text-[50px]"></i>
					</p>
				</div>
			</div>
			<p class="text-[1rem] ml-30 mt-2 bg-neutral-400 rounded-sm w-[30rem] text-center">
				Currently Workin on: Ticket Sistem
			</p>
		</div>
	{/if}
</aside>

<style>
	.font-selector {
		font-family: 'Kode Mono', system-ui, sans-serif;
	}
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
		z-index: 1;
		margin-right: 10rem;
		margin-left: 105vh;
		padding-top: 5rem;
		font-family: 'Kode Mono', system-ui, sans-serif;
		color: rgb(32, 32, 32);
	}

	.table p {
		font-family: 'Kode Mono', system-ui, sans-serif;
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

		.table {
			margin-left: 12rem;
		}
	}
</style>
