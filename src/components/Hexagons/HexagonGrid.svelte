<script>
	import Hexagon from './Hexagon.svelte';
</script>

<div class="container-of-grid">
	<div class="grid-container-normal-row">
		<Hexagon />
		<Hexagon />
		<Hexagon />
		<Hexagon />
		<Hexagon />
		<Hexagon />
		<Hexagon />
		<Hexagon />
		<Hexagon />
		<Hexagon />
		<Hexagon />
		<Hexagon />
		<Hexagon />
		<Hexagon />
		<Hexagon />
	</div>
	<div class="grid-container-offset-row">
		<Hexagon />
		<Hexagon />
		<Hexagon />
		<Hexagon />
		<Hexagon />
		<Hexagon />
		<Hexagon />
		<Hexagon />
		<Hexagon />
		<Hexagon />
		<Hexagon />
		<Hexagon />
		<Hexagon />
		<Hexagon />
	</div>
	<div class="grid-container-normal-row">
		<Hexagon />
		<Hexagon />
		<Hexagon />
		<Hexagon />
		<Hexagon />
		<Hexagon />
		<Hexagon />
		<Hexagon />
		<Hexagon />
		<Hexagon />
		<Hexagon />
		<Hexagon />
		<Hexagon />
		<Hexagon />
		<Hexagon />
	</div>
	<div class="grid-container-offset-row">
		<Hexagon />
		<Hexagon />
		<Hexagon />
		<Hexagon />
		<Hexagon />
		<Hexagon />
		<Hexagon />
		<Hexagon />
		<Hexagon />
		<Hexagon />
		<Hexagon />
		<Hexagon />
		<Hexagon />
		<Hexagon />
	</div>
	<div class="grid-container-normal-row">
		<Hexagon />
		<Hexagon />
		<Hexagon />
		<Hexagon />
		<Hexagon />
		<Hexagon />
		<Hexagon />
		<Hexagon />
		<Hexagon />
		<Hexagon />
		<Hexagon />
		<Hexagon />
		<Hexagon />
		<Hexagon />
		<Hexagon />
	</div>
	<div class="grid-container-offset-row">
		<Hexagon />
		<Hexagon />
		<Hexagon />
		<Hexagon />
		<Hexagon />
		<Hexagon />
		<Hexagon />
		<Hexagon />
		<Hexagon />
		<Hexagon />
		<Hexagon />
		<Hexagon />
		<Hexagon />
		<Hexagon />
	</div>
	<div class="grid-container-normal-row">
		<Hexagon />
		<Hexagon />
		<Hexagon />
		<Hexagon />
		<Hexagon />
		<Hexagon />
		<Hexagon />
		<Hexagon />
		<Hexagon />
		<Hexagon />
		<Hexagon />
		<Hexagon />
		<Hexagon />
		<Hexagon />
		<Hexagon />
	</div>
	<div class="grid-container-offset-row">
		<Hexagon />
		<Hexagon />
		<Hexagon />
		<Hexagon />
		<Hexagon />
		<Hexagon />
		<Hexagon />
		<Hexagon />
		<Hexagon />
		<Hexagon />
		<Hexagon />
		<Hexagon />
		<Hexagon />
		<Hexagon />
	</div>
	<div class="grid-container-normal-row-2">
		<Hexagon />
		<Hexagon />
		<Hexagon />
		<Hexagon />
	</div>
	<div class="grid-container-offset-row-2">
		<Hexagon />
		<Hexagon />
		<Hexagon />
		<Hexagon />
	</div>
	<div class="grid-container-normal-row-2">
		<Hexagon />
		<Hexagon />
		<Hexagon />
		<Hexagon />
	</div>
	<div class="grid-container-offset-row-2">
		<Hexagon />
		<Hexagon />
		<Hexagon />
		<Hexagon />
	</div>
	<div class="grid-container-normal-row-2">
		<Hexagon />
		<Hexagon />
		<Hexagon />
		<Hexagon />
	</div>
	<div class="grid-container-offset-row-2">
		<Hexagon />
		<Hexagon />
		<Hexagon />
		<Hexagon />
	</div>
	<div class="grid-container-normal-row-2">
		<Hexagon />
		<Hexagon />
		<Hexagon />
		<Hexagon />
	</div>
</div>

<style>
	.container-of-grid {
		padding-top: 2rem;
	}
	.grid-container-normal-row {
		display: grid;
		grid-template-columns: repeat(15, 1fr);
		grid-row-gap: 2rem;
		width: 100%;
		overflow: clip;
		margin-top: -1.7rem;
	}
	.grid-container-offset-row {
		display: grid;
		grid-template-columns: repeat(15, 1fr);
		width: 100%;
		overflow: clip;
		margin-left: 3rem;
		margin-top: -1.7rem;
	}
	.grid-container-normal-row-2 {
		opacity: 0;
		display: none;
	}
	.grid-container-offset-row-2 {
		opacity: 0;
		display: none;
	}

	@media (max-width: 500px) {
		.grid-container-normal-row-2 {
			opacity: 1;
			display: grid;
			grid-template-columns: repeat(5, 1fr);
			grid-row-gap: 2rem;
			width: 100%;
			overflow: clip;
			margin-top: -1.7rem;
		}
		.grid-container-offset-row-2 {
			opacity: 1;
			display: grid;
			grid-template-columns: repeat(5, 1fr);
			width: 100%;
			overflow: clip;
			margin-left: -3rem;
			margin-top: -1.7rem;
		}
		.grid-container-normal-row {
			opacity: 0;
			display: none;
		}
		.grid-container-offset-row {
			opacity: 0;
			display: none;
		}
	}
</style>
