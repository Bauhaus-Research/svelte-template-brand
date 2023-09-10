<script>
	import { fly, blur } from 'svelte/transition';
	import { goto } from '$app/navigation';
	import supabase from '$lib/db';
	import Logo from '$lib/components/Logo.svelte';
	import ContactForm from '$lib/components/ContactForm.svelte';
	import SpecialOffer from '$lib/components/SpecialOffer.svelte';

	/**
	 * @type {HTMLInputElement}
	 */
	let first_name;
	/**
	 * @type {HTMLInputElement}
	 */
	let last_name;
	/**
	 * @type {HTMLInputElement}
	 */
	let email;
	/**
	 * @type {HTMLInputElement}
	 */
	let phone;
	/**
	 * @type {HTMLSelectElement}
	 */
	let question;
	/**
	 * @type {any}
	 */
	let zip;
	let formSuccess = false; // Variable to track form submission success

	/**
	 * @param {{ preventDefault: () => void; }} event
	 */
	async function submitForm(event) {
		event.preventDefault();
		// Validate form fields
		console.log(
			first_name.value +
				' ' +
				last_name.value +
				' ' +
				email.value +
				' ' +
				phone.value +
				' ' +
				question.value +
				' ' +
				zip.value
		);

		console.log(first_name.value);
		// After successful submission
		formSuccess = true;
		console.log(first_name.value);
		event.preventDefault();

		// Perform form submission logic here

		// Navigate to the spec
		await supabase.from('leads').insert([{ first: 'someValue', last: 'otherValue' }]);
		async function sendDataToSupabase() {
			try {
				const response = await fetch('/api/your-api-endpoint', {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json'
					},
					body: JSON.stringify({
						some_column: 'someValue',
						other_column: 'otherValue'
					})
				});

				if (response.ok) {
					const data = await response.json();
					console.log('Data inserted successfully:', data);
				} else {
					console.error('Failed to insert data:', response.statusText);
				}
			} catch (error) {
				console.error('An error occurred:', error);
			}
		}

		sendDataToSupabase();

		goto('/'); // Replace '/target-page' with your desired page URL
	}

	let color1 = '#451A17';
	let color2 = '#ecebe9';
	let color3 = '4c3f3e';
	let ccPrice = 5000;
	let ccDisc = 35;
	let paymentOPtions = ['visa', 'mastercard', 'amex', 'discover', 'applepay', 'gpay', 'paypal'];
</script>

<section
	class="flex flex-col h-full justify-center items-center min-h-screen min-w-screen w-full bg-stone-300 text-white overflow-x-hidden"
>
	<div
		class="grid grid-cols-1 md:grid-cols-2 md:gap-6 gap-2 mx-auto mt-6 text-center text-[#18392b]"
	>
		<section class="flex flex-col justify-center items-center">
			<SpecialOffer />
			<div>
				<h5 class="text-neutral-600 font-bold">
					For your security, all orders are processed via Stripe.
				</h5>
				<div
					class="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-4 gap-6 max-w-3xl mx-auto px-8 mt-10"
				>
					{#each paymentOPtions as item}
						<img src="/payments/{item}.svg" class="h-8 aspect-auto" alt={item} />
					{/each}
				</div>
			</div>
		</section>
		<section
			in:blur={{ delay: 1200, duration: 300 }}
			out:blur={{ duration: 300 }}
			class="mx-20 mt-10 rounded-lg  sm:w-[30rem] w-[23rem]"
		>

		<div
		class="h-12 group border-green-800 sm:w-[30rem] w-[23rem] border-2 bg-green-500 text-white my-2 py-2 flex justify-center text-center font-bold rounded-xl shadow-md mb-2"
	>
	<img src="/coin.svg" alt="coin" class="mr-4 group-hover:animate-pulse" />
	<h3>Qualify for $30 in free ad credit <span><a href="/#" class="text-blue-200 font-light">Terms Apply</a></span></h3>
	</div>
			<ContactForm/>
			
		</section>
	</div>
	<a target="_self" href="/" class="text-stone-700 mb-4 mx-auto mt-6 opacity-50 underline">Skip for now</a>
</section>
