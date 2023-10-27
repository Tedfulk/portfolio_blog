<script>
	import HexagonGrid from '../../components/Hexagons/HexagonGrid.svelte';
	import TriStateSwitch from '../../components/Switches/TriStateSwitch.svelte';
</script>

<div class="hexagongrid-container">
	<HexagonGrid />
	<div class="tri-state-switch-container">
		<TriStateSwitch />
	</div>
</div>

<style>
	.hexagongrid-container {
		position: absolute;
		top: 0;
		right: 0;
		height: 100%;
		width: 100%;
		background: rgb(0, 194, 255);
		background: radial-gradient(
			circle,
			rgba(0, 194, 255, 1) 0%,
			rgba(0, 79, 112, 1) 32%,
			rgba(13, 54, 94, 1) 49%,
			rgba(0, 18, 36, 1) 100%
		);
		z-index: 0;
	}
	.tri-state-switch-container {
		position: absolute;
		top: 0;
		right: 0;
		z-index: 1;
		padding-top: 2rem;
		padding-right: 2rem;
	}
</style>
