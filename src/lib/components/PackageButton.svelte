<script>
	/**
	 * @type {any}
	 */
	export let price = 110;
	/**
	 * @type {any}
	 */
	export let linkto;

	export let calendly = 'https://calendly.com/bauhausresearch/flex-chat';
	export let title = 'Plus Website';
	export let tagline = '';
	export let setupfee = '';
	export let discountAmt = 0;
	export let features = `
    <li>Seo Optimized</li>
            <li>Responsive Mobile & Desktop Design</li>
            <li>Forms for Newsletters, job inquires, etc</li>`;
</script>

<div
	class=" rounded-xl bg-neutral-100 hover:shadow-2xl shadow-xl snap-center h-min w-min mx-4 hover:-translate-y-5 transition-all duration-300"
>
	{#if tagline.length > 1}
		<div
			class="h-10 bg-red-900 rounded-t-xl flex flex-row justify-center items-center text-center font-bold text-white"
		>
			Most Popular
		</div>
	{/if}
	<div
		class="bg-neutral-200 {tagline.length > 1
			? 'rounded-t-none'
			: 'rounded-t-xl'} mb-[1px] h-72 w-72 px-6 flex flex-col justify-evenly"
	>
		<h1 class="text-3xl font-light text-start ">{title}</h1>
		{#if discountAmt > 0}
			<div class="flex flex-col">
				<h1 class="text-2xl font-light line-through text-red-900">${price + discountAmt}</h1>
				<h1 class="text-4xl font-bold">${price}</h1>
				<div class="flex">
					<h1 class="text-sm font-light text-neutral-600">per concept / per month</h1>
				</div>
			</div>
		{:else if price === 'Contact Us'}
			<div class="flex flex-col text-start">
				<h1 class="text-4xl text-neutral-500">
					{price}
				</h1>
				<div class="flex">
					<h1 class="text-sm font-light text-neutral-600">Flexible Pricing Plan</h1>
				</div>
			</div>
		{:else}
			<div class="flex flex-col text-start">
				<h1 class="text-4xl font-bold">
					${price}
				</h1>
				<div class="flex">
					<h1 class="text-sm font-light text-neutral-600">/ per month + {setupfee} set-up fee</h1>
				</div>
			</div>{/if}
		<a
			href={linkto}
			class="px-6 py-2 bg-neutral-600 rounded-full {tagline.length > 1
				? 'bg-red-900 text-neutral-100'
				: 'bg-neutral-600 text-neutral-300'}  font-bold">Get Started</a
		>
		<p class="text-xs font-semibold text-neutral-500">
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi eius at explicabo fuga
		</p>
	</div>
	<ul
		class="bg-neutral-300 rounded-b-xl h-48 w-72 text-sm flex flex-col justify-evenly px-6 py-4 text-start"
	>
		{@html features}
		<a class="text-orange-700 font-bold" href="/pricing#comparePlans"> Compare Plans</a>
	</ul>
</div>
