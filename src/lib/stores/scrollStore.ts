import { writable } from 'svelte/store';

// Store to hold the scroll progress percentage (0-100)
export const progressStore = writable<number>(0);
