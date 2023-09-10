<script>
	import ContactForm from '$lib/components/ContactForm.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import Nav from '$lib/components/Nav.svelte';
	import { calendly } from '$lib/stores/brandStore';
	import va from '@vercel/analytics';
</script>

<Nav innerHeight={100} scrollY={100} />
<section class="min-h-screen h-full bg-neutral-100 grid md:grid-cols-2 grid-cols-1 overflow-clip">
	<div
		class="md:h-full h-4/12 flex flex-col text-3xl sm:text-4xl md:text-6xl font-extrabold justify-center items-center md:mt-0 mt-36 md:items-start md:mx-12 mx-4 text-start"
	>
		<h1>Talk to Ryan</h1>
		<h2 class="text-2xl font-light">Start your first campaign risk-free</h2>
	</div>
	<div
		class="md:h-full my-12 mx-auto md:mx-0 w-min h-8/12 flex flex-col justify-center items-center"
	>
		<div
			class="h-8 border-green-800 border-2 bg-green-500 text-green-100 flex justify-center text-center font-bold w-full rounded-xl shadow-md mb-2"
		>
			<img src="coin.svg" alt="coin" class="mr-4" />
			<h3>30 Day Money Back Guarantee</h3>
		</div>
		<ContactForm />
	</div>
</section>
<section />
<section
	class="flex flex-col justify-end items-center bg-neutral-100 h-[30rem] overflow-x-scroll px-4"
>
	<div class="grid grid-cols-3 gap-2 w-[60rem] h-min snap-x snap-proximity mx-auto">
		<div class="h-60 rounded-xl shadow-lg p-4 flex flex-col justify-between">
			<h3 class="font-bold text-2xl">Get the most of your time</h3>
			<p class="font-light text-lg">
				Learn about some of our insights on the technologies used in the industry
			</p>
		</div>
		<div class="h-60 rounded-xl shadow-lg p-4 flex flex-col justify-between">
			<h3 class="font-bold text-2xl">Save Money on our insights</h3>
			<p class="font-light text-lg">
				Get help on some of the fees to avoid when using popular POS systems and how <strong
					>our software solutions</strong
				> can fix that
			</p>
		</div>
		<div class="h-60 rounded-xl shadow-lg p-4 flex flex-col justify-between">
			<h3 class="font-bold text-2xl">Take Action</h3>
			<p class="font-light text-lg">
				We’ll set up your first campaign together so you can launch with confidence.
			</p>
		</div>
	</div>
	<div
		class="flex sticky left-0 flex-col h-min sm:flex-row px-12 justify-between max-w-5xl w-full my-auto md:mx-auto"
	>
		<h3 class="font-bold text-2xl sm:text-3xl md:text-4xl font-serif mr-4">
			Need guidance for a campaign that’s already up and running?
		</h3>
		<a
			href="/resources"
			on:click={() => {
				va.track('start_today');
			}}
			class=" text-sm sm:text-xl py-2 text-red-800 mr-3 border-red-500 my-auto text-center transition-colors duration-300 delay-75 font-semibold font-serif border-2 rounded-full px-8 shadow-xl"
		>
			Resources
		</a>
	</div>
</section>
<section class="h-screen bg-neutral-800 grid md:grid-cols-2 grid-cols-1">
	<div class="h-full" />
	<div class="flex flex-col justify-center">
		<h1 class="text-white font-bold text-3xl sm:text-4xl md:text-6xl font-serif max-w-lg">
			We’re excited to hear from you.
		</h1>
		<div class="grid grid-cols-2 gap-2 max-w-lg">
			<a
				on:click={() => {
					va.track('see_plans');
				}}
				href="/support"
				class=" text-sm sm:text-lg md:text-xl my-2 md:mx-2 mx-0 py-2 text-stone-100 bg-red-950 border-red-500 text-center transition-colors duration-300 delay-75 animate-pulse hover:animate-none font-semibold font-serif border-2 rounded-full shadow-xl"
			>
				Get Support
			</a>
			<a
				target="_self" href="/pricing"
				on:click={() => {
					va.track('schedule_call');
				}}
				class=" text-sm sm:text-xl my-2 text-red-800 mr-3 border-red-500 text-center transition-colors duration-300 delay-75 font-semibold font-serif border-2 rounded-full px-8 py-2 w-48 shadow-xl"
			>
            See Plans
			</a>
		</div>
	</div>
</section>
<section
	class="h-96 bg-gradient-to-tr from-red-800 via-80% via-orange-600 to-amber-500 text-2xl sm:text-4xl font-bold text-white flex flex-col justify-center items-center"
>
	<h2 class="max-w-5xl mx-6">
		Accept your invite to join the most innovative team of web developers that you've ever met
	</h2>
	<div class="flex justify-between max-w-5xl w-full items-center">
		<h6 class="text-sm sm:text-xl font-light ml-3">Ready to join?</h6>
		<a
			href="{calendly}"
            target="_blank"
			on:click={() => {
				va.track('start_today');
			}}
			class=" text-sm sm:text-xl my-2 text-stone-100 mr-3 bg-red-950 border-red-500 text-center transition-colors duration-300 delay-75 animate-pulse hover:animate-none font-semibold font-serif border-2 rounded-full px-8 py-2 w-48 shadow-xl"
		>
			Get Started
		</a>
	</div>
</section>
<Footer />
