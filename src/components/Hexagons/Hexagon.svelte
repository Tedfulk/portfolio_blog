<script>
	import BoopAction from './BoopAction.svelte';
	import { onMount } from 'svelte';
	import { hexagonActionState } from '../../store';
	let boopParams;

	onMount(() => {
		hexagonActionState.subscribe((state) => {
			if (state === 'scale') {
				boopParams = { scale: 1.2, timing: 200 };
			} else if (state === 'bounce') {
				boopParams = { y: 5, timing: 200 };
			} else if (state === 'shake') {
				boopParams = { rotation: 20, timing: 200 };
			}
		});
	});
</script>

<BoopAction {boopParams}>
	<div class="hexagon">
		<svg width="95" height="100" xmlns="http://www.w3.org/2000/svg">
			<polygon
				points="50,5 95,30 95,70 50,95 5,70 5,30"
				fill="#1e2021"
				stroke="#f7cb39"
				stroke-width="1"
			/>
		</svg>
	</div>
</BoopAction>

<style>
	.hexagon {
		width: 100px; /* Adjust to control the size of the hexagon */
		height: 100px; /* This should be 86.6% of the width to create a regular hexagon */
		/* background-color: #f00; Adjust to control the color of the hexagon */
		/* clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%); */
	}
</style>
