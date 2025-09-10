<script>
</script>

<div class="navbar">
	<p class="Point"></p>
	<p class="Point-2"></p>
	<p class="Point-3"></p>
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
		top: -47vh; /* sube dentro del triángulo */
		left: 3vh; /* mueve horizontalmente */
		width: 95px;
		height: 95px;
		background-color: #5e615b;
		border-radius: 25px;
		filter: drop-shadow(0px 4px 6px rgba(0, 0, 0, 0.4));
		transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1); /* rebote suave */
	}

	.Point:hover {
		transform: scale(1.2); /* aumenta un 20% */
	}

	.Point-2 {
		position: absolute;
		top: -47vh; /* sube dentro del triángulo */
		left: 15vh; /* mueve horizontalmente */
		width: 95px;
		height: 95px;
		background-color: #797c76;
		border-radius: 25px;
		filter: drop-shadow(0px 4px 6px rgba(0, 0, 0, 0.4));
		transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1); /* rebote suave */
	}

	.Point-2:hover {
		transform: scale(1.2); /* aumenta un 20% */
	}

	.Point-3 {
		position: absolute;
		top: -47vh; /* sube dentro del triángulo */
		left: 27vh; /* mueve horizontalmente */
		width: 95px;
		height: 95px;
		background-color: #92968f;
		border-radius: 25px;
		filter: drop-shadow(0px 4px 6px rgba(0, 0, 0, 0.4));
		transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1); /* rebote suave */
	}

	.Point-3:hover {
		transform: scale(1.2); /* aumenta un 20% */
	}
</style>
