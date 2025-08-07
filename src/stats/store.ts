import { writable } from 'svelte/store';

// Interfaces
import type { Keyword } from '$package/dotagiftx';

export const keywords = writable<Keyword[]>([]);
