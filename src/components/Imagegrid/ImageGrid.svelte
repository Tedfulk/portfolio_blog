<script lang="ts">
	import BlogCard from './../Cards/BlogCard.svelte';

	let itemsPerPage = 3;
	let currentPage = 1;
	let pagesPerGroup = 10;
	let pageGroup = 1;

	let items: { image: string; blogLink: string; title: string; subtitle: string }[] = [
		{
			image: 'img/robot-reading-emails.jpg',
			blogLink: 'https://tedfulk.blogspot.com/2023/10/mastering-gmail-automation-with-python.html',
			title: 'Mastering Gmail Automation with Python',
			subtitle: ''
		}
		// {
		// 	image: 'img/_1968ded2-a645-4793-bcd1-cf7cce88a184.jpg',
		// 	blogLink: 'https://tedfulk.github.io/tenzies/',
		// 	title: 'Holding Tech Orb',
		// 	subtitle: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. '
		// },
	];

	let totalPages = Math.ceil(items.length / itemsPerPage);
	let totalGroups = Math.ceil(totalPages / pagesPerGroup);

	function setPage(page: number) {
		currentPage = page;
	}

	function setGroup(group: number) {
		pageGroup = group;
		currentPage = (pageGroup - 1) * pagesPerGroup + 1;
	}
</script>

<div class="grid">
	{#each items.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage) as { image, blogLink, title, subtitle } (title)}
		<BlogCard {blogLink} {image} {title} {subtitle} />
	{/each}
</div>

<div class="pagination">
	<button on:click={() => setPage(1)} disabled={currentPage === 1}>First</button>
	<button on:click={() => setPage(currentPage - 1)} disabled={currentPage === 1}>Previous</button>
	{#if pageGroup > 1}
		<button on:click={() => setGroup(pageGroup - 1)}>...</button>
	{/if}
	{#each Array.from({ length: Math.min(pagesPerGroup, totalPages - (pageGroup - 1) * pagesPerGroup) }, (_, i) => (pageGroup - 1) * pagesPerGroup + i + 1) as page}
		<button on:click={() => setPage(page)} class:selected={page === currentPage}>{page}</button>
	{/each}
	{#if pageGroup < totalGroups}
		<button on:click={() => setGroup(pageGroup + 1)}>...</button>
	{/if}
	<button on:click={() => setPage(currentPage + 1)} disabled={currentPage === totalPages}
		>Next</button
	>
	<button on:click={() => setPage(totalPages)} disabled={currentPage === totalPages}>Last</button>
</div>

<style>
	.grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
		grid-gap: 1rem;
		padding-left: 9rem;
	}

	.pagination {
		display: flex;
		justify-content: center;
		padding-top: 4.2rem;
		overflow: hidden;
	}

	.pagination button {
		margin: 0 0.5rem;
		padding: 0.5rem 1rem;
		border: 1px solid #007bff;
		border-radius: 5px;
		background-color: transparent;
		color: #007bff;
	}

	.pagination .selected {
		background-color: #007bff;
		color: #fff;
	}
</style>
