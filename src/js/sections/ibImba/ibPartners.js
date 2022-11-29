import { data } from './ibPartnersData.js';
import { createImg, createDivBox } from '../partners/utils.js';

const container = document.querySelector('.tab-partner');

export function makePartnersLogo() {
	data.forEach((obj, i) => {
		if (i < 8) {
			const box = createBox(obj);
			container.append(box);
		}
	});
}

function createBox(obj, isVisible) {
	const imgBox = createDivBox('tab-partner__img-box', 'logo-img-box');
	const imgWhite = createImg(
		obj.imgWhite,
		'tab-partner__img-white',
		'logo-img-box__grey-light'
	);
	const imgBlack = createImg(
		obj.imgBlack,
		'tab-partner__img-black',
		'logo-img-box__grey-dark'
	);
	const imgColor = createImg(
		obj.imgColor,
		'tab-partner__img-color',
		'logo-img-box__color-light'
	);
	const imgColorWhite = createImg(
		obj.imgColorWhite,
		'tab-partner__img-color-white',
		'logo-img-box__color-dark'
	);

	imgBox.append(imgWhite);
	imgBox.append(imgBlack);
	imgBox.append(imgColor);
	imgBox.append(imgColorWhite);

	return imgBox;
}
