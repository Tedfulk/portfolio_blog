<script lang="ts">
	import { messagesList } from './../../store';
	import SvgIcon from '@jamescoyle/svelte-icon';
	import { mdiTrashCanOutline } from '@mdi/js';
	import DownloadAction from './DownloadAction.svelte';

	function clearChat() {
		messagesList.set([]);
	}
</script>

<div class="chat-action-bar">
	<button on:click={clearChat}>
		<span class="tooltip">Clear</span>
		<SvgIcon type="mdi" path={mdiTrashCanOutline} style="color: #1e2021;" />
	</button>
	<button>
		<span class="tooltip">Download</span>
		<DownloadAction />
	</button>
</div>

<style>
	.chat-action-bar {
		display: flex;
		align-items: center;
		margin-left: auto;
	}
	.chat-action-bar {
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
