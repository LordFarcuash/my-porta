<script lang="ts">
	import { modalState } from './stores/currentModalstate.svelte';
	import { faXmark } from '@fortawesome/free-solid-svg-icons';
	import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';

	function closeModal() {
		modalState.set(false);
	}

	function handleBackdropClick(e: MouseEvent) {
		if (e.target === e.currentTarget) {
			closeModal();
		}
	}
</script>

{#if $modalState}
	<div class="modal-backdrop" on:click={handleBackdropClick} role="presentation">
		<div class="modal-content">
			<button class="close-btn" on:click={closeModal} aria-label="Cerrar modal">
				<FontAwesomeIcon icon={faXmark} size="lg" />
			</button>

			<div class="modal-header">
				<h2 class="text-center">¿Estas Seguro que Deseas Continuar?</h2>
			</div>

			<div class="modal-body">
				<p class="text-center">Estas a punto de ser redirigido a Github</p>

				<div class="project-list">
					<a
						href="https://github.com/LordFarcuash"
						target="_blank"
						rel="noopener noreferrer"
						class="project-item"
					>
						<p class="text-center">Si, Continuar</p>
					</a>
				</div>
			</div>
		</div>
	</div>
{/if}

<style>
	.modal-backdrop {
		position: fixed;
		top: 0;
		left: 0;
		width: 100vw;
		height: 100vh;
		background-color: rgba(0, 0, 0, 0.5);
		backdrop-filter: blur(8px);
		-webkit-backdrop-filter: blur(8px);
		display: flex;
		align-items: center;
		justify-content: center;
		z-index: 9999;
		animation: fadeIn 0.3s ease-out;
	}

	.modal-content {
		background: linear-gradient(145deg, #3e413b, #4a4d47);
		border-radius: 20px;
		box-shadow: 0 20px 60px rgba(0, 0, 0, 0.6);
		max-width: 600px;
		width: 90%;
		max-height: 80vh;
		overflow: hidden;
		position: relative;
		animation: slideUp 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
	}

	.close-btn {
		position: absolute;
		top: 1rem;
		right: 1rem;
		background: rgba(255, 255, 255, 0.1);
		border: none;
		border-radius: 50%;
		width: 40px;
		height: 40px;
		display: flex;
		align-items: center;
		justify-content: center;
		cursor: pointer;
		color: #e6e6e6;
		transition: all 0.3s ease;
		z-index: 10;
	}

	.close-btn:hover {
		background: rgba(255, 255, 255, 0.2);
		transform: rotate(90deg);
	}

	.modal-header {
		padding: 2rem 2rem 1rem;
		border-bottom: 2px solid rgba(255, 255, 255, 0.1);
	}

	.modal-header h2 {
		font-family: 'Kode Mono', system-ui, sans-serif;
		color: #e6e6e6;
		font-size: 1.8rem;
		margin: 0;
	}

	.modal-body {
		padding: 2rem;
		max-height: calc(80vh - 100px);
		overflow-y: auto;
		color: #e6e6e6;
		font-family: 'Kode Mono', system-ui, sans-serif;
	}

	.modal-body p {
		line-height: 1.6;
		margin-bottom: 1rem;
	}

	.project-list {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		margin-top: 1.5rem;
	}

	.project-item {
		background: rgba(255, 255, 255, 0.05);
		padding: 1.5rem;
		border-radius: 12px;
		text-decoration: none;
		color: inherit;
		transition: all 0.3s ease;
		border: 1px solid rgba(255, 255, 255, 0.1);
	}

	.project-item:hover {
		background: rgba(255, 255, 255, 0.1);
		transform: translateY(-2px);
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
	}

	.project-item p {
		margin: 0;
		font-size: 0.9rem;
		opacity: 0.8;
	}

	@keyframes fadeIn {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}

	@keyframes slideUp {
		from {
			opacity: 0;
			transform: translateY(50px) scale(0.95);
		}
		to {
			opacity: 1;
			transform: translateY(0) scale(1);
		}
	}

	.modal-body::-webkit-scrollbar {
		width: 8px;
	}

	.modal-body::-webkit-scrollbar-track {
		background: rgba(255, 255, 255, 0.05);
		border-radius: 10px;
	}

	.modal-body::-webkit-scrollbar-thumb {
		background: rgba(255, 255, 255, 0.2);
		border-radius: 10px;
	}

	.modal-body::-webkit-scrollbar-thumb:hover {
		background: rgba(255, 255, 255, 0.3);
	}

	/* Responsive */
	@media (max-width: 650px) {
		.modal-backdrop {
			height: 100%;
			width: 100%;
		}

		.modal-content {
			max-width: 95%;
			width: 95%;
			max-height: 85vh;
		}

		.modal-header {
			padding: 1.5rem 1.5rem 1rem;
		}

		.modal-header h2 {
			font-size: 1.4rem;
			padding-right: 2rem;
		}

		.modal-body {
			padding: 1.5rem;
		}

		.close-btn {
			width: 35px;
			height: 35px;
		}
	}
</style>
