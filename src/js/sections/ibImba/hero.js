import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
// import { setRotate } from './animation/animation.js';

const UI = {
	IMG: document.querySelector('.cover-security__img'),
	WRAPPER: document.querySelector('.wrapper'),
	TARGET: document.querySelector('.services-security__info'),
};
/*
848
408

1288


*/

const X_START = UI.IMG.getBoundingClientRect().left;
// const X_FINISH = document.documentElement.clientWidth / 2 - 1288 / 2;
const X_FINISH = document.documentElement.clientWidth / 2 - 450 + 31 - 8;

const Y_START = UI.IMG.getBoundingClientRect().top;
const Y_FINISH = UI.TARGET.getBoundingClientRect().top;

console.log(X_START, X_FINISH);

gsap.registerPlugin(ScrollTrigger);

export function createHeroIBAnimation() {
	const mm = gsap.matchMedia();

	// add a media query. When it matches, the associated function will run
	mm.add('(min-width: 1200px)', () => {
		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: UI.WRAPPER,
				pin: UI.IMG, // pin the trigger element while active
				start: 'top top', // when the top of the trigger hits the top of the viewport
				end: `+=${Y_FINISH - Y_START - 600}`, // end after scrolling 500px beyond the start
				scrub: true, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
				// markers: true,
			},
			onComplete: () => {
				sectionTl.play();
			},
		});

		gsap.set(UI.IMG, {
			transformOrigin: 'left center',
		});

		tl.fromTo(
			UI.IMG,
			{
				x: 0,
				scale: 1,
				rotate: 0,
				y: 0,
			},
			{
				x: X_FINISH - X_START,
				scale: 408 / 848,
				rotate: 90,
				y: 170,
				duration: 1,
				ease: 'power1.easeInOut',
			}
		);

		const sectionTl = gsap.timeline({ ease: 'power1.easeOut' });
		sectionTl.fromTo(
			'.services-security',
			{
				opacity: 0,
			},
			{
				opacity: 1,
				duration: 1,
			}
		);

		window.tl = sectionTl;

		sectionTl.pause();
		sectionTl.progress(0.000001);
	});
}
