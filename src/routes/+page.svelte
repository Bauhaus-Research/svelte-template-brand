<script>
	import Footer from '$lib/components/Footer.svelte';
	import Nav from '$lib/components/Nav.svelte';
	import { blur, fly } from 'svelte/transition';
	import { expoIn, expoOut, quadIn } from 'svelte/easing';
	import ContactModal from '$lib/components/ContactModal.svelte';
	import ContactForm from '$lib/components/ContactForm.svelte';
	import WyModal from '$lib/components/WYModal.svelte';
	import { brandName, email } from '$lib/stores/brandStore';
	import Carousel from '$lib/components/Carousel.svelte';
	import Products from '$lib/components/Products.svelte';
	import HomePageItems from '$lib/components/HomePageItems.svelte';
	import PageScrollImage from '$lib/components/PageScrollImage.svelte';

	/**
	 * @type {number}
	 */
	let scrollY;
	/**
	 * @type {number}
	 */
	let innerHeight;
</script>

<svelte:window bind:scrollY bind:innerHeight />
<Nav {scrollY} {innerHeight} />
<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<div
	class="w-full h-screen bg-black -z-20 absolute top-0 left-0 overflow-hidden bg-left flex flex-row"
>
	<video
		muted
		playsinline
		autoplay
		loop
		class="w-full h-full object-cover opacity-30 overflow-hidden bg-left"
	>
		<source src="stockvid.mp4" type="video/mp4" />
	</video>
</div>

<section class="h-screen flex flex-col justify-end items-start overflow-hidden">
	<div class="flex flex-col opacity-100 pl-10 mb-10 h-1/2 w-[100%] justify-between">
		<div
			in:fly={{ delay: 1300, duration: 500, y: 50, easing: expoOut }}
			out:blur={{ duration: 300, easing: quadIn }}
			class=" text-xl text-white font-semibold text-start max-w-lg mb-8 mx-auto"
		>
			<a
				href="/menu"
				class=" text-xl text-white hover:text-red-500 hover:border-red-500 transition-colors duration-300 animate-pulse hover:animate-none border-white font-semibold font-serif border-2 rounded-full px-8 py-2 w-60 shadow-xl"
			>
				Start Ordering
			</a>
		</div>
		<div
			in:fly={{ delay: 1000, duration: 500, y: 100, easing: expoOut }}
			out:blur={{ duration: 300, easing: quadIn }}
			class=" text-xl text-white font-semibold text-start max-w-lg"
		>
			<h1 class=" text-4xl text-white font-semibold font-serif">
				Experience the Authentic Flavors of Puerto Rico on Wheels!
			</h1>
		</div>
	</div>
</section>
<Products />
<section class="h-screen bg-neutral-100">
	<HomePageItems
		title="Categories"
		introItem={[
			{
				title: 'DINING1',
				price: 1,
				image: 'dinings.webp'
			},
			{
				title: 'OFFICE1',
				price: 1,
				image: 'dinings.webp'
			},

			{
				title: 'PATIO1',
				price: 1,
				image: 'dinings.webp'
			},
			{
				title: 'TILES1',
				price: 1,
				image: 'dinings.webp'
			},
			{
				title: 'STORAGE1',
				price: 1,
				image: 'dinings.webp'
			},

			{
				title: 'CARPETS1',
				price: 1,
				image: 'dinings.webp'
			},
			{
				title: 'BEDDING1',
				price: 1,
				image: 'dinings.webp'
			}
		]}
	/>
</section>
<PageScrollImage />
<section class=" h-screen grid grid-cols-2 pt-36 bg-neutral-100">
	<div class="ml-10 md:ml-60 col-span-2 h-min">
		<h1 class="font-bold text-xl text-blue-800">Our Mission</h1>
		<h1 class="font-medium text-5xl mt-10m sm:max-w-[40%] max-w-[90%] font-serif">
			Navigate Medicare Claims
		</h1>
	</div>
	<div class="md:col-span-1" />
	<div class=" w-auto flex-row flex ml-10 md:ml-0 max-w-[80%] col-span-2 md:col-span-1 h-min">
		<div class="h-min flex flex-col my-auto">
			<p>
				Hinge is built on the belief that anyone looking for love should be able to find it. It’s
				also built on an acclaimed Nobel-Prize-winning algorithm, so we can succeed in getting you
				out on promising dates, not keeping you on the app.
			</p>
			<a
				href="/"
				class="rounded-full mt-8 duration-300 transition-all items-center justify-center hover:bg-[#663399] group border-neutral-900 border-2 bg-neutral-50 shadow-md font-bold text-center py-3 w-80 flex flex-row"
			>
				<svg
					class="h-10 w-10 stroke-[#663399] group-hover:stroke-neutral-300 transition-colors duration-75"
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="2"
					height="300px"
					width="300px"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
					/>
				</svg>
				<h3
					class="h-10 self-end pt-2 text-neutral-950 group-hover:text-neutral-50 transition-colors duration-150 ml-4"
				>
					Our Mission
				</h3>
			</a>
		</div>
	</div>
</section>
<section class="h-screen flex flex-col w-full bg-neutral-100">
	<img
		alt=""
		in:blur={{ duration: 1000 }}
		out:blur={{ duration: 100 }}
		class="h-96 border-w border-black w-96 transition-transform duration-500 ease-out rounded-lg mx-8"
		src="taco2.webp"
	/>
</section>
<Carousel />
<section class="h-screen flex flex-col bg-neutral-100">
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
</section>

<section class="flex flex-col h-screen">
	<section class="bg-neutral-100 px-20 flex flex-col h-1/6" />
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
					href="/blog"
					class="rounded-full duration-300 transition-all hover:bg-blue-800 bg-black text-white font-bold text-center py-3 px-6"
				>
					Visit Our Blog
				</a>
			</div>
		</div>
		<img class="w-72 self-end" src="taco9.webp" alt="taco" />
	</section>
</section>
<Footer />

<style>
	path {
		stroke-dasharray: 15;
		animation: move 35s linear infinite;
	}

	@keyframes move {
		to {
			stroke-dashoffset: 1000;
		}
	}
</style>
