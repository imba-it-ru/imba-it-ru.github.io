import { data } from "../partners/big-logo-data";
import { createImg, createDivBox} from "../partners/utils.js";

const container = document.querySelector('.tab-partner');

export function makePartnersLogo() {
  data.forEach((obj,i) => {
    if (i<8) {
      const box = createBox(obj);
      container.append(box);
    };
  });
}

function createBox(obj, isVisible) {
  const imgBox = createDivBox('tab-partner__img-box');
  const imgWhite = createImg(obj.imgWhite, 'tab-partner__img-white');
  const imgBlack = createImg(obj.imgBlack, 'tab-partner__img-black');
  const imgColor = createImg(obj.imgColor, 'tab-partner__img-color');
  const imgColorWhite = createImg(obj.imgColorWhite, 'tab-partner__img-color-white');

  imgBox.append(imgWhite);
  imgBox.append(imgBlack);
  imgBox.append(imgColor);
  imgBox.append(imgColorWhite);

  return imgBox;
};