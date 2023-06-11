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

**Informações de Cadastro armazenadas na variável `dadosUsuario` no LocalStorage:
![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/E1-PROJ-WEB-T16-Time3-ProjDailyCare/assets/112430045/8d6f878c-ddac-491d-a3ff-8fe4f336121b)


**FALHA - Permissão de cadastro sem preenchimento de campos fundamentais:**
![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/E1-PROJ-WEB-T16-Time3-ProjDailyCare/assets/112430045/5e93183e-d335-46e5-9f5b-ee0d86bc7901)




