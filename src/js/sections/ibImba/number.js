import gsap from "gsap";

export function numberAnimated() {
  if (document.querySelector('.about-security-fact__number')) {

    const aboutItemNums = document.querySelectorAll('.about-security-fact__number span');
  
    aboutItemNums.forEach(num => {
      let numberTop = num.getBoundingClientRect().top;
      let end = +num.dataset.num;

      const state = {
        value:0,
      }

      window.addEventListener('scroll', function onScroll() {
        if (window.pageYOffset > numberTop - window.innerHeight) {
          this.removeEventListener('scroll', onScroll);
          gsap.to(state, {
            value:end,
            duration:1,
            onUpdate:() => {
              num.textContent = format(Math.round(state.value));
            }
          });
        }
      });
    });
  }
}

function format(val) {
  let res;
  const value = val + '';
  (value.indexOf(',') != -1) ? res = new Intl.NumberFormat('ru-RU').format(value.replace(',', '.')).replace('.', ',') : res = new Intl.NumberFormat('ru-RU').format(value).replace(',', '.');
  return res;
}


