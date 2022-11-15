export const removeError = () => {

  input.classList.remove('error');

  if (input.closest('label').querySelector('span.error')) {
      input.closest('label').querySelector('span.error').remove();
  }

}