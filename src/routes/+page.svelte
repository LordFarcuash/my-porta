<script>
	import ButtonsNav from '$lib/components/buttonsNav.svelte';
</script>

<div class="navbar">
	<ButtonsNav />
	<div class="TitleName">
		<span>Ledanis</span>
	</div>
	<div class="SubTitle">
		<span>Full-Stack Developer</span>
	</div>
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

	.TitleName span {
		font-family: 'Kode Mono', system-ui, sans-serif;
		font-size: 5rem;
		color: white;
	}

	.TitleName {
		position: absolute;
		top: -36rem;
		left: 28rem;
	}

	.SubTitle {
		width: 20rem;
		position: absolute;
		top: -30rem;
		left: 29rem;
	}
	.SubTitle span {
		font-family: 'Kode Mono', system-ui, sans-serif;
		font-size: 1rem;
		color: white;
	}
</style>
