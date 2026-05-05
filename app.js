const selectionMenu = document.querySelector('.selection-background');
const selectionContainer = document.querySelector('.selection-container');
const hamburgerMenu = document.querySelector('.hamburger');
const menuCloseIcon = document.querySelector('.close');

hamburgerMenu.addEventListener('click', () => {
    selectionMenu.classList.add('selection-background-open');
    selectionContainer.classList.add('selection-container-open');
})

menuCloseIcon.addEventListener('click', () => {
    selectionMenu.classList.remove('selection-background-open');
    selectionContainer.classList.remove("selection-container-open");
})