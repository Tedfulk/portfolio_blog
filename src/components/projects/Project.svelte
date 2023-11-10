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
			image: 'img/blw_ted_sitting_on_bench_copy2.png',
			githubUrl: 'https://github.com/Tedfulk/tenzies',
			title: 'City Chat Bubbles',
			longDescription:
				'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque, odio perspiciatis voluptas velit nihil nostrum quam ea molestias aspernatur doloremque maxime non eveniet? Doloremque, quibusdam. Illo similique ducimus sequi distinctio. <br><br> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque, odio perspiciatis voluptas velit nihil nostrum quam ea molestias aspernatur doloremque maxime non eveniet? Doloremque, quibusdam. Illo similique ducimus sequi distinctio. <br><br> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque, odio perspiciatis voluptas velit nihil nostrum quam ea molestias aspernatur doloremque maxime non eveniet? Doloremque, quibusdam. Illo similique ducimus sequi distinctio.'
		},
		{
			image: 'img/_1968ded2-a645-4793-bcd1-cf7cce88a184.jpg',
			githubUrl: 'https://github.com/Tedfulk/tenzies',
			title: 'Holding Tech Orb',
			longDescription:
				'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque, odio perspiciatis voluptas velit nihil nostrum quam ea molestias aspernatur doloremque maxime non eveniet? Doloremque, quibusdam. Illo similique ducimus sequi distinctio. <br><br> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque, odio perspiciatis voluptas velit nihil nostrum quam ea molestias aspernatur doloremque maxime non eveniet? Doloremque, quibusdam. Illo similique ducimus sequi distinctio. <br><br> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque, odio perspiciatis voluptas velit nihil nostrum quam ea molestias aspernatur doloremque maxime non eveniet? Doloremque, quibusdam. Illo similique ducimus sequi distinctio.'
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
		overflow: hidden;
	}
</style>
