# Registro de Testes de Software

A presente seção trás as evidências dos testes realizados a partir dos 9 [Casos de Testes](https://github.com/ICEI-PUC-Minas-PMV-ADS/E1-PROJ-WEB-T16-Time3-ProjDailyCare/blob/main/docs/08-Plano%20de%20Testes%20de%20Software.md) planejatos anteriormente e documentados anteriormente.

## CT-01 Fazer cadastro de usuário e Login

- **Objetivo:** Verificar se é possível criar um novo usuário e realizar login na aplicação
- **Responsável:** Débora Alexia
- **Critérios de Êxito atingidos**: 
  - `alert` de "Finalizando cadastro" após preenchimento correto dos campos;
  - redirecionamento para a tela de login após realização de cadastro;
  - `alert` de "E-mail ou Senha Incorretos" na tentativa de inserir valores não cadastrados anteriormente;
  - redirecionamento da tela de login para a HomePage;
  - redirecionamento de qualquer tela para a tela de login, a partir do ícone de saída;
  - dados cadastrados devidamente vinculados à variável  `dadosUsuario` no LocalStorage.
- **Critérios de Êxito NÃO atingidos**:  
  - o cadastro apenas será válido com o preenchimento de todos os campos;
  - o sistema permite que as mesmas informações sejam cadastradas mais de uma vez.

- **Evidências:**

**Clicar no Botão Novo Acesso e Redireciomaneto para a Tela de Cadastro:**
![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/E1-PROJ-WEB-T16-Time3-ProjDailyCare/assets/112430045/f8528387-58ae-47f1-9411-8dcd1caa8a3b)
![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/E1-PROJ-WEB-T16-Time3-ProjDailyCare/assets/112430045/3e72faa7-2880-498c-a5bf-7b3dbc4ded52)

**Finalização de Cadastro e Redirecionamento para a Tela de Login:**
![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/E1-PROJ-WEB-T16-Time3-ProjDailyCare/assets/112430045/d1d5995a-fa69-469f-b5ae-beb4e830b7d8)
![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/E1-PROJ-WEB-T16-Time3-ProjDailyCare/assets/112430045/e1478d54-07d8-468d-9e0f-ccb17195f9ff)

**Proibição de acesso com informações de login não cadastradas:**
![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/E1-PROJ-WEB-T16-Time3-ProjDailyCare/assets/112430045/4208d62b-d2f9-4644-8b92-b1733a3157b7)

**Redirecionamento para a tela de Login a partir do ícone de saída:**
![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/E1-PROJ-WEB-T16-Time3-ProjDailyCare/assets/112430045/cc2000be-1994-4aea-8cc8-efe9262a12b5)
![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/E1-PROJ-WEB-T16-Time3-ProjDailyCare/assets/112430045/f3bd2005-6b6e-49e4-b570-3aa9e1987939)

**Informações de Cadastro armazenadas na variável `dadosUsuario` no LocalStorage:**
![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/E1-PROJ-WEB-T16-Time3-ProjDailyCare/assets/112430045/8d6f878c-ddac-491d-a3ff-8fe4f336121b)


**FALHA - Permissão de cadastro sem preenchimento de campos fundamentais:**
![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/E1-PROJ-WEB-T16-Time3-ProjDailyCare/assets/112430045/5e93183e-d335-46e5-9f5b-ee0d86bc7901)

## CT-02 Editar Dados de Usuário
- **Objetivo:** Verificar se é possível editar os dados fornecidos no cadastro do usuário
- **Responsável:** Arthur Zebral
- **Critérios de Êxito atingidos**: 
  - alert de "Dados alterados com sucesso!" após realizada as edições;
  - dados editados devidamente vinculados à variável  `dadosUsuario` no LocalStorage;
  - edição dos campos "email" e "senha" devem implicar em novas informações de login para o respectivo usuário.
- **Critérios de Êxito NÃO atingidos**:  
  - após a edição, os dados alterados devem permanecer de acordo com a última alteração até que se realiza uma nova edição;

- **Evidências:**

**Tela de Dados do Usuário acessada a partir do ícone de usuário selecionado:**
![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/E1-PROJ-WEB-T16-Time3-ProjDailyCare/assets/112430045/852cbc7d-9a31-49a3-95ad-caef13eabe1c)

**Permissão de edição dos campos de dados:**
![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/E1-PROJ-WEB-T16-Time3-ProjDailyCare/assets/112430045/e53c41e5-7ecd-46b8-b76f-11c971db9853)

**Confirmação de alteração dos dados:**
![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/E1-PROJ-WEB-T16-Time3-ProjDailyCare/assets/112430045/ef56ecd9-d2c6-4501-b0c7-0de8f021b1df)

**As informações de login alteradas impedem que o usuário tente realizar o login com os dados antigos:**
![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/E1-PROJ-WEB-T16-Time3-ProjDailyCare/assets/112430045/572df002-45e1-4b1c-90c4-6127edc049d1)

**O sistema permite que seja realizado login com as informações de login que foram alteradas:**
![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/E1-PROJ-WEB-T16-Time3-ProjDailyCare/assets/112430045/8f47baf6-2ce5-47f1-a58d-c66ae8dd468c)

**FALHA: Quando ocorre a alteração de e-mail, enquanto o usuário não faz um logout e acessa novamente o sistema com o novo e-mail de cadastro, os dados cadastrais retornam vazios e indefinidos:**
![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/E1-PROJ-WEB-T16-Time3-ProjDailyCare/assets/112430045/a5de438d-ebd1-4914-91e0-e26f571633c8)

**A partir de novo login com as informações alteradas, os dados cadastrados correspondem à última alteração:**
![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/E1-PROJ-WEB-T16-Time3-ProjDailyCare/assets/112430045/95d42835-4987-4f49-9ca5-459d138d74b6)

**Isto posto, as alterações de usuário só permanecem a mesma dentro do mesmo fluxo de operação, caso não haja alterações de informações de login:**
![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/E1-PROJ-WEB-T16-Time3-ProjDailyCare/assets/112430045/735669ce-cfac-4b64-84d8-7b94eb93378d)

**CONCLUSÃO: A falha principal na edição de dados se dá a partir da alteração dos dados de login. A aplicação não atualiza automaticamente o login com novas informações e passa a considerar o formulário como pertencente a um usuário não mais existente, de forma que as informações alteradas apenas se encontrarão disponíveis a partir de novo login, com as informações que foram editadas na última vez.**

## CT-03 Gerenciar tarefas ou eventos

- **Objetivo:** Verificar se é possível criar tarefas ou eventos e receber as respectivas notificações
- **Responsável:** Laila Martins
- **Critérios de Êxito atingidos**:
  - campo de pesquisa de mês deve aceitar apenas meses válidos e cumprir a busca corretamente; 
  - tarefa/evento criado deve constar na lista de compromissos referentes à data selecionada;
  - tarefa/evento criado deve estar visível na lista de notificações na tela Notificações;
  - tarefas/eventos criados devidamente vinculados à variável  `appointments` no LocalStorage.
- **Critérios de Êxito NÃO atingidos**:  
  - a criação de tarefas e eventos apenas será possível mediante preenchimento de todos os campos exigidos;

- **Evidências:**
 
 **Acesso à Tela de Calendário a partir do Menu:**
 ![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/E1-PROJ-WEB-T16-Time3-ProjDailyCare/assets/112430045/bb9187fa-6b9a-4ca1-8e26-e92fe825403f)
 
 **O campo de redirecionamento à um mês específico não aceita datas inválidas, mas funciona com datas válidas:**
 ![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/E1-PROJ-WEB-T16-Time3-ProjDailyCare/assets/112430045/6c424a9f-9a59-4900-8bc6-7fc9c2d4f02c)
![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/E1-PROJ-WEB-T16-Time3-ProjDailyCare/assets/112430045/9320c4f5-143c-4776-a17c-ff5504fab4e9)

 **Botões e campos de adicionar compromisso funcionam corretamente e criam tarefas novas:**
![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/E1-PROJ-WEB-T16-Time3-ProjDailyCare/assets/112430045/c7c0d72a-e5ec-4960-aebd-1c628a785908)
![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/E1-PROJ-WEB-T16-Time3-ProjDailyCare/assets/112430045/3d53491b-76e3-4f46-bb81-666125653bed)

**Os eventos e tarefas criados constam na tela de notificações:**
![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/E1-PROJ-WEB-T16-Time3-ProjDailyCare/assets/112430045/500dff8a-e653-4132-9923-b17acb4f6990)

**Os eventos e tarefas criados se encontram na variável  `appointments` no LocalStorage:**
![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/E1-PROJ-WEB-T16-Time3-ProjDailyCare/assets/112430045/7400bb76-adc9-444e-8bb0-5e2579a68b0a)

**FALHA: O calendário permite que eventos sem nome ou sem horários válidos sejam criados:**
![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/E1-PROJ-WEB-T16-Time3-ProjDailyCare/assets/112430045/fa70edc4-4089-439a-9d82-066908f99ca8)
![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/E1-PROJ-WEB-T16-Time3-ProjDailyCare/assets/112430045/43abb829-a44f-4414-bf64-2d40f159a335)

## CT-04 Registrar Medicações

- **Objetivo:** Verificar se é possível realizar cadastro de medicamentos, ser notificado sobre a medicação e confirmar o uso
- **Responsável:** Arthur Zebral
- **Critérios de Êxito atingidos**: 
  - os medicamentos cadastrados devem constar na lista de medicamentos na tela de Dados do Usuário;
  - os medicamentos devem poder ser excluídos dos Dados do Usuário a partir do botão de "remover" ou do ícone de "fechar";
  - os medicamentos devem constar, diariamente, na lista de Horários de Medicamentos, na tela de Notificações;
  - após confirmação do uso, o medicamento confirmado não deve aparecer na tela de Notificações até a data seguinte;
  - os medicamentos cadastrados deverão estar presentes na variável `horariosMedicamentos`, que podem ser vistas no Local Storage através das ferramentas do Desenvolvedor (recurso do Navegador);
  - os medicamentos cujo uso foram confirmados deverão estar presentes na variável `medicamentosTomados`, que podem ser vistas no Local Storage através das ferramentas do Desenvolvedor (recurso do Navegador);
- **Critérios de Êxito NÃO atingidos**:  
  - o cadastro dos medicamentos só deverá ser realizado com inserção de horários válidos;

- **Evidências:**

**Campo de Medicamentos acessado a partir da tela de Dados do Usuário:**
![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/E1-PROJ-WEB-T16-Time3-ProjDailyCare/assets/112430045/1ce9e5f4-8ccd-461e-a3a5-2384636d7bd8)

**Possibilidade de selecionar mais de um medicamento:**
![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/E1-PROJ-WEB-T16-Time3-ProjDailyCare/assets/112430045/a425e1af-538b-413d-83af-07779ff741ff)

**Inserir outro medicamento e obter como resultado a inserção e seleção dele na lista:**
![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/E1-PROJ-WEB-T16-Time3-ProjDailyCare/assets/112430045/79704d82-e5c3-4c2d-842a-325fcb2c5b6b)
![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/E1-PROJ-WEB-T16-Time3-ProjDailyCare/assets/112430045/07234662-9dc4-4be7-89b9-0199eff1ecc0)

**Funcionamento do campo de adicionar horários:**
![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/E1-PROJ-WEB-T16-Time3-ProjDailyCare/assets/112430045/94267241-d7d1-4b84-a1fc-dfec9383f633)

**Após a seleção do botão "Salvar Horários" os medicamentos são adicionados à tela de Dados do Usuário:
![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/E1-PROJ-WEB-T16-Time3-ProjDailyCare/assets/112430045/abadcb14-7cd2-4d45-ac0c-a11b8a505f89)

**A aplicação permite a edição dos medicamentos, permitindo ao usuário adicionar novos ou remover àqueles já adicionados:**
![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/E1-PROJ-WEB-T16-Time3-ProjDailyCare/assets/112430045/fe278e7e-a691-4337-bc91-6f1de99caa0f)

**Os medicamentos salvos ficam vinculados à variável `horariosMedicamentos`:**
![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/E1-PROJ-WEB-T16-Time3-ProjDailyCare/assets/112430045/28d57275-558c-495f-b30a-0fb3fcda0b12)

**Os medicamentos salvos aparecem na tela de notificações:**
![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/E1-PROJ-WEB-T16-Time3-ProjDailyCare/assets/112430045/a435545f-0dfd-4c69-8af5-ffe17e75ffe7)

**O ato de fechar o medicamento na tela de Notificações confirma o uso da notificação, pois vincula à confirmação à variável `medicamentosTomados`:**
Observação: o ícone de fechar não é o ideal, uma vez que, para melhor compreensão do usuário, deveria haver um ícone de "check".
![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/E1-PROJ-WEB-T16-Time3-ProjDailyCare/assets/112430045/579b9af5-1505-4f3a-84d8-72aa704fa36a)
![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/E1-PROJ-WEB-T16-Time3-ProjDailyCare/assets/112430045/f6037c12-2680-4e40-8d3a-594aaae612d5)


**FALHA: O sistema permite a adição de medicamentos sem a seleção de um horário válido:**
![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/E1-PROJ-WEB-T16-Time3-ProjDailyCare/assets/112430045/d3899318-a16c-41b0-b959-d0247ae36a70)

## CT-05 Registrar Aspectos Globais

- **Objetivo:** Verificar o registro de aspectos de comportamento e os gráficos gerados
- **Responsável:** Carolina Morais
- **Critérios de Êxito atingidos**: 
  - ao enviar os dados preenchidos, deve aparcer o alert "Dados Salvos com Sucesso";
  - todos os registros diários de aspectos globais devem constar nos gráficos da HomePage e modificá-los a partir do acréscimo de novas informações;
  - a ausência de valores de Dados Médicos no perfil do usuário deve fazer com que a tela Home exiba a mensagem "Você ainda não possui dados";
  - os valores inseridos diariamente deverão estar presentes na variável `dadosNeurodivergentes`;
  
- **Critérios de Êxito NÃO atingidos**:  
  -  os dados somente serão enviados após o preenchimento de todos os campos;
  -  deverá haver a opção de escrever em texto um humor não identificado na lsita disponível;

- **Evidências:**

**Enquanto não houver valores de aspectos globais inseridos, a home exibe a mensagem "Você ainda não possui dados":**
![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/E1-PROJ-WEB-T16-Time3-ProjDailyCare/assets/112430045/1a57d45f-eaf8-4085-b54a-005f864803df)

**Acesso à tela através do menu:**
![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/E1-PROJ-WEB-T16-Time3-ProjDailyCare/assets/112430045/1a420415-251a-4f48-8f1c-6d0863086752)

**Edição dos valores dos campos:**
![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/E1-PROJ-WEB-T16-Time3-ProjDailyCare/assets/112430045/bfa87492-5d7a-4104-a14d-8df563e33f75)

**Confirmação de envio dos dados através de um `alert`:**
![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/E1-PROJ-WEB-T16-Time3-ProjDailyCare/assets/112430045/f6708fc6-6e9b-4d86-8c8c-ac5463d59cdf)

**Criação de gráficos baseada nos valores inseridos e alteradas por estes:**
![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/E1-PROJ-WEB-T16-Time3-ProjDailyCare/assets/112430045/491682d0-5018-4acd-a77d-07a585e31c58)
![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/E1-PROJ-WEB-T16-Time3-ProjDailyCare/assets/112430045/5f17513c-0cd2-4dee-9df0-534a2dc85a16)

**Os dados salvos são vinculados à variável `dadosNeurodivergentes`:**
![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/E1-PROJ-WEB-T16-Time3-ProjDailyCare/assets/112430045/66f6f9a1-bf14-42ee-aaba-e61f6f90d4b7)

**FALHA: os dados são enviados mesmo sem preenchimentos de campo, constando valores vazios:**
![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/E1-PROJ-WEB-T16-Time3-ProjDailyCare/assets/112430045/c942f2c4-bb4f-42af-9058-bb498a0d341f)

**FALHA: existe uma lista limitada de opções de humor que não permite a inserção de novos elementos:**
![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/E1-PROJ-WEB-T16-Time3-ProjDailyCare/assets/112430045/0febec30-eaa8-470b-a9b1-246ee0a9f9b5)

## CT-06 Fazer anotações diárias

- **Objetivo:** Verificar a geração de notas sobre observações terapêuticas vinculadas à datas
- **Responsável:** Débora Alexia
- **Critérios de Êxito atingidos**: 
  - a adição de uma nova nota gera um novo bloco com os valores inseridos e a data respectiva de criação;
  - a edição de uma nota faz com que o campo de preenchimento de texto apareça novamente e após a seleção do botão "Atualizar Nota", o bloco daquela nota deverá permanecer com a edição realizada;
  - ao deletar uma nota, deve aparecer um alert de "Você tem certeza que deseja deletar essa nota?";
  - não deve é possível criar uma nota sem o preenchimento de nenhum dos campos;
  - as notas criadas deverão estar presentes na variável `notes`, sempre respectivas à sua última edição., que podem ser vistas no Local Storage;


- **Evidências:**

**Campo de adição de nova nota a partir do ícone de "+" em Observação Terapêutica:
![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/E1-PROJ-WEB-T16-Time3-ProjDailyCare/assets/112430045/cd5c95bb-330b-4a65-9de9-cdec4c0881e8)

**Adição de nova nota, com título e descrição inseridas e informações sobre a data de criação:"
![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/E1-PROJ-WEB-T16-Time3-ProjDailyCare/assets/112430045/2b5c449b-4dae-4e45-b65b-e6b20af51a22)

**Adição uma nota sem texto na descrição e outra sem título, mas nenhuma nota completamente vazia:**
![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/E1-PROJ-WEB-T16-Time3-ProjDailyCare/assets/112430045/301db1db-9af5-4126-abea-142163f14411)

**Possibilidade de edição de nota:**
![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/E1-PROJ-WEB-T16-Time3-ProjDailyCare/assets/112430045/3a986fb8-0dc7-4cfe-8cc8-a1336bea5564)
![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/E1-PROJ-WEB-T16-Time3-ProjDailyCare/assets/112430045/07fabe72-ccf2-4873-89d4-89b1b7cdcd4e)
![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/E1-PROJ-WEB-T16-Time3-ProjDailyCare/assets/112430045/8c273bce-1e26-41dc-b085-319ba2084273)

**Processo de deletar uma nota:**
![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/E1-PROJ-WEB-T16-Time3-ProjDailyCare/assets/112430045/b29fbcb9-d357-4711-bc74-c86bd30c37c4)
![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/E1-PROJ-WEB-T16-Time3-ProjDailyCare/assets/112430045/36d8ee0c-a818-476f-9b5b-affbaa92b789)
![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/E1-PROJ-WEB-T16-Time3-ProjDailyCare/assets/112430045/3f629974-16b0-4402-97ca-793da270a5ff)

**Notas criadas passam a ficar presentes na variável `notes`, que podem ser vistas no Local Storage, respectivamente à última edição:**
![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/E1-PROJ-WEB-T16-Time3-ProjDailyCare/assets/112430045/f468536f-ed48-4838-a040-ec955fcc9ead)


## CT-07 Funcionamento do Menu e dos ícones do Cabeçalho

- **Objetivo:** Funcionamento do Menu e dos ícones do Cabeçalho
- **Responsável:** Carolina Morais
- **Critérios de Êxito atingidos**: 
  - clicar em uma abas do menu deve realizar o direcionamento da página para a tela respectivamente selecionada.
  - selecionar o ícone de usuário, independente da tela, deve redirecionar a página para a tela de "Dados do Usuário";
  - selecionar o ícone de saída deve levar o usuário à tela de login;

- **Evidências:**

**Navegabilidade do menu em todas as telas:**
```
<section class="menu">
                        <ul>
                            <li><a href="index.html" style="margin-top: -15%;"><i class="fa-solid fa-house"></i> <span>Home</span> </a></li>
                            <li><a href="notificacoes.html"><i class="fa-solid fa-bell"></i> <span>Notificações</span></a></li>
                            <li><a href="anotacoes.html"><i class="fa-solid fa-pen-to-square"></i><span>Anotações</span></a></li>
                            <li><a href="calendario.html"><i class="fa-solid fa-calendar-days"></i><span>Calendário</span></a></li>
                            <li><a href="dadosmedicos.html"><i class="fa-solid fa-stethoscope"></i><span>Dados médicos</span></a></li>
                        </ul>
                    </section>
                </div>
```

**Redirecionamento para a tela "Dados do Usuário" e para a tela de login a partir do ícone de saída, ambos no cabeçalho:**
```
<div class="col-12 col-md-9 d-flex align-items-center justify-content-end">
                    <span onclick="redirecionarTelaEdicao()" class="icone-usuario"><i class="fa-solid fa-user"></i></span>
                    <span onclick="saida()" class="icone-saida"><i class="fa-solid fa-share-from-square fa-rotate-180"></i></span>
                </div>
            </div>
```

## CT-08 Utilizar a aplicação em dispositivos móveis
- **Objetivo:** Verificar o comportamento das telas da aplicação em diferentes tamanhos de telas
- **Responsável:** Laila Martins
- **Critérios de Êxito atingidos**: 
  - Em telas menores que 990 pixels, o Menu deve adota o recurso "sanduíche" e apenas é revelado na tela quando selecionado o respectivo ícone, sobrepondo-se ao conteúdo da tela;
- **Critérios de Êxito NÃO atingidos**:  
  - Todos os elementos visuais da aplicação devem adaptar-se à diferentes tamanhos de tela, sem que a alteração das dimensões prejudique o layout e a experiência do usuário. 
  - Observação: boa parte das telas e seus elementos respeitou esse critério, com a exceção do botão de "fechar" referentes aos Medicamentos e aos Compromissos.

- **Evidências:**
**Tela de Login:**
![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/E1-PROJ-WEB-T16-Time3-ProjDailyCare/assets/112430045/9303031d-4caf-4a94-b631-3d64cd9f6e0f)
![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/E1-PROJ-WEB-T16-Time3-ProjDailyCare/assets/112430045/b4a54783-d6b6-4e67-a712-f81629384d26)

**HomePage e demonstração do Menu Sanduíche:**
![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/E1-PROJ-WEB-T16-Time3-ProjDailyCare/assets/112430045/7f61c5fd-53ff-4fbe-84af-b3e80c167d37)
![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/E1-PROJ-WEB-T16-Time3-ProjDailyCare/assets/112430045/4e3a5d3b-c584-43ef-a8cc-1491ecd0aa9e)

**Tela de Dados do Usuário:**
![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/E1-PROJ-WEB-T16-Time3-ProjDailyCare/assets/112430045/bbb5c114-b236-4d3d-b80e-f81b7d51f857)
![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/E1-PROJ-WEB-T16-Time3-ProjDailyCare/assets/112430045/b7a3acbb-3869-4b31-92cb-6d9618aef64e)

**Tela de Notificações, em que os botões de fechar não estão responsivos:**
![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/E1-PROJ-WEB-T16-Time3-ProjDailyCare/assets/112430045/69f16225-9d29-467e-8fb2-2135023d6d25)

**Tela de Anotações:**
![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/E1-PROJ-WEB-T16-Time3-ProjDailyCare/assets/112430045/cb46e124-90b2-4e4d-a133-0f7b69e8e27b)
![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/E1-PROJ-WEB-T16-Time3-ProjDailyCare/assets/112430045/a85aa6f8-22b0-4cbb-b8a4-09e5be968ac3)

**Tela de Calendário:**
Observação: não atingimos o potencial da tela em relação ao posicionamento do calendário em relação ao menu sanduíche.
![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/E1-PROJ-WEB-T16-Time3-ProjDailyCare/assets/112430045/00abf6e1-3017-4407-9fc3-463cd04ca9ad)
![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/E1-PROJ-WEB-T16-Time3-ProjDailyCare/assets/112430045/94bca90c-56b6-4761-a1dd-2adb60444055)

**Tela de Dados Médicos:**
![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/E1-PROJ-WEB-T16-Time3-ProjDailyCare/assets/112430045/257654ee-a22f-4187-9109-74462cd8c0a2)

## CT-09 Validação de campos na tela de login

- **Objetivo:** Verificar se os campos que exigem valores específicos realizam a validação
- **Responsável:** Arthur Zebral
- **Critérios de Êxito atingidos**: 
  - ao tentar realizar o login sem utilizar-se de um texto de e-mail padrão, deve aparecer um alert que solicita a inclusão de valor que contenha o formato "texto@texto";
  - ao tentar realizar o procedimento inserindo um e-mail válido, mas nenhum valor no campo "senha", deve aparecer um alert que solicita o preenchimento do campo e, o mesmo deverá acontecer se a tentativa for feita inserindo valores no campo "senha" e nenhum valor no campo "email";
  - ao realizar o procedimento inserindo valores não cadastrados anteriormente, deve aparecer um alert informando "E-mail ou senha incorretos";
  - ao tentar acessar a aplicação com e-mail e senhas já cadastrados, a página deve ser redirecionada automaticamente para a HomePage.

-**Evidências:**
**O campo de e-mail possui um padrão de valores aceitos:**
![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/E1-PROJ-WEB-T16-Time3-ProjDailyCare/assets/112430045/b4331665-9356-4d82-9ece-39d84a788e56)

**Para realizar o login, os dois campos devem estar preenchidos:**
![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/E1-PROJ-WEB-T16-Time3-ProjDailyCare/assets/112430045/5b48867f-deec-4571-8c6b-22470747edd0)
![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/E1-PROJ-WEB-T16-Time3-ProjDailyCare/assets/112430045/99041845-9d2d-441a-958f-e732a38829b0)

**A aplicação não aceita login com dados não pré-cadastrados:**
![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/E1-PROJ-WEB-T16-Time3-ProjDailyCare/assets/112430045/e100af48-aed2-4113-9274-3ed7fa59b326)

# Avaliação:



