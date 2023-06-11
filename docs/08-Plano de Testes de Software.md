# Plano de Testes de Software

Esta seção descreve os requisitos funcionais e não funcionais que serão testados, os tipos de testes respectividamente escolhidos, os recursos de hardware e software a serem empregados e o cronograma e evolução dos testes ao longo da Srpint 5.

## Casos de testes

O presente Plano de Testes se realiza a partir de casos de teste, orientados por Tipos de Testes e Requisitos Funcionais e Não-Funcionais documentados na seção [Especificações do Projeto](https://github.com/ICEI-PUC-Minas-PMV-ADS/E1-PROJ-WEB-T16-Time3-ProjDailyCare/blob/main/docs/02-Especifica%C3%A7%C3%A3o%20do%20Projeto.md) nesse mesmo repositório, abrangendo as Histórias de Usuário e os respectivos objetivos de cada caso.


|Caso de Teste|CT-01 Fazer cadastro de usuário e Login|
|----------------------|-----------------------------------------------------|
|**Objetivo**|Verificar se é possível criar um novo usuário e realizar login na aplicação|
|**História de Usuário**|Todas as histórias descritas a seguir|
|**Requisitos Associados**|Todos os requisitos funcionais|
|**Instruções de Execução**| 1) Acessar o documento index.hml através de um browser e clicar em "Novo Acesso", que levará para a tela de Cadastro de Usuário;<br>2) Preencher todos os campos e selecionar as opções disponíveis, após clicar em "cadastrar"; <br>3) Na tela de login, preencher os campos "e-mail" e "senha" com as informações anteriormente cadastradas e clicar em acessar; <br>4) Para voltar à tela de login, clicar no ícone de sair, na extremidade superior direita, em qualquer tela acessada após realizado o login.|
|**Critérios de Êxito**|* O cadastro apenas será válido com o preenchimento de todos os campos;<br>* Após realizado o cadastro, deverá constar um `alert` de "Finalizando cadastro";<br>* Após a realização do cadastro, deve haver redirecionamento para a tela de login;<br>* O login não poderá ser realizado a menos que sejam inseridas as informações de "e-mail" e "senha" cadastradas anteriormente pelo usuário. Caso não sejam fornecidas tais informações, deverá aparecer um `alert` de "E-mail ou Senha Incorretos". <br>* As informações de login do usuário, bem como as demais informações fornecidas no cadastro, deverão estar presentes na variável `dadosUsuario`, que podem ser vistas no Local Storage através das ferramentas do Desenvolvedor (recurso do Navegador).|
|**Tipo de Teste**|Ponta a Ponta|
|**Técnica Utilizada**|Manual|
|**Abordagem**|Caixa Preta|
|**Responsáveis**|Débora Alexia|
<br>
<br>

|Caso de Teste|CT-02 Editar Dados de Usuário|
|----------------------|-----------------------------------------------------|
|**Objetivo**|Verificar se é possível editar os dados fornecidos no cadastro do usuário|
|**História de Usuário**|Todas as histórias descritas a seguir|
|**Requisitos Associados**|Todos os requisitos funcionais|
|**Instruções de Execução**| 1) Acessar o documento index.hml através de um browser e realizar o login; <br>2) Selecionar o ícone de usuário no canto superior direito; <br>3) Na tela de Dados de Usuário, editar os campos desejados ou remover algumas das seleções possíveis; <br>4) Concluir a edição ao clicar no botão "Salvar".|
|**Critérios de Êxito**|* Após realizada as alterações, deverá constar um `alert` de "Dados alterados com sucesso!";<br>* Após a edição, os dados alterados devem permanecer de acordo com a última alteração até que se realiza uma nova edição;<br>* A edição dos campos "email" e "senha" devem implicar em novas informações de login para o respectivo usuário; <br>* As informações editadas de cadastro do usuário deverão estar presentes na variável `dadosUsuario`, que podem ser vistas no Local Storage através das ferramentas do Desenvolvedor (recurso do Navegador).|
|**Tipo de Teste**|Ponta a Ponta|
|**Técnica Utilizada**|Manual|
|**Abordagem**|Caixa Preta|
|**Responsáveis**|Arthur Zebral|
<br>
<br>

