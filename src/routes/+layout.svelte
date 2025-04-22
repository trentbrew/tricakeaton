<script lang="ts">
	import Navbar from '$lib/components/layout/Navbar.svelte';
	import FullscreenMenu from '$lib/components/layout/FullscreenMenu.svelte';
	import { isMenuOpen } from '$lib/stores/menuStore';
	import { ScrollWrapper } from '@shentohendriks/svelte-smoothscroll';
	import '../app.css';
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';

	let { children } = $props();

	// Define the settings for ScrollWrapper separately
	const scrollSettings = {
		smoothWheel: true,
		smooth: true,
		lerp: 0.08, // Adjusted lerp value
		smartphone: {
			smooth: true
		}
	};

	let introOverlayEl: HTMLDivElement;

	onMount(() => {
		if (browser) {
			// Add a short delay before starting animation
			setTimeout(() => {
				introOverlayEl?.classList.add('intro-swipe-out');
			}, 250); // Adjust delay ms as needed
		}
	});
</script>

<!-- Intro Overlay -->
<div
	bind:this={introOverlayEl}
	class="intro-overlay fixed inset-0 z-[100] bg-red-600"
	aria-hidden="true"
></div>

<div class="relative flex min-h-screen">
	<Navbar />
	<div class="flex-grow pl-20">
		<ScrollWrapper settings={scrollSettings}>
			{@render children()}
		</ScrollWrapper>
	</div>

	{#if $isMenuOpen}
		<FullscreenMenu />
	{/if}
</div>
