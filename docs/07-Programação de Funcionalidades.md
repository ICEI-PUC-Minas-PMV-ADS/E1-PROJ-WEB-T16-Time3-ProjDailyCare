# Programação de Funcionalidades

*ORIENTAÇÕES: Implementação do sistema descritas por meio dos requisitos funcionais e/ou não funcionais. Deve relacionar os requisitos atendidos os artefatos criados (código fonte) além das estruturas de dados utilizadas e as instruções para acesso e verificação da implementação que deve estar funcional no ambiente de hospedagem.Para cada requisito funcional, pode ser entregue um artefato desse tipo. Esse trecho será excluido depois, mas as partes a seguir, não.*

As Telas desenvolvidas para as funcionalidades do sistema priorizadas na Sprint 3 serão apresentadas nesta seção, bem como os requisitos funcionais à estas correspondentes, os artefatos criados e orientações de acesso.

Tendo em vista que o sistema ainda não possui ambiente de hospedagem, as **Instruções de Acesso** para todas as funcionalidades e telas a seguir são as mesmas:

- Faça o download do arquivo do projeto (ZIP) ou clone do projeto no GitHub;
- Descompacte o arquivo em uma pasta específica;
- Abra o arquivo index.htm.

## Tela de Login

Escrever uma descrição semelhente ao do template Portal de Notícias. Veja um exemplo da tela a seguir:

colocar aqui um print da tela completa

### Requisitos Atendidos
- exemplo abaixo
-

### Artefatos da Funcionalidade
- exemplo no template portal de noticias
-
-

### Estrutura de Dados
exemplo no template portal de noticias

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

### Estrutura de Dados
exemplo no template portal de noticias

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


