# Especificações do Projeto

<span style="color:red">Pré-requisitos: <a href="1-Documentação de Contexto.md"> Documentação de Contexto</a></span>

As especificações mais exatas em relação ao desenvolvimento da aplicação, principalmente no que diz respeito ao perfil dos usuários visados, suas expectativas e como atendê-las, foram elaboradas a partir da realização de uma pesquisa de campo, com a aplicação de um formulário de questões através da plataforma Google Forms, cujo público alvo foram pessoas neurodivergentes e pessoas responsáveis por indivíduos inclusos nesse grupo.

Foram colhidas informações de vinte e sete participantes através da pesquisa consolidada. O levantamento dessas informações permitiu ao grupo a idealização de dois tipos distintos de personas e suas respectivas histórias de usuários.

## Personas
As personas criadas a partir da pesquisa supracitada encontram-se descritas a seguir:

![Danielle](https://user-images.githubusercontent.com/127430454/228360445-2e0da6c1-1bef-4daa-97a3-408569bb0747.png)
![Felipe](https://user-images.githubusercontent.com/127430454/228360489-16556856-6ca6-4aa9-a8f9-19f6971def5e.png)



## Histórias de Usuários

Conforme as vivências, dificuldades e desejos identificados a partir da pesquisa realizada, bem como da elaboração das personas, foram elaboradas as seguintes histórias de usuário:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
|Felipe Ribeiro      | gerenciamento de tarefas importantes|para reduzir a procrastinação e ter mais cautela com os prazos do trabalho.|
|Felipe Ribeiro  |registrar medicação diariamente        | para não perder os horários das medicações e ter confirmação se as tomou ou não.|
|Felipe Ribeiro       | registrar de hábitos de sono     | para melhorar e regular o horário de sono |
|Felipe Ribeiro  | registrar mudanças de humor           | para monitorar os sintomas das mudanças de humor e comunicar ao terapeuta e ao médico.|
|Felipe Ribeiro |acessar a plataforma tanto pelo desktop como pelo celular | utilizar o tempo disponível entre uma atividade e outra para atualizar os dados. |
|Danielle Barbosa | anotar os feedbacks e informações rotineiras dadas pela equipe multidisciplinar e médica |para ter controle das orientações fornecidas pela equipe de saúde e ter um histórico de referências e demandas da equipe|
|Danielle Barbosa      |controlar diariamente os aspectos globais da paciente (humor, agitação, engajamento, evacuação, alimentação, etc)|para identificar gatilhos da paciente, ter maior monitoramento dessas condições e poder compartilha-las com a equipe médica da paciente|
|Danielle Barbosa  |usufruir de uma aplicação que possuam funções específicas para o monitoramento que deseja realizar|customizar ferramentas de gestão de organização de acordo com as necessidades da pessoa por quem sou responsável|
|Danielle Barbosa      |ter uma aplicação específica para minhas necessidades de cuidadora que tenha funções de agenda| para facilitar o manuseio e fluxo de informações conforme os compromissos do paciente.|
|Danielle Barbosa  |poder fazer pesquisa através do histórico produzido|retomar um assunto abordado pela equipe ou reanalisar um aspecto|
|Danielle Barbosa       |ter acesso a gráficos de desempenho dos aspectos monitorados|apresentar junto a equipe multidisciplinar / médica o desenvolvimento e eficácia do tratamento|


## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|
|RF-001| Permitir que o usuário cadastre tarefas | ALTA | 
|RF-002| Emitir um relatório de tarefas no mês   | MÉDIA |


### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| O sistema deve ser responsivo para rodar em um dispositivos móvel | MÉDIA | 
|RNF-002| Deve processar requisições do usuário em no máximo 3s |  BAIXA | 

Com base nas Histórias de Usuário, enumere os requisitos da sua solução. Classifique esses requisitos em dois grupos:

- [Requisitos Funcionais
 (RF)](https://pt.wikipedia.org/wiki/Requisito_funcional):
 correspondem a uma funcionalidade que deve estar presente na
  plataforma (ex: cadastro de usuário).
- [Requisitos Não Funcionais
  (RNF)](https://pt.wikipedia.org/wiki/Requisito_n%C3%A3o_funcional):
  correspondem a uma característica técnica, seja de usabilidade,
  desempenho, confiabilidade, segurança ou outro (ex: suporte a
  dispositivos iOS e Android).
Lembre-se que cada requisito deve corresponder à uma e somente uma
característica alvo da sua solução. Além disso, certifique-se de que
todos os aspectos capturados nas Histórias de Usuário foram cobertos.

## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deverá ser entregue até o final do semestre |
|02| Não pode ser desenvolvido um módulo de backend        |


Enumere as restrições à sua solução. Lembre-se de que as restrições geralmente limitam a solução candidata.

> **Links Úteis**:
> - [O que são Requisitos Funcionais e Requisitos Não Funcionais?](https://codificar.com.br/requisitos-funcionais-nao-funcionais/)
> - [O que são requisitos funcionais e requisitos não funcionais?](https://analisederequisitos.com.br/requisitos-funcionais-e-requisitos-nao-funcionais-o-que-sao/)
