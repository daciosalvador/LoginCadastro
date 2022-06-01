//Esconder Div e aparecer quando cliclar
function mudar(clickDiv) {
    var display = document.getElementById(clickDiv).style.display;
    if(display == "none"){
        document.getElementById(clickDiv).style.display = 'block';
    } else{
        document.getElementById(clickDiv).style.display = 'none';
    }
}


// Validar campo confirmar senha
function validadePassword(){    
    var password = document.getElementById("password")
    var confirme_password = document.getElementById("confirme_password");

    if(password.value != confirme_password.value) {
        confirme_password.setCustomValidity("As senhas digitadas não são iguais. Verifique e corrija!");
        confirme_password.reportValidity();
        return false
    } else {
        confirme_password.setCustomValidity("");
        return true;
    }
}