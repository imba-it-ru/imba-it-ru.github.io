const container = document.querySelector('.big-logo__content-logo');

import { data } from './big-logo-data';
import { popup } from './popupLogo';
import { createButton, createImg, createSubtitle, createDivBox } from './utils';

export function makeBigLogo() {
	data.forEach((obj) => {
		const box = createBox(obj);
		container.append(box);
	});
}

function createBox(obj) {
	const button = createButton('big-logo__btn');
	const imgBox = createDivBox('big-logo__img-box', 'logo-img-box');
	const imgWhite = createImg(
		obj.imgWhite,
		'big-logo__img-white',
		'logo-img-box__grey-light'
	);
	const imgBlack = createImg(
		obj.imgBlack,
		'big-logo__img-black',
		'logo-img-box__grey-dark'
	);
	const imgColor = createImg(
		obj.imgColor,
		'big-logo__img-color',
		'logo-img-box__color-light'
	);
	const imgColorWhite = createImg(
		obj.imgColorWhite,
		'big-logo__img-color-white',
		'logo-img-box__color-dark'
	);
	const textBox = createDivBox('big-logo__text-box');
	const marker = createDivBox('big-logo__marker');
	const subtitle = createSubtitle(obj.subtitle, [
		'text-s',
		'big-logo__logo-text',
	]);

	imgBox.append(imgWhite);
	imgBox.append(imgBlack);
	imgBox.append(imgColor);
	imgBox.append(imgColorWhite);

	button.append(imgBox);

	if (obj.subtitle != '') {
		// textBox.append(marker);
		// textBox.append(subtitle);
		button.append(textBox);
	}

	button.addEventListener('click', (event) => {
		popup.open(obj);
	});

	return button;
}
