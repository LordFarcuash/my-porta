<script>
	import { Avatar } from '@skeletonlabs/skeleton-svelte/composed';
	import shinobg from '../assets/shinobg.png';
</script>

<div class="TitleName">
	<span> Ledanis </span>
	<Avatar
		class="ml-10 mt-5 w-15 h-15 inset-shadow-sm inset-shadow-gray-600 shadow-lg shadow-stone-800 "
	>
		<Avatar.Image src={shinobg} />
		<Avatar.Fallback>Ledanis</Avatar.Fallback>
	</Avatar>
</div>
<div class="SubTitle">
	<span>Full-Stack Developer</span>
</div>

<style>
	.TitleName span {
		font-family: 'Kode Mono', system-ui, sans-serif;
		font-size: 5rem;
		color: white;
	}

	.TitleName {
		position: absolute;
		top: -29.5rem;
		left: 23rem;
	}

	.SubTitle {
		width: 20rem;
		position: absolute;
		top: -23rem;
		left: 25rem;
	}
	.SubTitle span {
		font-family: 'Kode Mono', system-ui, sans-serif;
		font-size: 1rem;
		color: white;
	}
</style>
