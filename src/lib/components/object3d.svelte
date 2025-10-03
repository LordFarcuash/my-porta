<script lang="ts">
	import { onMount } from 'svelte';
	import * as THREE from 'three';
	import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

	let container3D: HTMLDivElement;

	onMount(() => {
		// 🚀 Escena - SIN background para mantener transparencia
		const scene = new THREE.Scene();
		// Removemos scene.background para mantener transparencia

		// 🚀 Cámara
		const camera = new THREE.PerspectiveCamera(
			35,
			container3D.clientWidth / container3D.clientHeight,
			0.1,
			250
		);
		camera.position.set(0, 2, 4);

		// 🚀 Renderer con transparencia activada
		const renderer = new THREE.WebGLRenderer({
			antialias: true,
			alpha: true, // Importante para transparencia
			preserveDrawingBuffer: true
		});
		renderer.setSize(container3D.clientWidth, container3D.clientHeight);
		renderer.setClearColor(0x000000, 0); // Color transparente
		renderer.shadowMap.enabled = true;
		renderer.shadowMap.type = THREE.PCFSoftShadowMap;
		container3D.appendChild(renderer.domElement);

		// 🚀 Iluminación mejorada para objetos más brillantes
		const directionalLight = new THREE.DirectionalLight(0xffffff, 1.5); // Incrementé intensidad
		directionalLight.position.set(5, 10, 5);
		directionalLight.castShadow = true;
		directionalLight.shadow.mapSize.width = 2048;
		directionalLight.shadow.mapSize.height = 2048;
		scene.add(directionalLight);

		// Luz ambiental más intensa para iluminar mejor el modelo
		const ambientLight = new THREE.AmbientLight(0xffffff, 0.6); // Incrementé de 0.3 a 0.6
		scene.add(ambientLight);

		// Luz adicional frontal para mejor visibilidad
		const frontLight = new THREE.DirectionalLight(0xffffff, 0.8);
		frontLight.position.set(0, 0, 5);
		scene.add(frontLight);

		let model: THREE.Group;
		let mixer: THREE.AnimationMixer; // Para manejar animaciones

		// 🚀 Cargar modelo
		const loader = new GLTFLoader();
		loader.load(
			'/models/scene.gltf',
			(gltf) => {
				model = gltf.scene;

				// Configurar animaciones si existen
				if (gltf.animations && gltf.animations.length > 0) {
					mixer = new THREE.AnimationMixer(model);

					// Reproducir todas las animaciones encontradas
					gltf.animations.forEach((clip) => {
						const action = mixer.clipAction(clip);
						action.play();
					});
				}

				const box = new THREE.Box3().setFromObject(model);
				const size = box.getSize(new THREE.Vector3());
				const center = box.getCenter(new THREE.Vector3());

				const maxDimension = Math.max(size.x, size.y, size.z);
				const scaleFactor = 1.5 / maxDimension;
				model.scale.set(scaleFactor, scaleFactor, scaleFactor);

				model.position.x = -center.x * scaleFactor;
				model.position.z = -center.z * scaleFactor;
				model.position.y = -center.y * scaleFactor - (size.y * scaleFactor) / 10 + 1.6;

				model.traverse((child) => {
					if (child instanceof THREE.Mesh) {
						child.castShadow = true;
						child.receiveShadow = true;

						// Mejorar materiales para mejor visibilidad
						if (child.material) {
							if (Array.isArray(child.material)) {
								child.material.forEach((mat) => {
									if (mat instanceof THREE.MeshStandardMaterial) {
										mat.needsUpdate = true;
									}
								});
							} else if (child.material instanceof THREE.MeshStandardMaterial) {
								child.material.needsUpdate = true;
							}
						}
					}
				});

				scene.add(model);
				animate();
			},
			(progress) => {
				console.log('Progreso de carga:', (progress.loaded / progress.total) * 100 + '%');
			},
			(error) => {
				console.error('Error cargando modelo:', error);
			}
		);

		const clock = new THREE.Clock(); // Para delta time en animaciones

		function animate() {
			requestAnimationFrame(animate);

			const delta = clock.getDelta();

			// Actualizar animaciones del mixer si existe
			if (mixer) {
				mixer.update(delta);
			}

			// Rotación manual adicional (opcional, puedes comentar si solo quieres las animaciones originales)
			if (model) {
				model.rotation.y += 0.001;
			}

			renderer.render(scene, camera);
		}

		const handleResize = () => {
			if (container3D) {
				camera.aspect = container3D.clientWidth / container3D.clientHeight;
				camera.updateProjectionMatrix();
				renderer.setSize(container3D.clientWidth, container3D.clientHeight);
			}
		};

		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
			if (mixer) {
				mixer.stopAllAction();
			}
			renderer.dispose();
		};
	});
</script>

<div class="column-3d-object" bind:this={container3D}></div>

<style>
	.column-3d-object {
		position: absolute;
		width: 50vh;
		height: 100%;
		top: 0;
		z-index: 2;
		overflow: hidden;
		background-color: rgb(56, 56, 56);
		filter: drop-shadow(20px 20px 10px rgba(0, 0, 0, 0.7));
	}
</style>
