<script lang="ts">
	import Message from '../Messages/Message.svelte';
	import ChatInput from './ChatInput.svelte';
	import { afterUpdate } from 'svelte';
	import ChatActionBar from './ChatActionBar.svelte';
	import { darkTheme, messagesList } from '../../store';
	import { onMount } from 'svelte';

	export let chatOpen: boolean;
	export let preventClose: boolean;

	let messagesContainer;

	afterUpdate(() => {
		if (messagesContainer) {
			messagesContainer.scrollTop = messagesContainer.scrollHeight;
		}
	});

	function handleNewMessage(event) {
		const userMessage = { role: 'user', content: event.detail.content };
		messagesList.update((msg) => [...msg, userMessage]);
		sendMessageToOpenAI(userMessage.content);
	}

	async function sendMessageToOpenAI(content: string) {
		try {
			const response = await fetch(
				'https://api.openai.com/v1/engines/gpt-3.5-turbo-instruct/completions',
				{
					method: 'POST',
					headers: {
						Authorization: `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`,
						'Content-Type': 'application/json'
					},
					body: JSON.stringify({
						prompt: content,
						max_tokens: 150
					})
				}
			);

			const data = await response.json();
			const aiMessage = {
				role: 'assistant',
				content: data.choices[0].text.trim()
			};
			messagesList.update((msg) => [...msg, aiMessage]);
		} catch (error) {
			console.error('Error communicating with OpenAI:', error);
		}
	}
	function handleClearChat() {
		messagesList.set([]);
	}

	onMount(() => {
		function handleClickOutside(event) {
			const chatBoxEl = document.getElementById('chatbox');
			if (chatBoxEl && !chatBoxEl.contains(event.target) && chatOpen && !preventClose) {
				chatOpen = false;
			}
		}

		window.addEventListener('click', handleClickOutside);

		return () => {
			window.removeEventListener('click', handleClickOutside);
		};
	});
</script>

<div
	id="chatbox"
	style="background: {$darkTheme
		? 'linear-gradient(to bottom, #232120, #D4B886, #B4B4B4)'
		: 'linear-gradient(to bottom, #b15c11, #005a5a, #ffffff)'}"
>
	<div class="chat-header">
		Ted's assistant
		<ChatActionBar on:clearChat={handleClearChat} />
	</div>
	<div class="messages" bind:this={messagesContainer}>
		{#each $messagesList as message, index}
			<Message {message} {index} />
		{/each}
	</div>
	<ChatInput on:messageSend={handleNewMessage} />
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
