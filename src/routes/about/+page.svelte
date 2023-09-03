<script>
	import Footer from '$lib/components/Footer.svelte';
	import Nav from '$lib/components/Nav.svelte';
	import { blur, fly } from 'svelte/transition';
	import { quadIn } from 'svelte/easing';
	import ContactModal from '$lib/components/ContactModal.svelte';
	import { aboutUs } from '$lib/stores/brandStore';
	let introText = 'Make your home more like home';
	let scrollY = 0;
	let innerHeight = 0;
</script>

<svelte:window bind:scrollY bind:innerHeight />
<Nav {scrollY} {innerHeight} />
<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<div
	class="w-full lg:h-screen h-[35rem] bg-black -z-20 absolute top-0 left-0 overflow-hidden bg-left flex flex-row"
>
	<video
		muted
		playsinline
		autoplay
		loop
		class="w-full h-full object-cover opacity-30 overflow-hidden bg-left"
	>
		<source src="woodyoupromo.webm" type="video/webm" />
		<source src="stockvid.mp4" type="video/mp4" />
	</video>
</div>

<section class="h-[50rem] md:h-screen flex flex-col justify-end md:justify-center overflow-hidden">
	<div
		class="flex flex-col md:flex-row justify-between items-center md:items-start lg:items-center opacity-100 mx-10"
	>
		<div
			in:fly={{ delay: 300, duration: 300, x: 100, easing: quadIn }}
			out:fly={{ duration: 300, x: 100, easing: quadIn }}
			class=" text-xl text-white font-semibold mx-auto text-start max-w-lg mb-8 md:md-0"
		>
			<h3 class=" text-xl mb-6 font-semibold mx-auto text-star text-red-500">Our Mission</h3>
			<h1 class=" text-4xl text-white font-semibold mx-auto text-start font-serif">
				{introText}
			</h1>
		</div>
		<div
			transition:blur={{ duration: 120 }}
			class="max-w-xs w-[80vw] bg-red-900 text-white font-light rounded-lg h-[32rem] justify-evenly flex flex-col px-10 shadow-inner"
		>
			{#each aboutUs as item, i}
				<div in:blur={{ delay: 1000 + i * 1200, duration: 1000 }}>
					<img alt={item.icon} src={item.icon} class="w-20 max-h-14" />
					<h2 class="font-bold">{item.title}</h2>
					<p>{item.subtitle}</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<section class="w-full h-screen mx-auto flex flex-col justify-center items-center overflow-clip">
	<div class="grid grid-cols-2 mt-12 h-min lg:w-3/4">
		<h2 class="text-2xl col-span-2 font-semibold text-gray-800 mb-4 text-center">
			<strong class="text-4xl font-bold">Discover Anjo Foodtruck</strong> <br />Crafting a Legacy of
			Puerto Rican Greatness
		</h2>
		<div class="col-span-1 mr-4">
			<!-- Content for the first column -->
			<p class="text-gray-600 mb-6">
				Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint, eligendi? Labore dignissimos
				quia magni eaque dolore molestias. Aperiam provident nemo quia culpa exercitationem,
				laudantium officiis, similique aspernatur cupiditate cum corporis. Lorem ipsum dolor, sit
				amet consectetur adipisicing elit. Sint, eligendi? Labore dignissimos quia magni eaque
				dolore molestias. Aperiam provident nemo quia culpa exercitationem, laudantium officiis,
				similique aspernatur cupiditate cum corporis. Lorem ipsum dolor, sit amet consectetur
				adipisicing elit. Sint, eligendi? Labore dignissimos quia magni eaque dolore molestias.
				Aperiam provident nemo
			</p>

			<!-- Rest of the content for the first column -->
		</div>
		<div class="col-span-1 ml-4">
			<h1>Anjo Foodtruck embodies...</h1>
			<p class="text-gray-600 mb-6">
				Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint, eligendi? Labore dignissimos
				quia magni eaque dolore molestias. Aperiam provident nemo quia culpa exercitationem,
				laudantium officiis, similique aspernatur cupiditate cum corporis. Lorem ipsum dolor, sit
				amet consectetur adipisicing elit. Sint, eligendi? Labore dignissimos quia magni eaque
				dolore molestias. Aperiam provident nemo quia culpa exercitationem, laudantium officiis,
				similique aspernatur cupiditate cum corporis. Lorem ipsum dolor, sit amet consectetur
				adipisicing elit. Sint, eligendi? Labore dignissimos quia magni eaque dolore molestias.
				Aperiam provident nemo
			</p>
		</div>
	</div>
	<div class="flex flex-row items-center h-full justify-center w-full">
		{#if scrollY < innerHeight * 3 && scrollY > innerHeight * 0.25}
			<img
				alt=""
				in:blur={{ duration: 500 }}
				out:blur={{ duration: 100 }}
				style="transform: translate({-(scrollY - innerHeight / 2) * 0.4}px,0)"
				class=" transition-transform duration-500 ease-out rounded-lg mx-8 h-60"
				src="taco1.webp"
			/>
			<img
				alt=""
				in:blur={{ duration: 500 }}
				out:blur={{ duration: 100 }}
				style="transform: translate({-(scrollY - innerHeight / 2) * 0.4}px,0)"
				class=" transition-transform duration-500 ease-out rounded-lg mx-8 h-60"
				src="taco2.webp"
			/>
			<img
				alt=""
				in:blur={{ duration: 500 }}
				out:blur={{ duration: 100 }}
				style="transform: translate({-(scrollY - innerHeight / 2) * 0.4}px,0)"
				class=" transition-transform duration-500 ease-out rounded-lg mx-8 h-60"
				src="taco3.webp"
			/>
			<img
				alt=""
				in:blur={{ duration: 500 }}
				out:blur={{ duration: 100 }}
				style="transform: translate({-(scrollY - innerHeight / 2) * 0.4}px,0)"
				class=" transition-transform duration-500 ease-out rounded-lg mx-8 h-60"
				src="taco4.webp"
			/>
			<img
				alt=""
				in:blur={{ duration: 500 }}
				out:blur={{ duration: 100 }}
				style="transform: translate({-(scrollY - innerHeight / 2) * 0.4}px,0)"
				class=" transition-transform duration-500 ease-out rounded-lg mx-8 h-60"
				src="taco5.webp"
			/>
			<img
				alt=""
				in:blur={{ duration: 500 }}
				out:blur={{ duration: 100 }}
				style="transform: translate({-(scrollY - innerHeight / 2) * 0.4}px,0)"
				class=" transition-transform duration-500 ease-out rounded-lg mx-8 h-60"
				src="taco6.webp"
			/>
			<img
				alt=""
				in:blur={{ duration: 500 }}
				out:blur={{ duration: 100 }}
				style="transform: translate({-(scrollY - innerHeight / 2) * 0.4}px,0)"
				class=" transition-transform duration-500 ease-out rounded-lg mx-8 h-60"
				src="taco7.webp"
			/>
		{/if}
	</div>
</section>
<ContactModal />

<section id="locations" class="grid lg:grid-cols-2 grid-cols-1 lg:h-screen pt-16">
	<div class="bg-gray-400 h-96 lg:h-full">
		<div class="bg-gray-400 h-96 lg:h-full">
			<iframe
				src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14091.76261907711!2d-82.4801619!3d27.995712!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c2c343a1c2abb3%3A0xd03eb43a7d10ddbb!2sAntojitos%20Aguilar%20Food%20Truck!5e0!3m2!1sen!2sus!4v1693679148922!5m2!1sen!2sus"
				width="600"
				height="450"
				style="border:0;"
				loading="lazy"
				referrerpolicy="no-referrer-when-downgrade"
				title="Anjo Foodtruck map 2"
				class="bg-gray-400 h-96 lg:h-full w-full"
			/>
		</div>
	</div>
	<div class="bg-white flex flex-col justify-center items-center text-start overflow-x-auto">
		<div
			class="h-48 sm:w-[30rem] w-[90%] bg-gray-400 rounded-lg border-2 border-black flex flex-row"
		>
			<div
				class="h-full w-1/2 row-span-1 bg-black bg-cover bg-center"
				style="background-image: url('taco5.webp');"
			/>
			<div class="h-full w-1/2 row-span-1 flex-col flex justify-center items-start px-4">
				<h1 class="font-bold sm:text-xl text-lg">Anjo Foodtruck</h1>
				<div class="font-light text-xs">
					<h1>Hours</h1>
					<h1>Location</h1>
					<h1>Phone</h1>
				</div>
			</div>
		</div>
	</div>
</section>
<Footer />
