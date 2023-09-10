<script>
	export let int = 1;
	export let max = 6;
</script>

<div class="flex flex-row items-center border-opacity-25 border-white group">
	{#each Array(max) as _, i}
		<div class="shadow-2xl w-10 h-1 bg-opacity-25 bg-white" />
		{#if i < int}
			<div
				class="shadow-2xl w-6 h-6 rounded-full border-4 border-opacity-25 border-white bg-white bg-opacity-50 delay-[{i *
					100}ms] duration-150 group-hover:bg-opacity-95"
			/>
		{:else}
			<div class="shadow-2xl w-6 h-6 rounded-full border-4 border-opacity-25 border-black" />
		{/if}
	{/each}
</div>
