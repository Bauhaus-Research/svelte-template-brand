<script>
	import { contentDown } from '$lib/stores/brandStore';
</script>

<section class="min-h-screen bg-neutral-100 flex flex-col justify-center items-center">
	{#each contentDown as items}
		<a href="/resources/{items.title}">{items.title}</a>
	{/each}
</section>
