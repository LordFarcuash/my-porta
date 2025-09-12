<script>
	import ButtonsNav from '$lib/components/buttonsNav.svelte';
	import TittleNav from '$lib/components/tittleNav.svelte';
	import Loadscreen from '$lib/components/loadscreen.svelte';
</script>

<Loadscreen />
<main class="main">
	<div class="navbar">
		<ButtonsNav />
		<TittleNav />
	</div>
	<div class="column-bar"></div>
	<aside class="aside place-items-end">
		<h1 class="text-zinc-400">Welcome Visitor!</h1>
		<h2>
			I’m Ledanis, a Full-Stack developer with a background in programming analysis. I enjoy working
			on self-driven projects, approach problem-solving with patience, and constantly seek new
			perspectives to strengthen my critical thinking as a programmer.
		</h2>
	</aside>
</main>

<style>
	.main {
		display: flex;
	}

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
		font-size: 2.5rem;
		font-family: 'Kode Mono', system-ui, sans-serif;
		color: rgb(32, 32, 32);
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

	.column-bar {
		background-color: rgb(48, 48, 48);
		position: absolute;
		width: 15vh;
		height: 100%;
		margin-left: 55vh;
		top: 0;
		z-index: 2;
	}
</style>