|Caso de Teste|CT-03 Gerenciar tarefas ou eventos|
|----------------------|-----------------------------------------------------|
|**Objetivo**|Verificar se é possível criar tarefas ou eventos e receber as respectivas notificações|
|**História de Usuário**| * Eu, como pessoa neurodivergente, quero gerenciar tarefas importantes para para reduzir a procrastinação e ter mais cautela com os prazos do trabalho;<br>   * Eu quero ter acesso a funções específicas de agenda que contemplem minhas necessidades enquanto mãe de uma pessoa neuroatípica para ter acesso a ferramentas de gestão de organização de acordo com as necessidades e compromissos da minha filha.|
|**Requisitos Associados**|RF-001 Fornecer funcionalidades de calendário que permitam aos pacientes incluírem informações de agendamento de compromissos e consultas, bem como respectivas notificações|
|**Instruções de Execução**| 1) Acessar o documento index.hml através de um browser e fazer login;<br>2) Clicar, no menu, na aba Calendário; <br>3) No espaço que permite inserir mês e ano, inserir àquele em que deseja selecionar um dia e clicar no botão "Ir" e, após, selecionar a data desejada no mês escolhido; <br>4) Tendo verificado que a data desejada está em destaque no calendário, clicar no ícone de "+";<br>5) Inserir a tarefa no campo "Nome do Campromisso" e selecionar a data no campo "Horário", após, clicar no botão "Adicionar Comprmisso" |
|**Critérios de Êxito**|* O campo de redirecionamento para um mês deve aceitar apenas meses válidos e cumprir a busca corretamente;<br>* A criação de tarefas e eventos apenas será possível mediante preenchimento de todos os campos exigidos;<br>* A tarefa/evento criado deve constar na lista de compromissos referentes à data selecionada;<br>* A tarefa/evento criado deve estar visível na lista de notificações na tela Notificações;<br>* As tarefas/eventos criados deverão estar presentes na variável `appointments`, que podem ser vistas no Local Storage através das ferramentas do Desenvolvedor (recurso do Navegador).|
|**Tipo de Teste**|Ponta a Ponta e de Campos|
|**Técnica Utilizada**|Manual|
|**Abordagem**|Caixa Preta|
|**Responsáveis**|Laila Martins|
<br>
<br>

|Caso de Teste|CT-04 Registrar Medicações|
|----------------------|-----------------------------------------------------|
|**Objetivo**|Verificar se é possível realizar cadastro de medicamentos, ser notificado sobre a medicação e confirmar o uso|
|**História de Usuário**| Eu, como pessoa neurodivergente, quero registrar medicação diariamente para não perder os horários das medicações e ter confirmação se as tomou ou não.|
|**Requisitos Associados**|RF-005O O sistema deve enviar lembretes ao usuário nos horários das medicações, incluindo uma opção de confirmação|
|**Instruções de Execução**| 1) Acessar o documento index.hml através de um browser e fazer login;<br>2) Clicar, no ícone de usuário, no cabeçalho, que direcionará para a tela Dados do Usuário;<br>3) No campo "Medicamentos" selecionar os medicamentos que consome, podendo selecionar até todos eles. Havendo necessidade, escrever no campo "Insira outro medicamento" um farmaco que não se encontra na lista e clicar em "adicionar medicamento", podendo realizar a ação mais de uma vez; <br>4) Tendo selecionado os medicamentos, clicar no botão "Adicionar Horário" e selecionar os horários correspondentes a todos os medicamentos listados;<br>5) Clicar no Botão "Salvar Horários"; <br>6) Clicar na aba "Notificações" no menu e visualizar as medicações de uso contínuo; <br>7) Na tela de notificações, tendo realizado a medicação na respectiva data, clicar no ícone de "check" para confirmar o uso.|
|**Critérios de Êxito**|* O cadastro dos medicamentos só deverá ser realizado com inserção de horários válidos; <br>* Os medicamentos cadastrados devem constar na lista de medicamentos na tela de Dados do Usuário;<br>* Os medicamentos devem poder ser excluídos dos Dados do Usuário a partir do botão de "fechar"; <br>* Os medicamentos devem constar, diariamente, na lista de Horários de Medicamentos, na tela de Notificações.; <br>* Após confirmação do uso, o medicamento confirmado não deve aparecer na tela de Notificações até a data seguinte. <br>* Os medicamentos cadastrados deverão estar presentes na variável `horariosMedicamentos`, que podem ser vistas no Local Storage através das ferramentas do Desenvolvedor (recurso do Navegador); <br>* Os medicamentos cujo uso foram confirmados deverão estar presentes na variável `medicamentosTomados`, que podem ser vistas no Local Storage através das ferramentas do Desenvolvedor (recurso do Navegador).|
|**Tipo de Teste**|Ponta a Ponta e de Campos|
|**Técnica Utilizada**|Manual|
|**Abordagem**|Caixa Preta|
|**Responsáveis**|Arthur Zebral|
<br>
<br>

