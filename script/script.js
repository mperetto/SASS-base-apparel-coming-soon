
const submit = document.querySelector('#btn-submit');

submit.addEventListener('click', (e) => {
    e.preventDefault();
    const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    const email = document.querySelector('#email');
    if(!re.test(email.value)) {
        const errorMessage = document.querySelector('.message');
        errorMessage.classList.add('error');
        email.classList.add('error');
        const iconError = document.querySelector('.icon-error');
        iconError.classList.add('error');
    }
    else {
        const form = document.querySelector('#email-form');
        form.submit();
    }
})