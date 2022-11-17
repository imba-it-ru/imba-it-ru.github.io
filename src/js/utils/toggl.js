import { setBackground as setCanvasBackground } from '../sections/index/animation/animation';

// переключатель светлая тема / тёмная тема
export const toggleInputs = document.querySelectorAll('.js_toggle_input'); // чекбоксы,переключающие тему (в хедере и мобильном меню);

export function createDarkWhiteMode() {
	if (localStorage.getItem('theme') === 'dark') {
		toggleInputs.forEach((input) => {
			input.checked = false;
		});
		setDarkMode();
		
	} else {
		toggleInputs.forEach((input) => {
			input.checked = true;
		});


    setLightMode();
	}

	toggleInputs.forEach((input) => {
		input.addEventListener('change', () => {
			if (input.checked) {
				toggleInputs.forEach((input) => {
					input.checked = true;
				});

				localStorage.setItem('theme', 'light');
				setLightMode();
			} else {
				toggleInputs.forEach((input) => {
					input.checked = false;
				});

				localStorage.setItem('theme', 'dark');
				setDarkMode();
			}
		});
	});
}

function setLightMode() {
	document.body.classList.add('light-mode');
	setCanvasBackground(true);
	console.log('светлая тема');
}
function setDarkMode() {
	document.body.classList.remove('light-mode');
	setCanvasBackground(false);
	console.log('тёмная тема');
}
