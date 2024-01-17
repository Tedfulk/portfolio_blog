<script>
	import Project from '../components/projects/Project.svelte';
	import Banner from '../components/Banners/Banner.svelte';
	import Footer from '../components/Footers/Footer.svelte';
	import Particles from 'svelte-particles';
	import { loadFull } from 'tsparticles';
	import { darkTheme } from '../store';
	let baseParticlesConfig = {
		particles: {
			color: {
				value: '#fcba03'
			},
			links: {
				enable: true,
				color: '#000',
				distance: 150,
				opacity: 1,
				width: 1.5
			},
			number: {
				value: 120
			},
			shape: {
				type: 'polygon',
				stroke: {
					width: 2,
					color: '#808080'
				},
				polygon: {
					nb_sides: 6
				}
			},
			size: {
				value: 6,
				random: true,
				anim: {
					enable: true,
					speed: 10,
					size_min: 1,
					sync: false
				}
			},
			opacity: {
				value: 1,
				random: false,
				anim: {
					enable: false,
					speed: 1,
					opacity_min: 0.1,
					sync: false
				}
			},
			line_linked: {
				enable: true,
				distance: 150,
				color: '#fcba03',
				opacity: 1,
				width: 1
			},
			move: {
				enable: true,
				speed: 2,
				direction: 'none',
				random: false,
				straight: false,
				out_mode: 'out',
				bounce: false,
				attract: {
					enable: false,
					rotateX: 600,
					rotateY: 1200
				}
			}
		},
		interactivity: {
			detect_on: 'window',
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
				resize: true,
				modes: {
					attract: {
						distance: 200,
						duration: 0.4,
						speed: 5
					},
					bubble: {
						distance: 200,
						duration: 0.4
					},
					push: {
						quantity: 4
					},
					remove: {
						quantity: 2
					}
				},
				retina_detect: true
			}
		},
		fullScreen: {
			enable: false
		},
		fps_limit: 60,
		detectRetina: true
	};
	let particlesConfig = $darkTheme
		? {
				...baseParticlesConfig,
				background: {
					color: '#1e2021'
				}
		  }
		: {
				...baseParticlesConfig
		  };
	$: {
		particlesConfig = {
			...baseParticlesConfig,
			particles: {
				...baseParticlesConfig.particles,
				links: {
					...baseParticlesConfig.particles.links,
					color: $darkTheme ? '#fff' : '#1e2021'
				}
			},
			background: {
				color: $darkTheme ? '#1e2021' : 'whitesmoke'
			}
		};
	}

	let onParticlesLoaded = (event) => {
		const particlesContainer = event.detail.particles;
	};

	let particlesInit = async (engine) => {
		await loadFull(engine);
	};
</script>

<Banner />
<div class="particles-container {darkTheme ? 'light-background' : 'dark-background'}">
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
			<h3 class={$darkTheme ? 'light-text' : 'dark-text'}>Who I am</h3>
			<p class="description" style="width: 80%; {$darkTheme ? 'light-text' : 'dark-text'}">
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
				<img alt="headshot" src="img/headshot-black.jpeg" class="headshot" />
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
		class="particle-links"
		style=""
		options={particlesConfig}
		on:particlesLoaded={onParticlesLoaded}
		{particlesInit}
	/>

	<div class="carousel-section">
		<Project />
	</div>
	<div class="footer">
		<Footer />
	</div>
</div>

<style>
	.particles-container {
		position: relative;
		padding-top: 4rem;
		/* background-color: #e1e0e0; */
	}
	.dark-background {
		background-color: #1e2021;
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
	:global(.particle-links) {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: 0;
	}
	.card {
		background-color: #f8f8f8;
		position: relative;
		padding-left: 1.5rem;
		padding-right: 1.5rem;
		padding-bottom: 1rem;
		padding-top: 4.5rem;
		box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.25);
		border-radius: 10px;
		z-index: 1;
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
		margin-top: -10%;
		flex-wrap: wrap;
	}

	@media (max-width: 500px) {
		.card-display {
			flex-direction: column;
			align-items: center;
			margin: 0;
		}

		.middle-card {
			margin-top: 50px;
		}
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
		margin-bottom: 4rem;
	}

	@media (max-width: 500px) {
		.profile-section {
			flex-wrap: wrap;
			flex-direction: column;
			align-items: center;
		}

		.profile-text-container,
		.profile-image-container {
			width: 100%;
		}
		.profile-text-container {
			margin-bottom: 40px;
		}
	}

	.profile-text-container,
	.profile-image-container {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		width: 100%;
		margin-top: -2rem;
		z-index: 1;
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
		position: relative;
		z-index: 1;
	}
</style>
