import { writable } from 'svelte/store';

// Store to hold the scroll progress percentage (0-100)
export const progressStore = writable<number>(0);

// Store to hold the scale factor for Section 3 image (e.g., 1 to 1.5)
export const section3ScaleStore = writable<number>(1);