|Caso de Teste|CT-05 Registrar Aspectos Globais|
|----------------------|-----------------------------------------------------|
|**Objetivo**|Verificar o registro de aspectos de comportamento e os gráficos gerados.|
|**História de Usuário**| * Eu, como pessoa neurodivergente, quero registrar mudanças de humor, para monitorar os sintomas das mudanças e comunicar ao terapeuta e ao médico.<br>* Eu, como mãe de uma pessoa neurodivergente, quero controlar diariamente os aspectos globais da filha (humor, agitação, engajamento, evacuação, alimentação, etc), para identificar gatilhos da filha, ter maior monitoramento dessas condições e poder compartilha-las com a equipe médica. <br>* Eu, como mãe de uma pessoa neurodivergente, quero ter acesso a gráficos de desempenho dos aspectos globais monitorados, para apresentar junto a equipe multidisciplinar / médica o desenvolvimento e eficácia do tratamento.|
|**Requisitos Associados**|RF-004	Possibilitar a inclusão de dados de aspectos globais do paciente, como humor, atenção, alimentação, engajamento e tolerância;<br>RF-003	Disponibilizar a geração de gráficos a partir de histórico de dados.|
|**Instruções de Execução**| 1) Acessar o documento index.hml através de um browser e fazer o login;<br>2) Clicar, no menu, na aba Dados Médicos; <br>3) No campo "Humor" selecionar a opção desejada; <br>4) Nos demais campos, selecionar uma nota de 1 a 10, respectivamente a cada cmapo, de acordo com o desempenho do usuário; <br>5) Clicar no botão "Enviar"; 6) Acessar, através do menu, a aba "Home" e visualizar dois gráficos criados a partis das informações inseridas em Dados Médicos; 7) A partir de novos preenchimentos diários, visualizar as mudanças nod gráficos.|
|**Critérios de Êxito**|* Os dados somente serão enviados após o preenchimento de todos os campos;<br> * Deverá haver a opção de escrever em texto um humor não identificado na lsita disponível;<br>* Ao enviar os dados preenchidos, deve aparcer o `alert` "Dados Salvos com Sucesso";<br>* Todos os registros diários de aspectos globais devem constar nos gráficos da HomePage e modificá-los a partir do acréscimo de novas informações; <br>* A ausência de valores de Dados Médicos no perfil do usuário deve fazer com que a tela Home exiba a mensagem "Você ainda não possui dados";<br>* Os valores inseridos diariamente deverão estar presentes na variável `dadosNeurodivergentes`, que podem ser vistas no Local Storage através das ferramentas do Desenvolvedor (recurso do Navegador).|
|**Tipo de Teste**|Ponta a Ponta e de Campos|
|**Técnica Utilizada**|Manual|
|**Abordagem**|Caixa Preta|
|**Responsáveis**|Carolina Morais|
<br>
<br>


