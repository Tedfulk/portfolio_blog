<script>
	import Button from '@smui/button';
	import { Title } from '@smui/top-app-bar';
	import Content from '@smui/card';
	import Fab from '@smui/fab';
	import List, { Item, Text } from '@smui/list';
	import IconButton, { Icon } from '@smui/icon-button';

	import Project from '../components/projects/Project.svelte';
	import Banner from '../components/Banners/Banner.svelte';
	import Footer from '../components/Footers/Footer.svelte';
</script>

<Banner />
<svg
	preserveAspectRatio="none"
	xmlns="http://www.w3.org/2000/svg"
	viewBox="0 0 583 95"
	class="slant-banner"
>
	<polygon points="-30,95 583,95 583,80" class="banner-polygon" />
</svg>
<div class="card-display">
	<div class="card-container">
		<div class="card">
			<img
				src="img/_cc5051fd-1ed7-43ed-bb12-ba09e5d161f5.jpg"
				alt="adaptability"
				class="icon-card adaptability"
			/>
			<h3>Adaptability</h3>
			<p>
				Career changer, from the competitive real estate to the ever-evolving landscape of tech.
			</p>
		</div>
	</div>
	<div class="card-container middle-card">
		<div class="card">
			<img
				src="img/_9c48c740-0653-44f5-96ff-152e97532410.jpg"
				alt="future-focused"
				class="icon-card future-focused"
			/>
			<h3>Future-Focused</h3>
			<p>Excited about new AI technology.</p>
		</div>
	</div>
	<div class="card-container">
		<div class="card">
			<img
				src="img/_41e6eff8-29ed-4eed-9d99-aace26088407.jpg"
				alt="collaborative-spirit"
				class="icon-card collaborative-spirit"
			/>
			<h3>Collaborative Spirit</h3>
			<p>Diverse mind united for a common goal.</p>
		</div>
	</div>
</div>
<div class="profile-section">
	<div class="profile-text-container">
		<div class="icon-container">
			<img
				src="img/_cdeca481-1c1e-4a68-aa36-b98c0ed3339d.jpg"
				alt="headshot"
				class="icon-middle-section"
			/>
		</div>
		<h3>Who I am</h3>
		<p class="description" style="width: 80%;">
			In the exciting world of technology, I've discovered my real passion. My adventure started in
			the realm of real estate, where I honed my skills in the delicate art of negotiation, grasping
			the importance of understanding clients' needs, and learned the invaluable lesson of
			adaptability. These foundational skills laid the groundwork for my journey, and catapulted me
			into the ever-changing world of software engineering.
		</p>
		<p class="description" style="width: 80%;">
			My passion lies at the intersection of web development and artificial intelligence. My journey
			has equipped me with a strong skill set that encompasses Python, JavaScript, Django, React.js,
			Svelte, and more. I believe a craftsman is only as good as his tools and how he uses them.
			This toolkit has allowed me to contribute to a variety of projects, from crafting frameworks
			utilizing the Gmail API to creating conversational AI chatbots. Each project I've had the
			pleasure of working on serves as a testament to my unwavering commitment to excellence, my
			drive for innovation, and my dedication to ongoing learning.
		</p>
	</div>

	<div class="profile-image-container">
		<div class="image-card">
			<img
				alt="headshot"
				src="https://tedfulk.com/img/black%20and%20white%20head%20shot.jpeg"
				class="headshot"
			/>
			<div />
			<div>
				<svg
					preserveAspectRatio="none"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 583 95"
					class="slant-bar"
				>
					<polygon points="-30,95 583,95 583,80" />
				</svg>
			</div>
			<div class="middle-section-img-container">
				<h4 class="header">Greetings from the digital realm!</h4>
				<p class="description-img-card">
					I'm a software engineer passionate about web development, AI, and eager to collaborate in
					tech after transitioning from real estate.
				</p>
			</div>
		</div>
	</div>
</div>

<div class="carousel-section">
	<Project />
</div>
<div class="footer">
	<Footer />
</div>

<style>
	.card {
		background-color: #f8f8f8;
		position: relative;
		padding-left: 1.5rem;
		padding-right: 1.5rem;
		padding-bottom: 1rem;
		padding-top: 4.5rem;
		box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.25);
		border-radius: 10px;
		z-index: 11;
	}

	.icon-card {
		height: 4rem;
		width: 4rem;
		border-radius: 10px;
		position: absolute;
		top: 0.8rem;
		left: 50%;
		transform: translateX(-50%);
	}
	.icon-middle-section {
		height: 4rem;
		width: 4rem;
		border-radius: 50%;
	}

	.card-display {
		display: flex;
		justify-content: space-around;
		align-items: flex-end;
		margin-top: -6%;
		margin-left: 10%;
		margin-right: 10%;
	}

	.card-container {
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: center;
		text-align: center;
		width: 300px;
		height: 300px;
	}

	.middle-card {
		margin-bottom: 50px;
	}

	:global(body.dark) .card {
		box-shadow: 0px 8px 16px rgb(255, 168, 37), 8px 0px 16px #ffa825;
	}

	.card h3,
	.card p {
		color: black;
		padding-left: 10px;
		padding-right: 10px;
	}
	.profile-section {
		display: flex;
		justify-content: space-between;
		margin-top: 2rem;
	}

	.profile-text-container,
	.profile-image-container {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		width: 50%;
		margin-top: -2rem;
	}
	.header {
		display: flex;
		justify-content: center;
		align-items: center;
		/* color: white; */
		position: relative;
	}
	.description {
		font-size: 1rem;
		line-height: 1.5rem;
		margin-bottom: 1rem;
		color: #4b5563;
	}
	.description-img-card {
		line-height: 1.5rem;
		padding-top: 0;
		padding-left: 3rem;
		padding-right: 3rem;
		padding-bottom: 3rem;
		color: #4b5563;
	}

	.image-card {
		position: relative;
		border-radius: 10px;
		overflow: hidden;
		width: 70%;
		height: 97%;
	}

	.slant-bar {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 79.5%;
		fill: #ffa825;
	}
	.slant-banner {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 22.3%;
		fill: black;
		z-index: 10;
	}
	.middle-section-img-container {
		background-color: #ffa825;
		margin: -1.5rem;
	}

	.headshot {
		width: 100%;
	}
	:global(body) .slant-banner .banner-polygon {
		fill: white;
	}

	:global(body.dark) .slant-banner .banner-polygon {
		fill: black;
	}
	.carousel-section {
		margin-top: 4rem;
	}
</style>
