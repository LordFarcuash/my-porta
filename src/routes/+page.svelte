<script>
	import { faAddressBook } from '@fortawesome/free-solid-svg-icons';
	import { faBook } from '@fortawesome/free-solid-svg-icons';
	import { faDiagramProject } from '@fortawesome/free-solid-svg-icons';
	import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';
</script>

<div class="navbar">
	<div class="Point">
		<FontAwesomeIcon icon={faAddressBook} size="2x" />
		<div class="about">
			<span>A</span>
			<span>B</span>
			<span>O</span>
			<span>U</span>
			<span>T</span>
		</div>
	</div>
	<p class="Point-2">
		<FontAwesomeIcon icon={faBook} size="2x" />
	</p>
	<p class="Point-3">
		<FontAwesomeIcon icon={faDiagramProject} size="2x" />
	</p>
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

	.Point {
		position: absolute;
		top: -47vh;
		left: 3vh;
		width: 95px;
		height: 95px;
		background-color: #5e615b;
		border-radius: 25px;
		filter: drop-shadow(0px 4px 6px rgba(0, 0, 0, 0.4));
		transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
		align-items: center;
		display: flex;
		justify-content: center;
		color: white;
	}

	.Point:hover {
		transform: scale(1.2);
	}

	/* Contenedor de letras debajo en columna */
	.about {
		position: absolute;
		top: 110%; /* debajo del cubo */
		left: 50%;
		transform: translateX(-50%);
		display: flex;
		flex-direction: column; /* vertical */
		align-items: center;
		gap: 5px;
	}

	.about span {
		opacity: 0;
		transform: translateY(10px);
		transition:
			opacity 0.3s ease,
			transform 0.3s ease;
		color: white;
		font-weight: bold;
		font-size: 25px;
		font-family: 'Kode Mono', system-ui, sans-serif;
	}

	/* Al hacer hover aparecen */
	.Point:hover .about span {
		opacity: 1;
		transform: translateY(0);
	}

	/* Aparición escalonada */
	.about span:nth-child(1) {
		transition-delay: 0.05s;
	}
	.about span:nth-child(2) {
		transition-delay: 0.15s;
	}
	.about span:nth-child(3) {
		transition-delay: 0.25s;
	}
	.about span:nth-child(4) {
		transition-delay: 0.35s;
	}
	.about span:nth-child(5) {
		transition-delay: 0.45s;
	}

	/* Desaparición inversa */
	.Point:not(:hover) .about span:nth-child(1) {
		transition-delay: 0.45s;
	}
	.Point:not(:hover) .about span:nth-child(2) {
		transition-delay: 0.35s;
	}
	.Point:not(:hover) .about span:nth-child(3) {
		transition-delay: 0.25s;
	}
	.Point:not(:hover) .about span:nth-child(4) {
		transition-delay: 0.15s;
	}
	.Point:not(:hover) .about span:nth-child(5) {
		transition-delay: 0.05s;
	}

	.Point-2 {
		position: absolute;
		top: -47vh;
		left: 15vh;
		width: 95px;
		height: 95px;
		background-color: #797c76;
		border-radius: 25px;
		filter: drop-shadow(0px 4px 6px rgba(0, 0, 0, 0.4));
		transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
		align-items: center;
		display: flex;
		justify-content: center;
		color: white;
	}

	.Point-2:hover {
		transform: scale(1.2); /* aumenta un 20% */
	}

	.Point-3 {
		position: absolute;
		top: -47vh;
		left: 27vh;
		width: 95px;
		height: 95px;
		background-color: #92968f;
		border-radius: 25px;
		filter: drop-shadow(0px 4px 6px rgba(0, 0, 0, 0.4));
		transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
		align-items: center;
		display: flex;
		justify-content: center;
		color: white;
	}

	.Point-3:hover {
		transform: scale(1.2); /* aumenta un 20% */
	}
</style>
