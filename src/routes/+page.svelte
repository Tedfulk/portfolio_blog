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
	import Particles from 'svelte-particles';
	import { loadFull } from 'tsparticles';

	// let particlesConfig = {
	// 	number: {
	// 		value: 80,
	// 		density: {
	// 			enable: true,
	// 			value_area: 800
	// 		}
	// 	},
	// 	color: {
	// 		value: '#2fe816'
	// 	},
	// 	shape: {
	// 		type: 'polygon',
	// 		stroke: {
	// 			width: 0,
	// 			color: '#000000'
	// 		},
	// 		polygon: {
	// 			nb_sides: 7
	// 		},
	// 		image: {
	// 			src: 'img/github.svg',
	// 			width: 100,
	// 			height: 100
	// 		}
	// 	},
	// 	opacity: {
	// 		value: 0.5,
	// 		random: false,
	// 		anim: {
	// 			enable: false,
	// 			speed: 1,
	// 			opacity_min: 0.1,
	// 			sync: false
	// 		}
	// 	},
	// 	size: {
	// 		value: 15.783201938177186,
	// 		random: true,
	// 		anim: {
	// 			enable: true,
	// 			speed: 4.794898228285104,
	// 			size_min: 0.1,
	// 			sync: false
	// 		}
	// 	},
	// 	line_linked: {
	// 		enable: true,
	// 		distance: 142.0488174435947,
	// 		color: '#15e5f2',
	// 		opacity: 0.5366288658980243,
	// 		width: 1.5783201938177185
	// 	},
	// 	move: {
	// 		enable: true,
	// 		speed: 6,
	// 		direction: 'none',
	// 		random: false,
	// 		straight: false,
	// 		out_mode: 'out',
	// 		bounce: false,
	// 		attract: {
	// 			enable: false,
	// 			rotateX: 600,
	// 			rotateY: 1200
	// 		}
	// 	},
	// 	interactivity: {
	// 		detect_on: 'canvas',
	// 		events: {
	// 			onhover: {
	// 				enable: true,
	// 				mode: 'attract',
	// 				parallax: { enable: false, force: 60, smooth: 10 }
	// 			},
	// 			onclick: {
	// 				enable: true,
	// 				mode: 'push'
	// 			},
	// 			resize: true
	// 		},
	// 		modes: {
	// 			grab: {
	// 				distance: 400,
	// 				line_linked: {
	// 					opacity: 1
	// 				}
	// 			},
	// 			bubble: {
	// 				distance: 400,
	// 				size: 40,
	// 				duration: 2,
	// 				opacity: 8,
	// 				speed: 3
	// 			},
	// 			repulse: {
	// 				distance: 200,
	// 				duration: 0.4
	// 			},
	// 			push: {
	// 				particles_nb: 4
	// 			},
	// 			remove: {
	// 				particles_nb: 2
	// 			}
	// 		}
	// 	},
	// 	retina_detect: true
	// };
	let particlesConfig = {
		particles: {
			color: {
				value: '#000'
			},
			links: {
				enable: true,
				color: '#000'
			},
			move: {
				enable: true
			},
			number: {
				value: 100
			}
		},
		interactivity: {
			detect_on: 'canvas',
			events: {
				onhover: {
					enable: true,
					mode: 'attract',
					parallax: { enable: false, force: 60, smooth: 10 }
				},
				onclick: {
					enable: true,
					mode: 'push'
				},
				resize: true
			}
		}
	};
	let onParticlesLoaded = (event) => {
		const particlesContainer = event.detail.particles;

		// you can use particlesContainer to call all the Container class
		// (from the core library) methods like play, pause, refresh, start, stop
	};

	let particlesInit = async (engine) => {
		// you can use main to customize the tsParticles instance adding presets or custom shapes
		// this loads the tsparticles package bundle, it's the easiest method for getting everything ready
		// starting from v2 you can add only the features you need reducing the bundle size
		//await loadFull(engine);
		await loadFull(engine);
	};
</script>

<Banner />
<div class="particles-container">
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
				In the exciting world of technology, I've discovered my real passion. My adventure started
				in the realm of real estate, where I honed my skills in the delicate art of negotiation,
				grasping the importance of understanding clients' needs, and learned the invaluable lesson
				of adaptability. These foundational skills laid the groundwork for my journey, and
				catapulted me into the ever-changing world of software engineering.
			</p>
			<p class="description" style="width: 80%;">
				My passion lies at the intersection of web development and artificial intelligence. My
				journey has equipped me with a strong skill set that encompasses Python, JavaScript, Django,
				React.js, Svelte, and more. I believe a craftsman is only as good as his tools and how he
				uses them. This toolkit has allowed me to contribute to a variety of projects, from crafting
				frameworks utilizing the Gmail API to creating conversational AI chatbots. Each project I've
				had the pleasure of working on serves as a testament to my unwavering commitment to
				excellence, my drive for innovation, and my dedication to ongoing learning.
			</p>
		</div>

		<div class="profile-image-container">
			<div class="image-card">
				<img
					alt="headshot"
					src="https://tedfulk.com/img/black%20and%20white%20head%20shot.jpeg"
					class="headshot"
				/>
				<div class="middle-section-img-container">
					<h4 class="header">Greetings from the digital realm!</h4>
					<p class="description-img-card">
						I'm a software engineer passionate about web development, AI, and eager to collaborate
						in tech after transitioning from real estate.
					</p>
				</div>
			</div>
		</div>
	</div>
	<Particles
		id="tsparticles"
		class="foo bar"
		style=""
		options={particlesConfig}
		on:particlesLoaded={onParticlesLoaded}
		{particlesInit}
	/>
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
		padding-top: 1rem;
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
		padding-left: 1.5rem;
		padding-right: 1.5rem;
		padding-bottom: 1.5rem;
		max-width: fit-content;
		color: #4b5563;
	}

	.image-card {
		border-radius: 10px;
		overflow: hidden;
		width: 70%;
		height: 100%;
	}
	.middle-section-img-container {
		background-color: #ffa825;
		margin-top: -1.6rem;
	}

	.headshot {
		width: 100%;
	}
	.carousel-section {
		margin-top: 4rem;
	}
</style>
