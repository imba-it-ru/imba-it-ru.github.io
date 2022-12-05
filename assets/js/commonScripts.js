/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/utils/createError.js":
/*!*************************************!*\
  !*** ./src/js/utils/createError.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createError": () => (/* binding */ createError)
/* harmony export */ });
// export const input = document.querySelector('.form__item');


const createError = (text, input) => {
  input.classList.add('error');
  if (input.classList.contains('error') && input.closest('label').querySelector('span.error')) {
      input.closest('label').querySelector('span.error').remove();
      input.closest('label').insertAdjacentHTML('beforeend', `<span class="error">${text}</span>`);
  } else if (input.classList.contains('error')) {
      input.closest('label').insertAdjacentHTML('beforeend', `<span class="error">${text}</span>`);
  }
};

/***/ }),

/***/ "./src/js/utils/fadeIn.js":
/*!********************************!*\
  !*** ./src/js/utils/fadeIn.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "setUpFadeInAnima": () => (/* binding */ setUpFadeInAnima)
/* harmony export */ });
const CLASSES = {
	DEFAULT: 'fade-in',
	VISIBLE: 'fade-in_visible',
};

const TIMING = 1000;

const options = {
	root: null,
	rootMargin: '-20px 0px',
	threshold: 0,
};

const observer = new IntersectionObserver(intersectionChecker, options);

function setUpFadeInAnima(targets) {
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


/***/ }),

/***/ "./src/js/utils/removeError.js":
/*!*************************************!*\
  !*** ./src/js/utils/removeError.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "removeError": () => (/* binding */ removeError)
/* harmony export */ });
// import { input } from "./createError";

const removeError = (input) => {

    input.classList.remove('error');

    if (input.closest('label').querySelector('span.error')) {
        input.closest('label').querySelector('span.error').remove();
    }
}

/***/ }),

/***/ "./src/js/utils/validateForm.js":
/*!**************************************!*\
  !*** ./src/js/utils/validateForm.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "validateForm": () => (/* binding */ validateForm)
/* harmony export */ });
/* harmony import */ var _createError__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createError */ "./src/js/utils/createError.js");
/* harmony import */ var _removeError__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./removeError */ "./src/js/utils/removeError.js");




// const patternName = /^[?!,.а-яА-ЯёЁ0-9\s]+$/i; // рег. выражение для поля 'фио';
const patternPhone = /([\w\s]*?[0-9][\w\s]*?){11,}/; // рег. выражение для поля 'телефон';
const patternEmail = /([-!#-'*+/-9=?A-Z^-~]+(\.[-!#-'*+/-9=?A-Z^-~]+)*|"([]!#-[^-~ \t]|(\\[\t -~]))+")@[0-9A-Za-z]([0-9A-Za-z-]{0,61}[0-9A-Za-z])?(\.[0-9A-Za-z]([0-9A-Za-z-]{0,61}[0-9A-Za-z])?)+/i; // рег. выражение для поля 'e-mail';
  function validateForm(input) {

    input.value = input.value.trim()

    // проверяем на правильность заполнения поля 'фио'
    if (input.classList.contains('js_input_name') && input.value == "") {
        (0,_createError__WEBPACK_IMPORTED_MODULE_0__.createError)('Заполните, пожалуйста, поле', input);
    } else if (input.classList.contains('js_input_name')) {
        (0,_removeError__WEBPACK_IMPORTED_MODULE_1__.removeError)(input);
    }

    // проверяем на правильность заполнения поля 'телефон'
    if (input.classList.contains('js_input_phone') && input.value == "") {
        (0,_createError__WEBPACK_IMPORTED_MODULE_0__.createError)('Заполните, пожалуйста, поле', input);
    } else if (input.classList.contains('js_input_phone') && input.value.search(patternPhone) !== -1) {
        (0,_removeError__WEBPACK_IMPORTED_MODULE_1__.removeError)(input);
    } else if (input.classList.contains('js_input_phone')) {
        (0,_createError__WEBPACK_IMPORTED_MODULE_0__.createError)('Укажите, пожалуйста, корректный телефон', input);
    }

    // проверяем на правильность заполнения поля 'e-mail'
    if (input.classList.contains('js_input_email') && input.value == "") {
        (0,_createError__WEBPACK_IMPORTED_MODULE_0__.createError)('Заполните, пожалуйста, поле', input);
    } else if (input.classList.contains('js_input_email') && input.value.search(patternEmail) !== -1) {
        (0,_removeError__WEBPACK_IMPORTED_MODULE_1__.removeError)(input);
    } else if (input.classList.contains('js_input_email')) {
        (0,_createError__WEBPACK_IMPORTED_MODULE_0__.createError)('Укажите, пожалуйста, корректный e-mail', input);
    }

    // проверяем чекбокс
    if (input.classList.contains('js_input_confirm') && input.checked) {
        (0,_removeError__WEBPACK_IMPORTED_MODULE_1__.removeError)(input);
    } else if (input.classList.contains('js_input_confirm')) {
        (0,_createError__WEBPACK_IMPORTED_MODULE_0__.createError)('Поставьте, пожалуйста, галочку', input);
    }
}

/***/ }),

