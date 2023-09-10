<script>
	import ContactModal from '$lib/components/ContactModal.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import Logo from '$lib/components/Logo.svelte';
	import Nav from '$lib/components/Nav.svelte';
	import WyModal from '$lib/components/WYModal.svelte';
	import { contactOptions } from '$lib/stores/brandStore';
</script>

<Nav innerHeight={1000} scrollY={2000} />
<section class="flex flex-col min-h-screen justify-center items-center bg-neutral-100">
	<h1 class="font-bold text-5xl mb-12 mt-36 mx-6">Need Help? Here’s how you can reach us.</h1>
	<div class="flex lg:flex-row flex-col items-center lg:items-start justify-center w-full text-2xl">
		{#each contactOptions as item}
			<div
				class="max-w-[24rem] overflow-clip m-8 hover:-translate-y-6 hover:shadow-2xl duration-300 transition-all max-w-96 flex flex-col justify-center text-center bg-neutral-200 rounded-xl shadow-xl pb-12 pt-4 px-2"
			>
				<h3 class="font-bold">{item.title}</h3>
				<img class="h-20 w-20 self-center" src="{item.icon}.svg" alt={item.icon} />
				<p class="text-lg w-[24rem]">{@html item.p}</p>
				{#if item.title == 'Contact Form'}
					<ContactModal />
				{:else if item.title == 'Albert'}
					<WyModal />
				{/if}
			</div>
		{/each}
	</div>
</section>
<Footer />
