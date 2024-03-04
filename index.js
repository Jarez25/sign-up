const firstNameInput = document.getElementById('firstName');
const lastNameInput = document.getElementById('lastName');
const emailInput = document.getElementById('email');
const phoneInput = document.getElementById('phone');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirmPassword');
const createAccountButton = document.getElementById('createAccount');

function validatePassword(password, confirmPassword) {
    if (password.length !== 0 && confirmPassword.length !== 0) {
        return password === confirmPassword;
    }
}

function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

  

function validateName(name) {
    return name.length !== 0;
}

function setInvalidInput(input) {
    console.log('Input: ', input);
    input.classList.add('invalid');
}

function createAccount(event) {
    event.preventDefault();

    const firstName = firstNameInput.value;
    const lastName = lastNameInput.value;
    const email = emailInput.value;
    const phone = phoneInput.value;
    const password = passwordInput.value;
    const confirmPassword = confirmPasswordInput.value;

    const isFirstNameValid = validateName(firstName);
    const isLastNameValid = validateName(lastName);
    const isEmailValid = validateEmail(email);
    const isPasswordInvalid = !validatePassword(password, confirmPassword);

    if (!isFirstNameValid) {
        console.log('not valid name');
        setInvalidInput(firstNameInput);
    }

    if (!isLastNameValid) {
        console.log('not valid name');
        setInvalidInput(lastNameInput);
    }

    if (!isEmailValid) {
        console.log('not valid email');
        setInvalidInput(emailInput);
    }

    if (isPasswordInvalid) {
        setInvalidInput(passwordInput);
        setInvalidInput(confirmPasswordInput);
    }

    alert("resgitrado correctamente")

}

createAccountButton.addEventListener('click', createAccount);