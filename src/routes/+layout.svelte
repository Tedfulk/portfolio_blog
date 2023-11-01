<script lang="ts">
	import { mdiWeatherNight, mdiWeatherSunny } from '@mdi/js';
	import TopAppBar, { Row, Section, Title, AutoAdjust } from '@smui/top-app-bar';
	import IconButton, { Icon } from '@smui/icon-button';
	import Drawer, { AppContent, Content, Header, Subtitle } from '@smui/drawer';
	import Button, { Label } from '@smui/button';
	import List, { Item, Text } from '@smui/list';
	import ChatBubble from '../components/Chatbox/ChatBubble.svelte';
	import ChatBox from '../components/Chatbox/ChatBox.svelte';
	import { darkTheme } from '../store';

	let chatOpen: boolean = false;
	let open: boolean = false;
	let preventClose: boolean = false;
	let username: string = 'Ted Fulk';
	let active: string;
	let motto: string = 'Be Penomenal or Be Forgotten';

	let topAppBar: TopAppBar;

	function toggleTheme() {
		$darkTheme = !$darkTheme;
	}

	function setActive(value: string) {
		active = value;
	}

	function handleOpenChat() {
		chatOpen = true;
		preventClose = true;
		setTimeout(() => {
			preventClose = false;
		}, 300);
	}
</script>

<svelte:head>
	<link rel="stylesheet" href="/smui.css" />
</svelte:head>

<TopAppBar bind:this={topAppBar} variant="standard" style="background-color:black; z-index: 12;">
	<Row>
		<Section class="logo-section">
			<Button
				on:click={() => {
					open = !open;
				}}
			>
				<img src="img/teds_logo_crop.png" alt="logo" class="logo" />
			</Button>
			<div class="spacer" />
			<Button href="/">
				<img src="img/teds_name_logo_crop.png" alt="name_logo" class="name_logo" />
			</Button>
		</Section>
		<Section align="end" toolbar>
			<Button href="blog">
				<Label class="nav-blog" style="color: #f7cb39;">Blog</Label>
			</Button>
			<IconButton
				on:click={() => {
					toggleTheme();
				}}
				title={$darkTheme ? 'Lights on' : 'Lights off'}
			>
				<Icon tag="svg">
					<path
						fill="currentColor"
						d={$darkTheme ? mdiWeatherSunny : mdiWeatherNight}
						style="color: #f7cb39;"
					/>
				</Icon>
			</IconButton>
		</Section>
	</Row>
</TopAppBar>
<AutoAdjust {topAppBar}>
	<Drawer
		variant="modal"
		bind:open
		on:mouseleave={() => {
			open = !open;
		}}
	>
		<Header>
			<Title>{username}</Title>
			<Subtitle>{motto}</Subtitle>
		</Header>
		<Content>
			<List>
				<Item href="profile" on:click={() => setActive('profile')} activated={setActive('profile')}>
					<Text>Profile</Text>
				</Item>

				<Item href="blog" on:click={() => setActive('blog')} activated={setActive('blog')}>
					<Text>Blog</Text>
				</Item>
			</List>
		</Content>
	</Drawer>
	<AppContent class="app-content">
		<div class="main-content">
			<slot />
			{#if !chatOpen}
				<ChatBubble on:openChat={handleOpenChat} />
			{/if}
			{#if chatOpen}
				<ChatBox bind:chatOpen bind:preventClose />
			{/if}
		</div>
	</AppContent>
</AutoAdjust>

<style>
	.main-content {
		flex-grow: 1;
		padding: 0;
		margin: 0;
	}
	.logo {
		margin-left: 20%;
		height: inherit;
	}
	.spacer {
		width: 100%;
	}
	.name_logo {
		height: inherit;
	}
	@media (max-width: 768px) {
		.logo {
			margin-left: 15%;
		}
		.spacer {
			width: 90%;
		}
	}
	@media (max-width: 530px) {
		.logo {
			margin-left: 15%;
		}
		.spacer {
			width: 20%;
		}
	}
</style>
