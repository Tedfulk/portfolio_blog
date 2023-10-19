<script lang="ts">
	import { mdiWeatherNight, mdiWeatherSunny, mdiAccountCircle } from '@mdi/js';
	import TopAppBar, { Row, Section, Title, AutoAdjust } from '@smui/top-app-bar';
	import IconButton, { Icon } from '@smui/icon-button';
	import Drawer, { AppContent, Content, Header, Subtitle } from '@smui/drawer';
	import Button, { Label } from '@smui/button';
	import List, { Item, Text } from '@smui/list';
	import { onMount } from 'svelte';

	let open: boolean = false;
	let active: string;
	let username: string = 'Ted Fulk';
	let motto: string = 'Be Penomenal or Be Forgotten';

	let topAppBar: TopAppBar;
	let darkTheme: boolean | undefined = undefined;

	function setActive(value: string) {
		active = value;
	}

	onMount(() => {
		darkTheme = window.matchMedia('(prefers-color-scheme: dark)').matches;
	});

	// Reactive statement to update class when darkTheme changes
	$: {
		if (typeof darkTheme !== 'undefined') {
			document.body.classList.toggle('dark', darkTheme);
		}
	}
</script>

<svelte:head>
	<!-- SMUI Styles -->
	{#if $darkTheme === 'undefined'}
		<link rel="stylesheet" href="/smui.css" media="(prefers-color-scheme: light)" />
		<link rel="stylesheet" href="/smui-dark.css" media="screen and (prefers-color-scheme: dark)" />
	{:else if darkTheme}
		<link rel="stylesheet" href="/smui.css" />
		<link rel="stylesheet" href="/smui-dark.css" media="screen" />
	{:else}
		<link rel="stylesheet" href="/smui.css" />
	{/if}
</svelte:head>

<TopAppBar bind:this={topAppBar} variant="standard" style="background-color:black; z-index: 12;">
	<Row>
		<Section class="logo-section">
			<Button on:click={() => (open = !open)}>
				<img src="img/teds_logo_crop.png" alt="logo" class="logo" />
			</Button>
			<div class="spacer" />
			<Button href="/">
				<img src="img/teds_name_logo_crop.png" alt="name_logo" class="name_logo" />
			</Button>
		</Section>
		<Section align="end" toolbar>
			<Button href="blog"><span class="nav-blog">Blog</span></Button>
			<IconButton
				on:click={() => {
					darkTheme = !darkTheme;
				}}
				title={darkTheme ? 'Lights on' : 'Lights off'}
			>
				<Icon tag="svg">
					<path
						fill="currentColor"
						d={darkTheme ? mdiWeatherSunny : mdiWeatherNight}
						style="color: #f7cb39;"
					/>
				</Icon>
			</IconButton>
		</Section>
	</Row>
</TopAppBar>
<AutoAdjust {topAppBar}>
	<Drawer variant="modal" bind:open>
		<Header>
			<Title>{username}</Title>
			<Subtitle>{motto}</Subtitle>
		</Header>
		<Content>
			<List>
				<Item href="profile" on:click={() => setActive('profile')} activated={active === 'profile'}>
					<Text>Profile</Text>
				</Item>

				<Item href="blog" on:click={() => setActive('blog')} activated={active === 'blog'}>
					<Text>Blog</Text>
				</Item>
			</List>
		</Content>
	</Drawer>
	<AppContent class="app-content">
		<div class="main-content">
			<slot />
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
	.nav-blog {
		background: linear-gradient(to right, #f8dd7c, #f9b753);
		-webkit-background-clip: text;
		-background-clip: text;
		color: transparent;
		transition: background 0.5s ease-in-out;
		display: inline;
	}
</style>
