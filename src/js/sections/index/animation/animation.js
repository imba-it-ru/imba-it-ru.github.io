import gsap from 'gsap';
import { UI } from './ui';

const MAX_LENGTH = 0.15;
const MAX_STEP = 0.001;

const WIDTH = UI.CANVAS.clientWidth;
const HEIGHT = UI.CANVAS.clientHeight;
const DISTANCE = 20;
const RADIUS = 1;
const CENTER = {
	X: 0,
	Y: 0,
	Z: DISTANCE,
};
const TIME_KOEFF = 500;

const minSize = Math.min(WIDTH, HEIGHT);
console.log(minSize / 3);

const KKK = minSize / 3;

const COORDS = {
	A: {
		MIN: -180,
		MAX: 180,
	},

	B: {
		MIN: -90,
		MAX: 90,
	},
};

const BLACK = '#202020';
const WHITE = '#FBFBFB';

const AMOUNT = 500;

const state = {
	rotation: 0,
	time: 0,
	ctx: undefined,
	dots: [],
	background: WHITE,
};

export function setRotate(int) {
	// index.textContent = int.toFixed(2);

	gsap.to(state, {
		rotation: 4 * Math.PI * int,
		duration: 1,
	});
	// state.rotation = Math.PI * int;
	// CENTER.X = 10 * int;
}

export function setBackground(isWhite) {
	if (isWhite) {
		state.background = WHITE;
	} else {
		state.background = BLACK;
	}
}

create();
animate();

function create() {
	createDots();
	createCanvas();
	animate();
}

function createDots() {
	for (let i = 0; i < AMOUNT; i++) {
		state.dots.push(createDot());
	}

	// state.dots.push(createDot(0, 0));
	// state.dots.push(createDot(0, 0.1));
	// state.dots.push(createDot(0, 0.2));

	// state.dots.push(createDot(0, 0));
	// state.dots.push(createDot(0.1, 0));
	// state.dots.push(createDot(0.2, 0));

	// state.dots.push(createDot(0, 0));
	// state.dots.push(createDot(0.1, 0.1));
	// state.dots.push(createDot(0.2, 0.2));
	// state.dots.push(createDot(0.3, 0.3));
	// state.dots.push(createDot(0.4, 0.4));
	// state.dots.push(createDot(0.5, 0.5));
	// state.dots.push(createDot(0.6, 0.6));
	// state.dots.push(createDot(0.7, 0.7));
	// state.dots.push(createDot(0.8, 0.8));
	// state.dots.push(createDot(0.9, 0.9));
	// state.dots.push(createDot(1.0, 1.0));
	// state.dots.push(createDot(1.1, 1.1));
	// state.dots.push(createDot(1.2, 1.2));
	// state.dots.push(createDot(1.3, 1.3));
	// state.dots.push(createDot(1.4, 1.4));
	// state.dots.push(createDot(1.5, 1.5));
	// state.dots.push(createDot(1.6, 1.6));

	// state.dots.push(createDot(Math.PI / 2, 0));
	// state.dots.push(createDot(Math.PI / 2, 0.1));
	// state.dots.push(createDot(Math.PI / 2, 0.2));
	// state.dots.push(createDot(Math.PI / 2, 0.3));
	// state.dots.push(createDot(Math.PI / 2, 0.4));
	// state.dots.push(createDot(Math.PI / 2, 0.5));
	// state.dots.push(createDot(Math.PI / 2, 0.6));
	// state.dots.push(createDot(Math.PI / 2, 0.7));
	// state.dots.push(createDot(Math.PI / 2, 0.8));
	// state.dots.push(createDot(Math.PI / 2, 0.9));
	// state.dots.push(createDot(Math.PI / 2, 1.0));
	// state.dots.push(createDot(Math.PI / 2, 1.1));
	// state.dots.push(createDot(Math.PI / 2, 1.2));
	// state.dots.push(createDot(Math.PI / 2, 1.3));
	// state.dots.push(createDot(Math.PI / 2, 1.4));
	// state.dots.push(createDot(Math.PI / 2, 1.5));
	// state.dots.push(createDot(Math.PI / 2, 1.6));
}

