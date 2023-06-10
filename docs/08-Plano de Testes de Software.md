# Plano de Testes de Software

Esta seção descreve os requisitos funcionais e não funcionais que serão testados, os tipos de testes respectividamente escolhidos, os recursos de hardware e software a serem empregados e o cronograma e evolução dos testes ao longo da Srpint 5.

## Cronograma

## Tipos de Testes

Escolheu-se àqueles voltados para a melhor eficiência e execução de uma aplicação web, utilizando-se de abordagens tanto funcionais (caixa-preta) como estruturais (caixa-branca). Os tipos de teste selecionados foram:

- Teste de Navegabilidade;
- Teste de Responsividade;
- Teste de Campos e Páginas;
- Teste de Compatibilidade;
- Testes Ponta a Ponta.

## Casos de testes

O presente Plano de Testes se realiza a partir de casos de teste, orientados por Tipos de Testes e Requisitos Funcionais e Não-Funcionais documentados na seção [Especificações do Projeto](https://github.com/ICEI-PUC-Minas-PMV-ADS/E1-PROJ-WEB-T16-Time3-ProjDailyCare/blob/main/docs/02-Especifica%C3%A7%C3%A3o%20do%20Projeto.md) nesse mesmo repositório, abrangendo as Histórias de Usuário e os respectivos objetivos de cada caso.

### Testes Ponta a Ponta

|Caso de Teste|CT-01 Gerenciar tarefas ou eventos|
|----------------------|-----------------------------------------------------|
|**Objetivo**|Verificar se é possível criar tarefas ou eventos e receber as respectivas notificações|
|**História de Usuário**| * Eu, como pessoa neurodivergente, quero gerenciar tarefas importantes para para reduzir a procrastinação e ter mais cautela com os prazos do trabalho;<br>   * Eu quero ter acesso a funções específicas de agenda que contemplem minhas necessidades enquanto mãe de uma pessoa neuroatípica para ter acesso a ferramentas de gestão de organização de acordo com as necessidades e compromissos da minha filha.|
|**Requisitos Associados**|RF-001 Fornecer funcionalidades de calendário que permitam aos pacientes incluírem informações de agendamento de compromissos e consultas, bem como respectivas notificações|
|**Instruções de Execução**| 1) Acessar o documento index.hml através de um browser e fazer login;<br>2) Clicar, no menu, na aba Calendário; <br>3) No espaço que permite inserir data, selecionar àquela em que deseja atribuir uma tarefa e clicar no botão "Ir"; <br>4) Tendo verificado que a data desejada está em destaque no calendário, clicar no ícone de "+";<br>5) Inserir a tarefa no campo "Nome do Campromisso" e selecionar a data no campo "Horário", após, clicar no botão "Adicionar Comprmisso" |
|**Critérios de Êxito**|* A tarefa/evento criado deve constar na lista de compromissos referentes à data selecionada;<br>* A tarefa/evento criado deve estar visível na lista de notificações na tela Notificações.<br>* As tarefas/eventos criados deverão estar presentes na variável `appointments`, que podem ser vistas no Local Storage através das ferramentas do Desenvolvedor (recurso do Navegador).|
|**Tipo de Teste**|Ponta a Ponta|
|**Técnica Utilizada**|Manual|
|**Abordagem**|Caixa Preta|
|**Responsáveis**|Laila Martins|
<br>
<br>

|Caso de Teste|CT-02 Registrar Medicações|
|----------------------|-----------------------------------------------------|
|**Objetivo**|Verificar se é possível realizar cadastro de medicamentos, ser notificado sobre a medicação e confirmar o uso|
|**História de Usuário**| Eu, como pessoa neurodivergente, quero registrar medicação diariamente para não perder os horários das medicações e ter confirmação se as tomou ou não.|
|**Requisitos Associados**|RF-005O O sistema deve enviar lembretes ao usuário nos horários das medicações, incluindo uma opção de confirmação|
|**Instruções de Execução**| 1) Acessar o documento index.hml através de um browser e fazer login;<br>2) Clicar, no ícone de usuário, no cabeçalho, que direcionará para a tela Dados do Usuário;<br>3) No campo "Medicamentos" selecionar os medicamentos que consome, podendo selecionar até todos eles. Havendo necessidade, escrever no campo "Insira outro medicamento" um farmaco que não se encontra na lista e clicar em "adicionar medicamento", podendo realizar a ação mais de uma vez; <br>4) Tendo selecionado os medicamentos, clicar no botão "Adicionar Horário" e selecionar os horários correspondentes a todos os medicamentos listados;<br>5) Clicar no Botão "Salvar Horários"; <br>6) Clicar na aba "Notificações" no menu e visualizar as medicações de uso contínuo; <br>7) Na tela de notificações, tendo realizado a medicação na respectiva data, clicar no ícone de "check" para confirmar o uso.|
|**Critérios de Êxito**|* Os medicamentos cadastrados devem constar na lista de medicamentos na tela de Dados do Usuário;<br>* Os medicamentos devem poder ser excluídos dos Dados do Usuário a partir do botão de "fechar"; <br>* Os medicamentos devem constar, diariamente, na lista de Horários de Medicamentos, na tela de Notificações.; <br>* Após confirmação do uso, o medicamento confirmado não deve aparecer na tela de Notificações até a data seguinte. <br>* Os medicamentos cadastrados deverão estar presentes na variável `horariosMedicamentos`, que podem ser vistas no Local Storage através das ferramentas do Desenvolvedor (recurso do Navegador); <br>* Os medicamentos cujo uso foram confirmados deverão estar presentes na variável `medicamentosTomados`, que podem ser vistas no Local Storage através das ferramentas do Desenvolvedor (recurso do Navegador).|
|**Tipo de Teste**|Ponta a Ponta|
|**Técnica Utilizada**|Manual|
|**Abordagem**|Caixa Preta|
|**Responsáveis**|Arthur Zebral|
<br>
<br>

