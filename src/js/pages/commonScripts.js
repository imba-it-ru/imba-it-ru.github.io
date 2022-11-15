import { setUpFadeInAnima } from '../utils/fadeIn.js';
import { validaton } from '../utils/validation.js';


try {
	const fadeInElements = document.querySelectorAll('.fade-in');
	setUpFadeInAnima(fadeInElements);

  const smoothLinks = document.querySelectorAll('a[href^="#"]');
  smoothLinks.forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      let href = this.getAttribute('href').substring(1);
      const scrollTarget = document.getElementById(href);
      const topOffset = document.querySelector('.header').offsetHeight;
      const elementPosition = scrollTarget.getBoundingClientRect().top;
      const offsetPosition = elementPosition - topOffset;
      window.scrollBy({
        top: offsetPosition,
        behavior: 'smooth'
      });
        closeMenu();
      });
  });

  validaton();
} catch (error) {}