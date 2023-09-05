<script>
	import ContactForm from '$lib/components/ContactForm.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import Nav from '$lib/components/Nav.svelte';

	let innerHeight = 0;
	let scrollY = 1;

	/** @type {import('./$types').PageData} */
	export let data;
</script>

<Nav {innerHeight} {scrollY} />
<section
	class="bg-neutral-100 min-h-screen h-fit md:py-72 py-48 flex flex-col justify-center items-center overflow-x-clip"
>
	<div class="md:px-10 px-6 max-w-2xl">
		<article>
			<h3 class="text-red-900 font-bold text-xl">{data.date}</h3>
			<h1 class="my-4 font-bold text-5xl font-serif">{data.title}</h1>
			<!-- <h2 class="mt-12 italic font-light text-xl">{data.subtitle}</h2> -->
			<p class="my-8 font-light text-lg sm:text-xl">
				<span class="text-red-950 font-bold text-xl">{data.location}, {data.date} </span>
				{@html data.content}
			</p>
		</article>
		<ContactForm />
		<article>
			<h3 class="text-red-900 font-bold text-xl flex flex-col">Join Us on the Journey</h3>
			<p class=" font-light text-xl mb-8 mt-3">
				We invite you to join us on this delicious journey. Whether you're a food truck owner looking to revamp your online presence or a passionate foodie searching for your next culinary adventure, Street Food Services is here to serve you.<br>
				<br>
Let's bring your food truck's unique story to life, one pixel and one bite at a time. Together, we'll make sure your flavors are savored by the world.<br>
<br>
Hungry for success? Welcome to Street Food Services.
			</p>

			<a
				href="/mission"
				class="rounded-full mt-8 duration-300 transition-all items-center justify-center hover:bg-[#663399] group border-neutral-900 border-2 bg-neutral-50 shadow-md font-bold text-center py-3 max-w-48 w-full shadow-xl flex flex-row"
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
		</article>
	</div>
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
