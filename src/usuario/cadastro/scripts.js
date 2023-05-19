function cadastro() {   
    // Iniciando cadastro

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
    
    // Montando o objeto com as informações do usuário
    var usuarioNovo = {
        nome: nome,
        email: email,
        senha: senha,
        data: dataNascimento,
        estadoCivil: estadoCivil,
        sexo: sexoSelecionado,
        aspectoGlobal: aspectoGlobalSelecionados,
    }

    // Colher os usuários salvos no localStorage
    var listaUsuarios = [];
    var usuariosLocalStorage = JSON.parse(localStorage.getItem('dadosUsuarios'));

    // Verificando se já existem usuários salvos no localStorage e adicionando na lista
    if (usuariosLocalStorage) {
        listaUsuarios = usuariosLocalStorage;
    }

    // Adicioanndo novo usuário a lista
    listaUsuarios.push(usuarioNovo);

    // Salvar a lista atualizada no localStorage
    localStorage.setItem('dadosUsuarios', JSON.stringify(listaUsuarios));

    // Finalizando cadastro
    alert('Finalizando cadastro');
    window.location.href = window.location.origin + "/login/login.html";
}