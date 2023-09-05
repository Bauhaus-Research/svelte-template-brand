<script>
	import { blur } from 'svelte/transition';
	export let pageInt = 3.5;
	let scrollY = 0;
	let innerHeight = 0;
</script>

<svelte:window bind:scrollY bind:innerHeight />

<section class="h-min overflow-x-clip bg-neutral-100">
	<div class="flex flex-row items-center h-full justify-center w-full">
		{#if scrollY < innerHeight * pageInt && scrollY > innerHeight * (pageInt - 1.5)}
			<img
				alt=""
				in:blur={{ duration: 500 }}
				out:blur={{ duration: 100 }}
				style="transform: translate({-(scrollY - innerHeight * (pageInt - 1.5)) * 0.4}px,0)"
				class=" transition-transform duration-500 ease-out rounded-lg mx-8 h-60"
				src="taco3.webp"
			/>
			<img
				alt=""
				in:blur={{ duration: 500 }}
				out:blur={{ duration: 100 }}
				style="transform: translate({-(scrollY - innerHeight * (pageInt - 1.5)) * 0.4}px,0)"
				class=" transition-transform duration-500 ease-out rounded-lg mx-8 h-60"
				src="taco4.webp"
			/>
			<img
				alt=""
				in:blur={{ duration: 500 }}
				out:blur={{ duration: 100 }}
				style="transform: translate({-(scrollY - innerHeight * (pageInt - 1.5)) * 0.4}px,0)"
				class=" transition-transform duration-500 ease-out rounded-lg mx-8 h-60"
				src="taco5.webp"
			/>
			<img
				alt=""
				in:blur={{ duration: 500 }}
				out:blur={{ duration: 100 }}
				style="transform: translate({-(scrollY - innerHeight * (pageInt - 1.5)) * 0.4}px,0)"
				class=" transition-transform duration-500 ease-out rounded-lg mx-8 h-60"
				src="taco6.webp"
			/>
			<img
				alt=""
				in:blur={{ duration: 500 }}
				out:blur={{ duration: 100 }}
				style="transform: translate({-(scrollY - innerHeight * (pageInt - 1.5)) * 0.4}px,0)"
				class=" transition-transform duration-500 ease-out rounded-lg mx-8 h-60"
				src="taco7.webp"
			/>
		{/if}
	</div>
</section>
