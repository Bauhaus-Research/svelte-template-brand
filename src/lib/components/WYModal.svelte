<script>
	import WoodYouPrompt from './WoodYouPrompt.svelte';
	import Modal from './Modal.svelte';

	let showModal = false;
</script>

<div class="flex flex-col">
	<div>
		<button
			on:click={() => (showModal = true)}
			class="text-xl mt-2 px-4 py-1 border-2 border-amber-900 rounded-lg font-black text-amber-900"
		>
			Albert
		</button>
	</div>
</div>

<Modal bind:showModal>
	<WoodYouPrompt />
</Modal>
