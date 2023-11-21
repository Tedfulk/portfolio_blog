<script>
	import { hexagonActionState } from '../../store';
	import { onMount } from 'svelte';
	let position = 'left';

	onMount(() => {
		const unsubscribe = hexagonActionState.subscribe((state) => {
			if (state === 'scale') {
				position = 'left';
			} else if (state === 'shake') {
				position = 'right';
			} else if (state === 'bounce') {
				position = 'center';
			}
		});

		return () => unsubscribe();
	});

	function toggleState() {
		hexagonActionState.update((state) => {
			if (state === 'shake') {
				return 'scale';
			} else if (state === 'scale') {
				return 'bounce';
			} else {
				return 'shake';
			}
		});
	}

	function handleKeyDown(event) {
		if (event.key === 'Enter' || event.key === ' ') {
			toggleState();
		}
	}
</script>

<div class="switch" on:click={toggleState} on:keydown={handleKeyDown}>
	<div class={`circle ${position}`} />
</div>

<style>
	.switch {
		width: 80px;
		height: 30px;
		background-color: rgba(211, 211, 211, 0.5);
		position: relative;
		border-radius: 15px;
		cursor: pointer;
	}

	.circle {
		width: 30px;
		height: 30px;
		background-color: #f7cb39;
		border-radius: 50%;
		position: absolute;
		top: 0;
		transition: left 0.3s ease-in-out;
	}

	.circle.left {
		left: 0;
	}

	.circle.center {
		left: 25px;
	}

	.circle.right {
		left: 50px;
	}
</style>
