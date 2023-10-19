<script lang="ts">
	import BlogCard from './../Cards/BlogCard.svelte';

	let itemsPerPage = 3; // Number of items you want to show per page
	let currentPage = 1; // Start on page 1
	let pagesPerGroup = 10;
	let pageGroup = 1; // Start with the first group of

	let items: { image: string; blogLink: string; title: string; subtitle: string }[] = [
		{
			image: 'img/_66059e8a-dc3a-4b8c-8871-1895a7bb882e.jpg',
			blogLink: 'https://tedfulk.blogspot.com/2023/10/mastering-gmail-automation-with-python.html',
			title: 'Mastering Gmail Automation with Python',
			subtitle: ''
		},
		{
			image: 'img/_1968ded2-a645-4793-bcd1-cf7cce88a184.jpg',
			blogLink: 'https://tedfulk.github.io/tenzies/',
			title: 'Holding Tech Orb',
			subtitle: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. '
		},
		{
			image: 'img/blw_ted_sitting_on_bench_copy2.png',
			blogLink: 'https://tedfulk.github.io/tenzies/',
			title: 'Juniper',
			subtitle: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.'
		},
		{
			image: 'img/city-chat-bubbles.jpg',
			blogLink: 'https://tedfulk.github.io/tenzies/',
			title: 'toilet',
			subtitle: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.'
		},
		{
			image: 'img/blw_ted_sitting_on_bench_copy2.png',
			blogLink: 'https://tedfulk.github.io/tenzies/',
			title: 'yup',
			subtitle: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.'
		},
		{
			image: 'img/city-chat-bubbles.jpg',
			blogLink: 'https://tedfulk.github.io/tenzies/',
			title: 'crowley',
			subtitle: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.'
		},
		{
			image: 'img/city-chat-bubbles.jpg',
			blogLink: 'https://tedfulk.github.io/tenzies/',
			title: 'City Chat ',
			subtitle: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.'
		},
		{
			image: 'img/blw_ted_sitting_on_bench_copy2.png',
			blogLink: 'https://tedfulk.github.io/tenzies/',
			title: 'City C',
			subtitle: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.'
		},
		{
			image: 'img/city-chat-bubbles.jpg',
			blogLink: 'https://tedfulk.github.io/tenzies/',
			title: 'City Chat Bubb',
			subtitle: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.'
		},
		{
			image: 'img/_66059e8a-dc3a-4b8c-8871-1895a7bb882e.jpg',
			blogLink: 'https://tedfulk.blogspot.com/2023/10/mastering-gmail-automation-with-python.html',
			title: 'Mastering Gmail Automation with svelte',
			subtitle: ''
		},
		{
			image: 'img/_1968ded2-a645-4793-bcd1-cf7cce88a184.jpg',
			blogLink: 'https://tedfulk.github.io/tenzies/',
			title: 'Holding Tech you hold the tech orb',
			subtitle: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. '
		},
		{
			image: 'img/blw_ted_sitting_on_bench_copy2.png',
			blogLink: 'https://tedfulk.github.io/tenzies/',
			title: 'me',
			subtitle: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.'
		},
		{
			image: 'img/city-chat-bubbles.jpg',
			blogLink: 'https://tedfulk.github.io/tenzies/',
			title: 'helicopter',
			subtitle: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.'
		},
		{
			image: 'img/blw_ted_sitting_on_bench_copy2.png',
			blogLink: 'https://tedfulk.github.io/tenzies/',
			title: 'nugget',
			subtitle: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.'
		},
		{
			image: 'img/city-chat-bubbles.jpg',
			blogLink: 'https://tedfulk.github.io/tenzies/',
			title: 'bean',
			subtitle: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.'
		},
		{
			image: 'img/city-chat-bubbles.jpg',
			blogLink: 'https://tedfulk.github.io/tenzies/',
			title: 'City goober ',
			subtitle: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.'
		},
		{
			image: 'img/blw_ted_sitting_on_bench_copy2.png',
			blogLink: 'https://tedfulk.github.io/tenzies/',
			title: 'nike',
			subtitle: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.'
		},
		{
			image: 'img/city-chat-bubbles.jpg',
			blogLink: 'https://tedfulk.github.io/tenzies/',
			title: ' please Chat Bubb',
			subtitle: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.'
		},
		{
			image: 'img/_66059e8a-dc3a-4b8c-8871-1895a7bb882e.jpg',
			blogLink: 'https://tedfulk.blogspot.com/2023/10/mastering-gmail-automation-with-python.html',
			title: 'Mastering Gmail  with Python',
			subtitle: ''
		},
		{
			image: 'img/_1968ded2-a645-4793-bcd1-cf7cce88a184.jpg',
			blogLink: 'https://tedfulk.github.io/tenzies/',
			title: ' Tech Orb',
			subtitle: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. '
		},
		{
			image: 'img/blw_ted_sitting_on_bench_copy2.png',
			blogLink: 'https://tedfulk.github.io/tenzies/',
			title: 'photo',
			subtitle: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.'
		},
		{
			image: 'img/city-chat-bubbles.jpg',
			blogLink: 'https://tedfulk.github.io/tenzies/',
			title: 'cannon',
			subtitle: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.'
		},
		{
			image: 'img/blw_ted_sitting_on_bench_copy2.png',
			blogLink: 'https://tedfulk.github.io/tenzies/',
			title: 'crayon',
			subtitle: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.'
		},
		{
			image: 'img/city-chat-bubbles.jpg',
			blogLink: 'https://tedfulk.github.io/tenzies/',
			title: 'brown',
			subtitle: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.'
		},
		{
			image: 'img/city-chat-bubbles.jpg',
			blogLink: 'https://tedfulk.github.io/tenzies/',
			title: 'yellow Chat ',
			subtitle: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.'
		},
		{
			image: 'img/blw_ted_sitting_on_bench_copy2.png',
			blogLink: 'https://tedfulk.github.io/tenzies/',
			title: 'high C',
			subtitle: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.'
		},
		{
			image: 'img/city-chat-bubbles.jpg',
			blogLink: 'https://tedfulk.github.io/tenzies/',
			title: ' Chat Bubb',
			subtitle: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.'
		},
		{
			image: 'img/_66059e8a-dc3a-4b8c-8871-1895a7bb882e.jpg',
			blogLink: 'https://tedfulk.blogspot.com/2023/10/mastering-gmail-automation-with-python.html',
			title: ' Gmail Automation with svelte',
			subtitle: ''
		},
		{
			image: 'img/_1968ded2-a645-4793-bcd1-cf7cce88a184.jpg',
			blogLink: 'https://tedfulk.github.io/tenzies/',
			title: 'Holding  you hold the tech orb',
			subtitle: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. '
		},
		{
			image: 'img/blw_ted_sitting_on_bench_copy2.png',
			blogLink: 'https://tedfulk.github.io/tenzies/',
			title: 'apple',
			subtitle: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.'
		},
		{
			image: 'img/city-chat-bubbles.jpg',
			blogLink: 'https://tedfulk.github.io/tenzies/',
			title: 'door',
			subtitle: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.'
		},
		{
			image: 'img/blw_ted_sitting_on_bench_copy2.png',
			blogLink: 'https://tedfulk.github.io/tenzies/',
			title: 'jeep',
			subtitle: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.'
		},
		{
			image: 'img/city-chat-bubbles.jpg',
			blogLink: 'https://tedfulk.github.io/tenzies/',
			title: 'car',
			subtitle: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.'
		},
		{
			image: 'img/city-chat-bubbles.jpg',
			blogLink: 'https://tedfulk.github.io/tenzies/',
			title: ' goober ',
			subtitle: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.'
		},
		{
			image: 'img/blw_ted_sitting_on_bench_copy2.png',
			blogLink: 'https://tedfulk.github.io/tenzies/',
			title: 'blanket',
			subtitle: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.'
		},
		{
			image: 'img/city-chat-bubbles.jpg',
			blogLink: 'https://tedfulk.github.io/tenzies/',
			title: ' bed',
			subtitle: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.'
		}
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
		padding: 1rem;
	}

	.pagination {
		display: flex;
		justify-content: center;
		align-items: center;
		margin-top: 2rem;
		margin-bottom: 2rem;
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
