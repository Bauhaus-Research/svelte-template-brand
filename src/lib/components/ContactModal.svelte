<script>
	import ContactForm from './ContactForm.svelte';
	import Modal from './Modal.svelte';

	let showModal = false;
</script>

<span
	class="text-red-800 font-bold cursor-pointer text-lg"
	on:click={() => (showModal = true)}
	on:keydown={() => (showModal = true)}
>
	Contact Form
</span>

<Modal bind:showModal>
	<ContactForm />
</Modal>
