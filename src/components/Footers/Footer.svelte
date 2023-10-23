<script>
</script>

<footer class="footer section">
	<div class="footer-container">
		<div class="footer-content">
			<div class="footer-social">
				<div class="tooltip">
					<a
						href="https://www.linkedin.com/in/ted-fulk-4068491b1/"
						target="_blank"
						rel="noreferrer"
					>
						<img src="img/linkedin-img.jpg" alt="linkedin" class="social-icon" />
						<span class="tooltiptext">LinkedIn</span>
					</a>
				</div>
				<div class="tooltip">
					<a href="https://github.com/Tedfulk" target="_blank" rel="noreferrer">
						<img src="img/github-looking-logo.png" alt="github" class="social-icon" />
						<span class="tooltiptext">GitHub</span>
					</a>
				</div>
				<div class="tooltip">
					<a href="mailto:tedfulk1@gmail.com" rel="noreferrer">
						<img src="img/mail-looking-logo.jpg" alt="email" class="social-icon" />
						<span class="tooltiptext">Email</span>
					</a>
				</div>
			</div>
		</div>
	</div>
</footer>

<style>
	.footer {
		display: flex;
		justify-content: center;
		align-items: center;
		padding-top: 3rem;
		padding-bottom: 3rem;
	}
	.social-icon {
		width: 3rem;
		height: 3rem;
		border-radius: 50%;
	}
	.tooltip {
		position: relative;
		display: inline-block;
		margin-right: 3rem;
	}

	.tooltip:last-child {
		margin-right: 0;
	}

	.tooltip .tooltiptext {
		visibility: hidden;
		background-color: #333;
		color: #fff;
		text-align: center;
		border-radius: 4px;
		padding: 4px;
		position: absolute;
		z-index: 1;
		bottom: 125%;
		left: 50%;
		transform: translateX(-50%);
		opacity: 0;
		transition: opacity 0.2s;
	}

	.tooltip:hover .tooltiptext {
		visibility: visible;
		opacity: 1;
	}
</style>
