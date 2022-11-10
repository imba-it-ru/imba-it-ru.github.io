import { PopupWithForm } from '../../utils/popupForm.js';

export function openform() {
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
        console.log(1111);
				popupForm.openPopup();
			});
		});
	} catch (error) {console.log(error);}
}
