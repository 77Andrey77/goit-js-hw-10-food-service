import menuElements from './menu.json';
import menuTemplate from './templates/menu-item.hbs';



////////////добавляем разметку страници по шаблону
const galleryMenu = document.querySelector('.js-menu');
const markup = menuTemplate(menuElements);

galleryMenu.insertAdjacentHTML('beforeend', markup);

////////

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

////////
 
const body = document.querySelector('body');
const switchTheme = document.querySelector('.theme-switch__toggle');

switchTheme.addEventListener('change', clickSwitch); ////меняет тему

document.addEventListener('DOMContentLoaded', getThemeFromLocalStorage);

////////назначение темной темы

function setDartTheme() {
    body.classList.add(Theme.DARK);
    body.classList.remove(Theme.LIGHT);
    localStorage.setItem("theme", Theme.DARK)
}

//////// назначение светлой темы

function setLightTheme() {
    body.classList.add(Theme.LIGHT);
    body.classList.remove(Theme.DARK);
    localStorage.setItem("theme", Theme.LIGHT)
}

///////// нажатие на переключатель

function clickSwitch(even) {

    if (switchTheme.checked) {
        setDartTheme();
    } else {
        setLightTheme();
         
    }
}


////////////

function getThemeFromLocalStorage() {
  const themeInLocal = localStorage.getItem('theme');
  if (themeInLocal === Theme.DARK) {
    setDartTheme();
    switchTheme.checked = true;
  }
}