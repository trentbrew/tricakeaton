import { writable } from 'svelte/store';

// Initial state is closed
export const isMenuOpen = writable(false);
