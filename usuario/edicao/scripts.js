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
        if (sexo) sexo.checked = true;
        var selectMedicamentos = $('#medicamentos');
        selectMedicamentos.val(medicamentosSelecionados);
        selectMedicamentos.selectpicker('refresh');
    
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
        window.location.href = window.location.origin + "/E1-PROJ-WEB-T16-Time3-ProjDailyCare/usuario/login/login.html";
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
    window.location.href = window.location.origin + "/E1-PROJ-WEB-T16-Time3-ProjDailyCare/usuario/login/login.html";
}
function redirecionarTelaEdicao() {
    window.location.href = window.location.origin + "/E1-PROJ-WEB-T16-Time3-ProjDailyCare/usuario/edicao/edicao.html";
}

function atualizandoOrigemLinksMenu() {
    var links = document.querySelectorAll('a[name="link"]');
    for (let i = 0; i < links.length; i++) {
        var link = links[i];
        var href = link.getAttribute('href');
        link.setAttribute('href', `${window.location.origin}/${href}`);
    }
}
atualizandoOrigemLinksMenu();

$('.selectpicker').selectpicker({
  noneSelectedText: 'Selecione'
});

var contadorOpcoes = 1;
var medicamentosSelecionados = [];
var listaMedicamentos = [];
var horariosMedicamentos = {}; // Variável para armazenar os horários selecionados

function adicionarOpcao() {
  var novaOpcao = $('#outra-opcao').val();
  if (novaOpcao !== '') {
    var option = $('<option>', {
      text: novaOpcao,
      selected: true
    });
    $('.selectpicker').append(option);
    $('.selectpicker').selectpicker('refresh');
    $('#outra-opcao').val('');
  }
}

$(document).ready(function() {
  recuperarDadosUsuario(); // Recuperar os dados do usuário ao carregar a página
  recuperarHorarios(); // Recuperar os horários salvos ao carregar a página
  exibirHorarios(); // Exibir os horários salvos ao carregar a página

   // Atualizar o seletor Selectpicker após a atualização da página
   $('.selectpicker').selectpicker('refresh');
  
});


function recuperarHorarios() {
  var horariosSalvos = localStorage.getItem('horariosMedicamentos');
  if (horariosSalvos) {
    horariosMedicamentos = JSON.parse(horariosSalvos);
    listaMedicamentos = JSON.parse(horariosSalvos);
  } else {
    horariosMedicamentos = {}; // Criar um objeto vazio se não houver horários salvos
    listaMedicamentos = []
  }
}

function exibirHorarios() {
  var divHorarios = $('#horarios');
  divHorarios.empty(); // Limpar os elementos existentes

  for (var i = 0; i < listaMedicamentos.length; i++) {
    var horarioObj = listaMedicamentos[i];
    var novoItem = criarItemHorario(horarioObj.nome, horarioObj.horario);
    divHorarios.append(novoItem);
  }
}

function salvarHorarios() {
  localStorage.setItem('horariosMedicamentos', JSON.stringify(listaMedicamentos));
}

function removerItemHorario(nomeMedicamento) {
  console.log(nomeMedicamento);
  listaMedicamentos = listaMedicamentos.filter(function(medicamento) {
    return medicamento.nome !== nomeMedicamento;
  });
  salvarHorarios();
  exibirHorarios();
}

function criarItemHorario(medicamento, horario) {
  
  var novoItem = document.createElement("div");
  novoItem.className = "horario-item";

  var novoNomeMedicamento = document.createElement("span");
  novoNomeMedicamento.innerText = medicamento + ': ';
  novoItem.appendChild(novoNomeMedicamento);

  var novoHorario = document.createElement("span");
  novoHorario.innerText = horario;
  novoItem.appendChild(novoHorario);

  var botaoRemover = document.createElement("button");
  botaoRemover.type = "button";
  botaoRemover.className = "ml-3 mb-3 btn-excluirMed";

  var iconeRemover = document.createElement("span");
  iconeRemover.className = "bi bi-x-circle-fill";

  botaoRemover.appendChild(iconeRemover);
  botaoRemover.setAttribute("onclick", 'removerItemHorario("' + medicamento + '")');

  novoItem.appendChild(botaoRemover);


  return novoItem;
}


function adicionarMedicamentos() {
  var medicamentosSelecionadosNovos = $('#medicamentos').val();
  for (var i = 0; i < medicamentosSelecionadosNovos.length; i++) {
    var medicamento = medicamentosSelecionadosNovos[i];

    // Verifica se o medicamento já foi selecionado anteriormente
    if (medicamentosSelecionados.indexOf(medicamento) === -1) {
      medicamentosSelecionados.push(medicamento);

      if ($('#opcao-' + contadorOpcoes).length === 0) {
        var listaMedicamentos = document.getElementById("opcoes-lista");
        var novoItem = document.createElement("li");
        novoItem.className = "list-group-item";
        novoItem.id = "opcao-" + contadorOpcoes;

        var novoNomeMedicamento = document.createElement("span");
        novoNomeMedicamento.innerText = medicamento;
        novoItem.appendChild(novoNomeMedicamento);

        var novoCampoRelogio = document.createElement("input");
        novoCampoRelogio.type = "time";
        novoCampoRelogio.className = "form-control ml-3 relogio mb-3";
        novoItem.appendChild(novoCampoRelogio);

        var botaoRemover = document.createElement("button");
        botaoRemover.type = "button";
        botaoRemover.className = "btn btn-danger ml-3 mb-3 btn-remover";
        botaoRemover.innerText = "Remover";
        botaoRemover.setAttribute("onclick", "removerOpcao(" + contadorOpcoes + ")");
        novoItem.appendChild(botaoRemover);

        listaMedicamentos.appendChild(novoItem);

        contadorOpcoes++;
        $('.selectpicker').selectpicker('refresh');
      }
    }
  }
}

function salvarHorariosMedicamentos(){
  // Obtém a lista pelo ID
  const lista = document.getElementById('opcoes-lista');

  // Obtém todos os elementos <li> dentro da lista
  const elementosLi = lista.getElementsByTagName('li');

  // Cria um array para armazenar os valores
  const valores = [];

  // Percorre os elementos <li>
  for (let i = 0; i < elementosLi.length; i++) {
    const elementoLi = elementosLi[i];

    // Obtém o valor do <span> e do <input>
    const valorSpan = elementoLi.querySelector('span').innerText;
    const valorInput = elementoLi.querySelector('input').value;

    // Adiciona os valores ao array
    valores.push({ nome: valorSpan, horario: valorInput });
  }

  listaMedicamentos = valores;

  salvarHorarios();
  exibirHorarios();

}


function removerOpcao(id) {
  var elementoRemover = document.getElementById("opcao-" + id);
  var nomeMedicamento = elementoRemover.getElementsByTagName("span")[0].innerText;
  medicamentosSelecionados = medicamentosSelecionados.filter(function(medicamento) {
    return medicamento !== nomeMedicamento;
  });
  listaMedicamentos = listaMedicamentos.filter(function(medicamento) {
    return medicamento.nome !== nomeMedicamento;
  });
  salvarHorarios();
  elementoRemover.remove();
}





