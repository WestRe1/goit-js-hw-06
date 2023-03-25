const inputElement = document.querySelector('#name-input');
const outputElement = document.querySelector('#name-output')
inputElement.addEventListener('input', onInput);


function onInput(evt) {
    if (evt.currentTarget.value.length === 0) {
        outputElement.textContent = 'Anonymou';
    } else {
        outputElement.textContent = evt.currentTarget.value;
    }
};