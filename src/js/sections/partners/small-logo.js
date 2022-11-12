import { dataSmall } from "./small-logo-data";
import { popup } from "./popupLogo";
import { createButton, createImg, createSubtitle, createDivBox} from "./utils";

const container = document.querySelector('.small-logo__content-logo');

export function makeSmallLogo() {
  dataSmall.forEach(obj => {
    const box = createBox(obj);
    container.append(box);
  });
};

function createBox(obj) {
  const button = createButton('small-logo__btn');
  const imgBox = createDivBox('small-logo__img-box');
  const imgWhite = createImg(obj.imgWhite, 'small-logo__img-white');
  const imgBlack = createImg(obj.imgBlack, 'big-logo__img-black');
  const imgColor = createImg(obj.imgColor, 'small-logo__img-color');
  const imgColorWhite = createImg(obj.imgColorWhite, 'big-logo__img-color-white');
  const textBox = createDivBox('small-logo__text-box');
  const marker = createDivBox('small-logo__marker');
  const subtitle = createSubtitle(obj.subtitle, ['text-s', 'small-logo__logo-text']);

  imgBox.append(imgWhite);
  imgBox.append(imgBlack);
  imgBox.append(imgColor);
  imgBox.append(imgColorWhite);

  button.append(imgBox);

  if (obj.subtitle != '') {
    textBox.append(marker);
    textBox.append(subtitle);
    button.append(textBox);
  }

  button.addEventListener('click', (event) => {
    popup.open(obj);
  });

  return button;
};