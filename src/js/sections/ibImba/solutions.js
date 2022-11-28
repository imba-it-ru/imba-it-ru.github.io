export function showMoreSolutions() {
	const button = document.querySelector('.our-solutions__more-btn');
  button.addEventListener('click', () => {
		const solutionUnvisible = document.querySelectorAll('.our-solutions__card_unvisible');
		solutionUnvisible.forEach((solution) => {
			solution.classList.remove('our-solutions__card_unvisible');
			button.style.display = 'none';
		});
	});
}