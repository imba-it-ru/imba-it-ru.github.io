import { data } from "./clientsLogoData";
import { createImg, createDivBox} from "./utils";

const container = document.querySelector('.tab-clients');

export function makeClinetsLogo() {
  data.forEach(obj => {
    const box = createBox(obj);
    container.append(box);
  });

  function createBox(obj) {
    const imgBox = createDivBox('tab-clients__img-box');
    const imgWhite = createImg(obj.imgWhite, 'tab-clients__img-white');
    const imgBlack = createImg(obj.imgBlack, 'tab-clients__img-black');
    const imgColor = createImg(obj.imgColor, 'tab-clients__img-color');
    const imgColorWhite = createImg(obj.imgColorWhite, 'tab-clients__img-color-white');
  
    imgBox.append(imgWhite);
    imgBox.append(imgBlack);
    imgBox.append(imgColor);
    imgBox.append(imgColorWhite);
  };
};