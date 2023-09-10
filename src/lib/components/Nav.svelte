<script>
	import HamburgerMenu from './HamburgerMenu.svelte';
	import { blur } from 'svelte/transition';
	import OpenClose from './OpenClose.svelte';
	import va from '@vercel/analytics';
	import Logo from './Logo.svelte';
	import { calendly } from '$lib/stores/brandStore';
	let navItem = [
		{
			title: 'Home',
			link: '/'
		},
		{
			title: 'Mission',
			link: '/mission'
		},
		// {
		// 	title: 'Pricing',
		// 	link: '/pricing'
		// },
		{
			title: 'News',
			link: '/newsroom'
		},
		// {
		// 	title: 'Support',
		// 	link: '/support'
		// },
		{
			title: 'Resources',
			link: '/resources'
		}
	];
	/**
	 * @type {number}
	 */
	export let scrollY;
	/**
	 * @type {number}
	 */
	export let innerHeight;
	let showTapMenu = false;
	function toggleTapMenu() {
		showTapMenu = !showTapMenu;
	}
</script>

<nav
	in:blur={{}}
	class=" {scrollY > innerHeight * 4 - 240
		? 'bg-neutral-800 shadow-lg text-stone-400'
		: scrollY > 10 || showTapMenu == true
		? 'bg-white shadow-lg text-red-900'
		: 'hover:bg-white hover:shadow-lg hover:text-red-900 text-stone-100 transition-all bg-transparent'} group transition-all duration-300 fixed top-0 z-50 left-0 w-screen items-center flex flex-row justify-between px-5 md:px-14"
>
	<div class="flex flex-row justify-center items-start">
		<a
			href="/"
			class="text-sm w-fit md:text-xl font-black flex-row flex items-center justify-center"
			><div class="h-16 flex flex-col items-center justify-center">
				<Logo
					tailwind="h-10 w-10 transition-all duration-300 group-hover:fill-red-800 {scrollY >
					innerHeight * 4 - 240
						? 'fill-stone-300'
						: scrollY > 10 || showTapMenu == true
						? ' fill-red-800'
						: 'fill-stone-200 '}"
				/>
			</div>
			<h1 class="mx-2 hidden sm:block">Street Food Services</h1>
		</a>
		<ul class="flex flex-col justify-end my-auto items-center text-center mr-5 md:mr-14">
			<div class="lg:block hidden">
				{#each navItem as items}
					<li class="fade-underline md:mx-3 mx-0">
						<a target="_self" href={items.link}>{items.title}</a>
					</li>
				{/each}
			</div>
		</ul>
	</div>
	{#if scrollY > innerHeight}
		<a
			transition:blur={{ duration: 400 }}
			href="{calendly}"
			target="_blank"
			on:click={() => {
				va.track('ctabutton');
			}}
			class="px-6 py-2 bg-neutral-600 shadow-2xl shadow-black rounded-full {scrollY > 10
				? 'bg-red-900 text-neutral-100 border-red-700 border-2'
				: 'bg-neutral-600 text-neutral-300'}  font-bold">Get Started</a
		>
	{/if}
	<HamburgerMenu bind:open={showTapMenu} bind:scrollY />
</nav>

{#if showTapMenu}
	<nav
		class="fixed top-16 left-0 w-screen h-full bg-neutral-100 text-red-900 flex flex-col items-center justify-center z-10"
		on:click={toggleTapMenu}
		on:keydown={toggleTapMenu}
	>
		<!-- Your tap menu content goes here -->
		<div>
			<ul class="text-center mt-10 mb-30 flex flex-col">
				{#each navItem as item}
					<li class="fade-underline md:mx-3 mx-0 my-2 text-xl">
						<a target="_self" href={item.link}>{item.title}</a>
					</li>
				{/each}
			</ul>
		</div>
	</nav>
{/if}

<style>
	.fade-underline {
		position: relative;
		display: inline-block;
		padding-bottom: 1px; /* Adjust as needed */
	}

	.fade-underline::before {
		content: '';
		position: absolute;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 2px; /* Adjust as needed */
		background-color: rgb(127 29 29); /* Change to your desired color */
		transform-origin: left center;
		transform: scaleX(0);
		transition: transform 0.3s ease-in-out;
	}

	.fade-underline:hover::before {
		transform: scaleX(1);
		transform-origin: right center;
	}
</style>
