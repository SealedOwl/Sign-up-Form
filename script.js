// const passwords = document.querySelectorAll('input[type="password"]');

const password = document.querySelector('#password');
const confirmPassword = document.querySelector('#confirm-password');


confirmPassword.addEventListener('keyup',()=>{
    passwordMatch(password,confirmPassword)?
    confirmPassword.className="valid":
    confirmPassword.className="invalid";
});

function passwordMatch(pass1,pass2){
    return (pass1.value == pass2.value);
}