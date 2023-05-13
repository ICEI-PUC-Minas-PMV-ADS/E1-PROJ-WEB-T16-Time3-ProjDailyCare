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