|Caso de Teste|CT-06 Fazer anotações diárias|
|----------------------|-----------------------------------------------------|
|**Objetivo**|Verificar a geração de notas sobre observações terapêuticas vinculadas à datas|
|**História de Usuário**| * Eu, como mãe de pessoa neurodivergente, quero anotar os feedbacks e informações rotineiras dadas pela equipe multidisciplinar e médica, para ter controle das orientações fornecidas pela equipe de saúde e ter um histórico de referências e demandas da equipe; <br>* Eu, como mãe de uma pessoa neurodivergente, quero poder fazer pesquisas sobre as informações diárias de comportamento da minha filha através do histórico produzido, para retomar um assunto abordado pela equipe ou reanalisar um aspecto.|
|**Requisitos Associados**|RF-002	Permitir a inclusão de informações sobre evolução dos pacientes e observações de terapeutas|
|**Instruções de Execução**| 1) Acessar o documento index.hml através de um browser e fazer o login;<br>2) Clicar na aba Anotações do menu; <br>3) Clicar no ícone de "+" dentro do bloco "Observação Terapêutica"; <br>4) No campo "título", inserir o nome desejado para a anotação e, em "Descrição", escrever o texto desejado; <br>5) Clicar no botão "Add Nota";<br> 6) Para editar uma nota ou deletar uma nota, clicar no ícone "..." na respectiva nota e selecionar a opção desejada.|
|**Critérios de Êxito**|* Ao adicionar uma nova nota, esta deve gerar um novo bloco com os valores inseridos e a data respectiva de criação;<br>* Ao editar uma nota, o campo de preenchimento de texto deve aparecer novamente e, após a seleção do botão "Atualizar Nota", o bloco daquela nota deverá permanecer com a edição realizada; <br>* Não deve ser possível criar uma nota sem o preenchimento de nenhum dos campos; <br>* Ao deletar uma nota, deve aparecer um `alert` de "Você tem certeza que deseja deletar essa nota?";<br>* As notas criadas deverão estar presentes na variável `notes`, que podem ser vistas no Local Storage através das ferramentas do Desenvolvedor (recurso do Navegador), sempre respectivas à sua última edição.|
|**Tipo de Teste**|Ponta a Ponta|
|**Técnica Utilizada**|Manual|
|**Abordagem**|Caixa Preta|
|**Responsáveis**|Débora Alexia|
<br>
<br>


|Caso de Teste|CT-07 Funcionamento do Menu e dos ícones do Cabeçalho|
|----------------------|-----------------------------------------------------|
|**Objetivo**|Verificar a navegabilidade por todas as telas da aplicação|
|**Requisitos Associados**|RNF-001 A plataforma deve ter interface clean, intuitiva e de fácil manuseio pelo usuário; <br>RNF-006 O sistema deve sinalizar o usuário quando alguma operação está demorando mais que o comum; <br>RNF-007 Deve tratar ao usuário erros inerentes à aplicação (conexão, memória local, memória do provedor, etc);<br>RNF-008 Deve processar requisições do usuário em no máximo 3s.|
|**Instruções de Execução**|1) Acessar o documento index.hml através de um browser e fazer login;<br>2) Selecionar a aba de "Notificações";<br>3) Na tela de Notificações, selecionar a aba de "Dados Médicos";<br>4) Na tela de Dados Médicos, selecionar a aba de "Calendário";<br>5) Na tela de Dados Médicos, selecionar a aba de "Anotações";<br>6) Na tela de Anotações, selecionar o ícone de usuário, no canto superior direito; <br>7) Na tela de Dados do Usuário, selecionar a aba "Home" do menu; <br>8) Na tela Home, selecionar o ícone de saída, no canto superior direito.<br>9) Na tela de Login, após preencher os campos corretamente, clicar em "Acessar".|
|**Critérios de Êxito**|* Todas as vezes que se clicar em uma aba do menu, esta deve direcionar a página para a tela respectivamente selecionada. <br>* Ao selecionar o ícone de usuário, independente da tela, a página deve ser redirecionada para a tela de "Dados do Usuário";<br> * Ao selecionar o ícone de saída, a página deve levar o usuário à tela de login; <br>|
|**Tipo de Teste**|Navegabilidade|
|**Técnica Utilizada**|Manual|
|**Abordagem**|Caixa Preta|
|**Responsáveis**|Carolina Morais|
<br>
<br>

