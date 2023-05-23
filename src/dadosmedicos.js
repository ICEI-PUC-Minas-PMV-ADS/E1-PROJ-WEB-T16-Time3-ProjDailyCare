function salvarLocalStorage() {
    //localStorage.removeItem('dadosNeuroDivergentes');
    let data = localStorage.getItem('dadosNeuroDivergentes');
    let dataJSON= JSON.parse(data);
    if (dataJSON == null) {
        dataJSON = {"dados":[]};
    }
    let dadosPaciente = {}
    dadosPaciente.humor = document.getElementById("humor_formulario").value;
    dadosPaciente.atencao = document.getElementById("atencao_formulario").value;
    dadosPaciente.alimentacao = document.getElementById("alimentacao_formulario").value;
    dadosPaciente.engajamento = document.getElementById("engajamento_formulario").value;
    dadosPaciente.tolerancia = document.getElementById("tolerancia_formulario").value;

    dataJSON.dados.push(dadosPaciente);
    let dadosAtualizados = JSON.stringify(dataJSON);
    localStorage.setItem('dadosNeuroDivergentes', dadosAtualizados);
    alert("Dados salvos com sucesso!")
}


