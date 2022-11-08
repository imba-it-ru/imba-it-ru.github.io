const CLASSES = {
	DEFAULT: 'fade-in',
	VISIBLE: 'fade-in_visible',
};

const TIMING = 1000;

const options = {
	root: null,
	rootMargin: '-10% 0px',
	threshold: 0,
};

const observer = new IntersectionObserver(intersectionChecker, options);

export function setUpFadeInAnima(targets) {
	targets.forEach((target) => {
		observer.observe(target);
	});
}

function intersectionChecker(items) {
	items.forEach((element) => {
		element.isIntersecting ? appear(element) : null;
	});
}

function appear(element) {
	element.target.classList.add(CLASSES.VISIBLE);

	setTimeout(removeAllTracks.bind(this, element.target), TIMING);
}

function removeAllTracks(target) {
	observer.unobserve(target);
	target.classList.remove(CLASSES.DEFAULT, CLASSES.VISIBLE);
}
