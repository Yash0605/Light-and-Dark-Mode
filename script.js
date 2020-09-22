const toggleButton = document.querySelector('input[type=checkbox]')

toggleButton.addEventListener('change', (event) => {
    console.log(event.target.checked);
    const rootElement = document.documentElement;
    if(event.target.checked) {
        rootElement.setAttribute('data-theme', 'dark')
    } else {
        rootElement.setAttribute('data-theme', 'light')
    }
})