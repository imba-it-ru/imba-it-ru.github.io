import { dataSmall } from './small-logo-data';
import { popup } from './popupLogo';
import { createButton, createImg, createSubtitle, createDivBox } from './utils';

const container = document.querySelector('.small-logo__content-logo');

export function makeSmallLogo() {
	dataSmall.forEach((obj) => {
		const box = createBox(obj);
		container.append(box);
	});
}

function createBox(obj) {
	const button = createButton('small-logo__btn');
	const imgBox = createDivBox('small-logo__img-box', 'logo-img-box');
	const imgWhite = createImg(
		obj.imgWhite,
		'small-logo__img-white',
		'logo-img-box__grey-light'
	);
	const imgBlack = createImg(
		obj.imgBlack,
		'small-logo__img-black',
		'logo-img-box__grey-dark'
	);
	const imgColor = createImg(
		obj.imgColor,
		'small-logo__img-color',
		'logo-img-box__color-light'
	);
	const imgColorWhite = createImg(
		obj.imgColorWhite,
		'small-logo__img-color-white',
		'logo-img-box__color-dark'
	);
	const textBox = createDivBox('small-logo__text-box');
	const marker = createDivBox('small-logo__marker');
	const subtitle = createSubtitle(obj.subtitle, [
		'text-s',
		'small-logo__logo-text',
	]);

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
}
