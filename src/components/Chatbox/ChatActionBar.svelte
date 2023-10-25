<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import DowloadAction from './DowloadAction.svelte';

	export let messages: { role: string; content: string }[] = [];
	const dispatch = createEventDispatcher();

	function clearChat() {
		dispatch('clearChat');
	}
</script>

<div class="chat-action-bar">
	<button on:click={clearChat}>
		<span class="tooltip">Clear</span>
		<span class="icon">🗑️</span>
	</button>
	<button>
		<span class="tooltip">Download</span>
		<DowloadAction {messages} />
	</button>
</div>

<style>
	.chat-action-bar {
		display: flex;
		align-items: center;
		margin-left: auto;
	}
	.chat-action-bar .icon {
		font-size: 20px;
	}
	button {
		background-color: transparent;
		border: none;
		cursor: pointer;
		position: relative;
	}
	.tooltip {
		visibility: hidden;
		background-color: #333;
		color: #fff;
		text-align: center;
		margin-left: -15px;
		border-radius: 6px;
		padding: 5px 10px;
		position: absolute;
		z-index: 1;
		bottom: 100%;
		opacity: 0;
		transition: opacity 0.3s;
	}
	button:hover .tooltip {
		visibility: visible;
		opacity: 1;
	}
</style>
