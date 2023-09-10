<script>
	import HamburgerMenu from '$lib/components/HamburgerMenu.svelte';
	let pressRelCount = pressRel.length;

	let navItem = [
		{
			title: 'Mission',
			link: '/mission'
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
	<Nav scrollY={2000} {innerHeight} />

	<section class="h-screen bg-neutral-100 flex flex-col justify-center">

		<div class="md:h-3/4 h-full flex flex-col md:flex-row md:justify-between justify-start">
			
			<div
			class="h-2/3 md:w-5/12 rounded-r-xl self-center aspect-auto overflow-clip mt-auto -translate-y-24 flex flex-col"
		>
			<img
				style="transform: translate(0,{-(scrollY - innerHeight / 2) * 0.15}px)"
				class="text-white text-4xl md:mr-20 h-[70rem] object-cover object-left	 rounded-r-xl transition-transform duration-400 ease-linear self-start"
				src="taco2.webp"
					alt="taco in hand that looks delicious"
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

	<section id="newsList" class="h-screen pt-24 bg-neutral-100">
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
									target="_self"
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
