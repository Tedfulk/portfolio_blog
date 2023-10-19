<script lang="ts">
	export let title: string;
	export let subtitle: string;
	export let image: string;
	export let blogLink: string;

	function navigateToGithub() {
		window.open(blogLink);
	}

	function handleMouseOver() {
		document.body.style.cursor = 'pointer';
	}

	function handleMouseOut() {
		document.body.style.cursor = 'default';
	}

	function handleKeyDown(event: KeyboardEvent) {
		if (event.key === 'Enter' || event.key === ' ') {
			navigateToGithub();
		}
	}
</script>

<div
	class="card-container"
	on:click={navigateToGithub}
	on:mouseover={handleMouseOver}
	on:mouseout={handleMouseOut}
	on:keydown={handleKeyDown}
	on:focus={handleMouseOver}
	on:blur={handleMouseOut}
	tabindex="0"
	role="button"
	aria-label="Navigate to Github"
>
	<div class="card-media-16x9" style="background-image: url({image});" />
	<h2 class="title" style="color: #4b5563; display:flex; align-items:flex-end; width: 100%;">
		{title}
	</h2>
	<div class="subtitle">
		{subtitle}
	</div>
</div>

<style>
	.card-container {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
		width: 350px;
		padding: 2rem;
		border-radius: 10px;
		background-color: #fff;
		box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
		transition: all 0.3s ease-in-out;
	}

	.card-container:hover {
		transform: scale(1.05);
		cursor: pointer;
	}

	.card-media-16x9 {
		position: relative;
		width: 350px;
		height: auto;
		padding-bottom: 56.25%;
		background-size: cover;
		background-repeat: no-repeat;
		background-position: center;
	}

	.card-media-16x9::before {
		content: '';
		display: block;
		padding-top: 56.25%;
	}

	.card-media-16x9::after {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.2);
	}

	.card-media-16x9 > * {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
	}
</style>
