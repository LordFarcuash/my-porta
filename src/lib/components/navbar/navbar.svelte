<script>
	import { faDiagramProject } from '@fortawesome/free-solid-svg-icons';
	import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';
	import { faUserSecret } from '@fortawesome/free-solid-svg-icons';
	import { faBookOpenReader } from '@fortawesome/free-solid-svg-icons';
	import { Avatar } from '@skeletonlabs/skeleton-svelte/composed';
	import shinobg from '../../assets/shinobg.png';
	import { urlState } from '../stores/currentURL.svelte';
</script>

<div class="navbar">
	<div class="navbar-buttons">
		<button class="nav-btn" on:click={() => ((urlState.url = `about`), console.log(urlState.url))}>
			<div class="Point">
				<FontAwesomeIcon icon={faUserSecret} size="2x" style="color: #e6e6e6;" />
				<div class="about">
					<span>A</span>
					<span>B</span>
					<span>O</span>
					<span>U</span>
					<span>T</span>
					<br />
					<span>M</span>
					<span>E</span>
				</div>
			</div>
		</button>
		<div class="Point-2">
			<FontAwesomeIcon icon={faBookOpenReader} size="2x" style="color: #e6e6e6;" />
			<div class="about2">
				<span>K</span>
				<span>N</span>
				<span>O</span>
				<span>L</span>
				<span>E</span>
				<span>D</span>
				<span>G</span>
				<span>E</span>
				<span>s</span>
			</div>
		</div>
		<a class="Point-3" href="https://github.com/LordFarcuash">
			<FontAwesomeIcon icon={faDiagramProject} size="2x" style="color: #e6e6e6;" />
			<div class="about3">
				<span>G</span>
				<span>I</span>
				<span>T</span>
				<span>H</span>
				<span>U</span>
				<span>B</span>
			</div>
		</a>
	</div>

	<div class="header-content">
		<div class="TitleName">
			<button
				class="title-btn"
				on:click={() => ((urlState.url = 'home'), console.log(urlState.url))}
			>
				Ledanis
			</button>
		</div>
		<div class="avatar-wrapper">
			<Avatar class="custom-avatar">
				<Avatar.Image src={shinobg} />
				<Avatar.Fallback>Ledanis</Avatar.Fallback>
			</Avatar>
		</div>
		<div class="SubTitle">
			<span>Full-Stack Developer</span>
		</div>
	</div>
</div>

