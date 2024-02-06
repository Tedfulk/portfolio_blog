<script>
	import HexagonGrid from '../../components/Hexagons/HexagonGrid.svelte';
	import TriStateSwitch from '../../components/Switches/TriStateSwitch.svelte';
	import Modal from './Modal.svelte';
	let showModal = false;
</script>

<div class="hexagongrid-container">
	<HexagonGrid />
	<div class="tri-state-switch-container">
		<TriStateSwitch />
	</div>
	{#if !showModal}
		<div class="button-container">
			<div class="button-div">
				<button class="about-me-button" on:click={() => (showModal = !showModal)}>About Me</button>
			</div>
		</div>
	{/if}
	<Modal {showModal} />
</div>

<style>
	.hexagongrid-container {
		position: relative;
		height: 94vh;
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		background: rgb(0, 194, 255);
		background: radial-gradient(
			circle,
			rgba(0, 194, 255, 1) 0%,
			rgba(0, 79, 112, 1) 32%,
			rgba(13, 54, 94, 1) 49%,
			rgba(0, 18, 36, 1) 100%
		);
	}
	.tri-state-switch-container {
		position: absolute;
		top: 0;
		right: 0;
		z-index: 10;
		padding-top: 2rem;
		padding-right: 2rem;
	}
	.button-container {
		position: absolute;
		z-index: 3;
		padding: 4rem 8.5rem;
		font-size: 1.5em;
		border-radius: 15px;
		background: rgb(254, 255, 0);
		background: radial-gradient(
			circle,
			rgba(254, 255, 0, 1) 10%,
			rgb(109, 117, 19) 42%,
			rgba(13, 54, 94, 1) 67%,
			rgba(0, 18, 36, 1) 100%
		);
		opacity: 0.95;
	}
	.about-me-button {
		padding: 0.8rem 1.7rem;
		font-size: 1em;
		border: 3px solid #007bff;
		border-radius: 15px;
		background-color: transparent;
		color: #116ac8;
		cursor: pointer;
		transition: background-color 0.3s, color 0.3s;
	}
	.about-me-button:hover {
		background-color: #007bff;
		color: #fff;
	}
</style>
