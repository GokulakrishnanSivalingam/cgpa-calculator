const email = document.getElementById("email")

const form = document.getElementById("loginform")
form.addEventListener('submit', (e) => {

    if (checkvalid() == false) {
        e.preventDefault();
    }
});

function setError(input, message) {

    const formcontrol = input.parentElement;
    const small = formcontrol.querySelector('small');
    formcontrol.className = 'form-control error';
    small.innerText = message;
}

function setSuccess(input) {
    const formcontrol = input.parentElement;
    formcontrol.className = 'form-control success';

}

function checkvalid() {
    const emailval = email.value.trim();

    success = true;
    if (emailval === '') {
        setError(email, "Please fill your Name");
        success = false
    } else {
        setSuccess(email);
    }

    return success;
}