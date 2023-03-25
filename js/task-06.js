const inputelement = document.querySelector('#validation-input');
const validationLength = inputelement.dataset.length;


inputelement.addEventListener('blur', onInput);

function onInput(evt) {
    if (evt.currentTarget.value === validationLength) {
        inputelement.classList.add('valid')
    } else inputelement.classList.add('invalid')
};