<script lang="ts">
	import SvgIcon from '@jamescoyle/svelte-icon';
	import { mdiSendClockOutline, mdiSendOutline } from '@mdi/js';
	import { createEventDispatcher } from 'svelte';
	import { darkTheme } from '../../store';

	const dispatch = createEventDispatcher();

	let message = '';
	let isExpanded = false;

	function toggleExpand() {
		isExpanded = !isExpanded;
	}

	function sendMessage() {
		if (message.trim()) {
			dispatch('send', message);
			message = '';
			isExpanded = false;
		}
	}
</script>

<div class="input-container">
	<textarea
		bind:value={message}
		on:keydown={(e) => e.key === 'Enter' && sendMessage()}
		on:focus={toggleExpand}
		on:blur={toggleExpand}
		name="chatMessage"
		placeholder="Type a message ..."
		class:is-expanded={isExpanded}
	/>
	<button on:click={sendMessage}>
		{#if $darkTheme}
			<SvgIcon type="mdi" path={mdiSendOutline}></SvgIcon>
			{:else}
			<SvgIcon type="mdi" path={mdiSendOutline} style="color: #1e2021;"></SvgIcon>
		{/if}
	</button>
</div>

<style>
	.input-container {
		display: flex;
		align-items: center;
		background-color: #fff;
		border-top: 1px solid #ccc;
	}
	textarea {
		flex-grow: 1;
		border: none;
		padding-left: 10px;
		font-size: 14px;
		box-sizing: border-box;
		height: 40px;
		resize: vertical;
		font-family: inherit;
	}
	textarea.is-expanded {
		height: 100px;
		padding-left: 10px;
		font-size: 16px;
		transition: height 0.3s ease-in-out;
	}
	button {
		padding-right: 10px;
		border: none;
		background-color: transparent;
		cursor: pointer;
	}
</style>
