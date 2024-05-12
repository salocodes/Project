document.querySelector(".forminfo").addEventListener('submit', function (event) {
    if(!validateName() || !validateEmail() || !validatePhone() || !validaMessage()){
        event.preventDefault()
    }
})   

function validateName(){
    let nameValue = document.querySelector(".name").value;
    
    if(nameValue === ""){
        alert("Rellene el campo nombre")
        return false;

    } else if(nameValue === "ironhack"){
        alert("Usted no puede ser Ironhack, porque yo soy Ironhack")
        return false;
    }
    return true;
}

function validateEmail(){
    let emailValue = document.querySelector(".mail").value;

    if(emailValue === ""){
        alert("Rellene el campo email.")
        return false;
    }
    return true;
}


function validatePhone(){
    let phoneValue = document.querySelector(".phone").value;

    if(phoneValue === ""){
        alert("Rellene el campo teléfono")
        return false;

    } 
    return true; 
}

function validaMessage(){

    let messageValue = document.querySelector(".message").value

    if(messageValue === ""){
        alert("Rellene el campo del mensaje")
    
    }else{
        return true;
    }
}