<script>
	import { brandName } from '$lib/stores/brandStore';
</script>

<section
	id="background-section"
	class="h-screen bg-neutral-900 flex-col flex px-10 md:px-20 py-28 justify-between bg-opacity-90 bg-blend-overlay object-center bg-center"
	style="background-image: url(danny.webp);"
>
	<h1 class="text-white font-bold text-base sm:text-lg">What our users say</h1>
	<div class="">
		<div class="relative text-2xl sm:text-4xl font-bold md:h-48 h-60">
			<div class="flex flex-col justify-between infinite-fade-in md:h-48 h-60">
				<h3 class="text-white w-full lg:w-1/2">
					We used them to rebuild a website that was outdated, the clients we've brought in since
					the rebrand have been spending more
				</h3>
				<h3 class="text-white font-bold text-lg mt-8 w-1/2">Danny's Dinner</h3>
			</div>
			<div class="flex flex-col justify-between infinite-fade-in1 md:h-48 h-60 translate-y-[-100%]">
				<h3 class="text-white w-full lg:w-1/2">
					Ryan's team understood our needs. The flexible pricing options tailored specifically for
					food truck owners like us.
				</h3>
				<h3 class="text-white font-bold text-sm sm:text-lg mt-8 w-1/2">Anchor Brewing</h3>
			</div>
			<div class="flex flex-col justify-between infinite-fade-in2 md:h-48 h-60 translate-y-[-200%]">
				<h3 class="text-white w-full lg:w-1/2">
					Since partnering with them, online orders have skyrocketed, and our customers keep coming
					back for more. We couldn't be happier
				</h3>
				<h3 class="text-white font-bold text-lg mt-8 w-1/2">Habanero Tacos</h3>
			</div>
		</div>

		<div class="w-full h-3 rounded-2xl grid grid-cols-3 mt-16 gap-4">
			<div class="w-full h-1 rounded-2xl border-white border-[1px] overflow-clip">
				<div class="w-[100%] h-1 rounded-2xl bg-white animated-element" />
			</div>
			<div class="w-full h-1 rounded-2xl border-white border-[1px] overflow-clip">
				<div class="w-[100%] h-1 rounded-2xl bg-white animated-element1" />
			</div>
			<div class="w-full h-1 rounded-2xl border-white border-[1px] overflow-clip">
				<div class="w-[100%] h-1 rounded-2xl bg-white animated-element2" />
			</div>
		</div>
	</div>
</section>

<style>
	@keyframes myAnimation {
		0% {
			transform: translateX(0);
		}
		30% {
			transform: translateX(100%);
		}
		99% {
			transform: translateX(100%);
		}
		100% {
			transform: translateX(0);
		}
	}

	/* Apply the animation to an element */
	.animated-element {
		animation: myAnimation 15s linear infinite; /* Animates every 5 seconds */
	}

	@keyframes myAnimation1 {
		0% {
			transform: translateX(0);
		}
		33% {
			transform: translateX(0);
		}
		63% {
			transform: translateX(100%);
		}
		99% {
			transform: translateX(100%);
		}
		100% {
			transform: translateX(0);
		}
	}

	/* Apply the animation to an element */
	.animated-element1 {
		animation: myAnimation1 15s linear infinite; /* Animates every 5 seconds */
	}
	@keyframes myAnimation2 {
		0% {
			transform: translateX(0);
		}
		66% {
			transform: translateX(0);
		}
		99% {
			transform: translateX(100%);
		}
		100% {
			transform: translateX(0);
		}
	}

	/* Apply the animation to an element */
	.animated-element2 {
		animation: myAnimation2 15s linear infinite; /* Animates every 5 seconds */
	}

	@keyframes fadeIn {
		0% {
			opacity: 0;
		}
		30% {
			opacity: 1;
		}
		33% {
			opacity: 0;
		}
		100% {
			opacity: 0;
		}
	}
	.infinite-fade-in {
		animation: fadeIn 15s infinite;
	}

	@keyframes fadeIn1 {
		0% {
			opacity: 0;
		}
		33% {
			opacity: 0;
		}
		63% {
			opacity: 1;
		}
		66% {
			opacity: 0;
		}
		100% {
			opacity: 0;
		}
	}
	.infinite-fade-in1 {
		animation: fadeIn1 15s infinite;
	}

	@keyframes fadeIn2 {
		0% {
			opacity: 0;
		}
		66% {
			opacity: 0;
		}
		96% {
			opacity: 1;
		}
		99% {
			opacity: 0;
		}
		100% {
			opacity: 0;
		}
	}
	.infinite-fade-in2 {
		animation: fadeIn2 15s infinite;
	}
</style>
