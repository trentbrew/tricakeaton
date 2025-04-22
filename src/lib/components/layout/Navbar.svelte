<script lang="ts">
	import { isMenuOpen } from '$lib/stores/menuStore';

	function openMenu() {
		isMenuOpen.set(true);
	}
</script>

<nav
	class="fixed top-0 left-0 z-50 flex h-screen w-20 flex-col items-center justify-between border-r border-gray-200 bg-white p-4 text-black"
>
	<!-- Top Section: Hamburger Icon -->
	<div class="flex h-10 w-full items-center justify-center">
		<button on:click={openMenu} aria-label="Open menu" class="space-y-1.5">
			<span class="block h-0.5 w-6 bg-black"></span>
			<span class="block h-0.5 w-6 bg-black"></span>
			<span class="block h-0.5 w-6 bg-black"></span>
		</button>
	</div>

	<!-- Middle Section: Rotated Text -->
	<div class="flex flex-grow items-center justify-center py-8">
		<span class="rotate-180 text-sm tracking-widest uppercase [writing-mode:vertical-rl]">
			Placeholder Rotated Text
		</span>
	</div>

	<!-- Bottom Section: Logo/Branding -->
	<div class="flex h-20 w-full flex-col items-center justify-center space-y-2 text-center">
		<span class="font-bold">XXX</span>
		<div class="h-px w-1/2 bg-black"></div>
		<span class="text-xs uppercase">Amsterdam</span>
	</div>
</nav>
