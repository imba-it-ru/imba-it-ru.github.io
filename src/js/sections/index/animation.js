import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { setRotate } from './animation/animation.js';
import { UI } from './animation/ui.js';

gsap.registerPlugin(ScrollTrigger);

const OPACITY_MAX = 0.4;
const OPACITY_MIN = 0.15;

const X_TRANSFORM_START = '20vw';
const X_TRANSFORM_FINISH = '-50vw';

const SCALE = 1.4;

export function createMainAnimation() {
	const mm = gsap.matchMedia();

	// add a media query. When it matches, the associated function will run
	mm.add('(min-width: 1200px)', () => {
		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: UI.WRAPPER,
				pin: UI.CANVAS, // pin the trigger element while active
				start: 'top top', // when the top of the trigger hits the top of the viewport
				end: 'bottom bottom', // end after scrolling 500px beyond the start
				scrub: true, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
				// markers: true,
				onUpdate: (evt) => {
					setRotate(evt.progress);
				},
			},
		});

		tl.fromTo(
			UI.CANVAS,
			{
				opacity: OPACITY_MAX,
				scale: 1,
			},
			{
				opacity: OPACITY_MIN,
				scale: SCALE,
				duration: 1,
			}
		);

		tl.fromTo(
			UI.CANVAS,
			{
				opacity: OPACITY_MIN,
				scale: SCALE,
			},
			{
				opacity: OPACITY_MAX,
				scale: 1,
				duration: 1,
			}
		);

		tl.fromTo(
			UI.CANVAS,
			{
				x: X_TRANSFORM_START,
			},
			{
				x: X_TRANSFORM_FINISH,
				duration: 2,
			},
			0
		);
	});
}

export function createTitleAnimation() {
	const title = document.querySelector('.cover-main__title');
	const bound = document.querySelector('.services');

	const distance =
		getClientRectAttribute(bound, 'top') -
		getClientRectAttribute(title, 'bottom');

	const mm = gsap.matchMedia();

	// add a media query. When it matches, the associated function will run
	mm.add('(min-width: 1200px)', () => {
		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: title,
				start: 'top 180px',
				end: `+=${distance}`,
				scrub: true,
				pin: title,
			},
		});

		tl.fromTo(title, { y: 0 }, { y: 0, duration: 1, ease: 'linear' });
	});
}

function getClientRectAttribute(elem, attribute) {
	const rect = elem.getBoundingClientRect();
	return rect[attribute];
}
