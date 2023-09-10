<script>
	import Footer from '$lib/components/Footer.svelte';
	import Nav from '$lib/components/Nav.svelte';
	import { blur, fly, slide } from 'svelte/transition';
	import { expoIn, expoOut, quadIn } from 'svelte/easing';
	import va from '@vercel/analytics';
	import { brandName, calendly, taglinehomepage, taglinehomepagepara } from '$lib/stores/brandStore';
	import Carousel from '$lib/components/Carousel.svelte';
	import Products from '$lib/components/Products.svelte';
	import HomePageItems from '$lib/components/HomePageItems.svelte';
	import PageScrollImage from '$lib/components/PageScrollImage.svelte';
	import Mockup from '$lib/components/Mockup.svelte';
	import VisitBlog from '$lib/components/VisitBlog.svelte';
	let brandWebsite = 'streetfoodservices.us';
	/**
	 * @type {number}
	 */
	let scrollY;
	/**
	 * @type {number}
	 */
	let innerHeight;

	let our_mission_p = `Unlocking the Flavorful World of Sizzling Web Designs and Savory Marketing for Your Business. Learn About Our Core Mission.
						`
  let sentence = `a person with a particular interest in food; a gourmet.
"Wow I'm glad that group of foodies came and found my restaurant, but now they won't leave"`;
  let letters = sentence.split('');
</script>

<svelte:window bind:scrollY bind:innerHeight />
<Nav {scrollY} {innerHeight} />


<div
	class="w-full h-screen bg-black -z-20 absolute top-0 left-0 overflow-hidden bg-left flex flex-row"
>
	<video
		muted
		playsinline
		autoplay
		loop
		class="w-full h-full object-cover opacity-20 overflow-hidden bg-left"
	>
		<source src="stockvid.webm" type="video/webm" />
		<source src="stockvid.mp4" type="video/mp4" />
	</video>
</div>

<section class="h-screen flex flex-col justify-end items-start overflow-hidden">
	<div class="flex flex-col opacity-100 px-6 sm:pl-10 mb-10 h-1/2 w-[100%] justify-between">
		<div
			in:fly={{ delay: 1300, duration: 500, y: 50, easing: expoOut }}
			out:blur={{ duration: 300, easing: quadIn }}
			class=" text-xl text-white font-semibold text-start max-w-lg mb-8 mx-auto flex-col-reverse flex md:flex-row justify-center items-center"
		>
			<a
				on:click={() => {
					va.track('view_plans');
				}}
				target="_self" 
				href="/pricing"

				class=" text-xl my-2 md:mx-2 mx-0 text-stone-400 hover:border-stone-100 hover:bg-stone-900 hover:text-stone-100  transition-colors duration-300 delay-75 text-center border-stone-400 font-semibold font-serif border-2 rounded-full px-8 py-2 w-60 shadow-xl"
			>
				View Plans
			</a>
			<a
				target="_blank"
				href={calendly}
				on:click={() => {
					va.track('contact_sales');
				}}
				class=" text-xl my-2 md:mx-2 mx-0 text-stone-100 bg-red-950 border-red-500 text-center transition-colors duration-300 delay-75 animate-pulse hover:animate-none font-semibold font-serif border-2 rounded-full px-8 py-2 w-60 shadow-xl"
			>
			Contact Sales
			</a>
		</div>
		<div
			in:fly={{ delay: 1000, duration: 500, y: 100, easing: expoOut }}
			out:blur={{ duration: 300, easing: quadIn }}
			class=" text-xl text-white font-semibold text-start max-w-lg ml-4"
		>
			<h1 class="text-4xl md:text-5xl text-stone-50 text-opacity-80 font-semibold font-serif">
				Web Services for Food Trucks
			</h1>
			<h2 class="text-lg sm:text-2xl lg:text-3xl text-stone-50 text-opacity-40 font-medium font-serif">
				Better Developer Experiences, One Byte at a Time
			</h2>
		</div>
	</div>
