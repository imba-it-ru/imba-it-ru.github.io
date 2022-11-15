import { dataClients } from "./clientsLogoData.js";
import { createImg, createDivBox} from "../partners/utils.js";

const container = document.querySelector('.tab-clients');

// export function makeClinetsLogo() {
//   data.forEach(obj => {
//     const box = createBox(obj);
//     container.append(box);
//   });


// export function makeBigLogo() {
//   data.forEach(obj,i => {
//     if (i<8) {
//       const box = createBox(obj);
//       container.append(box);
//     }
//   });
// };

export function makeClientsLogo() {
  dataClients.forEach((obj,i) => {
      const isVisible = i<8;
      const box = createBox(obj, isVisible);
      container.append(box);
  });
  const button = document.querySelector('.tab-clients__btn');
  button.addEventListener('click', () => {
    const logoUnvisible = document.querySelectorAll('.logo_unvisible');
    logoUnvisible.forEach(logo => {
      logo.classList.remove('logo_unvisible');
      button.style.display='none';
    })
  });
};

  function createBox(obj, isVisible) {
    const imgBox = createDivBox('tab-clients__img-box');
    const imgWhite = createImg(obj.imgWhite, 'tab-clients__img-white');
    const imgBlack = createImg(obj.imgBlack, 'tab-clients__img-black');
    const imgColor = createImg(obj.imgColor, 'tab-clients__img-color');
    const imgColorWhite = createImg(obj.imgColorWhite, 'tab-clients__img-color-white');
  
    imgBox.append(imgWhite);
    imgBox.append(imgBlack);
    imgBox.append(imgColor);
    imgBox.append(imgColorWhite);

    if (!isVisible) {
      imgBox.classList.add('logo_unvisible');
    }

    return imgBox;
};