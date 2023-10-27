<script lang="ts">
	import boop from '../../boop';
	export let boopParams: any = {};
	let isBooped = false;

	const setIsBooped = (val) => (isBooped = val);

	function triggerBoop() {
		isBooped = true;
	}

	function handleKeyDown(event) {
		if (event.key === 'Enter' || event.key === ' ') {
			triggerBoop();
		}
	}
</script>

<span
	on:mouseenter={triggerBoop}
	on:click={triggerBoop}
	on:keydown={handleKeyDown}
	use:boop={{ isBooped, ...boopParams, setter: setIsBooped }}
>
	<slot />
</span>