</section>
<section class="bg-neutral-100">
	<section class=" h-[175vh] grid grid-cols-2 py-36">
		<div class="col-span-2 h-60 w-full overflow-clip">
			<PageScrollImage pageInt={.2} />
		</div>
		{#if scrollY > innerHeight * 0.5}
			<div class="ml-10 md:ml-60 col-span-2 overflow-clip">
				<h1 out:blur in:fly={{ duration: 500, x: 300, y:300 }} class="font-bold text-xl text-blue-800">
					Our Mission
				</h1>
				<h1
					out:blur
					in:fly={{ duration: 500, delay:100, x: 300, y:300 }}
					class="font-light text-4xl md:text-5xl mt-10m sm:max-w-[70%] max-w-[90%] font-sans"
				>
				We Are Your <br> Gateway to the <br> 
				<div class="h-[2px] mt-2  max-w-96 min-w-fit bg-black"></div>
				<p class="h-36 min-h-fit border-b-[1px] border-black max-w-96  min-w-fit text-sm">
					<b class="font-serif font-bold text-3xl md:text-5xl">Foodie</b>
					{#if scrollY > innerHeight * 1.2}
					<span 
					transition:blur={{ duration: 500, }} class="text-sm md:text-lg font-semibold font-serif ml-4">[ foo-dee ]</span>
					{/if}
					<br> 
					{#if scrollY > innerHeight * 1}<i 
					transition:blur={{ duration: 500, }} class="text-xs md:text-lg align-text-top font-light">(noun)</i>
					{/if}
					<br>
					{#if scrollY > innerHeight * 1.1}
					<i class=" ml-8 text-xs md:text-sm text-end">

						{#each letters as letter, i }
  <span in:slide={{delay:(30*i)+100}} out:blur >{letter}</span>
{/each}
					</i>
					{/if}
				</p>

				</h1>
			</div>
			<div class="md:col-span-1 " />
			<div class=" w-auto flex-row flex mx-10 md:mx-0 sm:max-w-[70%] max-w-[90%] col-span-2 md:col-span-1 h-min">
				<div
				in:blur={{ duration: 300, delay:500 }} 
				class="h-min flex flex-col my-auto  font-medium text-lg">
					<p>
						{our_mission_p}
					</p>
					<a
						href="/mission"
						on:click={() => {
							va.track('our_mission');
						}}
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
			<div class="h-36 bg-transparent min-h-screen" />
		{/if}
	</section>
	<section class="h-screen col-span-2 flex flex-col justify-between ">
		<div class="w-full h-full justify-between mx-auto md:flex-row flex-col flex">
			<div class="overflow-clip aspect-video md:w-1/2 h-full md:h-full rounded-r-none mdrounded-r-xl">
				<div
					in:blur={{ duration: 1000 }}
					out:blur={{ duration: 300 }}
					style="transform: translate(0, {(scrollY - (innerHeight * 5) / 2 -100) * 0.25}px)"
					class="relative w-full h-[80%] my-auto md:rounded-r-lg "
				>
					<img
						class="absolute inset-0 w-full h-full object-cover z-10 transition-transform md:rounded-r-lg duration-500 ease-out"
						src="taco5.webp"
						alt="food stand at night"
					/>
				</div>
			</div>

			<div  class="max-w-lg self-center ml-4 my-auto text-start mx-auto">
				<h3 class="text-red-900 font-bold sm:text-xl text-base flex flex-col">About Us</h3>
				<p class=" font-light sm:text-lg text-sm mb-8 text-neutral-800">
					At Street Food Services, we're not just another web design and marketing agency. We're
					food enthusiasts, tech geeks, and marketing mavens, all rolled into one passionate team.
					Our mission? To serve up success for food truck businesses like yours.
				</p>
			</div>
		</div>
	</section>

	<section
		class="md:h-[500vh] h-[550vh] bg-neutral-800 grid grid-cols-1 md:grid-cols-2 overflow-x-clip"
	>
		<section class=" w-full col-span-2 md:col-span-1 md:h-screen sticky top-0 flex flex-col">
			<div class="flex flex-row items-start mt-16 justify-center w-full overflow-x-clip">
				<!-- {#if scrollY < innerHeight * 6 && scrollY > innerHeight * 3.25}
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
			{/if} -->
			</div>
			<div class="flex flex-col items-center">
				<Mockup {scrollY} start={innerHeight * 4} stagger={innerHeight * 4} />
				<!-- <h1 class="text-2xl font-bold text-red-800">Our Approach</h1>
			<a
			on:click={()=>{va.track('view_plans')}}
				href="/mission#approachlist"
				class="rounded-full m-8 duration-300 transition-all hover:bg-red-800 bg-black text-white font-bold text-center py-3 w-40"
			>
				View Plans
			</a> -->
			</div>
		</section>
		<section class="col-span-2 md:col-span-1 h-[500vh] md:h-full px-4">
			<div class="h-screen w-full text-end flex">
				<a
					href="/pricing#comparePlans"
					target="_self"
					on:click={() => {
						va.track('pricing_table');
					}}
					class="rounded-full self-center px-2 mx-1 duration-300 transition-all hover:bg-red-800 bg-black text-white font-bold text-center py-3 w-40"
				>
					Plans
				</a>
				<div class="w-96 self-center mx-auto">
					<h3 class="text-red-700 font-bold sm:text-xl text-base flex flex-col">Our Approach</h3>
					<p class=" font-light sm:text-lg text-sm mb-8 text-neutral-200">
						Our process is short. Request a feature through your cms then we'll handle the rest.
					</p>
				</div>
			</div>
			<div class="h-screen w-full text-start flex">
				<div class="w-96 self-center mx-auto">
					<h3 class="text-red-700 font-bold sm:text-xl text-base flex flex-col">Modular Development</h3>
					<p class=" font-light sm:text-lg text-sm mb-8 text-neutral-200">
						Our team follows a <strong class="font-black">Modular Development</strong> approach to make billing simple. You only pay for the services you need, and purge the components you dont.
					</p>
				</div>
			</div>
			<div class="h-screen w-full text-end flex">
				
				<div class="w-96 self-center mx-auto">
					<h3 class="text-red-700 font-bold sm:text-xl text-base flex flex-col">
						Hourly Allotment
					</h3>
					<p class=" font-light sm:text-lg text-sm mb-8 text-neutral-200">
						Sometimes, pricing can get a bit less clear cut in modules such as our SEO bundle. That's why each plan has their own set of hours which renew monthly.
					</p>
				</div>
			</div>
			<div class="h-screen w-full text-start flex">
				<div class="w-96 self-center mx-auto">
					<h3 class="text-red-700 font-bold sm:text-xl text-base flex flex-col">Our Perks</h3>
					<p class=" font-light sm:text-lg text-sm mb-8 text-neutral-200">
						How does this benefit you? Predictable billing and better tracking for services. It is easy to turn on or off a module in your personal CMS for your teams website.
					</p>
				</div>
			</div>
			<div class="h-screen w-full text-end flex">
				<div class="w-96 self-center mx-auto">
					<h3 class="text-red-700 font-bold sm:text-xl text-base flex flex-col">Custom Pricing</h3>
					<p class=" font-light sm:text-lg text-sm mb-8 text-neutral-200">
						You are able to pay for a custom plan if you would like a different form of payment, but we do reccomend trying it first!
					</p>
				</div>
			</div>
		</section>
	</section>
	<Carousel />


	<VisitBlog />
	
	<Footer />
</section>

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