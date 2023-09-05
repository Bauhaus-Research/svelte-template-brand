<script>
	import Footer from '$lib/components/Footer.svelte';
	import Nav from '$lib/components/Nav.svelte';
	import { blur, fly } from 'svelte/transition';
	import { expoIn, expoOut, quadIn } from 'svelte/easing';
	import ContactModal from '$lib/components/ContactModal.svelte';
	import ContactForm from '$lib/components/ContactForm.svelte';
	import WyModal from '$lib/components/WYModal.svelte';
	import { brandName, email, taglinehomepage, taglinehomepagepara } from '$lib/stores/brandStore';
	import Carousel from '$lib/components/Carousel.svelte';
	import Products from '$lib/components/Products.svelte';
	import HomePageItems from '$lib/components/HomePageItems.svelte';
	import PageScrollImage from '$lib/components/PageScrollImage.svelte';
	let brandWebsite = "streetfoodservices.us";
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
			class=" text-xl text-white font-semibold text-start max-w-lg mb-8 mx-auto flex-col flex md:flex-row justify-center items-center"
		>
			<a
				href="https://my.{brandWebsite}" target="_blank"
				class=" text-xl my-2 md:mx-2 mx-0 text-stone-400 hover:text-blue-500 hover:border-blue-500 text-center border-stone-400 font-semibold font-serif border-2 rounded-full px-8 py-2 w-60 shadow-xl"
			>
				Manage
			</a>
			<a
				href="/pricing"
				class=" text-xl my-2 md:mx-2 mx-0 border-blue-50 text-neutral-800 hover:bg-blue-950 hover:text-blue-50 bg-neutral-300  hover:border-blue-500 text-center transition-colors duration-300 delay-75 animate-pulse hover:animate-none  font-semibold font-serif border-2 rounded-full px-8 py-2 w-60 shadow-xl"
			>
				Start Today
			</a>
		</div>
		<div
			in:fly={{ delay: 1000, duration: 500, y: 100, easing: expoOut }}
			out:blur={{ duration: 300, easing: quadIn }}
			class=" text-xl text-white font-semibold text-start max-w-lg"
		>
			<h1 class=" text-4xl text-neutral-50 font-semibold font-serif">
				Empowering Food Trucks for Success
			</h1>
			<h2 class=" text-2xl text-neutral-500 font-semibold">
				Revolutionizing Food Truck Experiences, One Byte at a Time
			</h2>
		</div>
	</div>
</section>

