export function createButton(className) {  
  const btn = document.createElement('button');
  btn.classList.add(className);
  return btn;
};

export function createImg(src, className) {  
const img = document.createElement('img');
img.src = src;
img.classList.add(className);
return img;
};

export function createSubtitle(textContent, classNames) {  
const subtitle = document.createElement('p');
subtitle.textContent = textContent;
classNames.forEach((className) => {
  subtitle.classList.add(className);
});
return subtitle;
};

export function createDivBox(className) {  
const divBox = document.createElement('div');
divBox.classList.add(className);
return divBox;
};
