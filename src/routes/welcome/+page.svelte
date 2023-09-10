<script>
	import { logoName } from '$lib/stores/brandStore';
	import { fly, blur } from 'svelte/transition';
	import va from '@vercel/analytics';
	let whereto = 'q4';
</script>


<section
	class="flex flex-col justify-center items-center h-full min-h-screen min-w-screen w-full bg-[#181f39] text-white overflow-x-hidden"
>
	<div
		in:blur={{ delay: 1100, duration: 500 }}
		out:blur={{ duration: 300 }}
		class=" flex flex-col items-center self-center"
	>
		<h1 class=" md:text-5xl text-3xl font-semibold text-center max-w-2xl flex flex-row">
			<span><img class="h-12 w-12" src="{logoName}.svg" alt={logoName} /></span>

			Welcome to Street Food Services
		</h1>
		<h2
			class="mt-6 md:text-xl font-bold text-lg text-opacity-80 text-white md:w-[30rem] w-[80vw] mx-auto text-center"
		>
			Which of the following are you?
		</h2>
	</div>
	<div
		class="grid grid-cols-1 md:grid-cols-3 md:gap-6 gap-2 mx-auto my-6 text-center text-[#181f39]"
	>
		<a
			in:blur={{ duration: 1000, delay: 200 }}
			out:fly={{ duration: 1000 ,x: -1000 }}
			class=" text-[#181f39] hover:shadow-stone-50 justify-between transition-all duration-500 h-24 md:h-72 p-4 w-72 md:w-52 bg-cyan-200 flex flex-col rounded-sm shadow-2xl bg-opacity-40 hover:bg-opacity-80"
			href="/welcome/q1"
		>
			<h1 class="text-lg font-black">A Food Truck Owner</h1>
			<!-- <h3 class="text-sm font-light"></h3> -->
		</a>

		<!-- spent 6 months building a product no one wants? Learn sooner -->
		<!-- Build multiple MVP's a month on a single subscription -->
		<a
			in:blur={{ duration: 1000, delay: 400 }}
			out:fly={{ duration: 1000, x: -1000 }}
			class="text-[#181f39] hover:shadow-stone-50 justify-between transition-all duration-500 h-24 md:h-72 p-4 w-72 md:w-52 bg-cyan-200 flex flex-col rounded-sm shadow-2xl bg-opacity-40 hover:bg-opacity-80"
			href="/welcome/q1"
		>
			<h1 class="text-lg font-black">An interested third party</h1>
			<!-- <h3 class="text-sm font-light">How to check if i qualify</h3> -->
		</a>

		<a
			in:blur={{ duration: 1000, delay: 600 }}
			out:fly={{ duration: 1000 ,x: -1000 }}
			class="text-[#181f39] hover:shadow-stone-50 justify-between transition-all duration-500 h-24 md:h-72 p-4 w-72 md:w-52 bg-cyan-200 flex flex-col rounded-sm shadow-2xl bg-opacity-40 hover:bg-opacity-80"
			href="/"
		>
			<h1 class="text-lg font-black">Uninterested completely</h1>
			<h3 class="text-sm font-light">But came to visit your award nominated site</h3>
		</a>
		<!-- Want to know how we make a remote dev team work so well? -->
		<!-- Book a call to learn about our Remote Team Handoff Program-->
	</div>
	<a target="_self" href="/" class="text-white mx-auto mt-6 opacity-50 underline">Skip for now</a>
</section>
