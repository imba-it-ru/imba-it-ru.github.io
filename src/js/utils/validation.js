import { validateForm } from "./validateForm";

export function validaton() {
  const forms = document.querySelectorAll('.js_form'); // находим все формы на странице;

  forms.forEach(form => { // перебираем все формы на странице;
    form.addEventListener('submit', (e) => { // при отправке формы;
  
      e.preventDefault();
  
      const formInputs = form.querySelectorAll('input');
      const formBtn = form.querySelector('.js_form_btn');
  
      formInputs.forEach(input => { // перебираем все инпуты в форме;
  
        validateForm(input);
        input.addEventListener('input', () => {
          validateForm(input);
          if (!form.querySelector('.error')) { //проверяем, чтоб все инпуты прошли валидацию (чтоб не было в форме ни одного элемента с класссом error);
            formBtn.disabled = false;
          }
        });
      });
  
      if (!form.querySelector('.error')) { //проверяем, чтоб все инпуты прошли валидацию (чтоб не было в форме ни одного элемента с класссом error);
        
        // сюда пишем команды, которые должны сработать после успешной валидации;
        console.log('validate');
  
        formBtn.classList.add('btn-animate');
  
        let formData = new FormData(form);
        let xhr = new XMLHttpRequest();
  
        xhr.onreadystatechange = function () {
          if (xhr.readyState === 4) {
            if (xhr.status === 200) {
              console.log('Отправлено');
              document.querySelector('.js_feedback').classList.remove('active');
              document.querySelector('.js_feedback_success').classList.add('active');
              formBtn.classList.remove('btn-animate');
            }
          }
        }
  
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

