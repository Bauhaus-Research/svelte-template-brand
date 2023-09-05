<script>
	import AddOns from '$lib/components/AddOns.svelte';
	import ContactForm from '$lib/components/ContactForm.svelte';
	import FaqItem from '$lib/components/FaqItem.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import Nav from '$lib/components/Nav.svelte';
	import { faqItem, websiteServices } from '$lib/stores/brandStore';
	let paymentOPtions = ['visa', 'mastercard', 'amex', 'discover', 'applepay', 'gpay', 'paypal'];

	let ccPrice = 2000;
	let ccDisc = 5;
</script>

<!-- (<a href="#" class="text-blue-600 hover:underline">view all</a>) -->

<Nav innerHeight={400} scrollY={200} />
<section class=" bg-neutral-100 flex flex-col justify-evenly text-center pt-20 h-[150vh]">
	<h1 class="text-6xl font-bold">Pricing</h1>
	<div>
		<h3 class="md:text-2xl text-xl font-bold w-1/2 min-w-[23rem] mx-auto">
			No contracts, or hidden fees. Just simple plans built to work for real business needs.
		</h3>
		<h3 class="md:text-xl font-light w-1/2 px-10 mx-auto min-w-[20rem] text-sm">
			For additional suppport before making your purchase, ask ALBERT, its worth it.
		</h3>
	</div>
	<AddOns />
	<div>
		<h5 class="text-neutral-700 font-bold">
			For your security, all orders are processed via Stripe.
		</h5>
		<div class="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-7 gap-6 max-w-3xl mx-auto px-8 mt-10">
			{#each paymentOPtions as item}
				<img src="payments/{item}.svg" class="h-8" alt={item} />
			{/each}
		</div>
	</div>
</section>
<section
	id="testimonial"
	class="h-screen flex flex-col md:flex-row justify-evenly items-center bg-stone-700 mx-auto"
>
	<div
		class="rounded-xl p-1 w-[22rem] shadow-2xl md:w-96 group m-2 h-1/2 overflow-clip max-h-[30rem] hover:shadow-lg transition-all duration-500 bg-neutral-50 flex flex-col"
	>
		<img src="taco3.webp" alt="taco" class="rounded-xl" />
		<a
			href="/newsroom/9quwxqyebx"
			class="underline text-red-950 group-hover:text-red-600 px-4 transition-all duration-200"
			>Boosting Business: Street Food Services Helps Anchor Brewery's Food Truck</a
		>
		<p class="px-4">
			After previous issues with the food truck services, Atlas Brewing started to make a big change
		</p>
	</div>
	<div
		class="rounded-xl w-[22rem] shadow-lg md:w-[30rem] max-h-[30rem] m-2 h-1/2 bg-white flex flex-row"
	>
		<div class="flex flex-col justify-evenly h-full w-1/2 py-4 px-4">
			<h3 class="text-2xl font-bold text-start ">Concept Bundle</h3>
			<div>
				<h1 class="text-2xl font-light line-through text-red-900">${ccPrice}</h1>
				<h1 class="text-4xl font-bold">
					${ccPrice * ((100 - ccDisc) / 100)}<span class="text-sm">({ccDisc}% off)</span>
				</h1>
			</div>
			<div class="flex">
				<h1 class="text-xs font-light text-neutral-600">per concept / per month</h1>
			</div>
			<p class="text-xs font-semibold text-neutral-500">
				Lorem ipsum dolor sit amet consectetur adipisicing elit.
			</p>
			<p class="text-xs font-semibold text-neutral-500">Includes everything in: these plans</p>
			<a
				href="/"
				class="px-6 py-2 rounded-full text-center border-red-600 shadow-xl border-2 bg-red-900 hover:bg-opacity-90 duration-200 transition-all text-neutral-100 font-bold"
				>Get Started</a
			>
		</div>

		<div
			class="flex flex-col pl-2 justify-evenly h-[75%] my-auto w-1/2 border-l-2 text-xs sm:text-base border-neutral-500"
		>
			<div class="flex">
				<img src="checkmarks/check.svg" alt="check" class="w-6" />
				<h6 class="ml-2">Customized Website</h6>
			</div>
			<div class="flex">
				<img src="checkmarks/check.svg" alt="check" class="w-6" />
				<h6 class="ml-2">Branded Marketing Tools</h6>
			</div>
			<div class="flex">
				<img src="checkmarks/check.svg" alt="check" class="w-6" />
				<h6 class="ml-2">Annual Business Review</h6>
			</div>
			<div class="flex">
				<img src="checkmarks/check.svg" alt="check" class="w-6" />
				<h6 class="ml-2">Annual Website Redesign</h6>
			</div>
		</div>
	</div>
</section>

<section
	id="comparePlans"
	class="justify-start pt-24 mx-auto overflow-x-scroll items-start bg-neutral-100 flex flex-col text-center px-10"
>
	<div id="detailed-pricing" class="  mx-auto">
		<div class=" max-w-3xl min-w-[40rem] mx-auto">
			<div
				class="grid grid-cols-4 p-4 text-sm font-medium text-gray-900 bg-gray-100 border-t border-b border-gray-200 gap-x-16 dark:bg-gray-800 dark:border-gray-700 dark:text-white"
			>
				<div class="flex items-center">Features</div>
				<div>Hobby Edition</div>
				<div>Pro Edition</div>
				<div>Enterprise Edition</div>
			</div>

			{#each websiteServices as item}
				<div
					class="grid grid-cols-4 px-4 py-5 text-sm text-gray-700 border-b border-gray-200 gap-x-16 dark:border-gray-700"
				>
					<div class="text-gray-500">{item.Service}</div>
					<div class="mx-auto">
						<img src="checkmarks/{item.Basic}.svg" alt="{item.Basic} mark" />
					</div>
					<div class="mx-auto">
						<img src="checkmarks/{item.Standard}.svg" alt="{item.Standard} mark" />
					</div>
					<div class="mx-auto">
						<img src="checkmarks/{item.Premium}.svg" alt="{item.Premium} mark" />
					</div>
				</div>
			{/each}
			<div
				class="grid grid-cols-4 px-4 py-5 text-sm text-gray-700 border-b border-gray-200 gap-x-16 dark:border-gray-700"
			>
				<div class="text-gray-500 dark:text-gray-400" />
				<div>
					<a
						href="#"
						class="text-white block w-full bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-200 font-medium rounded-lg text-sm px-4 py-2.5 text-center"
						>Buy now</a
					>
				</div>
				<div>
					<a
						href="#"
						class="text-white block w-full bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-200 font-medium rounded-lg text-sm px-4 py-2.5 text-center"
						>Buy now</a
					>
				</div>
				<div>
					<a
						href="#"
						class="text-white block w-full bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-200 font-medium rounded-lg text-sm px-4 py-2.5 text-center"
						>Buy now</a
					>
				</div>
			</div>
		</div>
	</div>
</section>
<section
	id="customPricing"
	class="h-screen justify-center items-center bg-neutral-100 flex flex-col text-center"
>
	<ContactForm />
</section>
<section class="flex flex-col justify-center py-24 items-center bg-neutral-100">
	<h1 class="text-3xl font-bold my-4 text-neutral-700">Frequently Asked Questions</h1>
	{#each faqItem as item}
		<FaqItem title={item.title} answer={item.answer} />
	{/each}
</section>
<Footer />
