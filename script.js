const DARK_THEME = 'dark';
const LIGHT_THEME = 'light';
const TITLE_HOME_DARK = 'Welcome to the Dark side';
const TITLE_HOME_LIGHT = 'Welcome to the Light';
const rootElement = document.documentElement;

const toggleButton = document.querySelector('input[type=checkbox]');
const nav = setVariables('nav');
const textBox = setVariables('text-box');
const image1 = setVariables('image1');
const image2 = setVariables('image2');
const image3 = setVariables('image3');
const toggleIcon = setVariables('toggle-icon');
const titleText = setVariables('title-text');

function setVariables(value) {
    return document.getElementById(value)
}

function setImage() {}

function switchColor(isDark) {
    const mode = isDark === DARK_THEME ? true : false;

    rootElement.setAttribute('data-theme', isDark);
    localStorage.setItem('theme', isDark);

    nav.style.backgroundColor = mode ? 'rgb(0 0 0 / 50%)' : 'rgb(255 255 255 / 50%)';
    textBox.style.backgroundColor = mode ? 'rgb(255 255 255 / 50%)' : 'rgb(0 0 0 / 50%)';

    toggleIcon.children[0].textContent = mode ? 'Dark Mode' : 'Light Mode';
    let removeClass = !mode ? 'fa-moon' : 'fa-sun';
    let addClass = mode ? 'fa-moon' : 'fa-sun';
    toggleIcon.children[1].classList.replace(removeClass, addClass);    
    titleText.textContent = mode ? TITLE_HOME_DARK : TITLE_HOME_LIGHT;

    let imageColor = mode ? DARK_THEME : LIGHT_THEME;
    
    image1.src =`img/undraw_conceptual_idea_${imageColor}.svg`;
    image2.src =`img/undraw_feeling_proud_${imageColor}.svg`;
    image3.src =`img/undraw_proud_coder_${imageColor}.svg`;
}

toggleButton.addEventListener('change', (event) => {
    switchColor(event.target.checked ? DARK_THEME : LIGHT_THEME);
});

const currentMode = localStorage.getItem('theme');

if(currentMode) {
    switchColor(currentMode);
    if(currentMode === DARK_THEME) {
        toggleButton.checked = true;
    }
} else {
    rootElement.setAttribute('data-theme', LIGHT_THEME); // setting initial mode to light
}