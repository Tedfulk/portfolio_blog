<script lang="ts">
	import { mdiDownloadBoxOutline } from '@mdi/js';
	import SvgIcon from '@jamescoyle/svelte-icon';
	import Dialog, { Title, Content, Actions, InitialFocus } from '@smui/dialog';
	import Button, { Label } from '@smui/button';
	import List, { Item, Graphic, Text } from '@smui/list';
	import Radio from '@smui/radio';

	export let messages: { role: string; content: string }[] = [];
	let open = false;
	let selection = 'TXT';
	let selected = 'select something.';

	function closeHandler(e: CustomEvent<{ action: string }>) {
		if (e.detail.action === 'accept') {
			selected = selection;
		}
		selection = 'TXT';
	}

	function downloadMessagesTXT() {
		let formattedMessages = '';
		let userMessage = '';

		messages.forEach((message) => {
			let content = message.content.trim();

			if (message.role === 'user') {
				if (userMessage) {
					formattedMessages += `${userMessage}\n`;
				}
				userMessage = `user: ${content}`;
			} else if (message.role === 'assistant') {
				formattedMessages += userMessage ? `${userMessage}\n` : '';
				formattedMessages += `assistant: ${content}\n`;
				userMessage = '';
			}
		});

		if (userMessage) {
			formattedMessages += `${userMessage}\n`;
		}

		const blob = new Blob([formattedMessages], { type: 'text/plain' });
		const url = URL.createObjectURL(blob);
		const a = document.createElement('a');
		a.href = url;
		a.download = 'messages.txt';
		a.click();
		URL.revokeObjectURL(url);
	}

	function downloadMessagesJSON() {
		let formattedMessages = [];
		let userMessage = null;

		messages.forEach((message) => {
			let content = message.content.trim();

			if (message.role === 'user') {
				if (userMessage) {
					formattedMessages.push({ user: userMessage });
				}
				userMessage = content;
			} else if (message.role === 'assistant') {
				if (userMessage) {
					formattedMessages.push({ user: userMessage, assistant: content });
					userMessage = null;
				} else {
					formattedMessages.push({ assistant: content });
				}
			}
		});

		if (userMessage) {
			formattedMessages.push({ user: userMessage });
		}

		const jsonMessages = JSON.stringify(formattedMessages, null, 2);
		const blob = new Blob([jsonMessages], { type: 'application/json' });
		const url = URL.createObjectURL(blob);
		const a = document.createElement('a');
		a.href = url;
		a.download = 'messages.json';
		a.click();
		URL.revokeObjectURL(url);
	}

	const event = new CustomEvent<{ action: string }>('my-event', {
		detail: { action: 'accept' }
	});
</script>

<Dialog
	bind:open
	selection
	aria-labelledby="list-selection-title"
	aria-describedby="list-selection-content"
	on:SMUIDialog:closed={closeHandler}
>
	<Title id="list-selection-title">Download as:</Title>
	<Content id="list-selection-content">
		<List radioList>
			<Item use={[InitialFocus]}>
				<Graphic>
					<Radio bind:group={selection} value="TXT" />
				</Graphic>
				<Text>TXT</Text>
			</Item>
			<Item>
				<Graphic>
					<Radio bind:group={selection} value="JSON" />
				</Graphic>
				<Text>JSON</Text>
			</Item>
		</List>
	</Content>
	<Actions>
		<Button variant="outlined">
			<Label style="color: #1e2021;">Cancel</Label>
		</Button>
		<Button
			variant="outlined"
			color="primary"
			action="accept"
			on:click={() => {
				closeHandler(event);
				if (selected === 'TXT') {
					downloadMessagesTXT();
				} else if (selected === 'JSON') {
					downloadMessagesJSON();
				}
			}}
		>
			<Label style="color: #1e2021;">Download</Label>
		</Button>
	</Actions>
</Dialog>
<Button on:click={() => (open = !open)}>
	<SvgIcon type="mdi" path={mdiDownloadBoxOutline} style="color: #1e2021;" />
</Button>

<style>
</style>
