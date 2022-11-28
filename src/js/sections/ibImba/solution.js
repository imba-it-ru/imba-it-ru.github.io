export function showSolution() {
	const buttons = document.querySelectorAll('.our-solutions__card-btn');
  const moreInfos = document.querySelectorAll('.our-solutions__card-more-info_unvisible');

  for (let i = 0; i < buttons.length; i++) {
    const button = buttons[i];
    const moreInfo = moreInfos[i];
    showMoreInfo(button, moreInfo);
  }

}

function showMoreInfo(button, moreInfo) {
  const style = getComputedStyle(moreInfo);
  // moreInfo.style.display = 'none';
  button.addEventListener('click', () => {
    if (style.display === 'none') {
      moreInfo.classList.remove('our-solutions__card-more-info_unvisible');
      button.textContent = 'Скрыть информацию';
    } else {
      moreInfo.classList.add('our-solutions__card-more-info_unvisible');
      button.textContent = 'Показать больше';
    }
  });
}