import { writable } from 'svelte/store';

export const darkTheme = writable(false);
export const hexagonActionState = writable('scale');
export const triStateSwitchActive = writable('/');

export default hexagonActionState;
