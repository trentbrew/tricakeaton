<script lang="ts">
	import Navbar from '$lib/components/layout/Navbar.svelte';
	import FullscreenMenu from '$lib/components/layout/FullscreenMenu.svelte';
	import { isMenuOpen } from '$lib/stores/menuStore';
	import { ScrollWrapper } from '@shentohendriks/svelte-smoothscroll';
	import '../app.css';

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
</script>

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
