<script lang="ts">
	import { isMenuOpen } from '$lib/stores/menuStore';
	import { fade, fly } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';

	// Explicitly declare props, even if empty, for Svelte 5 runes compatibility
	let {} = $props();

	const menuItems = ['Overview', 'Reclaimed', 'Expansions', 'Timeline'];

	function closeMenu() {
		isMenuOpen.set(false);
	}
</script>

{#if $isMenuOpen}
	<div
		transition:fade={{ duration: 300 }}
		class="fixed inset-0 z-[60] flex flex-col items-center justify-center bg-red-600 p-8 text-black"
		role="dialog"
		aria-modal="true"
		aria-labelledby="menu-title"
	>
		<!-- Close Button -->
		<button
			on:click={closeMenu}
			aria-label="Close menu"
			class="absolute top-8 right-8 z-10 flex h-12 w-12 items-center justify-center rounded-full border border-black text-black hover:bg-black/10"
		>
			<!-- Simple X icon -->
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				stroke-width="1.5"
				stroke="currentColor"
				class="h-6 w-6"
			>
				<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
			</svg>
		</button>

		<!-- Menu Items -->
		<ul class="flex flex-col items-center space-y-4 text-center">
			{#each menuItems as item, i (item)}
				<li
					in:fly={{
						delay: 150 + i * 100, // Stagger delay
						duration: 400,
						y: 50, // Fly in from bottom
						easing: quintOut
					}}
				>
					<a
						href="#"
						class="block font-serif text-6xl text-black uppercase transition-colors hover:text-white md:text-8xl"
						on:click={closeMenu}
					>
						{item}
					</a>
				</li>
			{/each}
		</ul>

		<!-- Optional: Footer Links -->
		<div class="absolute right-8 bottom-8">
			<a href="#" class="text-lg text-black hover:text-white" on:click={closeMenu}
				>About & Sources</a
			>
		</div>
	</div>
{/if}
