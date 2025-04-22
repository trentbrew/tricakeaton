<script lang="ts">
	import type { HTMLImgAttributes } from 'svelte/elements';

	export let src: string;
	export let alt: string;
	export let classes: string = 'h-full w-full object-cover'; // Default classes
	export let scrollSpeed: string | number | undefined = undefined;
	export let scrollOffset: string | undefined = undefined;
	// Add other Locomotive Scroll props as needed (e.g., scrollPosition, scrollDirection)

	// Combine standard img attributes with custom/data attributes
	// $: restProps = $$restProps as Omit<HTMLImgAttributes, 'src' | 'alt' | 'class'>;

	$: dataScrollAttrs = {
		'data-scroll': scrollSpeed !== undefined || scrollOffset !== undefined ? '' : undefined, // Add data-scroll if speed or offset exists
		'data-scroll-speed': scrollSpeed,
		'data-scroll-offset': scrollOffset
		// Add other data-scroll-* attributes here
	};
</script>

<img {src} {alt} class={classes} loading="eager" {...dataScrollAttrs} {...$$restProps} />
