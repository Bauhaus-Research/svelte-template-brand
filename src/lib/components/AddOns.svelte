<script>
	import { prodItem } from '$lib/stores/brandStore';
	import PackageButton from './PackageButton.svelte';
</script>

<section
	class="flex flex-row justify-start items-center py-12 snap-proximity overflow-x-scroll snap-x px-12"
>
	{#each prodItem as item}
		<PackageButton
			title={item.title}
			price={item.price}
			tagline={item.tagline}
			setupfee={item.setupfee}
			features={item.features}
			linkto={item.linkto}
		/>
	{/each}
</section>
