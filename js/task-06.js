const inputelement = document.querySelector('#validation-input');
const validationLength = inputelement.dataset.length;


inputelement.addEventListener('blur', onInput);

function onInput(evt) {

    if (evt.currentTarget.value.length === Number(validationLength)) {
        if (inputelement.classList.contains('invalid')) {
            inputelement.classList.remove('invalid')
            inputelement.classList.add('valid')
        } else
            inputelement.classList.add('valid')
        } else if (evt.currentTarget.value.length === 0) {
            inputelement.classList.remove('invalid');
            inputelement.classList.remove('valid')
    } else {
        if (inputelement.classList.contains('valid')) {
            inputelement.classList.remove('valid')
            inputelement.classList.add('invalid')
        }
        
        inputelement.classList.add('invalid')
    }

};
