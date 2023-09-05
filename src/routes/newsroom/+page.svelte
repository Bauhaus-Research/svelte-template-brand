<script>
	import HamburgerMenu from '$lib/components/HamburgerMenu.svelte';
	let pressRelCount = pressRel.length;

	let navItem = [
		{
			title: 'Mission',
			link: '/mission'
		},
		{
			title: 'Menu',
			link: '/services'
		},
		{
			title: 'News',
			link: '/newsroom'
		},
		{
			title: 'Pricing',
			link: '/pricing'
		}
	];

	let showTapMenu = false;
	function toggleTapMenu() {
		showTapMenu = !showTapMenu;
	}
	import Footer from '$lib/components/Footer.svelte';
	import { blogtagline, pressRel } from '$lib/stores/brandStore';
	import { blur } from 'svelte/transition';
	import Nav from '$lib/components/Nav.svelte';

	let scrollY = 0;
	let innerHeight = 0;
</script>

<svelte:window bind:scrollY bind:innerHeight />
<section class="overflow-x-clip bg-neutral-100">
	<Nav scrollY={scrollY + 11} {innerHeight} />

	<section class="h-screen bg-neutral-100 flex flex-col justify-center">
		<div
			class="lg:h-3/4 h-full flex flex-col lg:flex-row lg:justify-between justify-start items-center"
		>
			<div class="overflow-clip aspect-video h-96 rounded-r-none lg:rounded-r-xl">
				<img
					in:blur={{ duration: 1000 }}
					out:blur={{ duration: 300 }}
					style="transform: translate(0, {(scrollY - (innerHeight * 5) / 2) * 0.11}px)"
					class="h-[180%] z-10 transition-transform duration-500 ease-out rounded-r-none lg:rounded-r-xl"
					src="taco2.webp"
					alt=""
				/>
			</div>

			<div
				style="transform: translate(0,{-(scrollY - innerHeight / 2) * 0.15}px)"
				class=" md:w-1/2 flex flex-col justify-center items-start font-serif text-5xl"
			>
				<h1 class="text-neutral-950">{blogtagline}</h1>
			</div>
		</div>
		{#if scrollY > 10}
			<div
				style="transform: translate(0,{-(scrollY - innerHeight / 2) * 0.35}px)"
				class=" md:w-1/2 flex flex-col justify-center items-start font-serif text-5xl"
			>
				<h1 class="text-neutral-500 ml-20">{blogtagline}</h1>
			</div>
		{/if}
	</section>

	<section class="h-screen bg-neutral-100">
		<div class="w-auto flex flex-col md:mx-20 mx-5 py-12">
			<h1 class="text-5xl font-serif mb-10 font-light">
				Press Releases<span class="text-xs">({pressRelCount})</span>
			</h1>
			<section class=" flex flex-row">
				<div class="overflow-x-auto snap-x">
					<div class="flex flex-row overflow-x-scrol w-fit h-fit snap-mandatory snap-x">
						{#each pressRel as item}
							<div
								class="flex flex-col sm:w-80 w-72 h-72 justify-between items-start group border-t-[1px] mr-10"
							>
								<div class="h-1/2 w-full">
									<h1 class="sm:text-3xl text-2xl mt-6 font-light text-red-950 font-serif">
										{item.title}
									</h1>
								</div>
								<a
									href="/newsroom/{item.slug}"
									class=" mb-4 font-bold text-red-950 group-hover:text-red-800 duration-300 transition-all"
									>Read this post
								</a>
							</div>
						{/each}
					</div>
				</div>
			</section>
		</div>
	</section>

	<Footer />
</section>

<style>
	.fade-underline {
		position: relative;
		display: inline-block;
		padding-bottom: 1px; /* Adjust as needed */
	}

	.fade-underline::before {
		content: '';
		position: absolute;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 2px; /* Adjust as needed */
		background-color: rgb(127 29 29); /* Change to your desired color */
		transform-origin: left center;
		transform: scaleX(0);
		transition: transform 0.3s ease-in-out;
	}

	.fade-underline:hover::before {
		transform: scaleX(1);
		transform-origin: right center;
	}
</style>
