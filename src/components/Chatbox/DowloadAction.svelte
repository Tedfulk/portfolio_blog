<script lang="ts">
	import Dialog, { Title, Content, Actions, InitialFocus } from '@smui/dialog';
	import Button, { Label } from '@smui/button';
	import List, { Item, Graphic, Text } from '@smui/list';
	import Radio from '@smui/radio';

	let open = false;
	let selection = 'TXT';
	let selected = 'Nothing yet.';

	function closeHandler(e: CustomEvent<{ action: string }>) {
		if (e.detail.action === 'accept') {
			selected = selection;
		}
		selection = 'TXT';
	}
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
		<Button>
			<Label>Cancel</Label>
		</Button>
		<Button action="accept">
			<Label>Download</Label>
		</Button>
	</Actions>
</Dialog>

<Button
	on:click={() => {
		open = true;
		setTimeout(() => document.activeElement.blur(), 0);
	}}
>
	<Label style="font-size: 20px;">📂</Label>
</Button>

<style>
</style>
