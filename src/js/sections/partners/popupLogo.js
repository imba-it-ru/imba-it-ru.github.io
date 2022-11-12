import { body } from "../../utils/body";

export const popup = {
  open
}

const UI = {
  popupLogo: document.querySelector('.popup-logo'),
  img: document.querySelector('.popup-logo__img'),
  name: document.querySelector('.popup-logo__name'),
  subtitle: document.querySelector('.popup-logo__tag-text'),
  text: document.querySelector('.popup-logo__text'),
  marker: document.querySelector('.popup-logo__tag-marker'),
  closeBtn: document.querySelector('.popup-logo__close'),
}


function open(obj) {
  changeContent(obj);  
  UI.popupLogo.classList.add('popup-logo_visible');
  body.unscroll();
}

function changeContent(obj) {
  
  
  UI.name.textContent = obj.name;
  UI.subtitle.textContent = obj.subtitle;
  UI.text.textContent = obj.text;

  if (document.body.classList.contains('light-mode')) {
    UI.img.src = obj.imgColorWhite;
  } else {
    UI.img.src = obj.imgColor;
  }

  if (obj.subtitle == '') {
    UI.marker.style.display = 'none';
  } else {
    UI.marker.style.display = '';
  }
}

function setHandlerClose() {
  UI.closeBtn.addEventListener('click', closePopup);
  UI.popupLogo.addEventListener('click', (event) => {
    if (event.target.classList.contains('popup-logo')) {
      closePopup();
    }
  });
}

function closePopup() {
  UI.popupLogo.classList.remove('popup-logo_visible');
  body.scroll();
}

setHandlerClose();