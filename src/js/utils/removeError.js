// import { input } from "./createError";

export const removeError = (input) => {

    input.classList.remove('error');

    if (input.closest('label').querySelector('span.error')) {
        input.closest('label').querySelector('span.error').remove();
    }
}