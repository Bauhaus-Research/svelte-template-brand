<script>
	import { brandName, calendly } from '$lib/stores/brandStore.js';
	import va from '@vercel/analytics';
</script>


<section
		class="h-96 bg-gradient-to-tr from-red-800 via-80% via-orange-600 to-amber-500 text-2xl sm:text-4xl font-bold text-white flex flex-col justify-center items-center"
	>
		<h2 class="max-w-5xl mx-6">
			Accept your invite to join the most innovative team of web developers that you've ever met
		</h2>
		<div class="flex justify-between max-w-5xl w-full items-center">
			<h6 class="text-sm sm:text-xl font-light ml-3">Ready to join?</h6>
			<a
				target="_blank" href="{calendly}"
				on:click={() => {
					va.track('start_today');
				}}
				class=" text-sm sm:text-xl my-2 text-stone-100 mr-3 bg-red-950 border-red-500 text-center transition-colors duration-300 delay-75 animate-pulse hover:animate-none font-semibold font-serif border-2 rounded-full px-8 py-2 w-48 shadow-xl"
			>
				Get Started
			</a>
		</div>
	</section>
<footer
	id="footer"
	class="z-40 col-span-12 bg-neutral-900 text-stone-200 sm:px-10 px-2 overflow-hidden grid grid-flow-row grid-cols-8 h-full w-full justify-center"
>
	<section
		class="text-stone-200 py-10 flex sm:flex-row flex-col justify-center items-center overflow-hidden col-span-8 xl:col-span-4"
	>
		<div class="flex flex-col text-white col-span-full">
			<a
				target="_blank" href="https://bauhausresearch.com"
				class="text-sm sm:text-lg duration-200 transition-colors font-light hover:text-orange-400"
				>Members Portal</a
			>
			<a
				target="_self" href="/terms"
				class="text-sm sm:text-lg duration-200 transition-colors font-light hover:text-orange-400"
				>Terms of Use</a
			>
			<a
				target="_self" href="/privacy"
				class="text-sm sm:text-lg font-light duration-200 transition-colors hover:text-orange-400"
				>Privacy Policy</a
			>
			<a
				target="_self" href="/support"
				class="text-sm sm:text-lg font-light duration-200 transition-colors hover:text-orange-400"
				>Support</a
			>
		</div>
	</section>

	<!-- col3 -->

	<section
		class=" border-t-2 justify-between text-xs sm:text-sm flex flex-row py-6 col-span-8 overflow-hidden"
	>
		<!-- copyright -->
		<p id="copyright tag">© {brandName} | All Right Reserved</p>
		
	</section>
</footer>
