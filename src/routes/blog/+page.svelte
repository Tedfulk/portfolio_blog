<script>
	import ImageGrid from '../../components/Imagegrid/ImageGrid.svelte';
	import { darkTheme } from '../../store';
</script>

<div
	class="blog-container {$darkTheme ? 'light-background light-text' : 'dark-background dark-text'}"
>
	<h1 class="title" style="padding-bottom: 2rem;">Bot Your Back Blog</h1>
	<ImageGrid />
</div>

<style>
	.blog-container {
		padding-top: 3rem;
		padding-bottom: 3rem;
	}
	.title {
		text-align: center;
	}
	.dark-background {
		background-color: #000;
	}

	.light-background {
		background-color: whitesmoke;
	}
	.dark-text {
		color: #000;
	}

	.light-text {
		color: whitesmoke;
	}
</style>
