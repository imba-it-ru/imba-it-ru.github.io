export function numberAnimated() {
  if (document.querySelector('.about-fact__number')) {

    const aboutItemNums = document.querySelectorAll('.about-fact__number span');
  
    aboutItemNums.forEach(num => {
  
        let numberTop = num.getBoundingClientRect().top;
        let start = +num.textContent;
        let end = +num.dataset.num;
        let step = 2000 / end;
  
        window.addEventListener('scroll', function onScroll() {
  
            // if (numberTop < window.innerHeight) {
            // if (window.pageYOffset > numberTop - window.innerHeight / 2) {
            if (window.pageYOffset > numberTop - window.innerHeight) {
                this.removeEventListener('scroll', onScroll);
                let interval = setInterval(() => {
                    num.textContent = ++start;
                    if (start == end) {
                        clearInterval(interval);
                    }
                }, step);
            }
        });
    });
  }
}
