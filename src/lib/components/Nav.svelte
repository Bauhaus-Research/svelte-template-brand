<script>
	import HamburgerMenu from './HamburgerMenu.svelte';
	import { blur } from 'svelte/transition';
	import OpenClose from './OpenClose.svelte';
	let navItem = [
		{
			title: 'Home',
			link: '/'
		},
		{
			title: 'Mission',
			link: '/mission'
		},
		{
			title: 'Services',
			link: '/services'
		},
		{
			title: 'Pricing',
			link: '/pricing'
		},
		{
			title: 'News',
			link: '/newsroom'
		},
		{
			title: 'Support',
			link: '/support'
		},
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
	class=" {(scrollY > innerHeight * 4 - 80 && scrollY < innerHeight * 5 - 80) ||
	scrollY > innerHeight * 6 - 80
		? 'bg-neutral-900 shadow-lg text-red-100'
		: scrollY > 10 || showTapMenu == true
		? 'bg-white shadow-lg text-red-900'
		: 'hover:bg-white hover:shadow-lg hover:text-red-900 text-white transition-all bg-transparent'} {scrollY >
	innerHeight - 80
		? 'h-16'
		: 'h-16'} group transition-all duration-300 fixed top-0 z-50 left-0 w-screen items-center flex flex-row justify-between"
>
	<div class="flex flex-row justify-center items-center text-center ml-5 md:ml-14">
		<a
			href="/"
			class="text-sm w-fit md:text-xl font-black flex-row flex items-center justify-center"
			><div class="h-16 flex flex-col items-center justify-center">
				<svg
					class="
			{(scrollY > innerHeight * 4 - 80 && scrollY < innerHeight * 5 - 80) ||
					scrollY > innerHeight * 6 - 80
						? ' fill-red-900 h-10 w-10 '
						: scrollY > 10 || showTapMenu == true
						? ' fill-red-900  h-10 w-10 '
						: 'fill-red-50 h-10 w-10 group-hover:fill-red-900 '}}"
					width="239"
					height="241"
					viewBox="0 0 239 241"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M171 212.5L170.14 218.438L170.326 218.465L170.513 218.48L171 212.5ZM200.542 239.903C203.25 241.813 206.994 241.166 208.903 238.458C210.813 235.75 210.166 232.006 207.458 230.097L200.542 239.903ZM127.96 166.631C131.231 166.101 133.453 163.019 132.923 159.748C132.392 156.477 129.311 154.255 126.04 154.786L127.96 166.631ZM227 222.5L221.416 224.696L232.956 223.224L227 222.5ZM184.217 68.8446C185.788 71.7622 189.427 72.8539 192.345 71.2828C195.262 69.7118 196.354 66.073 194.783 63.1554L184.217 68.8446ZM86.5074 29.4323C89.3427 31.1474 93.0316 30.2394 94.7468 27.4041C96.4619 24.5688 95.5539 20.88 92.7186 19.1648L86.5074 29.4323ZM122.872 157.646C113.916 166.136 107.442 173.595 104.347 180.302C102.755 183.754 101.869 187.401 102.335 191.098C102.814 194.901 104.638 198.097 107.29 200.693C112.229 205.529 120.473 208.683 130.45 211.231C140.711 213.852 154.013 216.102 170.14 218.438L171.86 206.562C155.769 204.231 143.013 202.055 133.42 199.605C123.544 197.082 118.14 194.522 115.684 192.118C114.638 191.094 114.328 190.289 114.241 189.599C114.141 188.803 114.259 187.464 115.244 185.329C117.305 180.861 122.284 174.738 131.128 166.354L122.872 157.646ZM170.513 218.48C176.901 219 181.06 221.68 185.248 225.592C187.515 227.709 189.453 229.85 192.023 232.458C194.46 234.932 197.228 237.567 200.542 239.903L207.458 230.097C205.016 228.374 202.835 226.334 200.572 224.037C198.441 221.874 195.93 219.148 193.439 216.822C188.113 211.848 181.528 207.337 171.487 206.52L170.513 218.48ZM65.0623 86.2503C44.714 92.3191 31.1752 101.087 24.8983 111.705C21.6902 117.131 20.4481 122.957 21.2238 128.777C21.9915 134.536 24.6778 139.889 28.6683 144.593C36.5751 153.915 50.0107 161.227 66.8291 165.317C83.7665 169.436 104.614 170.416 127.96 166.631L126.04 154.786C104.094 158.344 84.8762 157.356 69.6647 153.657C54.3341 149.929 43.5374 143.572 37.8195 136.831C34.9976 133.504 33.5233 130.227 33.1186 127.191C32.722 124.215 33.2958 121.08 35.2281 117.811C39.232 111.039 49.2723 103.482 68.4919 97.7497L65.0623 86.2503ZM232.956 223.224C242.731 142.773 237.796 94.0569 227.273 69.2794C222.105 57.1122 214.709 48.8075 205.288 47.785C195.648 46.7389 187.838 53.6557 182.786 62.5318L193.214 68.4682C197.412 61.0944 201.539 59.4486 203.993 59.715C206.666 60.005 211.52 62.8878 216.227 73.9706C225.454 95.6932 230.769 141.727 221.044 221.776L232.956 223.224ZM81.6222 56.9354C112.34 61.4783 134.873 72.6511 155.849 97.5826C177.176 122.93 196.999 162.618 221.416 224.696L232.584 220.304C208.143 158.165 187.733 116.838 165.032 89.857C141.981 62.4602 116.692 49.9914 83.3778 45.0646L81.6222 56.9354ZM90.103 27.6558C95.2194 19.3825 101.642 15.0593 108.617 13.4953C115.744 11.8974 124.119 13.037 133.155 16.9957C151.311 24.9497 170.675 43.6946 184.217 68.8446L194.783 63.1554C180.325 36.3054 159.189 15.3003 137.97 6.00426C127.319 1.33795 116.287 -0.522382 105.992 1.78598C95.5459 4.12815 86.5306 10.6175 79.897 21.3442L90.103 27.6558ZM92.7186 19.1648C50.4821 -6.38569 13.5423 5.73117 3.45601 31.7553C-1.50845 44.5643 0.918161 59.4944 11.9122 71.9953C22.7912 84.3654 41.75 94.1071 69.7377 98.2343L71.4883 86.3627C45.226 82.49 29.3099 73.6067 20.9232 64.0705C12.6516 54.6652 11.422 44.4078 14.645 36.0918C20.9338 19.8659 47.7439 5.98275 86.5074 29.4323L92.7186 19.1648Z"
					/>
				</svg>
			</div>
			<strong class="mx-2">|</strong>Street Food Services</a
		>
	</div>
	<ul class="flex flex-col justify-end items-center text-center mr-5 md:mr-14">
		<div class="lg:block hidden">
			{#each navItem as items}
				<li class="fade-underline md:mx-3 mx-0">
					<a href={items.link}>{items.title}</a>
				</li>
			{/each}
		</div>
		<HamburgerMenu bind:open={showTapMenu} bind:scrollY />
	</ul>
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
						<a href={item.link}>{item.title}</a>
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