<section class=" h-[200vh] grid grid-cols-2 pt-36 bg-neutral-100">


	{#if scrollY > innerHeight * 0.3}
		<div class="ml-10 md:ml-60 col-span-2 ">
			<h1 out:blur in:fly={{ duration: 300, y: 100 }} class="font-bold text-xl text-blue-800">
				Our Mission
			</h1>
			<h1
				out:blur
				in:fly={{ duration: 300, delay: 100, y: 100 }}
				class="font-medium text-5xl mt-10m sm:max-w-[40%] max-w-[90%] font-serif"
			>
			Navigating the Street Food Industry
			</h1>
		</div>
		<div class="md:col-span-1" />
		<div class=" w-auto flex-row flex ml-10 md:ml-0 max-w-[80%] col-span-2 md:col-span-1 h-min">
			<div class="h-min flex flex-col my-auto">
				<p>
					The world of street food is vibrant, diverse, and filled with endless culinary possibilities. From sizzling tacos to gourmet burgers, fusion dishes to classic comfort food, the street food industry is a melting pot of flavors and experiences.
				</p>
				<a
					href="/mission"
					class="rounded-full mt-8 duration-300 transition-all items-center justify-center hover:bg-[#663399] group border-neutral-900 border-2 bg-neutral-50 shadow-md font-bold text-center py-3 max-w-80 w-full flex flex-row"
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
		{:else}
<div class="h-36 bg-neutral-100"></div>
	{/if}

	<section class="h-screen col-span-2 grid grid-cols-2">
		<div class="w-full mx-auto col-span-2 lg:flex-row flex-col flex">
			<div class="overflow-clip aspect-video h-96 rounded-r-none lg:rounded-r-xl">
				<img
					in:blur={{ duration: 1000 }}
					out:blur={{ duration: 300 }}
					style="transform: translate(0, {(scrollY - (innerHeight * 5) / 2 + 600) * 0.11}px)"
					class="h-[150%] z-10 transition-transform duration-500 ease-out rounded-r-none lg:rounded-r-xl"
					src="taco2.webp"
					alt=""
				/>
			</div>
			<div class="w-96 self-center ml-4 text-start">
				<h3 class="text-red-900 font-bold text-xl flex flex-col">About Us</h3>
				<p class=" font-light text-lg mb-8">
					At Street Food Services, we're not just another web design and marketing agency. We're food enthusiasts, tech geeks, and marketing mavens, all rolled into one passionate team. Our mission? To serve up success for food truck businesses like yours.
				</p>
			</div>
		</div>
		<div class="col-span-2 h-60">
			<PageScrollImage pageInt={3.2} />
		</div>
	</section>
	
</section>
<section class="h-[500vh] grid grid-cols-1 md:grid-cols-2 pt-36 bg-neutral-100">
	<section class=" w-full col-span-2 md:col-span-1 md:h-screen sticky top-0 flex flex-col bg-neutral-100">
		<div class="flex flex-row items-start h-36 justify-center w-full overflow-x-clip">
			{#if scrollY < innerHeight * 6 && scrollY > innerHeight * 3.25}
				<img
					alt=""
					in:blur={{ duration: 1000 }}
					out:blur={{ duration: 100 }}
					style="transform: translate({(-(scrollY - (innerHeight * 8) / 2)+500)* 0.1}px,{-((scrollY - (innerHeight * 14) / 2)+500) * 0.11}px)"
					class="h-48 transition-transform duration-[2000ms] ease-out rounded-lg mx-8"
					src="taco2.webp"
				/>
				<img
					alt=""
					in:blur={{ duration: 1000 }}
					out:blur={{ duration: 300 }}
					style="transform: translate({(-(scrollY - (innerHeight * 8) / 2)+500)* 0.1}px,{-((scrollY - (innerHeight * 14) / 2)+500) * 0.11}px)"
					class="h-48 z-10 transition-transform duration-500 ease-out rounded-lg mx-8"
					src="taco2.webp"
				/>
				<img
					alt=""
					in:blur={{ duration: 1000 }}
					out:blur={{ duration: 200 }}
					style="transform: translate({(-(scrollY - (innerHeight * 8) / 2)+500)* 0.1}px,{-((scrollY - (innerHeight * 14) / 2)+500) * 0.11}px)"
					class="h-48 transition-transform duration-1000 ease-out rounded-lg mx-8"
					src="taco2.webp"
				/>
			{/if}
		</div>
		<div class="mt-20 flex flex-col items-center">
			<h1 class="text-2xl font-bold text-red-800">Our Approach</h1>
			<a
				href="/pricing"
				class="rounded-full mt-8 duration-300 transition-all hover:bg-red-800 bg-black text-white font-bold text-center py-3 w-40"
			>
				View Plans
			</a>
		</div>
	</section>
	<section class="col-span-2 md:col-span-1 h-[460vh] md:h-full">
		
		<div class="h-screen w-full text-end flex ">
			<a
				href="/resources"
				class="rounded-full self-center mt-8 duration-300 transition-all hover:bg-red-800 bg-black text-white font-bold text-center py-3 w-40"
			>
				View Plans
			</a>
			<div class="w-96 self-center  mx-auto">
				<h3 class="text-red-900 font-bold text-xl flex flex-col">Our Approach</h3>
				<p class=" font-light text-lg mb-8">
					We believe in <a href="pricing"><strong class="font-black">transparent pricing</strong></a> and communication with our client. <br>
					Our driving force is the belief that every food truck, no matter how small or new, deserves a chance to shine. We're here to level the playing field. We're here to make sure your food truck doesn't just survive but thrives in the digital age.
				</p>
			</div>
		</div>
		<div class="h-screen w-full text-start flex">
			<div class="w-96 self-center  mx-auto">
				<h3 class="text-red-900 font-bold text-xl flex flex-col">Our Journey</h3>
				<p class=" font-light text-lg mb-8">
					We believe in <a href="pricing"><strong class="font-black">transparent pricing</strong></a> and communication with our client. <br>
					Our driving force is the belief that every food truck, no matter how small or new, deserves a chance to shine. We're here to level the playing field. We're here to make sure your food truck doesn't just survive but thrives in the digital age.
				</p>
			</div>
			<a
				href="/resources"
				class="rounded-full self-center mt-8 duration-300 transition-all hover:bg-red-800 bg-black text-white font-bold text-center py-3 w-40"
			>
				View Plans
			</a>
		</div>
		<div class="h-screen w-full text-end flex ">
			<a
				href="/resources"
				class="rounded-full self-center mt-8 duration-300 transition-all hover:bg-red-800 bg-black text-white font-bold text-center py-3 w-40"
			>
				View Plans
			</a>
			<div class="w-96 self-center  mx-auto">
				<h3 class="text-red-900 font-bold text-xl flex flex-col">Our Differentiator</h3>
				<p class=" font-light text-lg mb-8">
					So, what sets Street Food Services apart from the rest? It's our commitment to you, our clients. When you partner with us, you're not just a customer; you're part of our food-loving family. We take the time to understand your unique flavors, your brand, and your goals.
<br>
Our team of skilled designers, developers, SEO wizards, and marketing maestros work tirelessly to create mouthwatering websites, boost your online presence, and connect you with a hungry audience. We're not satisfied until your food truck is the talk of the town.
				</p>
			</div>
		</div>
		<div class="h-screen w-full text-start flex">
			<div class="w-96 self-center  mx-auto">
				<h3 class="text-red-900 font-bold text-xl flex flex-col">Our Expertise</h3>
				<p class=" font-light text-lg mb-8">
					That's where we come in. With our expertise in web development and digital marketing, we're here to be your guide through the bustling streets of the food truck world. We've helped food truck businesses like yours thrive in the digital age, and we're ready to share our insights with you.
				<br>Check out our free resources that will ehlp guid eyou through your processes.</p>
			</div>
			<a
				href="/resources"
				class="rounded-full self-center mt-8 duration-300 transition-all hover:bg-red-800 bg-black text-white font-bold text-center py-3 w-40"
			>
				View Plans
			</a>
		</div>
		<div class="h-screen w-full text-end flex ">
			<a
				href="/resources"
				class="rounded-full self-center mt-8 duration-300 transition-all hover:bg-red-800 bg-black text-white font-bold text-center py-3 w-40"
			>
				View Plans
			</a>
			<div class="w-96 self-center  mx-auto">
				<h3 class="text-red-900 font-bold text-xl flex flex-col">Our Partners</h3>
				<p class=" font-light text-lg mb-8">
					We invite you to join us on this delicious journey. Whether you're a food truck owner looking to revamp your online presence or a passionate foodie searching for your next culinary adventure, Street Food Services is here to serve you.
<br>
Let's bring your food truck's unique story to life, one pixel and one bite at a time. Together, we'll make sure your flavors are savored by the world.
<br>

Hungry for success? Welcome to Street Food Services.
				</p>
			</div>
		</div>
	</section>
</section>
<Carousel />
<section class="h-screen flex flex-col bg-neutral-100">
	<div class="flex flex-row items-start h-1/2 justify-center w-full overflow-x-clip">
		{#if scrollY < innerHeight * 10 && scrollY > innerHeight * 8.25}
			<img
				alt=""
				in:blur={{ duration: 1000 }}
				out:blur={{ duration: 100 }}
				style="transform: translate({-(scrollY - innerHeight * 10) * 0.1}px,{((scrollY -
					(innerHeight * 11) / 2)) *
					0.1}px)"
				class="h-48 transition-transform duration-[2000ms] ease-out rounded-lg mx-8"
				src="taco2.webp"
			/>
			<img
				alt=""
				in:blur={{ duration: 1000 }}
				out:blur={{ duration: 300 }}
				style="transform: translate({-(scrollY - innerHeight * 9) * 0.1}px,{((scrollY -
					(innerHeight * 12) / 2)) *
					0.1}px)"
				class="h-48 z-10 transition-transform duration-500 ease-out rounded-lg mx-8"
				src="taco2.webp"
			/>
			<img
				alt=""
				in:blur={{ duration: 1000 }}
				out:blur={{ duration: 200 }}
				style="transform: translate({-(scrollY - innerHeight * 8) * 0.1}px,{((scrollY -
					(innerHeight * 13) / 2)) *
					0.1}px)"
				class="h-48 transition-transform duration-1000 ease-out rounded-lg mx-8"
				src="taco2.webp"
			/>
		{/if}
	</div>
	<div class="mt-20 flex flex-col items-center">
		<h1 class="text-2xl font-bold text-red-800">We're in the News</h1>
		<a
			href="/newsroom"
			class="rounded-full mt-8 duration-300 transition-all hover:bg-red-800 bg-black text-white font-bold text-center py-3 w-40"
		>
			Press Releases
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
					href="/newsroom"
					class="rounded-full duration-300 transition-all hover:bg-blue-800 bg-black text-white font-bold text-center py-3 px-6"
				>
					Visit our Blog
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
