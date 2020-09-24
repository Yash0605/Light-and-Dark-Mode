const DARK_THEME = 'dark';
const LIGHT_THEME = 'light';

const toggleButton = document.querySelector('input[type=checkbox]');
const nav = document.getElementById('nav');
const textBox = document.getElementById('text-box');
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');
const toggleIcon = document.getElementById('toggle-icon');
const titleText = document.getElementById('title-text');

// function setVariables(key, value) {
//     key = 
// }

const rootElement = document.documentElement;

function switchColor(isDark) {
    const mode = isDark === DARK_THEME ? true : false;
    nav.style.backgroundColor = mode ? 'rgb(0 0 0 / 50%)' : 'rgb(255 255 255 / 50%)';
    textBox.style.backgroundColor = mode ? 'rgb(255 255 255 / 50%)' : 'rgb(0 0 0 / 50%)';

    toggleIcon.children[0].textContent = mode ? 'Dark Mode' : 'Light Mode';
    let removeClass = !mode ? 'fa-moon' : 'fa-sun';
    let addClass = mode ? 'fa-moon' : 'fa-sun';
    toggleIcon.children[1].classList.replace(removeClass, addClass);    
    titleText.textContent = mode ? 'Welcome to the Dark side' : 'Welcome to the Light';

    let imageColor = mode ? 'dark' : 'light';
    image1.src =`img/undraw_conceptual_idea_${imageColor}.svg`;
    image2.src =`img/undraw_feeling_proud_${imageColor}.svg`;
    image3.src =`img/undraw_proud_coder_${imageColor}.svg`;
}

toggleButton.addEventListener('change', (event) => {
    if(event.target.checked) {
        rootElement.setAttribute('data-theme', DARK_THEME)
        localStorage.setItem('theme', DARK_THEME)
    } else {
        rootElement.setAttribute('data-theme', LIGHT_THEME)
        localStorage.setItem('theme', LIGHT_THEME)
    }
    switchColor(event.target.checked ? DARK_THEME : LIGHT_THEME);
});

const currentMode = localStorage.getItem('theme');

if(currentMode) {
    let modeVal = currentMode === DARK_THEME ? true : false;
    rootElement.setAttribute('data-theme', currentMode);
    switchColor(modeVal);

    if(modeVal) {
        toggleButton.checked = true;
    }
} else {
    rootElement.setAttribute('data-theme', LIGHT_THEME); // setting initial mode to light
}