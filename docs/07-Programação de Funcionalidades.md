# Programação de Funcionalidades

*ORIENTAÇÕES: Implementação do sistema descritas por meio dos requisitos funcionais e/ou não funcionais. Deve relacionar os requisitos atendidos os artefatos criados (código fonte) além das estruturas de dados utilizadas e as instruções para acesso e verificação da implementação que deve estar funcional no ambiente de hospedagem.Para cada requisito funcional, pode ser entregue um artefato desse tipo. Esse trecho será excluido depois, mas as partes a seguir, não.*

As Telas desenvolvidas para as funcionalidades do sistema priorizadas na Sprint 3 serão apresentadas nesta seção, bem como os requisitos funcionais à estas correspondentes, os artefatos criados e orientações de acesso.

Tendo em vista que o sistema ainda não possui ambiente de hospedagem, as **Instruções de Acesso** para todas as funcionalidades e telas a seguir são as mesmas:

- Faça o download do arquivo do projeto (ZIP) ou clone do projeto no GitHub;
- Descompacte o arquivo em uma pasta específica;
- Abra o arquivo index.htm.

## Tela de Login

Tela de login, onde contem os campos de email e senha, se preenchidos corretamente, clicando no botão acessar é encaminhado a tela Home, clicando no botão novo acesso, é direcionado a tela de cadastro.

![Tela de login](https://github.com/ICEI-PUC-Minas-PMV-ADS/E1-PROJ-WEB-T16-Time3-ProjDailyCare/assets/127430454/9348e3b9-c1b4-4423-b4c4-b8dde5813486)



### Requisitos Atendidos
- RF-001
- RF-002
- RF-003
- RF-004
- RF-005
- RF-006
- RF-007

### Artefatos da Funcionalidade
- login.html
- style.css
- scripts.js

### Estrutura de Dados

```
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
        window.location.href = window.location.origin + "/src/index.html";
    }
    else{
        alert('Email ou senha incorretos.');
    }

    // Finalizando login
}

function novoAcessoRedirecionar() {
    window.location.href = window.location.origin + "/src/usuario/cadastro/cadastro.html";
}
```

## Tela de Cadastro

Tela em que o usuário realiza o cadastro com os seguntes dados: nome, email, senha, data de nascimento, estado civil, sexo e qual aspecto neurodivergente o usuario se encontra.

![Tela de Cadastro](https://github.com/ICEI-PUC-Minas-PMV-ADS/E1-PROJ-WEB-T16-Time3-ProjDailyCare/assets/127430454/9ed3f489-2786-4aeb-a0b0-a997fa568905)


### Requisitos Atendidos
- RF-001
- RF-002
- RF-003
- RF-004
- RF-005
- RF-006
- RF-007

### Artefatos da Funcionalidade
- cadastro.html
- style.css
- scripts.js

### Estrutura de Dados
```
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
    window.location.href = window.location.origin + "/src/login/login.html";
}
```

## Tela de Dados do usuário

Tela em que o usuário pode modificar os dados inseridos na tela de cadastro.

![Tela de Dados do Usuário](https://github.com/ICEI-PUC-Minas-PMV-ADS/E1-PROJ-WEB-T16-Time3-ProjDailyCare/assets/127430454/893bd4bd-348f-4ece-a871-ea039bda0516)


### Requisitos Atendidos


### Artefatos da Funcionalidade
- edicao.html
- style.css
- scripts.js

### Estrutura de Dados
```
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
```

## Notificações

Escrever uma descrição semelhente ao do template Portal de Notícias. A seguir, uma visualização em imagem da tela:

colocar aqui um print da tela completa

### Requisitos Atendidos
- RF-001
- RF-005
- RF-006

### Artefatos da Funcionalidade
- exemplo no template portal de noticias

### Estrutura de Dados
exemplo no template portal de noticias

## Anotações

Esta tela possui funcionalidade que permite ao usuário fazer anotações sobre sessões terapêuticas e relatórios de equipes multidisciplinares.

![anotacoes tela](https://github.com/ICEI-PUC-Minas-PMV-ADS/E1-PROJ-WEB-T16-Time3-ProjDailyCare/assets/124836743/a982a824-3b55-461f-91c1-2f7181b7206f)


### Requisitos Atendidos
- RF-002

### Artefatos da Funcionalidade
- anotacoes.html
- anotacoes.css
- anotacoes.js


## Calendário

Essa tela apresenta um calendário interativo e permite ao usuário adicionar eventos ou compromissos. Utiliza técnicas de dinamicidade baseada em AJAX, para acrescentar os elementos de interatividade e melhorar a interface e demais elementos visuais da funcionalidade. Segue uma imagem da tela:

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/E1-PROJ-WEB-T16-Time3-ProjDailyCare/assets/112430045/99dd2fdc-2421-4694-9f3e-00d0edc04b26)

### Requisitos Atendidos
- RF-001

### Artefatos da Funcionalidade
- calendario.html
- style-calendario.css
- script-calendario.js

### Estrutura de Dados

```
"appointmentsArray":[
    "appointment": {
        "day": 10,
        "month": 05,
        "year": 2023,
        "time": "10:30",
        "title": "Consulta com Neurologista"
    }
]
```

## Dados Médicos

Essa tela apresenta 5 listas de opções onde o usuário poderá marcar até uma alternativa. Os dados pertinentes a essa tela se referem à aspectos emocionais. alimentares, de foco, de engajamento e de tolerância. Essa tela faz-se de extrema importância para o acompanhamento do paciente ao longo do tempo e no intuito de mensurar seu progresso.

![tela dados medicos](https://github.com/ICEI-PUC-Minas-PMV-ADS/E1-PROJ-WEB-T16-Time3-ProjDailyCare/assets/124836743/4946d29a-b386-405a-bd14-c20742be1db1)


### Requisitos Atendidos
- RF-004

### Artefatos da Funcionalidade
- dadosmedicos.html
- dadosmedicos.js
- style.css

### Estrutura de Dados

```
function salvarLocalStorage() {
    localStorage.removeItem('dadosNeuroDivergentes');
    let data = localStorage.getItem('dadosNeuroDivergentes');
    alert(data);
    let dataJSON= JSON.parse(data);
    if (dataJSON == null) {
        dataJSON = {"dados":[]};
    }
    let dadosPaciente = {}
    dadosPaciente.humor = document.getElementById("humor_formulario").value;
    dadosPaciente.atencao = document.getElementById("atencao_formulario").value;
    dadosPaciente.atencao = document.getElementById("alimentacao_formulario").value;
    dadosPaciente.atencao = document.getElementById("engajamento_formulario").value;
    dadosPaciente.atencao = document.getElementById("tolerancia_formulario").value;

    dataJSON.dados.push(dadosPaciente);
    alert(dataJSON.dados);
    let dadosAtualizados = JSON.stringify(dataJSON);
    alert(dadosAtualizados);
    localStorage.setItem('dadosNeuroDivergentes', dadosAtualizados);
}

```