|Caso de Teste|CT-03 Registrar Aspectos Globais|
|----------------------|-----------------------------------------------------|
|**Objetivo**|Verificar o registro de aspectos de comportamento e os gráficos gerados.|
|**História de Usuário**| * Eu, como pessoa neurodivergente, quero registrar mudanças de humor, para monitorar os sintomas das mudanças e comunicar ao terapeuta e ao médico.<br>* Eu, como mãe de uma pessoa neurodivergente, quero controlar diariamente os aspectos globais da filha (humor, agitação, engajamento, evacuação, alimentação, etc), para identificar gatilhos da filha, ter maior monitoramento dessas condições e poder compartilha-las com a equipe médica. <br>* Eu, como mãe de uma pessoa neurodivergente, quero ter acesso a gráficos de desempenho dos aspectos globais monitorados, para apresentar junto a equipe multidisciplinar / médica o desenvolvimento e eficácia do tratamento.|
|**Requisitos Associados**|RF-004	Possibilitar a inclusão de dados de aspectos globais do paciente, como humor, atenção, alimentação, engajamento e tolerância;<br>RF-003	Disponibilizar a geração de gráficos a partir de histórico de dados.|
|**Instruções de Execução**| 1) Acessar o documento index.hml através de um browser e fazer o login;<br>2) Clicar, no menu, na aba Dados Médicos; <br>3) No campo "Humor" selecionar a opção desejada; <br>4) Nos demais campos, selecionar uma nota de 1 a 10, respectivamente a cada cmapo, de acordo com o desempenho do usuário; <br>5) Clicar no botão "Enviar"; 6) Acessar, através do menu, a aba "Home" e visualizar dois gráficos criados a partis das informações inseridas em Dados Médicos; 7) A partir de novos preenchimentos diários, visualizar as mudanças nod gráficos.|
|**Critérios de Êxito**|* Ao enviar os dados preenchidos, deve aparcer o `alert` "Dados Salvos com Sucesso";<br>* Todos os registros diários de aspectos globais devem constar nos gráficos da HomePage e modificá-los a partir do acréscimo de novas informações; <br>* A ausência de valores de Dados Médicos no perfil do usuário deve fazer com que a tela Home exiba a mensagem "Você ainda não possui dados";<br>* Os valores inseridos diariamente deverão estar presentes na variável `dadosNeurodivergentes`, que podem ser vistas no Local Storage através das ferramentas do Desenvolvedor (recurso do Navegador).|
|**Tipo de Teste**|Ponta a Ponta|
|**Técnica Utilizada**|Manual|
|**Abordagem**|Caixa Preta|
|**Responsáveis**|Carolina Morais|
<br>
<br>






|Caso de Teste|CT-01 Conseguir navegar por todas as telas da aplicação|
|----------------------|-----------------------------------------------------|
|**Objetivo**|Verificar se todos os Botões e Ícones da aplicação levam o usuário às telas corretas|
|**Requisitos Associados**|RNF-001 A plataforma deve ter interface clean, intuitiva e de fácil manuseio pelo usuário; <br>RNF-006 O sistema deve sinalizar o usuário quando alguma operação está demorando mais que o comum; <br>RNF-007 Deve tratar ao usuário erros inerentes à aplicação (conexão, memória local, memória do provedor, etc);<br>RNF-008 Deve processar requisições do usuário em no máximo 3s.|
|**Instruções de Execução**|1) Acessar o documento index.hml através de um browser;<br>2)Clicar no botão de "Novo Acesso"|
|**Saída Esperada**|blo|
|**Tipo de Teste**|blible|
|**Técnica Utilizada**|manual () automática ()|
|**Abordagem**|Caixa Branca () Caixa Preta ()|
|**Responsáveis**|fg|





|Caso de Teste|CT-01 Acesso a Calendário interativo com opção de criação de criação de eventos|
|----------------------|-----------------------------------------------------|
|**Objetivo**|Verificar se o Calendário respeita ordem correta de datas |
|**Requisitos Associados**|bla|
|**Instruções de Execução**|bli|
|**Saída Esperada**|blo|
|**Tipo de Teste**|blible|
|**Técnica Utilizada**|manual () automática ()|
|**Abordagem**|Caixa Branca () Caixa Preta ()|
|**Responsáveis**|fg|









 
## Ferramentas de Testes (Opcional)

