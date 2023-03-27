const form = document.querySelector('.login-form');
form.addEventListener('submit', onForm);

function onForm(evt) {
    evt.preventDefault();
    
        const { email, password } = evt.currentTarget.elements;
    if (email.value.length === 0 || password.value.length === 0) { 
        alert('Заповніть незаповнене поле');
    } else {
        const value = {
            email: email.value,
            password: password.value,
        }
        console.log(value);
        form.reset();
    };
};