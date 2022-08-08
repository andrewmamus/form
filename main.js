// selector
const $ = (a)=> document.querySelector(a);

// main code

let password = $('.mypass'), confirmPass = $('.mypass2'), error = $('.error');

const validatePass = () => {
    if(password.value !== '' && confirmPass.value !== ''){
        if(password.value !== confirmPass.value){
            error.classList.remove('error-hide');
            error.classList.add('error-show');
            confirmPass.style.borderColor = 'red';
        }else{
            error.classList.remove('error-show');
            error.classList.add('error-hide');
            confirmPass.style.borderColor = 'blue';
        }
    }
    
}



$('#confirm-password').addEventListener("keyup", validatePass)