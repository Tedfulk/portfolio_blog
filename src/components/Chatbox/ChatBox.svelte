<script lang="ts">
	import Message from '../Messages/Message.svelte';
	import ChatInput from './ChatInput.svelte';
	import { afterUpdate } from 'svelte';
	import ChatActionBar from './ChatActionBar.svelte';

	export let darkTheme: boolean | undefined = undefined;
	let messagesContainer;
	let chatbox;

	afterUpdate(() => {
		if (messagesContainer) {
			messagesContainer.scrollTop = messagesContainer.scrollHeight;
		}
	});

	let messages = [
		{ role: 'user', content: 'Hello!' },
		{ role: 'assistant', content: 'Hi there! How can I assist you today?' }
	];

	function handleSend(event) {
		const newMessage = event.detail;
		messages = [...messages, { role: 'user', content: newMessage }];

		// Simulate assistant reply
		setTimeout(() => {
			messages = [...messages, { role: 'assistant', content: 'Here is your reply.' }];
		}, 1000);
	}

	function handleClearChat() {
		messages = [];
	}
</script>

<div
	id="chatbox"
	style="background: {darkTheme
		? 'linear-gradient(to bottom, #232120, #D4B886, #B4B4B4)'
		: 'linear-gradient(to bottom, #b15c11, #005a5a, #ffffff)'}"
>
	<div class="chat-header">
		Ted's assistant
		<ChatActionBar on:clearChat={handleClearChat} />
	</div>
	<div class="messages" bind:this={messagesContainer}>
		{#each messages as message, index}
			<Message {message} {index} />
		{/each}
	</div>
	<ChatInput {darkTheme} on:send={handleSend} />
</div>

<style>
	.chat-header {
		display: flex;
		align-items: center;
		background-color: #f7f7f7;
		border-bottom: 1px solid #ccc;
		padding: 10px 15px;
		font-size: 18px;
		font-weight: bold;
	}

	#chatbox {
		position: fixed;
		bottom: 20px;
		right: 20px;
		width: 375px;
		height: 500px;
		border: 1px solid #ccc;
		border-radius: 10px;
		display: flex;
		flex-direction: column;
		background-color: #f9f9f9;
		z-index: 100;
	}

	.messages {
		flex-grow: 1;
		display: flex;
		flex-direction: column;
		overflow-y: auto;
		padding: 10px;
	}
	#chatbox .messages {
		word-wrap: break-word;
	}
</style>
