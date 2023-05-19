function login(){
    // Iniciando login

     // Colhendo todos os valores dos elementos presentes no formulário
     var email = document.getElementById('email').value;
     var senha = document.getElementById('senha').value;

    // Colher os usuários salvos no localStorage
    var usuariosLocalStorage = JSON.parse(localStorage.getItem('dadosUsuarios'));
    var encontrouUsuario = false;
   
    for (let i= 0; i < usuariosLocalStorage.length; i++) {
        if (usuariosLocalStorage[i].email == email && usuariosLocalStorage[i].senha == senha){
            encontrouUsuario = true;
        }
    }

    if (encontrouUsuario) {
        // Salvar usuário logado
        var usuarioLogado = {
            email: email,
            senha: senha,
        }
        localStorage.setItem('usuarioLogado', JSON.stringify(usuarioLogado));
        window.location.href = window.location.origin + "/index.html";
    }
    else{
        alert('Email ou senha incorretos.');
    }

    // Finalizando login
}

function novoAcessoRedirecionar() {
    window.location.href = window.location.origin + "/usuario/cadastro/cadastro.html";
}