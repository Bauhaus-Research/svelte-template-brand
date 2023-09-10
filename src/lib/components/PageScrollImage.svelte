<script>
	import { blur } from 'svelte/transition';
	export let pageInt = 3.5;
	let scrollY = 0;
	let innerHeight = 0;
</script>

<svelte:window bind:scrollY bind:innerHeight />

<section class="h-min overflow-x-clip bg-neutral-100">
	<div class="flex flex-row items-center h-full justify-center w-full">
		{#if scrollY > innerHeight * (pageInt )}
		<img
			alt="Previous Client"
			in:blur={{ duration: 500,delay: 0 }}
			out:blur={{ duration: 100 }}
			style="transform: translate({-(scrollY - innerHeight * (pageInt )-1000) * 0.4}px,0)"
			class=" transition-transform  duration-1000 ease-out rounded-lg mx-8 h-60"
			src="busown1.webp"
		/>
		<img
		alt="Previous Client"
			in:blur={{ duration: 500,delay: 50 }}
			out:blur={{ duration: 100 }}
			style="transform: translate({-(scrollY - innerHeight * (pageInt )-1000) * 0.4}px,0)"
			class=" transition-transform  duration-1000 ease-out rounded-lg mx-8 h-60"
			src="busown2.webp"
		/>
			<img
			alt="Previous Client"
				in:blur={{ duration: 500,delay: 100 }}
				out:blur={{ duration: 100 }}
				style="transform: translate({-(scrollY - innerHeight * (pageInt )-1000) * 0.4}px,0)"
				class=" transition-transform  duration-1000 ease-out rounded-lg mx-8 h-60"
				src="busown3.webp"
			/>
			<img
			alt="Previous Client"
				in:blur={{ duration: 500,delay: 150 }}
				out:blur={{ duration: 100 }}
				style="transform: translate({-(scrollY - innerHeight * (pageInt )-1000) * 0.4}px,0)"
				class=" transition-transform  duration-1000 ease-out rounded-lg mx-8 h-60"
				src="busown4.webp"
			/>
			<img
			alt="Previous Client"
				in:blur={{ duration: 500,delay: 200 }}
				out:blur={{ duration: 100 }}
				style="transform: translate({-(scrollY - innerHeight * (pageInt )-1000) * 0.4}px,0)"
				class=" transition-transform  duration-1000 ease-out rounded-lg mx-8 h-60"
				src="busown5.webp"
			/>
			<img

			alt="Previous Client"
				in:blur={{ duration: 500,delay: 250 }}
				out:blur={{ duration: 100 }}
				style="transform: translate({-(scrollY - innerHeight * (pageInt)-1000) * 0.4}px,0)"
				class=" transition-transform  duration-1000 ease-out rounded-lg mx-8 h-60"
				src="busown6.webp"
			/>
			<img

			alt="Previous Client"
				in:blur={{ duration: 500, delay: 300 }}
				out:blur={{ duration: 100 }}
				style="transform: translate({-(scrollY - innerHeight * (pageInt)-1000) * 0.4}px,0)"
				class=" transition-transform  duration-1000 ease-out rounded-lg mx-8 h-60"
				src="busown7.webp"
			/>
		{/if}
	</div>
</section>
