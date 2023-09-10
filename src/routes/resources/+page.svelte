<script>
	import Footer from '$lib/components/Footer.svelte';
	import Ludwidg from '$lib/components/Ludwidg.svelte';
	import Nav from '$lib/components/Nav.svelte';
	import { contentDown } from '$lib/stores/brandStore';
</script>

<Nav innerHeight={1000} scrollY={2000} />

<section
	class="min-h-screen px-5 mx-auto overflow-clip sm:px-10 md:px-20 gap-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 pt-24 bg-neutral-100"
>
	<h1 class="text-6xl text-center font-bold col-span-full my-4">Resources</h1>
	<p class="text-xl text-center font-light col-span-full my-4">
		From our great minds to yours. Actionable insights to jetstart your business.
	</p>
	{#each contentDown as items}
		<a target="_self" href="/resources/{items.title}">
			<div class="w-72 mx-auto pb-8 text-xl font-bold text-opacity-60 text-black">
				<Ludwidg
				img={items.image}/>
				<!-- <img class="h-72 w-72" src={items.image} alt={items.image} /> -->
				{items.title}
			</div>
		</a>
	{/each}
</section>

<Footer />
