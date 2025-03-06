
function alteraVisibilidadeDeSenha(idInput, idOlho) {
    const input = document.getElementById(idInput)
    const olho = document.getElementById(idOlho)

    if (input.type == "password") {
        input.type = "text";
        olho.setAttribute('src', 'imagens/Olho-aberto.png');
    } else {
        input.type = "password";
        olho.setAttribute('src', 'imagens/Olho-fechado.png');
    }
}



function login() {
    let email = document.getElementById("input-email")
    let senha = document.getElementById("input-senha")

    let msn = "Email: " + email.value + 
            "\nSenha: " + senha.value;
            
    console.log(msn);
}



function autoPreencher(){
    let usuario = {"email": "email@gmail.com", "senha": "123456789"}

    let email = document.getElementById("email")
    let novaSenha = document.getElementById("nova-senha")
    let confirmaSenha = document.getElementById("confirma-senha")    

    email.value = usuario.email
    novaSenha.value = usuario.senha
    confirmaSenha.value = usuario.senha
}

function signup() {
    let email = document.getElementById("email")
    let novaSenha = document.getElementById("nova-senha")
    let confirmaSenha = document.getElementById("confirma-senha")    

    let msn = "Email: " + email.value +
            "\nNova senha: " + novaSenha.value + 
            "\nConfirma senha: " + confirmaSenha.value + "\n";

        
    if ((email.value === "") || (email.value.indexOf("@") === -1)){
        msn += "\nEmail invalido"
    } else {
        msn += "\nEmail valido"
    }

    if (!(novaSenha.value) || !(confirmaSenha.value)){
        msn += "\nSenha(s) invalida(s)"
    }else {
        if (novaSenha.value === confirmaSenha.value){
            msn += "\nSenhas iguais"
        } else {
            msn += "\nSenhas diferentes"
        }
    }

    console.log(msn)
}

