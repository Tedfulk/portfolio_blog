<script lang="ts">
	export let message = { role: '', content: '' };
	export let index = 0;
	let color;

	// Assuming a maximum of 100 messages.
	let maxMessages = 100;

	let lightness = 90 - (index / maxMessages) * 30; // This will give a range from 50 (darkest) to 80 (lightest)

	if (message.role === 'user') {
		color = `hsl(120, 60%, ${lightness}%)`; // Slightly less saturated Green hue for user
	} else {
		color = `hsl(210, 60%, ${lightness}%)`; // Slightly less saturated Blue hue for assistant
	}
</script>

<div class={message.role} style="background-color: {color}">
	{message.content}
</div>

<style>
	.user,
	.assistant {
		border-radius: 10px;
		padding: 10px;
		margin: 5px;
		color: black;
		transition: background-color 0.3s ease;
		word-wrap: break-word;
		overflow-wrap: break-word;
		max-width: 90%;
	}
	.user {
		align-self: flex-end;
	}
	.assistant {
		align-self: flex-start;
	}
</style>
