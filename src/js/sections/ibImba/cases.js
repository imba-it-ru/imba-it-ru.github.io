export function showMoreCases() {
	const button = document.querySelector('.cases__more-btn');
  button.addEventListener('click', () => {
		const caseUnvisible = document.querySelectorAll('.cases__card_unvisible');
		caseUnvisible.forEach((cases) => {
			cases.classList.remove('cases__card_unvisible');
			button.style.display = 'none';
		});
	});
}