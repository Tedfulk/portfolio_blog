<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();

	function handleInteraction() {
		dispatch('openChat');
	}
</script>

<div
	id="chat-bubble"
	on:click={handleInteraction}
	on:keydown={handleInteraction}
	tabindex="0"
	role="button"
>
	<img src="img/purdue_hammer_with_bg.png" alt="Chat Bubble" />
</div>

<style>
	#chat-bubble {
		position: fixed;
		bottom: 20px;
		right: 20px;
		border-radius: 50%; /* This will keep the border rounded, remove if not needed */
		width: 100px;
		height: 100px;
		display: flex;
		justify-content: center;
		align-items: center;
		cursor: pointer;
		z-index: 100;
	}

	#chat-bubble img {
		width: 100%;
		height: 100%;
		border-radius: 50%; /* This will keep the border rounded, remove if not needed */
	}
</style>
