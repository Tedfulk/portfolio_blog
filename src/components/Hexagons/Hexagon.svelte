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
		<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
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
</style>
