<script>
	import PercentBar from '$lib/components/PercentBar.svelte';
	import { logoName } from '$lib/stores/brandStore';
	import { fly, blur } from 'svelte/transition';
	export let whereto = 'q2';
	export let color1 = '#19BEF0';
	export let color2 = '#18392b';
	export let text_light = false;
	export let int = 0;
	export let title =
		'Are you receiving financial aid from your state such as medicaid or low income subsidy?';
</script>

<section
	class="flex flex-col justify-center items-center h-full min-h-screen min-w-screen w-full bg-[{color2}] 5 overflow-x-hidden"
>
	<div
		in:blur={{ delay: 1100, duration: 500 }}
		out:blur={{ duration: 300 }}
		class=" flex flex-col items-center self-center"
	>
		<h1 class=" md:text-5xl text-3xl font-semibold text-center w-60">
			<img src="{logoName}.svg" alt={logoName} />
		</h1>
		<h2
			class="mt-6 md:text-xl font-bold text-lg {text_light
				? 'text-white'
				: 'text-black'} md:w-[30rem] w-[80vw] mx-auto text-center h-16"
		>
			{title}
		</h2>
	</div>
	<div
		class="grid grid-cols-1 md:grid-cols-2 md:gap-6 gap-2 mx-auto my-6 text-center text-[{color2}]"
	>
		<a
			in:fly={{ duration: 1000, x: 1000, delay: 1100 }}
			out:fly={{ duration: 1000, x: -1000 }}
			class="text-[{color2}] hover:{text_light
				? 'shadow-stone-50'
				: 'shadow-stone-950'} justify-between transition-all duration-500 h-24 md:h-72 p-4 w-72 md:w-52 bg-[{color1}] bg-opacity-40 flex flex-col rounded-sm shadow-2xl hover:bg-opacity-80"
			href="/welcome/{whereto}"
		>
			<h1 class="text-lg font-black">Yes</h1>
		</a>
		<a
			in:fly={{ duration: 1000, x: 1000, delay: 1100 }}
			out:fly={{ duration: 1000, x: -1000 }}
			class="text-[{color2}] hover:{text_light
				? 'shadow-stone-50'
				: 'shadow-stone-950'} justify-between transition-all duration-500 h-24 md:h-72 p-4 w-72 md:w-52 bg-[{color1}] bg-opacity-40 flex flex-col rounded-sm shadow-2xl hover:bg-opacity-80"
			href="/welcome/{whereto}"
		>
			<h1 class="text-lg font-black">No</h1>
		</a>
	</div>

	<PercentBar {int} />
	<a target="_self" href="/" class="text-{color2} mx-auto mt-6 opacity-50 underline">Skip for now</a>
</section>
