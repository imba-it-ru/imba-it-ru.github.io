// import { openform } from './header/openPopupForm.js';
import { PopupWithForm } from '../utils/popupForm.js';
import { burgerMenu } from './header/burgerMenu.js';

export function headerInit() {
	try {
    const popupFormElement = document.querySelector('#popupform');
		const popupForm = new PopupWithForm(popupFormElement, (inputValues) => {
			console.log(inputValues);
			// коллбэк / запросы на сервер
			popupForm.closePopup();
		});

		popupForm.setEventListeners();

		const openPopupBtns = document.querySelectorAll('.popup-form-open');
		openPopupBtns.forEach((btn) => {
			btn.addEventListener('click', () => {
				popupForm.openPopup();
			});
		});

  } catch (error) {}
  burgerMenu()
  // openform();
}

