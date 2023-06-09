// Recupera os horários salvos do Local Storage
var horariosString = localStorage.getItem('horariosMedicamentos');
var horarios = JSON.parse(horariosString);

// Recupera os compromissos salvos do Local Storage
var diasComCompromissosString = localStorage.getItem('appointments');
var diasComCompromissos = JSON.parse(diasComCompromissosString);

// Exibe os horários na página
var listaHorarios = document.getElementById('lista-horarios');

// Exibe os compromissos na página
var listaCompromissos = document.getElementById('lista-compromissos');



function exibirHorarios() {
  var divHorarios = $('#lista-horarios');
  divHorarios.empty(); // Limpar os elementos existentes
  for (var medicamento in horarios) {
    var horarioObj = horarios[medicamento];  
    var novoItem = document.createElement("li");
    novoItem.className = "horario-item horarioSalvo form_grupo";
    novoItem.innerText = horarioObj.nome + ': ' + horarioObj.horario;
    listaHorarios.appendChild(novoItem);
    var botaoRemover = document.createElement("button");
    botaoRemover.type = "button";
    botaoRemover.className = "btn btn-danger ml-3 mb-3 btn-excluirMed";
    botaoRemover.innerText = "X";
    botaoRemover.setAttribute("onclick", 'removerItemHorario("' + horarioObj.nome + '")');
    novoItem.appendChild(botaoRemover);
  }
}

function exibirCompromissos() {
  var divCompromissos = $('#lista-compromissos');
  divCompromissos.empty(); // Limpar os elementos existentes
  for (var diaComCompromisso in diasComCompromissos) {
    diaObj = diasComCompromissos[diaComCompromisso];
    var diaDoCompromisso = diaObj.day;
    var mesDoCompromisso = diaObj.month;
    var anoDoCompromisso = diaObj.year;
    for (var compromisso in diaObj.appointments) {
      compromissoObj = diaObj.appointments[compromisso];
      var novoItem = document.createElement("li");
      novoItem.className = "compromisso-item horarioSalvo form_grupo";
      novoItem.innerText = diaDoCompromisso + '/' + mesDoCompromisso + '/' + anoDoCompromisso + ' as ' + compromissoObj.time + ': ' + compromissoObj.title;
      listaCompromissos.appendChild(novoItem);

      var botaoRemover = document.createElement("button");
      botaoRemover.type = "button";
      botaoRemover.className = "btn btn-danger ml-3 mb-3 btn-excluirMed";
      botaoRemover.innerText = "X";
      botaoRemover.setAttribute("onclick", 'removerItemHorario("' + diaObj.title + '")');
      novoItem.appendChild(botaoRemover);
    }
   
  }
}

function salvarHorarios() {
  localStorage.setItem('horariosMedicamentos', JSON.stringify(horarios));
}

function removerItemHorario(nomeMedicamento) {
  horarios = horarios.filter(function(medicamento) {
    return medicamento.nome !== nomeMedicamento;
  });
  salvarHorarios();
  exibirHorarios();
}

function removerItemCompromisso(nomeMedicamento) {
  horarios = horarios.filter(function(medicamento) {
    return medicamento.nome !== nomeMedicamento;
  });
  salvarHorarios();
  exibirHorarios();
}

exibirHorarios();
exibirCompromissos();

