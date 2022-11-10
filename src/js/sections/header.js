// import { openform } from './header/openPopupForm.js';
import { PopupWithForm } from '../utils/popupForm.js';
// import { toggleInputs } from '../utils/toggl.js';
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


    // переключатель светлая тема / тёмная тема

   const toggleInputs = document.querySelectorAll('.js_toggle_input'); // чекбоксы,переключающие тему (в хедере и мобильном меню);

    if (localStorage.getItem("theme") === "light") {

        toggleInputs.forEach(input => {
            input.checked = true;
        });

        document.body.classList.add('light-mode');
        console.log('светлая тема');

    } else {

        toggleInputs.forEach(input => {
            input.checked = false;
        });

        document.body.classList.remove('light-mode');
        console.log('тёмная тема');

    }

    toggleInputs.forEach(input => {

        input.addEventListener('change', () => {

            if (input.checked) {

                toggleInputs.forEach(input => {
                    input.checked = true;
                });

                localStorage.setItem("theme", "light")
                document.body.classList.add('light-mode');
                console.log('светлая тема');

            } else {

                toggleInputs.forEach(input => {
                    input.checked = false;
                });

                localStorage.setItem("theme", "dark")
                document.body.classList.remove('light-mode');
                console.log('тёмная тема');

            }

        });

});
  } catch (error) {}
  burgerMenu()
  // openform();
}

headerInit();