/***/ "./src/js/utils/validation.js":
/*!************************************!*\
  !*** ./src/js/utils/validation.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "validaton": () => (/* binding */ validaton)
/* harmony export */ });
/* harmony import */ var _validateForm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validateForm */ "./src/js/utils/validateForm.js");


function validaton() {
	const forms = document.querySelectorAll('.js_form'); // находим все формы на странице;

	forms.forEach((form) => {
		// перебираем все формы на странице;
		const button = form.querySelector('button');
		button.addEventListener('click', (e) => {
			// при отправке формы;

			e.preventDefault();

			const formInputs = form.querySelectorAll('.js_form_item');
			const formBtn = form.querySelector('.js_form_btn');

			formInputs.forEach((input) => {
				// перебираем все инпуты в форме;

				(0,_validateForm__WEBPACK_IMPORTED_MODULE_0__.validateForm)(input);
				input.addEventListener('input', () => {
					(0,_validateForm__WEBPACK_IMPORTED_MODULE_0__.validateForm)(input);
					if (!form.querySelector('.error')) {
						//проверяем, чтоб все инпуты прошли валидацию (чтоб не было в форме ни одного элемента с класссом error);
						formBtn.disabled = false;
					}
				});
			});

			if (!form.querySelector('.error')) {
				//проверяем, чтоб все инпуты прошли валидацию (чтоб не было в форме ни одного элемента с класссом error);

				// сюда пишем команды, которые должны сработать после успешной валидации;
				console.log('validate');

				formBtn.classList.add('btn-animate');

				let formData = new FormData(form);
				let xhr = new XMLHttpRequest();

				xhr.onreadystatechange = function () {
					if (xhr.readyState === 4) {
						if (xhr.status === 200) {
							console.log('Отправлено');
							window.location.href = '/success.html';
							formBtn.classList.remove('btn-animate');
						}
					}
				};

				xhr.open('POST', 'mail.php', true);
				xhr.send(formData);
				form.reset();
			} else {
				console.log('no-validate');
				formBtn.disabled = true;
			}
		});
	});
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!***************************************!*\
  !*** ./src/js/pages/commonScripts.js ***!
  \***************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_fadeIn_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/fadeIn.js */ "./src/js/utils/fadeIn.js");
/* harmony import */ var _utils_validation_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/validation.js */ "./src/js/utils/validation.js");




try {
	const fadeInElements = document.querySelectorAll('.fade-in');
	(0,_utils_fadeIn_js__WEBPACK_IMPORTED_MODULE_0__.setUpFadeInAnima)(fadeInElements);

  const smoothLinks = document.querySelectorAll('a[href^="#"]');
  smoothLinks.forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      let href = this.getAttribute('href').substring(1);
      const scrollTarget = document.getElementById(href);
      const topOffset = document.querySelector('.header').offsetHeight;
      const elementPosition = scrollTarget.getBoundingClientRect().top;
      const offsetPosition = elementPosition - topOffset;
      window.scrollBy({
        top: offsetPosition,
        behavior: 'smooth'
      });
        closeMenu();
      });
  });

  (0,_utils_validation_js__WEBPACK_IMPORTED_MODULE_1__.validaton)();
} catch (error) {}
})();

/******/ })()
;