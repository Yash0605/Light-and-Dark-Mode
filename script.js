const toggleButton = document.querySelector('input[type=checkbox]');
const nav = document.getElementById('nav');
const textBox = document.getElementById('text-box');
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');
const toggleIcon = document.getElementById('toggle-icon');
const titleText = document.getElementById('title-text');

function switchColor(mode) {
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
    console.log(event.target.checked);
    const rootElement = document.documentElement;
    if(event.target.checked) {
        rootElement.setAttribute('data-theme', 'dark')
    } else {
        rootElement.setAttribute('data-theme', 'light')
    }
    switchColor(event.target.checked);
})