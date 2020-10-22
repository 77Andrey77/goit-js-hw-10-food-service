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
switchTheme.addEventListener('change', setLocalStorage) ////// сохраняет значение темы
document.addEventListener('DOMContentLoaded', getThemeFromLocalStorage);

////////назначение темной темы

function setDartTheme() {
    body.classList.add(Theme.DARK);
    body.classList.remove(Theme.LIGHT)
}

//////// назначение светлой темы

function setLightTheme() {
    body.classList.add(Theme.LIGHT);
    body.classList.remove(Theme.DARK)
}

///////// нажатие на переключатель

function clickSwitch(even) {

    if (switchTheme.checked) {
        setDartTheme();
    } else {
        setLightTheme();
         
    }
}

//////////// сохраняет в локал стор данные про тему

function setLocalStorage(even) {
    if (switchTheme.checked) {
        localStorage.setItem("theme", Theme.DARK)
    } else {
        localStorage.removeItem("theme");
    localStorage.setItem("theme", Theme.LIGHT)} }


////////////

function getThemeFromLocalStorage() {
  const themeInLocal = localStorage.getItem('theme');
  if (themeInLocal === Theme.DARK) {
    setDartTheme();
    switchTheme.checked = true;
  }
}