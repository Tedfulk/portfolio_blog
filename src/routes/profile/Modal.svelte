<script lang="ts">
	import { fly } from 'svelte/transition';
	export let showModal: boolean = false;

	function handleBackgroundClick(event: MouseEvent) {
		if ((event.target as HTMLElement).classList.contains('modal')) {
			showModal = false;
		}
	}
</script>

{#if showModal}
	<div
		class="modal"
		tabindex="-1"
		aria-label="Modal"
		on:keydown={(e) => e.key === 'Escape' && (showModal = false)}
		on:click={handleBackgroundClick}
	>
		<div class="modal-content" transition:fly={{ y: 300, duration: 1000 }}>
			<button class="close-button-top" on:click={() => (showModal = false)}>✕</button>
			<div class="about-me">
				<h2>About Me</h2>
				<div class="skills">
					<strong>Skills:</strong>
						<ul>
							<li>Python, Django, React.js, Svelte, Git, AWS, Heroku, fastAPI, PostgreSQL</li>
						</ul>
					</div>
					<div class="projects">
						<strong>Projects:</strong>
						<ul>
							<li>Flashcards: A Django app for subject comprehension testing.</li>
							<li>Gym-Dot: A React.js project to learn front-end development.</li>
						</ul>
					</div>
					<div class="profile">
						<strong>Profile:</strong>
						<ul>
							<li>
								Growth-oriented Software Engineer with robust problem-solving skills,<br /> adept in
								full-stack development, <br /> and a proven ability to adapt and excel in various industries.
							</li>
						</ul>
					</div>
					<div class="career-highlights">
						<strong>Career Highlights:</strong>
						<ul>
							<li>
								Qlair Internship: Implemented back-end solutions, API development, and automated
								testing.
							</li>
							<li>
								Momentum Learning: Developed multiple web applications; proficient in Agile practices.
							</li>
							<li>Fathom Realty: Excelled in real estate sales and market analysis.</li>
						</ul>
					</div>
					<div class="education">
						<strong>Education:</strong>
						<ul>
							<li>Full Stack Engineering at Momentum Learning.</li>
							<li>BS in Movement and Sport Science from Purdue University.</li>
						</ul>
					</div>
					<button class="close-button" on:click={() => (showModal = !showModal)}> Close </button>
				</div>
			</div>
		</div>
{/if}

<style>
	.modal {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		background: rgba(0, 0, 0, 0.35);
	}

	.modal-content {
		position: relative;
		background: rgba(255, 255, 255, 0.95);
		color: black;
		padding: 1rem 3rem 1rem 1rem;
		border-radius: 10px;
		text-align: center;
		opacity: 0.9;
		overflow: auto;
		max-width: 90%;
		max-height: 90%;
	}

	@media (orientation: landscape) {
		.modal-content {
			width: 50%;
			height: 60%;
		}
	}
	@media (max-width: 500px) {
		.modal-content {
			width: 90%;
			height: 80%;
		}
		.about-me {
			width: 100%;
			font-size: 0.8rem;
		}
	}
	.close-button {
		margin-top: 0.5rem;
		padding: 0.5rem 2rem;
		font-size: 1em;
		border: 3px solid #007bff;
		border-radius: 15px;
		background-color: transparent;
		color: #007bff;
		cursor: pointer;
		transition: background-color 0.3s, color 0.3s;
	}

	.close-button:hover {
		background-color: #007bff;
		color: #fff;
	}

	.close-button-top {
		position: absolute;
		top: 0.5rem;
		right: 0.5rem;
		background: transparent;
		border: none;
		font-size: 1.5rem;
		cursor: pointer;
		color: #333;
	}

	.about-me {
		background-color: rgba(255, 255, 255, 0.95);
		color: #333;
		font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
		border-radius: 8px;
		padding: 1rem;
		box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
		width: 100%;
		max-width: 700px;
		margin: auto;
	}

	.about-me h2 {
		text-align: center;
		font-size: 1.5rem;
		font-weight: bold;
		margin-bottom: 1rem;
	}

	.about-me ul {
		padding: 0;
		margin: 0;
		list-style-type: none;
	}

	.about-me ul li {
		margin-bottom: 0.5rem;
	}
	strong {
		font-weight: bold;
		line-height: 2;
	}
</style>
