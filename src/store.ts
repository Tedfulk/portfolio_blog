import { writable } from 'svelte/store';

interface Message {
	role: string;
	content: string;
}

export const darkTheme = writable(false);
export const hexagonActionState = writable('scale');
export const triStateSwitchActive = writable('');
export const active = writable('');
export const messagesList = writable<Message[]>([]);

export default hexagonActionState;