function createCanvas() {
	UI.CANVAS.width = WIDTH;
	UI.CANVAS.height = HEIGHT;
	const ctx = UI.CANVAS.getContext('2d');
	ctx.fillRect(0, 0, UI.CANVAS.width, UI.CANVAS.height);

	state.ctx = ctx;
}

function draw() {
	state.ctx.fillStyle = state.background;
	state.ctx.fillRect(0, 0, UI.CANVAS.width, UI.CANVAS.height);

	state.ctx.fillStyle = '#A42E2C';
	state.ctx.strokeStyle = '#670E0E';

	state.dots.forEach(drawLines);
	state.dots.forEach(drawDot);
}

function drawDot(dot) {
	const k = DISTANCE / dot.z;

	const xc = WIDTH / 2;
	const yc = HEIGHT / 2;

	const xDisplay = KKK * k * dot.x + xc;
	const yDisplay = -KKK * k * dot.y + yc;

	dot.xDisplay = xDisplay;
	dot.yDisplay = yDisplay;

	const r = 2;

	state.ctx.beginPath();
	state.ctx.ellipse(xDisplay, yDisplay, r, r, 0, 0, 2 * Math.PI);
	state.ctx.fill();

	// debugger;
}

function drawLines(dot) {
	// state.ctx.strokeStyle = '#670E0E';
	dot.links.forEach((linkDot) => {
		state.ctx.beginPath();
		state.ctx.moveTo(dot.xDisplay, dot.yDisplay);
		state.ctx.lineTo(linkDot.xDisplay, linkDot.yDisplay);
		state.ctx.stroke();
	});
}

function animate() {
	state.time++;
	recalculate();
	draw();
	requestAnimationFrame(animate);
}

function changeDotCoords(dot) {
	dot.x =
		CENTER.X +
		RADIUS *
			Math.sin(-state.rotation - state.time / TIME_KOEFF + dot.a) *
			Math.cos(dot.b);
	dot.y = CENTER.Y + RADIUS * Math.sin(dot.b);
	dot.z =
		CENTER.Z -
		RADIUS *
			Math.cos(dot.b) *
			Math.cos(-state.rotation - state.time / TIME_KOEFF + dot.a);
}

function recalculate() {
	state.dots.forEach((dot) => {
		dot.a = dot.a + dot.da;
		dot.b = dot.b + dot.db;

		changeDotCoords(dot);
	});

	state.dots.sort((d1, d2) => {
		return d2.z - d1.z;
	});

	state.dots.forEach((dot) => {
		dot.links = [];

		state.dots.forEach((linkDot) => {
			const isClose = isClosest(dot, linkDot);
			if (isClose) {
				dot.links.push(linkDot);
			}
		});
	});
}

function isClosest(d1, d2) {
	const distance = Math.sqrt(
		Math.pow(d1.x - d2.x, 2) +
			Math.pow(d1.y - d2.y, 2) +
			Math.pow(d1.z - d2.z, 2)
	);
	return distance < MAX_LENGTH;
}

function createDot(...args) {
	if (args.length > 0) {
		return {
			a: args[0],
			b: args[1],
			da: 0,
			db: 0,
			xDisplay: 0,
			yDisplay: 0,
			links: [],
		};
	}
	return {
		a: (COORDS.A.MAX - COORDS.A.MIN) * Math.random() + COORDS.A.MIN,
		b: (COORDS.B.MAX - COORDS.B.MIN) * Math.random() + COORDS.B.MIN,
		da: MAX_STEP * Math.random() - MAX_STEP / 2,
		db: MAX_STEP * Math.random() - MAX_STEP / 2,
		links: [],
	};
}
