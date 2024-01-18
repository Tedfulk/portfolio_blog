<script>
	import { onMount } from 'svelte';
	import Card from '../Cards/Card.svelte';
	import CardDetail from '../Cards/CardDetail.svelte';

	export let items;
	let currentItemIndex = 0;

	onMount(() => {
		const intervalId = setInterval(() => {
			currentItemIndex = (currentItemIndex + 1) % items.length;
		}, 11000);

		return () => clearInterval(intervalId);
	});
</script>

<div class="carousel">
	{#each [items[currentItemIndex]] as { image, githubUrl, title, longDescription } (image)}
		<div class="card-wrapper">
			<div class="card-image">
				<Card {image} {githubUrl} />
			</div>
			<div class="card-text">
				<CardDetail {title} {longDescription} />
			</div>
		</div>
	{/each}
</div>

<style>
	@keyframes slide {
		0% {
			transform: translateX(100%);
			opacity: 0;
		}
		10%,
		90% {
			transform: translateX(0);
			opacity: 1;
		}
		100% {
			transform: translateX(-100%);
			opacity: 0;
		}
	}

	.carousel {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 100%;
		flex-wrap: wrap;
	}

	.card-wrapper {
		display: flex;
		margin-bottom: 34%;
		gap: 1rem;
		animation: slide 11s ease-in-out infinite;
	}
	@media (max-width: 500px) {
		.card-wrapper {
			flex-direction: column;
			align-items: center;
			width: 100%;
			margin-bottom: 26%;
		}
		.card-image {
			margin-bottom: 250px;
		}
	}
</style>
