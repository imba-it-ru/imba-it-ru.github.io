export function showSolution() {
	const buttons = document.querySelectorAll('.our-solutions__card-btn');
  const moreInfos = document.querySelectorAll('.our-solutions__card-more-info');

  for (let i = 0; i < buttons.length; i++) {
    const button = buttons[i];
    const moreInfo = moreInfos[i];
    showMoreInfo(button, moreInfo);
  }

}

function showMoreInfo(button, moreInfo) {
  moreInfo.style.display = 'none';
  button.addEventListener('click', () => {
    if (moreInfo.style.display === 'none') {
      moreInfo.style.display = 'block';
      button.textContent = 'Скрыть информацию';
    } else {
      moreInfo.style.display = 'none';
      button.textContent = 'Показать больше';
    }
  });
}