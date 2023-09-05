<script>
	import PercentBar from '$lib/components/PercentBar.svelte';
	import { fly, blur } from 'svelte/transition';
	let whereto = 'q2';
	let color1 = '#5082C3';
	let color2 = 'gray';
	let color3 = '19BEF0';
	let int = 0;
</script>

<section
	class="flex flex-col justify-center items-center h-full min-h-screen min-w-screen w-full bg-[#181f39] text-gray-200 overflow-x-hidden"
>
	<div
		in:blur={{ delay: 1100, duration: 500 }}
		out:blur={{ duration: 300 }}
		class=" flex flex-col items-center self-center"
	>
		<h1 class=" md:text-5xl text-3xl font-semibold text-center w-60">
			<img src="lettuce.svg" alt="" />
		</h1>
		<h2
			class="mt-6 md:text-xl font-bold text-lg text-opacity-80 text-white md:w-[30rem] w-[80vw] mx-auto text-center h-16"
		>
			Are you receiving financial aid from your state such as medicaid or low income subsidy?
		</h2>
	</div>
	<div
		class="grid grid-cols-1 md:grid-cols-2 md:gap-6 gap-2 mx-auto my-6 text-center text-[#18392b]"
	>
		<a
			in:fly={{ duration: 1000, x: 1000, delay: 1100 }}
			out:fly={{ duration: 1000, x: -1000 }}
			class="text-[#18392b] hover:shadow-stone-50 justify-between transition-all duration-500 h-24 md:h-72 p-4 w-72 md:w-52 bg-[#19BEF0] bg-opacity-40 flex flex-col rounded-sm shadow-2xl hover:bg-opacity-80"
			href="/welcome/{whereto}"
		>
			<h1 class="text-lg font-black">Yes</h1>
			<!-- <h3 class="text-sm font-light">Ready to launch</h3> -->
		</a>

		<!-- spent 6 months building a product no one wants? Learn sooner -->
		<!-- Build multiple MVP's a month on a single subscription -->

		<!-- Don't start with a dev team, use us for a few months instead. Cancel anytime. -->
		<a
			in:fly={{ duration: 1000, x: 1000, delay: 1300 }}
			out:fly={{ duration: 1000, x: -1000 }}
			class="text-[#18392b] hover:shadow-stone-50 justify-between transition-all duration-500 h-24 md:h-72 p-4 w-72 md:w-52 bg-[#19BEF0] bg-opacity-40 flex flex-col rounded-sm shadow-2xl hover:bg-opacity-80"
			href="/welcome/{whereto}"
		>
			<h1 class="text-lg font-black">No</h1>

			<!-- Is it time consuming juggling multiple client sites or is your team always out of sync on their deadlines?  -->
		</a>
		<!-- Want to know how we make a remote dev team work so well? -->
		<!-- Book a call to learn about our Remote Team Handoff Program-->
	</div>
	<div
		class="flex flex-row items-center border-opacity-25 border-white group"
		in:blur={{ duration: 300, delay: 2000 }}
	>
		{#if int >= 0}
			<div
				class="shadow-2xl w-6 h-6 rounded-full bg-opacity-50 bg-white group-hover:bg-opacity-100 transition-all duration-150"
			/>
		{:else}
			<div class="shadow-2xl w-10 h-1 bg-opacity-25 bg-white" />
			<div class="shadow-2xl w-6 h-6 rounded-full border-4 border-opacity-25 border-white" />
		{/if}
		{#if int >= 1}
			<div class="shadow-2xl w-10 h-1 bg-opacity-25 bg-white" />
			<div
				class="shadow-2xl w-6 h-6 rounded-full bg-opacity-50 bg-white group-hover:bg-opacity-100 transition-all duration-150 delay-100"
			/>
		{:else}
			<div class="shadow-2xl w-10 h-1 bg-opacity-25 bg-white" />
			<div class="shadow-2xl w-6 h-6 rounded-full border-4 border-opacity-25 border-white" />
		{/if}
		{#if int >= 2}
			<div class="shadow-2xl w-10 h-1 bg-opacity-25 bg-white" />
			<div
				class="shadow-2xl w-6 h-6 rounded-full bg-opacity-50 bg-white group-hover:bg-opacity-100 transition-all duration-150 delay-150"
			/>
		{:else}
			<div class="shadow-2xl w-10 h-1 bg-opacity-25 bg-white" />
			<div class="shadow-2xl w-6 h-6 rounded-full border-4 border-opacity-25 border-white" />
		{/if}
		{#if int >= 3}
			<div class="shadow-2xl w-10 h-1 bg-opacity-25 bg-white" />
			<div
				class="shadow-2xl w-6 h-6 rounded-full bg-opacity-50 bg-white group-hover:bg-opacity-100 transition-all duration-150 delay-200"
			/>
		{:else}
			<div class="shadow-2xl w-10 h-1 bg-opacity-25 bg-white" />
			<div class="shadow-2xl w-6 h-6 rounded-full border-4 border-opacity-25 border-white" />
		{/if}
	</div>
	<a href="/" class="text-{color2} mx-auto mt-6 opacity-50 underline">Skip for now</a>
</section>
