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
			image: 'img/Dynamic-Blog-Cover.jpg',
			githubUrl: 'https://github.com/Tedfulk/google_suite',
			title: 'Helpful Google Automation - Python',
			longDescription:
				'Mastering Google Automation with Python. 5 use cases to use the Gmail API and Blogger API.<br/><br/>' +
				'1. Send emails <br />' +
				'2. List all emails <br />' +
				'3. Download one or many emails <br />' +
				'4. Create a blog post <br />' +
				'5. List all blog posts'
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
