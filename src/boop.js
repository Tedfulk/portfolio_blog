// import { spring } from 'svelte/motion';

// function getPrefersReducedMotion() {
// 	const QUERY = '(prefers-reduced-motion: no-preference)';
// 	const mediaQueryList = window.matchMedia(QUERY);
// 	const prefersReducedMotion = !mediaQueryList.matches;
// 	return prefersReducedMotion;
// }

// export default function boop(node, params) {
// 	let { setter } = params;
// 	let springyRotation = spring(
// 		{ x: 0, y: 0, rotation: 0, scale: 1 },
// 		{
// 			stiffness: 0.1,
// 			damping: 0.15
// 		}
// 	);
// 	let prefersReducedMotion = getPrefersReducedMotion();

// 	node.style = `display: inline-block`;

// 	const unsubscribe = springyRotation.subscribe(({ x, y, rotation, scale }) => {
// 		node.style.transform =
// 			!prefersReducedMotion && `translate(${x}px, ${y}px) rotate(${rotation}deg) scale(${scale})`;
// 	});

// 	return {
// 		update({ isBooped, x = 0, y = 0, rotation = 0, scale = 1, timing }) {
// 			springyRotation.set(
// 				isBooped ? { x, y, rotation, scale } : { x: 0, y: 0, rotation: 0, scale: 1 }
// 			);

// 			if (isBooped) {
// 				window.setTimeout(() => setter(false), timing);
// 			}
// 		},
// 		destroy() {
// 			unsubscribe();
// 		}
// 	};
// }

import { spring } from 'svelte/motion';

let mediaQueryList;
if (typeof window !== 'undefined') {
	const QUERY = '(prefers-reduced-motion: no-preference)';
	mediaQueryList = window.matchMedia(QUERY);
}

function getPrefersReducedMotion() {
	return mediaQueryList ? !mediaQueryList.matches : false;
}

let prefersReducedMotion = getPrefersReducedMotion();

if (mediaQueryList) {
	mediaQueryList.addEventListener('change', () => {
		if (mediaQueryList) {
			prefersReducedMotion = getPrefersReducedMotion();
		}
	});
}

export default function boop(node, params) {
	const { setter } = params;
	const springyRotation = spring(
		{ x: 0, y: 0, rotation: 0, scale: 1 },
		{ stiffness: 0.1, damping: 0.15 }
	);

	node.style = `display: inline-block`;

	const unsubscribe = springyRotation.subscribe(({ x, y, rotation, scale }) => {
		if (!prefersReducedMotion) {
			node.style.transform = `translate(${x}px, ${y}px) rotate(${rotation}deg) scale(${scale})`;
		}
	});

	return {
		update({ isBooped, x = 0, y = 0, rotation = 0, scale = 1, timing }) {
			springyRotation.set(
				isBooped ? { x, y, rotation, scale } : { x: 0, y: 0, rotation: 0, scale: 1 }
			);

			if (isBooped) {
				window.setTimeout(() => setter(false), timing);
			}
		},
		destroy() {
			unsubscribe();
			mediaQueryList.removeEventListener('change', () => {
				prefersReducedMotion = getPrefersReducedMotion();
			});
		}
	};
}
