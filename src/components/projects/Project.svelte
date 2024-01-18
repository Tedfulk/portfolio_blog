<script lang="ts">
	import Carousel from '../Carousels/Carousel.svelte';

	interface ProjectItem {
		image: string;
		githubUrl: string;
		title: string;
		longDescription: string;
	}

	const items: ProjectItem[] = [
		{
			image: 'img/gmail-clutter.jpeg',
			githubUrl: 'https://github.com/Tedfulk/gmail',
			title: 'Helpful Gmail Automation - Python',
			longDescription:
				'Mastering Gmail Automation with Python. 5 easy and simple ways to use the Gmail API to automate your inbox.<br/><br/>' +
				'1. Send emails <br />' +
				'2. List all emails <br />' +
				'3. Download one or many emails <br />' +
				'4. Read and write permissions with labels <br />' +
				'5. Read and write permissions filtering emails'
		}
	];
</script>

<div class="project-container" style="background-image: url('img/circut-board-stock-img.jpg');">
	<Carousel {items} />
</div>

<style>
	.project-container {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 85vh;
		width: 100%;
		background-size: contain;
		background-position: center;
		flex-wrap: wrap;
	}
	@media (max-width: 500px) {
		.project-container {
			height: 150vh;
		}
	}
</style>
