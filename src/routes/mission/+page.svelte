<script>
	import HamburgerMenu from '$lib/components/HamburgerMenu.svelte';
	let informal = [
		{
			title: '01',
			subtitle: 'Innovation-Centric',
			para: 'Embracing only new technology that will boost your sites performance.'
		},
		{
			title: '02',
			subtitle: 'Bauhaus Design',
			para: 'No more bootstrapped websites. Only tailored websites that help you stand out among your competitors.'
		},
		{
			title: '03',
			subtitle: 'CI/CD Pipeline',
			para: 'Stay ahead of your competitors with our proven continuous integration and deployment pipeline.'
		}
	];

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

	import Footer from '$lib/components/Footer.svelte';
	import Nav from '$lib/components/Nav.svelte';
	import { brandName, info, tagline } from '$lib/stores/brandStore';
	import { blur, fly } from 'svelte/transition';

	let scrollY = 0;
	let innerHeight = 0;
</script>

<svelte:window bind:scrollY bind:innerHeight />
<section class="overflow-x-clip bg-neutral-100">
	<Nav {innerHeight} {scrollY} />

	<section class="h-screen bg-neutral-900 flex flex-col justify-center">
		<div class="md:h-3/4 h-full flex flex-col md:flex-row md:justify-between justify-start">
			<div class="bg-black md:h-full h-2/3 aspect-square md:w-1/3 rounded-r-xl">
				<img src="taco2.webp" class="object-cover w-full h-full" alt="" />
			</div>

			<div
				style="transform: translate(0,{-(scrollY - innerHeight / 2) * 0.15}px)"
				class=" w-1/2 flex flex-col justify-center items-start font-serif text-5xl"
			>
				<h1 class="text-neutral-50">{tagline}</h1>
			</div>
		</div>

		<div
			style="transform: translate(0,{-(scrollY - innerHeight / 2) * 0.3}px)"
			class=" w-1/2 flex flex-col justify-center items-start font-serif text-5xl"
		>
			<h1 class="text-neutral-50 text-opacity-50 ml-20">{tagline}</h1>
		</div>
	</section>
	<section
		class="bg-neutral-900 h-screen sm:px-10 px-4 py-4 sm:py-10 text-neutral-200 flex flex-col justify-between"
	>
		<div>
			<h1
				class="font-bold text-lg bg-gradient-to-br to-65% bg-clip-text text-transparent to-red-950 via-red-500 from-neutral-900"
			>
				Our Values
			</h1>
			<h2 class="lg:w-1/2 w-full text-4xl lg:text-5xl mt-12">
				Design is at the <strong
					class="bg-gradient-to-r bg-clip-text from-red-50 via-neutral-200 to-blue-50 font-bold text-transparent"
					>CORE</strong
				><br /> of everything we do
			</h2>
		</div>

		<section class=" flex flex-col sm:flex-row font-serif overflow-x-clip">
			{#if scrollY > innerHeight * 0.65}
				{#each informal as item, i}
					<div
						in:fly={{ delay: 200 * i, duration: 1000, x: -200 }}
						out:blur
						class="flex-col flex w-80 px-2 md:px-6"
					>
						<h3
							class="text-8xl sm:text-9xl lg:text-[12rem] bg-gradient-to-br bg-clip-text text-transparent to-red-950 via-red-500 from-neutral-900"
						>
							{item.title}
						</h3>
						<h3 class="text-3xl lg:text-4xl text-start text-white">{item.subtitle}</h3>
						<p class="text-xs lg:text-lg text-neutral-300 text-start">{item.para}</p>
					</div>
				{/each}
			{/if}
		</section>
	</section>
	<section class="h-screen">
		<section class="h-full">
			<section class="bg-neutral-900 h-[30%]" />
			<section class="bg-neutral-100 h-[70%] flex flex-row justify-end items-start px-5 md:px-20">
				<div
					class="md:h-[30rem] h-96 aspect-square overflow-clip -translate-y-48 flex flex-col rounded-xl"
				>
					<img
						style="transform: translate(0,{-(scrollY - innerHeight / 2) * 0.15}px)"
						class="text-white text-4xl mr-20 h-[70rem] rounded-xl transition-transform duration-400 ease-linear self-start"
						alt=" "
						src="taco4.webp"
					/>
				</div>
			</section>
			<div class="-translate-y-96 md:translate-x-20 translate-x-10">
				<h1
					class="font-bold bg-gradient-to-br to-65% bg-clip-text text-transparent to-purple-950 via-neutral-700 from-neutral-500"
				>
					Our Purpose
				</h1>
				<h2 class="text-4xl md:text-6xl font-light font-serif mt-12">
					Our <strong
						class="bg-gradient-to-r bg-clip-text to-purple-950 via-neutral-700 from-neutral-500 font-bold text-transparent"
						>basis</strong
					><br /> of everything we do
				</h2>
				<p class="w-80 text-lg mt-8">
					We love to work with food trucks, you can call them our passion!
				</p>
			</div>
		</section>
	</section>
	<section class="h-screen bg-neutral-100">
		<div class="w-auto flex flex-col md:mx-20 mx-5 py-12">
			<section class=" flex flex-row">
				<div class="overflow-x-auto snap-x">
					<div class="flex flex-row overflow-x-scrol w-fit h-fit snap-mandatory snap-x">
						{#each info as item}
							<div in:fly class="flex flex-col w-80 h-96 justify-between items-start group">
								<div class="h-1/2 w-full">
									<h1
										class="text-6xl mb-4 font-light text-red-950 font-serif group-hover:text-red-800 duration-300 transition-all"
									>
										{item?.title}
									</h1>
									<h1 class="text-4xl font-bold">{item?.subtitle}</h1>
								</div>
								<h1 class=" mb-4 font-light h-1/2">{item?.para}</h1>
							</div>
						{/each}
					</div>
				</div>
			</section>
		</div>
	</section>

	<section class="flex flex-col h-screen">
		<section class=" px-20 flex flex-col h-1/6" />
		<section class="bg-neutral-900 px-20 flex flex-col justify-between h-5/6">
			<img class="-translate-y-20 w-60" src="taco10.webp" alt="taco" />
			<div class="flex flex-row justify-center">
				<div>
					<h1 class="text-white font-bold text-3xl mb-4">
						{brandName}
					</h1>
					<p class="text-white my-6 font-light md:text-xl text-lg">
						See our blog page for our latest thoughts
					</p>
					<a
						href="/newsroom"
						class="rounded-full duration-300 transition-all hover:bg-blue-800 bg-black text-white font-bold text-center py-3 px-6"
					>
						Visit Our Blog
					</a>
				</div>
			</div>
			<img class="w-72 self-end" src="taco9.webp" alt="taco" />
		</section>
	</section>

	<section class="bg-neutral-900 h-fit px-10 py-10 text-neutral-200 flex flex-col justify-between">
		<div>
			<h1
				class="font-bold bg-gradient-to-br to-65% bg-clip-text text-transparent to-neutral-950 via-neutral-200 from-neutral-500"
			>
				Our Approach
			</h1>
			<h2 class=" sm:text-6xl mt-12 font-serif">
				How are we <strong
					class="bg-gradient-to-r bg-clip-text from-red-50 via-neutral-200 to-blue-50 font-bold text-transparent"
				>
					better</strong
				>
			</h2>
		</div>

		<section class=" flex flex-row w-full mt-5">
			<div class="grid md:grid-cols-3 grid-cols-2 gap-4 w-full">
				{#each info as item}
					<div
						class="flex-col justify-start items-start flex border-t-[1px] border-white border-opacity-25 mb-8 w-auto"
					>
						<h3 class="text-xl text-neutral-200 font-bold text-center my-6">{item?.subtitle}</h3>
						<p class="text- text-start text-neutral-400">{item?.para}</p>
					</div>
				{/each}
			</div>
		</section>
	</section>
	<!-- <section class="h-screen flex flex-col bg-neutral-100">
	<div class="flex flex-row items-start h-1/2 justify-center w-full overflow-x-clip">
		{#if scrollY < innerHeight * 6 && scrollY > innerHeight * 4.2}
			<img
				alt=""
				in:blur={{ duration: 1000 }}
				out:blur={{ duration: 100 }}
				style="transform: translate({-(scrollY - innerHeight * 5) * 0.1}px,{(scrollY -
					(innerHeight * 3) / 2) *
					0.1}px)"
				class="h-48 transition-transform duration-[2000ms] ease-out rounded-lg mx-8"
				src="taco2.webp"
			/>
			<img
				alt=""
				in:blur={{ duration: 1000 }}
				out:blur={{ duration: 100 }}
				style="transform: translate(0,{(scrollY - (innerHeight * 5) / 2) * 0.11}px)"
				class="h-48 transition-transform duration-500 ease-out rounded-lg mx-8"
				src="taco2.webp"
			/>
			<img
				alt=""
				in:blur={{ duration: 1000 }}
				out:blur={{ duration: 100 }}
				style="transform: translate({(scrollY - innerHeight * 5) * 0.1}px,{(scrollY -
					(innerHeight * 4) / 2) *
					0.1}px)"
				class="h-48 transition-transform duration-1000 ease-out rounded-lg mx-8"
				src="taco2.webp"
			/>
		{/if}
	</div>
	<div class="mt-20 flex flex-col items-center">
		<h1 class="text-xl font-bold text-blue-800">Join an Exciting Team</h1>
		<a
			href="/"
			class="rounded-full mt-8 duration-300 transition-all hover:bg-blue-800 bg-black text-white font-bold text-center py-3 w-40"
		>
			Our Careers
		</a>
	</div>
</section> -->

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
