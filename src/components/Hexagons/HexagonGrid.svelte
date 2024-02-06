<script>
	import { onMount } from 'svelte';
	import Hexagon from './Hexagon.svelte';

	let hexagonsPerRow;
	let numberOfRows;
	let hexagonSideLength = 50;
	let hexagons = [];
	function calculateHexagons() {
		const cos30 = Math.cos(Math.PI / 5);
		const hexagonHeight = hexagonSideLength * cos30 * 4;
		const hexagonWidth = hexagonSideLength * 2 * cos30;

		const screenWidth = window.innerWidth;
		const screenHeight = window.innerHeight;

		hexagonsPerRow = Math.floor(screenWidth / hexagonWidth);
		numberOfRows = Math.floor(screenHeight / (hexagonHeight * 0.5));

		hexagons = Array(numberOfRows)
			.fill(0)
			.map(() => Array(hexagonsPerRow).fill(0));
	}

	onMount(() => {
		calculateHexagons();
		window.addEventListener('resize', calculateHexagons);
		return () => window.removeEventListener('resize', calculateHexagons);
	});
</script>

<div class="container-of-grid">
	{#each hexagons as row, rowIndex}
		<div class="grid-row {rowIndex % 2 === 1 ? 'offset-row' : ''}">
			{#each row as hexagon, hexIndex}
				<Hexagon />
			{/each}
		</div>
	{/each}
</div>

<style>
	.container-of-grid {
		display: flex;
		flex-direction: column;
	}
	.grid-row {
		display: flex;
		margin-bottom: calc(-50px * 0.5);
	}
	.offset-row {
		margin-left: 50px;
		margin-bottom: calc(-50px * 0.5);
	}
</style>