<style>
	.navbar {
		width: 0;
		height: 0;
		border-left: 0 solid transparent;
		border-right: 100vh solid transparent;
		border-top: 50vh solid #3e413b;
		filter: drop-shadow(0px 4px 6px rgba(0, 0, 0, 0.4));
		position: relative;
		z-index: 3;
	}

	.header-content {
		position: absolute;
		top: -28.5rem;
		left: 23rem;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		gap: 0.5rem;
	}

	.TitleName {
		display: flex;
		align-items: center;
	}

	.title-btn {
		font-family: 'Kode Mono', system-ui, sans-serif;
		font-size: 5rem;
		color: white;
		background: none;
		border: none;
		cursor: pointer;
		padding: 0;
		line-height: 1;
	}

	.avatar-wrapper {
		position: absolute;
		top: 0;
		right: -4rem;
		z-index: 10;
	}

	:global(.custom-avatar) {
		width: 3rem !important;
		height: 3rem !important;
		box-shadow: 0 4px 6px rgba(0, 0, 0, 0.5) !important;
	}

	.SubTitle {
		margin-top: 0.5rem;
		padding-left: 0.5rem;
	}

	.SubTitle span {
		font-family: 'Kode Mono', system-ui, sans-serif;
		font-size: 1rem;
		color: white;
		display: block;
	}

	.navbar-buttons {
		position: absolute;
		top: -47vh;
		left: 3vh;
		display: flex;
		gap: 2.5vh;
		z-index: 5;
	}

	.nav-btn {
		all: unset;
		cursor: pointer;
	}

	.Point,
	.Point-2,
	.Point-3 {
		position: relative;
		width: 75px;
		height: 75px;
		border-radius: 25px;
		filter: drop-shadow(0px 4px 6px rgba(0, 0, 0, 0.4));
		transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.Point {
		background-color: #5e615b;
	}

	.Point-2 {
		background-color: #797c76;
	}

	.Point-3 {
		background-color: #92968f;
	}

	.Point:hover,
	.Point-2:hover,
	.Point-3:hover {
		transform: scale(1.2);
	}

	.about,
	.about2,
	.about3 {
		position: absolute;
		top: 110%;
		left: 50%;
		transform: translateX(-50%);
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 5px;
	}

	.about span,
	.about2 span,
	.about3 span {
		opacity: 0;
		transform: translateY(10px);
		transition:
			opacity 0.3s ease,
			transform 0.3s ease;
		font-weight: bold;
		font-size: 10px;
		font-family: 'Kode Mono', system-ui, sans-serif;
		color: white;
	}

	.Point:hover .about span,
	.Point-2:hover .about2 span,
	.Point-3:hover .about3 span {
		opacity: 1;
		transform: translateY(0);
	}

	.about span:nth-child(1) {
		transition-delay: 0.05s;
	}
	.about span:nth-child(2) {
		transition-delay: 0.1s;
	}
	.about span:nth-child(3) {
		transition-delay: 0.15s;
	}
	.about span:nth-child(4) {
		transition-delay: 0.2s;
	}
	.about span:nth-child(5) {
		transition-delay: 0.25s;
	}
	.about span:nth-child(6) {
		transition-delay: 0.35s;
	}
	.about span:nth-child(7) {
		transition-delay: 0.4s;
	}
	.about span:nth-child(8) {
		transition-delay: 0.45s;
	}

	.Point:not(:hover) .about span:nth-child(1) {
		transition-delay: 0.45s;
	}
	.Point:not(:hover) .about span:nth-child(2) {
		transition-delay: 0.35s;
	}
	.Point:not(:hover) .about span:nth-child(3) {
		transition-delay: 0.3s;
	}
	.Point:not(:hover) .about span:nth-child(4) {
		transition-delay: 0.25s;
	}
	.Point:not(:hover) .about span:nth-child(5) {
		transition-delay: 0.2s;
	}
	.Point:not(:hover) .about span:nth-child(6) {
		transition-delay: 0.15s;
	}
	.Point:not(:hover) .about span:nth-child(7) {
		transition-delay: 0.1s;
	}
	.Point:not(:hover) .about span:nth-child(8) {
		transition-delay: 0.05s;
	}

	.about2 span:nth-child(1) {
		transition-delay: 0.05s;
	}
	.about2 span:nth-child(2) {
		transition-delay: 0.1s;
	}
	.about2 span:nth-child(3) {
		transition-delay: 0.15s;
	}
	.about2 span:nth-child(4) {
		transition-delay: 0.2s;
	}
	.about2 span:nth-child(5) {
		transition-delay: 0.25s;
	}
	.about2 span:nth-child(6) {
		transition-delay: 0.35s;
	}
	.about2 span:nth-child(7) {
		transition-delay: 0.4s;
	}
	.about2 span:nth-child(8) {
		transition-delay: 0.45s;
	}
	.about2 span:nth-child(9) {
		transition-delay: 0.5s;
	}

	.Point-2:not(:hover) .about2 span:nth-child(1) {
		transition-delay: 0.45s;
	}
	.Point-2:not(:hover) .about2 span:nth-child(2) {
		transition-delay: 0.4s;
	}
	.Point-2:not(:hover) .about2 span:nth-child(3) {
		transition-delay: 0.35s;
	}
	.Point-2:not(:hover) .about2 span:nth-child(4) {
		transition-delay: 0.3s;
	}
	.Point-2:not(:hover) .about2 span:nth-child(5) {
		transition-delay: 0.25s;
	}
	.Point-2:not(:hover) .about2 span:nth-child(6) {
		transition-delay: 0.15s;
	}
	.Point-2:not(:hover) .about2 span:nth-child(7) {
		transition-delay: 0.1s;
	}
	.Point-2:not(:hover) .about2 span:nth-child(8) {
		transition-delay: 0.05s;
	}
	.Point-2:not(:hover) .about2 span:nth-child(9) {
		transition-delay: 0.03s;
	}

	.about3 span:nth-child(1) {
		transition-delay: 0.05s;
	}
	.about3 span:nth-child(2) {
		transition-delay: 0.1s;
	}
	.about3 span:nth-child(3) {
		transition-delay: 0.15s;
	}
	.about3 span:nth-child(4) {
		transition-delay: 0.2s;
	}
	.about3 span:nth-child(5) {
		transition-delay: 0.25s;
	}
	.about3 span:nth-child(6) {
		transition-delay: 0.35s;
	}

	.Point-3:not(:hover) .about3 span:nth-child(1) {
		transition-delay: 0.45s;
	}
	.Point-3:not(:hover) .about3 span:nth-child(2) {
		transition-delay: 0.4s;
	}
	.Point-3:not(:hover) .about3 span:nth-child(3) {
		transition-delay: 0.35s;
	}
	.Point-3:not(:hover) .about3 span:nth-child(4) {
		transition-delay: 0.3s;
	}
	.Point-3:not(:hover) .about3 span:nth-child(5) {
		transition-delay: 0.25s;
	}
	.Point-3:not(:hover) .about3 span:nth-child(6) {
		transition-delay: 0.15s;
	}

	/* RESPONSIVE - MOBILE */
	@media (max-width: 650px) {
		.navbar {
			border-right: 75vh solid transparent;
			border-top: 55vh solid #3e413b;
		}

		.header-content {
			top: -50vh;
			left: 1rem;
			transform: translateY(10vh);
		}

		.title-btn {
			font-size: clamp(2.8rem, 10vw, 3.5rem);
			color: black;
			margin-top: -12rem;
		}

		.avatar-wrapper {
			position: relative;
			top: -8.5rem;
			left: 12rem;
			margin-top: 0.75rem;
			margin-left: 0.25rem;
		}

		.SubTitle {
			margin-top: -9.5rem;
			padding-left: 0.25rem;
		}

		.SubTitle span {
			font-size: clamp(0.75rem, 3vw, 0.85rem);
		}

		.navbar-buttons {
			top: -50vh;
			left: 1rem;
			gap: 2.5vh;
			transform: translateY(4vh);
		}

		.Point,
		.Point-2,
		.Point-3 {
			width: 65px;
			height: 65px;
		}

		.about2 span,
		.about3 span {
			font-size: 8px;
		}
	}

	/* Fix específico para Brave */
	@media screen and (max-width: 650px) {
		@supports (-webkit-touch-callout: none) {
			.navbar {
				border-top: 55svh solid #3e413b;
			}

			.header-content {
				top: -55svh;
			}

			.navbar-buttons {
				top: -55svh;
			}
		}
	}
</style>
