<script lang="ts">
	import Card, { Content } from '@smui/card';
	export let longDescription: string;
	export let title: string;
</script>

<div class="card-display">
	<div class="card-container" style="height: 10rem; width: 25rem">
		<Card style="margin: 2rem">
			<Content style="color: #888; text-align: center;">{title}</Content>
			<Content style="color: #888; ">{@html longDescription}</Content>
		</Card>
	</div>
</div>

<style>
</style>
