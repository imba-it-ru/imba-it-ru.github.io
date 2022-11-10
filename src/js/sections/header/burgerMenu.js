import { body } from "../../utils/body";

export function burgerMenu() {
	try {
    const headerBtn = document.querySelector('.js_header_btn'); // кнопка-бургер в хедере;
    const menu = document.querySelector('.js_menu'); // поп-ап с бургер-меню;
    const menuOverlay = document.querySelector('.js_menu_overlay'); // оверлей для поп-апа с бургер-меню;
    const menuExit = document.querySelector('.js_menu_exit'); // кнопка закрытия бургер-меню (крестик);
    
    headerBtn.addEventListener('click', () => { // при клике на кнопку-бургер;
      menuOverlay.classList.add('active');
      menu.classList.add('active-half');
      menuExit.classList.add('active');
      body.unscroll();
        // menuTabs.forEach(tab => {
        //   tab.classList.remove('active');
        // });
    });

    menuExit.addEventListener('click', () => { // при клике на кнопку закрытия бургер-меню (крестик);
      closeMenu();
    });

    menuOverlay.addEventListener('click', () => { // при клике на оверлей для поп-апа с бургер-меню;
      closeMenu();
    });

    const closeMenu = () => { // функция закрытия поп-апа с бургер-меню;
      menuOverlay.classList.remove('active');
      menu.classList.remove('active-half', 'active-full');
      menuExit.classList.remove('active');
      body.scroll();
    }
	} catch (error) {}
}