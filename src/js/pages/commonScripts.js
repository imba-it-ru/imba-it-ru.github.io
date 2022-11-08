import { setUpFadeInAnima } from '../utils/fadeIn.js';

try {
	const fadeInElements = document.querySelectorAll('.fade-in');
	setUpFadeInAnima(fadeInElements);

} catch (error) {}