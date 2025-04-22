<script lang="ts">
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';
	import type LocomotiveScrollType from 'locomotive-scroll';
	import 'locomotive-scroll/dist/locomotive-scroll.css';
	import Image from '$lib/components/multimedia/Image.svelte';
	// import silhouette from '$lib/images/silhouette.png';

	let scrollElement: HTMLElement;
	let scrollInstance: LocomotiveScrollType | null = null;
	let progress = 0; // Reactive variable for progress percentage

	// Remove Section 3 observer state
	// let section3El: HTMLElement;
	// let showFixedBg = false;
	// let section3Observer: IntersectionObserver;

	onMount(() => {
		let currentInstance: LocomotiveScrollType | null = null;

		import('locomotive-scroll')
			.then(({ default: LocomotiveScroll }) => {
				const scrollElement = document.querySelector<HTMLElement>('.wrapper');
				if (scrollElement) {
					const instance = new LocomotiveScroll({
						el: scrollElement,
						smooth: true,
						direction: 'horizontal',
						gestureDirection: 'vertical'
					});

					instance.on('scroll', (event) => {
						if (event.limit.x > 0) {
							progress = (event.scroll.x / event.limit.x) * 100;
						} else {
							progress = 0;
						}
					});

					scrollInstance = instance;
					currentInstance = instance;
				}
			})
			.catch((error) => {
				console.error('Failed to load Locomotive Scroll', error);
			});

		// Remove IntersectionObserver setup
		/*
		if (browser && section3El) {
			section3Observer = new IntersectionObserver(...);
			section3Observer.observe(section3El);
		}
		*/

		// Cleanup function
		return () => {
			if (currentInstance) {
				currentInstance.destroy();
				scrollInstance = null;
				currentInstance = null;
			}
			// Remove observer disconnect
			// section3Observer?.disconnect();
		};
	});
</script>

<!-- Progress Bar -->
<div class="progress-bar-container fixed top-0 left-0 z-50 h-screen w-[5px]">
	<div
		class="progress-bar h-full w-full origin-top bg-[#ccc] transition-transform duration-50 ease-linear"
		style="transform: scaleY({progress / 100});"
	></div>
</div>

<!-- Fixed Background Container (Always Present) -->
<div class="fixed inset-0 z-[-1]" aria-hidden="true">
	<Image
		src="https://trentbrew.pockethost.io/api/files/swvnum16u65or8w/skuqkze9dkfnu6p/image_41_7UG2diIMzf.png?token="
		alt="Fixed background texture"
		classes="h-full w-full object-cover"
	/>
</div>