|Caso de Teste|CT-08 Utilizar a aplicação em dispositivos móveis|
|----------------------|-----------------------------------------------------|
|**Objetivo**|Verificar o comportamento das telas da aplicação em diferentes tamanhos de telas|
|**Requisitos Associados**|RNF-001	A plataforma deve ter interface clean, intuitiva e de fácil manuseio pelo usuário;<br>RNF-002 Deve ter bom contraste entre os elemetos da tela;<br>RNF-004	Deve ser responsivo para adaptar em diferentes dispositivos e tamanho de telas;<br>RNF-005	Deve ser compatível para os principais navegadores do mercado (Google Chrome, Firefox, Microsoft Edge), proporcionando experiência semelhante ao usuário.|
|**Instruções de Execução**|1) Acessar o documento index.hml através de um browser e fazer login;<br>2) No recurso "Ferramentas do Desenvolvedor" disponível no navegador, clicar na ferramenta Toggle Device Toolbar, no canto superior esquerdo;<br>3) Com a atualização da página, selecionar, no item Dimensão, a opção "Responsiva;<br>3) Navegar entre as telas e mudar, manualmente, as dimensões, através das ferramentas dispostas no monitor, em quantas telas ou quantas vezes forem necessárias.;<br>4) No item Dimensão, escolher ainda, posteriormente, as opções "Pixel 5", "Ipad Air" e "Nest Hub" e, para cada vez que selecionar uma das opções, navegar novamente entre as telas.|
|**Critérios de Êxito**|* Em telas menores que 990 pixels, o Menu deve adotar o recurso "sanduíche" e apenas ser revelado tela quando selecionado o respectivo ícone, sobrepondo-se ao conteúdo da tela;<br> * Todos os elementos visuais da aplicação devem adaptar-se à diferentes tamanhos de tela, sem que a alteração das dimensões prejudique o layout e a experiência do usuário.|
|**Tipo de Teste**|Responsividade|
|**Técnica Utilizada**|Manual|
|**Abordagem**|Caixa Preta|
|**Responsáveis**|Laila Martins|
<br>
<br>
 
|Caso de Teste|CT-09 Validação de campos na tela de login|
|----------------------|-----------------------------------------------------|
|**Objetivo**|Verificar se os campos que exigem valores específicos realizam a validação|
|**Requisitos Associados**|RNF-001	A plataforma deve ter interface clean, intuitiva e de fácil manuseio pelo usuário;<br>RNF-005	Deve ser compatível para os principais navegadores do mercado (Google Chrome, Firefox, Microsoft Edge), proporcionando experiência semelhante ao usuário.|
|**Instruções de Execução**|1) Acessar o documento index.hml através de um browser e inserir um texto sem caracteres especiais no campo e-mail e clicar em "acessar";<br>2) Tentar realizar o procedimento novamente, inserindo um e-mail válido no campo respectivo, mas não inserindo nenhum valor no campo "senha";<br>3) Ainda na tela de login, tentar realizar o procedimento novamente, mas com e-mail e senha não cadastrados anteriormente;<br>4)Por fim, inserir, nos campos "e-mail" e "senha" informações de usuário já cadastradas e clicar em "acessar";|
|**Critérios de Êxito**|* Ao tentar realizar o login sem utilizar-se de um texto de e-mail padrão, deve aparecer um `alert` que solicita a inclusão de valor que contenha o formato "texto@texto";<br>* Ao tentar realizar o procedimento inserindo um e-mail válido, mas nenhum valor no campo "senha", deve aparecer um `alert` que solicita o preenchimento do campo e, o mesmo deverá acontecer se a tentativa for feita inserindo valores no campo "senha" e nenhum valor no campo "email";<br>* Ao realizar o procedimento inserindo valores não cadastrados anteriormente, deve aparecer um `alert` informando "E-mail ou senha incorretos";<br>* Ao tentar acessar a aplicação com e-mail e senhas já cadastrados, a página deve ser redirecionada automaticamente para a HomePage.|
|**Tipo de Teste**|Campos e Páginas|
|**Técnica Utilizada**|Manual|
|**Abordagem**|Caixa Preta|
|**Responsáveis**|Arthur Zebral|
<br>
<br>

