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
			image: '/img/gmail-clutter.jpeg',
			githubUrl: 'https://github.com/Tedfulk/google_suite',
			title: 'Helpful Google Automation - Python',
			longDescription:
				'Mastering Google Automation with Python. 5 use cases to use the Gmail API and Blogger API.<br/><br/>' +
				'1. Send emails <br />' +
				'2. List all emails <br />' +
				'3. Download one or many emails <br />' +
				'4. Create a blog post <br />' +
				'5. List all blog posts'
		},
		{
			image: '/img/background-img-logos.jpg',
			githubUrl: 'https://github.com/Tedfulk/do_you_even_diff_bro',
			title: 'Brogrammer - Python',
			longDescription:
				'This project is a command-line tool named Brogrammer, an AI Peer Review Bro. It uses the GPT model to review your code and provide feedback. The tool is designed to be flexible, allowing you to specify the level of feedback you want, the files you want to include or exclude, and even the branch to compare the git diff against.'
		},
		{
			image: '/img/robot-reading-emails.jpg',
			githubUrl: 'https://github.com/Tedfulk/tedfulk_kb_pycrawler',
			title: 'Knowledgebase Web Scraper - Python',
			longDescription:
				'This script utilizes the Playwright library for scraping websites and generating a knowledgebase. It is capable of outputting the scraped data in multiple formats, including JSON, plain text, and PDF.'
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
