import menuElements from './menu.json';
import menuTemplate from './templates/menu-item.hbs';



const galleryMenu = document.querySelector('.js-menu');
const markup = menuTemplate(menuElements);

galleryMenu.insertAdjacentHTML('beforeend', markup);