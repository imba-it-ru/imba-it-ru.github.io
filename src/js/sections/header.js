import { openform } from './header/openPopupForm.js';
import { burgerMenu } from './header/burgerMenu.js';
import { createDarkWhiteMode } from '../utils/toggl.js';

export function headerInit() {
	createDarkWhiteMode();
	burgerMenu();
	openform();
}
