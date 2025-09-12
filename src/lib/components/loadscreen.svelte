<script>
	import { onMount } from 'svelte';
	import { ProgressRing } from '@skeletonlabs/skeleton-svelte';

	let showLoader = true;
	let startExitAnimation = false;

	onMount(() => {
		setTimeout(() => {
			startExitAnimation = true;
		}, 1500);

		setTimeout(() => {
			showLoader = false;
		}, 2500);
	});
</script>

{#if showLoader}
	<div class="loader-overlay" class:exit={startExitAnimation}>
		<div class="loader-content">
			<h1 class="loader-title">|--Loading--|</h1>
			<div class="spinner-container">
				<div class="spinner"></div>
			</div>
			<div class="loading-dots">
				<span></span>
				<span></span>
				<span></span>
			</div>
		</div>
	</div>
{/if}

<style>
	.loader-overlay {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: linear-gradient(135deg, #3e4249 0%, #3e413b 50%, #666a6e 100%);
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		z-index: 9999;
		opacity: 1;
		transform: translateY(0);
		transition: all 1s cubic-bezier(0.4, 0, 0.2, 1);
	}

	.loader-overlay.exit {
		transform: translateY(-100%);
		opacity: 0;
	}

	.loader-content {
		text-align: center;
		animation: fadeInUp 0.8s ease-out;
	}

	.loader-title {
		color: white;
		font-size: 2.5rem;
		font-weight: 300;
		margin-bottom: 2rem;
		text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
		letter-spacing: 0.1em;
	}

	.spinner-container {
		margin-bottom: 2rem;
	}

	.spinner {
		border: 3px solid rgba(255, 255, 255, 0.2);
		border-top: 3px solid #ffffff;
		border-radius: 50%;
		width: 60px;
		height: 60px;
		animation: spin 1.2s linear infinite;
		margin: 0 auto;
		box-shadow: 0 0 20px rgba(255, 255, 255, 0.3);
	}

	@keyframes spin {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}

	.loading-dots {
		display: flex;
		gap: 8px;
		justify-content: center;
		align-items: center;
	}

	.loading-dots span {
		width: 8px;
		height: 8px;
		border-radius: 50%;
		background-color: rgba(255, 255, 255, 0.8);
		animation: pulse 1.5s infinite ease-in-out;
	}

	.loading-dots span:nth-child(1) {
		animation-delay: 0s;
	}

	.loading-dots span:nth-child(2) {
		animation-delay: 0.2s;
	}

	.loading-dots span:nth-child(3) {
		animation-delay: 0.4s;
	}

	@keyframes pulse {
		0%,
		80%,
		100% {
			transform: scale(0.8);
			opacity: 0.5;
		}
		40% {
			transform: scale(1.2);
			opacity: 1;
		}
	}

	/* Animación de entrada del contenido */
	@keyframes fadeInUp {
		from {
			opacity: 0;
			transform: translateY(30px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}
</style>
