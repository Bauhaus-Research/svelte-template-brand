<script>
	import { logoName } from '$lib/stores/brandStore';
	import { fly, blur } from 'svelte/transition';
	import Logo from './Logo.svelte';
	import PercentBar from './PercentBar.svelte';
	export let whereto = 'q2';
	export let bgcolor1 = 'bg-[#181f39]';
	export let txtcolor1 = 'text-[#181f39]';
	// export let txtcolor2 = 'text-neutral-900';
	export let textcolordark = 'text-stone-900';
	export let color3 = 'bg-[#19BEF0]';
	export let hover = 'hover:shadow-stone-200';
	export let int = 0;
	export let q =
		'Are you receiving financial aid from your state such as medicaid or low income subsidy?';
</script>

<section
	class="flex flex-col justify-center items-center h-full min-h-screen min-w-screen w-full {bgcolor1} text-neutral-900 overflow-x-hidden"
>
	<Logo tailwind="fill-stone-100 h-10 w-10 transition-all duration-300"/>
	<div transition:blur={{ duration: 300 }} class=" flex flex-col items-center self-center">
		<h1 class=" md:text-5xl text-3xl font-semibold text-center w-60" />
		<h2
			class="mt-6 md:text-xl {textcolordark} font-bold text-lg text-opacity-80 text-white md:w-[30rem] w-[80vw] mx-auto text-center h-16"
		>
			{q}
		</h2>
	</div>
	<div class="grid grid-cols-1 md:grid-cols-2 md:gap-6 gap-2 mx-auto my-6 text-center {txtcolor1}">
		<a
			in:fly={{ duration: 1000, x: 1000, delay: 1100 }}
			out:fly={{ duration: 1000, x: -1000 }}
			class="{hover}  justify-between transition-all duration-500 h-24 md:h-72 p-4 w-72 md:w-52 {color3} bg-opacity-40 flex flex-col rounded-sm shadow-2xl hover:bg-opacity-80"
			href="/welcome/{whereto}"
		>
			<h1 class="text-lg font-black">Yes</h1>
			<!-- <h3 class="text-sm font-light">Ready to launch</h3> -->
		</a>
		<a
			in:fly={{ duration: 1000, x: 1000, delay: 1300 }}
			out:fly={{ duration: 1000, x: -1000, delay: 200  }}
			class="{hover}  justify-between transition-all duration-500 h-24 md:h-72 p-4 w-72 md:w-52 {color3} bg-opacity-40 flex flex-col rounded-sm shadow-2xl hover:bg-opacity-80"
			href="/welcome/{whereto}"
		>
			<h1 class="text-lg font-black">No</h1>

			<!-- Is it time consuming juggling multiple client sites or is your team always out of sync on their deadlines?  -->
		</a>
		<!-- Want to know how we make a remote dev team work so well? -->
		<!-- Book a call to learn about our Remote Team Handoff Program-->
	</div>

	<PercentBar {int} />
	<a target="_self" href="/" class="text-neutral-900 mx-auto mt-6 opacity-50 underline">Skip for now</a>
</section>
