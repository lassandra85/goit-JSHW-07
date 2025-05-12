function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, 0)}`;
}

const widget = document.body;
const colorValueSpan = document.querySelector('.color');
const changeColorBtn = document.querySelector('.change-color');

function handleChangecolor() {
    const newColor = getRandomHexColor();
    widget.style.backgroundColor = newColor;
    colorValueSpan.textContent = newColor;
}

changeColorBtn.addEventListener('click', handleChangecolor);
