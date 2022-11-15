export const createError = (text) => {

  input.classList.add('error');
  if (input.classList.contains('error') && input.closest('label').querySelector('span.error')) {
      input.closest('label').querySelector('span.error').remove();
      input.closest('label').insertAdjacentHTML('beforeend', `<span class="error">${text}</span>`);
  } else if (input.classList.contains('error')) {
      input.closest('label').insertAdjacentHTML('beforeend', `<span class="error">${text}</span>`);
  }
}