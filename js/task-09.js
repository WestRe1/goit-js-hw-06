function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


const bkColor = document.querySelector('.change-color');
const textColor = document.querySelector('.color')
const body = document.querySelector('body')

bkColor.addEventListener('click', onColor)

function onColor(evt) {
  body.style.backgroundColor = getRandomHexColor();
  textColor.textContent = getRandomHexColor();
};