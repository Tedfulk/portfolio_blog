<script>
	import Card, { Content } from '@smui/card';
</script>

<div class="banner-container">
	<Card>
		<div
			class="absolute top-0 w-full h-full bg-center bg-cover"
			style="background-image: url(https://images.pexels.com/photos/459653/pexels-photo-459653.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2);"
		>
			<span id="blackOverlay" class="w-full h-full absolute" />
		</div>
		<Content style="position: relative; text-align: center; color: white; padding: 8rem 2rem;">
			<h1 class="font-semibold text-5xl">
				From Foundations To Frameworks <br /> Building A Digital Career
			</h1>
		</Content>
	</Card>
</div>

<style>
	.banner-container {
		z-index: 1;
	}
	.absolute {
		position: absolute;
		background-color: black;
		opacity: 0.85;
	}
	.w-full {
		width: 100%;
	}
	.h-full {
		height: 100%;
	}
	.bg-center {
		background-position: center;
	}
	.bg-cover {
		background-size: cover;
	}
	.font-semibold {
		font-weight: 600;
	}
	.text-5xl {
		font-size: 3rem;
	}
</style>
