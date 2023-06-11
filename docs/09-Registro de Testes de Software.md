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





