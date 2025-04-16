function validateForm(){
    let name = document.getElementById("name").value.trim();
    let name = document.getElementById("email").value.trim();
    let name = document.getElementById("password").value.trim();
    let name = document.getElementById("confirmpassword").value.trim();
    let name = document.getElementById("error-message").value.trim();

    errorMessage.textContent = "";

    if(name === ""){
        errorMessage.textContent = "por favor, insira seu nome.";
        return false;
    }

    if(password === ""){
        errorMessage.textContent = "por favor, insira sua senha.";
        return false;
    }

    if(password === confirmpassword){
        errorMessage.textContent = "as senhas não conferem.";
        return false;
    }

    return true;
}