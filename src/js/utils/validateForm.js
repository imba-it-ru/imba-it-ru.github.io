import { createError } from "./createError";
import { removeError } from "./removeError";

// const patternName = /^[?!,.а-яА-ЯёЁ0-9\s]+$/i; // рег. выражение для поля 'фио';
const patternPhone = /([\w\s]*?[0-9][\w\s]*?){11,}/; // рег. выражение для поля 'телефон';
const patternEmail = /([-!#-'*+/-9=?A-Z^-~]+(\.[-!#-'*+/-9=?A-Z^-~]+)*|"([]!#-[^-~ \t]|(\\[\t -~]))+")@[0-9A-Za-z]([0-9A-Za-z-]{0,61}[0-9A-Za-z])?(\.[0-9A-Za-z]([0-9A-Za-z-]{0,61}[0-9A-Za-z])?)+/i; // рег. выражение для поля 'e-mail';

export function validateForm(input) {

  input.value = input.value.trim()

  // проверяем на правильность заполнения поля 'фио'
  if (input.classList.contains('js_input_name') && input.value == "") {
      createError('Заполните, пожалуйста, поле');
  } else if (input.classList.contains('js_input_name')) {
      removeError();
  }

  // проверяем на правильность заполнения поля 'телефон'
  if (input.classList.contains('js_input_phone') && input.value == "") {
      createError('Заполните, пожалуйста, поле');
  } else if (input.classList.contains('js_input_phone') && input.value.search(patternPhone) !== -1) {
      removeError();
  } else if (input.classList.contains('js_input_phone')) {
      createError('Укажите, пожалуйста, корректный телефон');
  }

  // проверяем на правильность заполнения поля 'e-mail'
  if (input.classList.contains('js_input_email') && input.value == "") {
      createError('Заполните, пожалуйста, поле');
  } else if (input.classList.contains('js_input_email') && input.value.search(patternEmail) !== -1) {
      removeError();
  } else if (input.classList.contains('js_input_email')) {
      createError('Укажите, пожалуйста, корректный e-mail');
  }

  // проверяем чекбокс
  if (input.classList.contains('js_input_confirm') && input.checked) {
      removeError();
  } else if (input.classList.contains('js_input_confirm')) {
      createError('Поставьте, пожалуйста, галочку');
  }
}