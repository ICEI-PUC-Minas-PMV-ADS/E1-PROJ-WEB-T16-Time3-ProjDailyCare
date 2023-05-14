function recuperarDadosUsuario() {
    // Colher dados do usuário logado
    var usuarioLogado = JSON.parse(localStorage.getItem('usuarioLogado'));
    
    if (usuarioLogado){
        // Colher os usuários salvos no localStorage
        var usuariosLocalStorage = JSON.parse(localStorage.getItem('dadosUsuarios'));
        var dadosUsuario = {};
        for (let i= 0; i < usuariosLocalStorage.length; i++) {
            if (usuariosLocalStorage[i].email == usuarioLogado.email){
                dadosUsuario = usuariosLocalStorage[i];
            }
        }
        document.getElementById('inputNome').value = dadosUsuario.nome;
        document.getElementById('inputEmail').value = dadosUsuario.email;
        document.getElementById('inputPassword').value = dadosUsuario.senha;
        document.getElementById('dataNascimento').value = dadosUsuario.data;
        document.getElementById('estadoCivil').value = dadosUsuario.estadoCivil;
        var sexo = document.querySelector(`input[name="sexo"][value="${dadosUsuario.sexo}"]`);
        sexo.checked = true;
    
        if (dadosUsuario.aspectoGlobal.length){
            var aspectoGlobal = document.querySelectorAll('input[name="aspectoGlobal"]');
            for (let i= 0; i < aspectoGlobal.length; i++) {
                if (dadosUsuario.aspectoGlobal.includes(aspectoGlobal[i].value)){
                    aspectoGlobal[i].checked = true;
                }
            }
        }
    }
    else {
        alert('Usuário logado não encontrado!');
        window.location.href = window.location.origin + "/src/login/login.html";
    }
    
   
}
recuperarDadosUsuario();

function salvarEdicaoUsuario() {
    // Colher dados do usuário logado
    var usuarioLogado = JSON.parse(localStorage.getItem('usuarioLogado'));
    // Colher os usuários salvos no localStorage
    var usuariosLocalStorage = JSON.parse(localStorage.getItem('dadosUsuarios'));

    // Colhendo todos os valores dos elementos presentes no formulário
    var nome = document.getElementById('inputNome').value;
    var email = document.getElementById('inputEmail').value;
    var senha = document.getElementById('inputPassword').value;
    var dataNascimento = document.getElementById('dataNascimento').value;
    var estadoCivil = document.getElementById('estadoCivil').value;
    
    var sexos = document.querySelectorAll('input[name="sexo"]');
    var sexoSelecionado = '';
    for (let i = 0; i < sexos.length; i++) {
        if (sexos[i].checked){
            sexoSelecionado = sexos[i].value;
        }
    }

    var aspectoGlobal = document.querySelectorAll('input[name="aspectoGlobal"]');
    var aspectoGlobalSelecionados = [];
    for (let i= 0; i < aspectoGlobal.length; i++) {
        if (aspectoGlobal[i].checked){
            aspectoGlobalSelecionados.push(aspectoGlobal[i].value);
        }
    }

    for (let i= 0; i < usuariosLocalStorage.length; i++) {
        if (usuariosLocalStorage[i].email == usuarioLogado.email){

            usuariosLocalStorage[i].nome = nome;
            usuariosLocalStorage[i].email = email;
            usuariosLocalStorage[i].senha = senha;
            usuariosLocalStorage[i].data = dataNascimento;
            usuariosLocalStorage[i].estadoCivil = estadoCivil;
            usuariosLocalStorage[i].sexo = sexoSelecionado;
            usuariosLocalStorage[i].aspectoGlobal = aspectoGlobalSelecionados;

        }
    }

    // Salvar a lista atualizada no localStorage
    localStorage.setItem('dadosUsuarios', JSON.stringify(usuariosLocalStorage));

    alert('Dados alterados com sucesso!');

}

function saida() {
    localStorage.removeItem('usuarioLogado');
    window.location.href = window.location.origin + "/src/login/login.html";
}
function redirecionarTelaEdicao() {
    window.location.href = window.location.origin + "/src/usuario/edicao/edicao.html";
}

function atualizandoOrigemLinksMenu() {
    var links = document.querySelectorAll('a[name="link"]');
    for (let i = 0; i < links.length; i++) {
        var link = links[i];
        var href = link.getAttribute('href');
        link.setAttribute('href', `${window.location.origin}/src/${href}`);
    }
}
atualizandoOrigemLinksMenu();