<script>
	import Footer from '$lib/components/Footer.svelte';
	import Nav from '$lib/components/Nav.svelte';
	import { blur, fly } from 'svelte/transition';
	import { quadIn } from 'svelte/easing';
	import ContactModal from '$lib/components/ContactModal.svelte';
	import { aboutUs } from '$lib/stores/brandStore';
	let introText = 'Make your home more like home';
	let scrollY = 0;
	let innerHeight = 0;
</script>

<svelte:window bind:scrollY bind:innerHeight />
<Nav {scrollY} {innerHeight} />
<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section class="bg-neutral-900 h-screen" />
