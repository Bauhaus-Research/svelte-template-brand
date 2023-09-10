<script>
	/**
	 * @type {number}
	 */
	export let scrollY;
	export let start = 1050;
	export let stagger = 15;
	let yellow = false;
	let green = true;

	function red() {
		const element = document.getElementById('div-02');
		if (element) element.remove();
	}
</script>

<div
	id="div-02"
	class=" {yellow ? 'h-12' : 'h-72'} w-96 overflow-clip transition-all duration-300 {green
		? 'scale-100'
		: 'scale-50'} rounded-lg shadow-2xl group border-[1px] border-white flex-col flex justify-start transition-all duration-500 {scrollY >
	start
		? 'border-opacity-50'
		: 'border-opacity-0'}"
>
	<div
		class="h-12 w-full border-b-[1px] flex flex-row transition-all items-center border-white duration-500 {scrollY >
		start
			? 'opacity-50'
			: 'opacity-0'}"
	>
		<div class="flex flex-row items-center">
			<div
				on:click={red}
				on:keydown={red}
				class="h-3 w-3 rounded-full hover:scale-125 hover:bg-red-300 bg-red-500 ml-4 transition-all duration-500 {scrollY >
				start + 0.125 * stagger
					? 'opacity-100'
					: 'opacity-0'}"
			/>

			<div
				on:click={() => {
					yellow = !yellow;
				}}
				on:keydown={() => {
					yellow = !yellow;
				}}
				class="h-3 w-3 rounded-full hover:scale-125 hover:bg-amber-300 bg-amber-500 ml-2 transition-all duration-500 {scrollY >
				start + 0.375 * stagger
					? ' opacity-100'
					: 'opacity-0'}"
			/>

			<div
				on:click={() => {
					green = !green;
				}}
				on:keydown={() => {
					green = !green;
				}}
				class="h-3 w-3 rounded-full hover:scale-125 hover:bg-green-300 bg-green-500 ml-2 transition-all duration-500 {scrollY >
				start + 0.5 * stagger
					? 'opacity-100'
					: 'opacity-0'}"
			/>
		</div>
		<div
			class="flex {scrollY > start + 0.8 * stagger
				? 'text-neutral-100'
				: ''} flex-row group-hover:text-white transition-colors duration-200 items-center w-40 h-8 rounded-md ml-12 left-0 right-0 mx-auto self-center justify-center text-sm bg-white bg-opacity-20"
		>
			{#if scrollY > start + 0.7 * stagger}
				yoursite.com
			{:else}
				localhost:3000
			{/if}
		</div>
	</div>
	<div
		class="p-6 grid grid-cols-2 {scrollY > start + 0.9 * stagger
			? 'bg-red-800 transition-colors duration-300'
			: ''} {yellow ? 'hidden' : ''} "
	>
		<div class="col-span-2 flex flex-col justify-start items-center mb-3">
			<div
				class="h-12 mb-3 w-60 rounded-full bg-white bg-opacity-50 transition-all duration-500 {scrollY >
				start + 0.45 * stagger
					? 'opacity-100'
					: 'opacity-0'}"
			/>
			<div
				class="h-3 mb-1 w-48 rounded-full bg-white bg-opacity-20 transition-all duration-500 {scrollY >
				start + 0.5 * stagger
					? 'opacity-100'
					: 'opacity-0'}"
			/>
			<div
				class="h-3 mb-1 w-36 rounded-full bg-white bg-opacity-20 transition-all duration-500 {scrollY >
				start + 0.52 * stagger
					? 'opacity-100'
					: 'opacity-0'}"
			/>
			<div
				class="h-3 mb-1 w-24 rounded-full bg-white bg-opacity-20 transition-all duration-500 {scrollY >
				start + 0.55 * stagger
					? 'opacity-100'
					: 'opacity-0'}"
			/>
		</div>
		<div class="col-span-1 flex flex-col justify-start items-center">
			<div
				class="h-2 mb-1 w-24 rounded-full bg-white bg-opacity-10 transition-transform duration-500 {scrollY >
				start + 0.5 * stagger
					? ''
					: 'scale-x-0'}"
			/>

			<div
				class="h-2 mb-1 w-24 rounded-full bg-white bg-opacity-10 transition-transform duration-500 {scrollY >
				start + 0.58 * stagger
					? ''
					: 'scale-x-0'}"
			/>
			<div
				class="h-2 mb-1 w-24 rounded-full bg-white bg-opacity-10 transition-transform duration-500 {scrollY >
				start + 0.6 * stagger
					? ''
					: 'scale-x-0'}"
			/>
			<div
				class="h-2 mb-1 w-24 rounded-full bg-white bg-opacity-10 transition-transform duration-500 {scrollY >
				start + 0.63 * stagger
					? ''
					: 'scale-x-0'}"
			/>
			<div
				class="h-2 mb-1 w-6 rounded-full {scrollY > start + 0.8 * stagger
					? ' transition-colors duration-300'
					: 'bg-stone-100 transition-colors duration-300'} bg-opacity-40 transition-all duration-500 {scrollY >
				start + 0.5 * stagger
					? ' opacity-100'
					: '-translate-x-20 opacity-0'}"
			/>
		</div>
		<div class="col-span-1 flex flex-col justify-start items-center">
			<div
				class="h-16 mb-1 w-36 rounded-md bg-white bg-opacity-20 transition-all duration-500 transla {scrollY >
				start + 0.5 * stagger
					? ' opacity-100'
					: 'translate-scrollY-5 opacity-0'}"
			>
				<div
					class="{scrollY > start + 0.8 * stagger
						? ' opacity-100'
						: 'translate-y-20 opacity-0'} transition-all duration-300 h-20 w-20"
				>
					<img src="taco10.webp" alt="taco item" />
				</div>
			</div>
		</div>
	</div>
</div>
