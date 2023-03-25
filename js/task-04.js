const buttonOne = document.querySelector('button[data-action="decrement"]');
const buttonTwo = document.querySelector('button[data-action="increment"]');
const value = document.querySelector('#value')
let counterValue = 0;

buttonOne.addEventListener('click', oneClick);
buttonTwo.addEventListener('click', twoClick);

function oneClick() {
    counterValue -= 1;
    value.textContent = counterValue;
};
function twoClick() {
    counterValue += 1;
    value.textContent = counterValue;
};