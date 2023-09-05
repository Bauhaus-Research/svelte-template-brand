<script>
	export let open = true;

	export let scrollY = 0;
</script>

<nav
	class="lg:hidden self-start pb-4 -translate-y-2.5 p-1"
	on:click={() => (open = !open)}
	on:keydown={() => (open = !open)}
>
	<button class="text-gray-500 w-10 h-min relative focus:outline-none">
		<span class="sr-only">Open main menu</span>
		<div class="block w-8 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
			<span
				aria-hidden="true"
				class="block absolute h-1 w-8 {scrollY > 10 || open == true
					? 'bg-red-700'
					: 'bg-white group-hover:bg-red-700'} transform transition duration-500 ease-in-out"
				class:rotate-45={open}
				class:-translate-y-1.5={!open}
			/>
			<span
				aria-hidden="true"
				class="block absolute h-1 w-8 {scrollY > 10 || open == true
					? 'bg-red-700'
					: 'bg-white group-hover:bg-red-700'}  transform transition duration-500 ease-in-out"
				class:opacity-0={open}
			/>
			<span
				aria-hidden="true"
				class="block absolute h-1 w-8 {scrollY > 10 || open == true
					? 'bg-red-700'
					: 'bg-white group-hover:bg-red-700'}  transform transition duration-500 ease-in-out"
				class:-rotate-45={open}
				class:translate-y-1.5={!open}
			/>
		</div>
	</button>
</nav>
