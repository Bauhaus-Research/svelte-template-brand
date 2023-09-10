<script>


let color1 = '#451A17';
	let color2 = '#ecebe9';
	let color3 = '4c3f3e';
	let ccPrice = 5000;
	let ccDisc = 65.00;
	let paymentOPtions = ['visa', 'mastercard', 'amex', 'discover', 'applepay', 'gpay', 'paypal'];
</script>


<div
				class="rounded-xl mx-10 shadow-lg md:w-[30rem] w-full max-w-lg aspect-[1.2/1] h-full max-h-[30rem] m-2 bg-white flex flex-row"
			>
				<div class="flex flex-col justify-evenly h-full w-7/12 sm:w-1/2 py-4 px-4">
					<h3 class="sm:text-2xl text-lg font-bold text-start ">Site Starter</h3>
					<div>
						<h1 class="text-2xl font-light line-through text-red-900">${ccPrice}</h1>
						<h1 class="text-2xl sm:text-4xl font-bold">
							${(ccPrice * ((100 - ccDisc) / 100)-.05)}<span class="text-xs sm:text-sm"
								>({ccDisc}% off)</span
							>
						</h1>
					</div>
					<div class="flex">
						<h1 class="text-xs font-light text-neutral-600">then <b>$449.95</b> per month</h1>
					</div>
					<p class="text-xs font-semibold text-neutral-500">
						Have yur websites landing page built and maintained.
					</p>
					<a target="_self" href="/pricing" class="text-xs font-semibold text-neutral-500"
						>Includes everything from: Core Plan</a
					>
					<a
						href="https://buy.stripe.com/6oEg0y53wbPYgfK9AK"
						class="px-6 py-2 rounded-full text-center border-red-600 shadow-xl border-2  bg-gradient-to-tr from-red-600 to-amber-600 via-orange-500 hover:bg-opacity-90 duration-200 transition-all text-neutral-100 font-bold"
						>Stripe Checkout</a
					>
				</div>

				<div
					class="flex flex-col pl-2 justify-evenly h-[75%] my-auto w-5/12 sm:w-1/2 border-l-2 text-xs sm:text-base border-neutral-500"
				>
					<div class="flex">
						<img src="/checkmarks/check.svg" alt="check" class="w-6" />
						<h6 class="ml-2">Custom Branded Website</h6>
					</div>
					<div class="flex">
						<img src="/checkmarks/check.svg" alt="check" class="w-6" />
						<h6 class="ml-2">Hosting-included</h6>
					</div>
					<div class="flex">
						<img src="/checkmarks/Add-On.svg" alt="add on" class="w-6" />

						<h6 class="ml-2">Premium SEO</h6>
					</div>
					<div class="flex">
						<img src="/checkmarks/check.svg" alt="check" class="w-6" />
						<h6 class="ml-2">5 day delivery </h6>
					</div>
				</div>
			</div>
			