<!-- Main scroll container -->
<div class="wrapper flex h-screen w-max" bind:this={scrollElement} data-scroll-container>
	<!-- Section 1 (Image) -->
	<div
		class="horizontal-section relative flex h-screen w-[100vw] flex-shrink-0 items-end overflow-hidden bg-white font-serif"
		data-scroll-section
	>
		<!-- Text Container (Behind Image) -->
		<div
			class="pointer-events-none absolute inset-0 z-0 flex flex-col justify-center p-16"
			data-scroll-speed={0}
		>
			<h1
				class="
					!mb-0
					!p-0
					font-serif
					text-[29vw]
					leading-none
					font-normal
					text-gray-300
					grayscale
					transition-all
					duration-300
				"
			>
				TRICA
			</h1>
			<h1
				class="
					font-serif
					text-[21.5vw]
					leading-none
					font-normal
					text-gray-300
					grayscale
					transition-all
					duration-300
				"
			>
				KEATON
			</h1>
		</div>
		<!-- Image (Above Text) -->
		<Image
			src="https://trentbrew.pockethost.io/api/files/swvnum16u65or8w/skuqkze9dkfnu6p/sillhouette_fVIgZe3hXG.png?token="
			alt="Profile silhouette of Trica Keaton"
			scrollSpeed={2}
			classes="relative z-10 h-full max-w-[75%] object-contain object-bottom ml-56"
		/>
	</div>
	<!-- Section 2 (Color Block) -->
	<div
		class="horizontal-section font-maelstromsans flex h-screen w-[75vw] flex-shrink-0 items-center justify-center bg-blue-900 p-16 text-white"
		data-scroll-section
	>
		<!-- <div class="flex w-full max-w-6xl gap-16">

			<div class="flex w-1/3 flex-col justify-between">
				<h2 class="font-maelstrom text-6xl font-bold uppercase">Overview</h2>
				<p class="text-sm">Scroll / Drag.</p>
			</div>

			<div class="w-2/3">
				<p class="text-xl">
					The 17th-century Amsterdam canals are a world renowned location of cultural and historical
					significance with a rich history spanning 400 years of development, expansion, innovation
					and engineering. The city's canal ring and its design is an early example of large-scale,
					coordinated urban planning and forward thinking.
				</p>

			</div>
		</div> -->
	</div>
	<!-- Section 3 (Placeholder) -->
	<div class="horizontal-section flex h-screen w-[100vw] flex-shrink-0" data-scroll-section>
		<!-- Content for section 3 can go here if needed, it will scroll over the fixed background -->
	</div>
	<!-- Section 4 (Color Block) -->
	<div
		class="horizontal-section font-maelstromsans flex h-screen w-[200vw] flex-shrink-0 items-center justify-center bg-white"
		data-scroll-section
	>
		Section 4 Content
	</div>
	<!-- Section 5 (Image) - Placeholder -->
	<div
		class="horizontal-section font-maelstromsans flex h-screen w-[120vw] flex-shrink-0 items-center justify-center bg-blue-900"
		data-scroll-section
	>
		<!-- <Image
			src="/placeholder-image-3.jpg"
			alt="Placeholder image 3 - please replace src and alt"
			classes="h-full w-full object-cover"
		/> -->
	</div>
	<!-- Section 6 (Color Block) -->
	<div
		class="horizontal-section font-maelstromsans flex h-screen w-[100vw] flex-shrink-0 items-center justify-center bg-white"
		data-scroll-section
	>
		Section 6 Content
	</div>
	<!-- Section 7 (Image) - Placeholder -->
	<div
		class="horizontal-section font-maelstromsans flex h-screen w-[180vw] flex-shrink-0 items-center justify-center"
		data-scroll-section
	>
		<!-- <Image
			src="/placeholder-image-4.jpg"
			alt="Placeholder image 4 - please replace src and alt"
			classes="h-full w-full object-cover"
		/> -->
	</div>
	<!-- Section 8 (Color Block) -->
	<div
		class="horizontal-section font-maelstromsans flex h-screen w-[200vw] flex-shrink-0 items-center justify-center text-black"
		data-scroll-section
	>
		Section 8 Content
	</div>
	<!-- Section 9 (Image) - Placeholder -->
	<div
		class="horizontal-section font-maelstromsans flex h-screen w-[100vw] flex-shrink-0 items-center justify-center"
		data-scroll-section
	>
		<!-- <Image
			src="/placeholder-image-5.jpg"
			alt="Placeholder image 5 - please replace src and alt"
			classes="h-full w-full object-cover"
		/> -->
	</div>
	<!-- Section 10 (Color Block) -->
	<div
		class="horizontal-section font-maelstromsans flex h-screen w-[100vw] flex-shrink-0 items-center justify-center"
		data-scroll-section
	>
		Section 10 Content
	</div>
	<!-- Section 11 (Image) - Placeholder -->
	<div
		class="horizontal-section font-maelstromsans flex h-screen w-[150vw] flex-shrink-0 items-center justify-center"
		data-scroll-section
	>
		<Image
			src="/placeholder-image-6.jpg"
			alt="Placeholder image 6 - please replace src and alt"
			classes="h-full w-full object-cover"
		/>
	</div>
	<!-- Section 12 (Color Block) -->
	<div
		class="horizontal-section font-maelstromsans flex h-screen w-[100vw] flex-shrink-0 items-center justify-center"
		data-scroll-section
	>
		Section 12 Content
	</div>
	<!-- Add more pairs as needed -->
</div>

<style>
	/* @font-face rules removed */

	/* Keep necessary global styles */
	:global(body::-webkit-scrollbar),
	:global(html::-webkit-scrollbar) {
		display: none; /* Webkit */
	}
	:global(body),
	:global(html) {
		scrollbar-width: none; /* Firefox */
		-ms-overflow-style: none; /* IE/Edge */
		height: 100%;
		width: 100%;
		margin: 0;
		overflow: hidden;
	}
	:global(html) {
		overscroll-behavior-x: contain;
		box-sizing: border-box;
	}
	:global(*, *::before, *::after) {
		box-sizing: inherit;
	}
	:global(body) {
		overscroll-behavior-x: contain;
		margin: 0;
	}

	/* Keep specific scrollbar hiding for wrapper */
	.wrapper::-webkit-scrollbar {
		display: none;
	}
	.wrapper {
		scrollbar-width: none;
		-ms-overflow-style: none;
	}

	/* Removed styles now handled by Tailwind:
	.wrapper { display, height, width }
	.horizontal-section { height, flex-shrink, display, justify-content, align-items, font-family }
	.progress-bar-container { position, top, left, height, width, background-color }
	.progress-bar { height, width, background-color, transform-origin, transition }
	*/
</style>
