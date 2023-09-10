<script>
	import { browser } from '$app/environment';
	import { page } from '$app/stores';
	import Footer from '$lib/components/Footer.svelte';
	import Nav from '$lib/components/Nav.svelte';
	import { webVitals } from '$lib/vitals';
	import '../app.css';
	import './styles.css';
	import { dev } from '$app/environment';
	import { inject } from '@vercel/analytics';

	inject({ mode: dev ? 'development' : 'production' });
	/** @type {import('./$types').LayoutServerData} */
	export let data;

	$: if (browser && data?.analyticsId) {
		webVitals({
			path: $page.url.pathname,
			params: $page.params,
			analyticsId: data.analyticsId
		});
	}
</script>

<svelte:head>
  <!-- SEO Meta Tags -->
  <title>Welcome to Street Food Services - Building the software for Food Trucks</title>
  <meta name="description" content="Empowering food trucks for success. Revolutionizing food truck experiences with web design, web development and marketing services." />
  <meta name="keywords" content="food truck, web design, marketing, modular development, SEO, Street Food Services, web development, tampa-based team" />
  
  <!-- Open Graph / Facebook -->
  <meta property="og:title" content="Welcome to Street Food Services - Empowering Food Trucks" />
  <meta property="og:description" content="Empowering food trucks for success. Revolutionizing food truck experiences with web design and marketing services." />
  <meta property="og:image" content="/danny.webp" /> <!-- Replace with your image URL -->
  <meta property="og:url" content="https://www.streetfoodservices.us/welcome" /> <!-- Replace with your website URL -->

  <!-- Twitter -->
  <meta property="twitter:title" content="Welcome to Street Food Services - Empowering Food Trucks" />
  <meta property="twitter:description" content="Empowering food trucks for success. Revolutionizing food truck experiences with web design and marketing services." />
  <meta property="twitter:image" content="/logo.png" /> <!-- Replace with your image URL -->
  <meta property="twitter:card" content="/danny.webp" /> 
</svelte:head>

<div class="app">
	<main>
		<slot />
	</main>
</div>
