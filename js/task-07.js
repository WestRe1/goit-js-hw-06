const inputElement = document.querySelector('#font-size-control');
const text = document.querySelector('#text')
inputElement.addEventListener('input', onInput)

function onInput(evt) {
    text.style.fontSize = `${evt.currentTarget.value}px`  
}