
# Metodologia

A metodologia contempla as definições de organização, priorização, gerenciamento da equipe e das tarefas, bem comoo as ferramentas utilizadas para a desenvoltura do projeto.  As descrições específicas sobre as escolhas do grupo se dividem em definição dos papeis desempenhados pela equipe de trabalho, listagem das ferramentas utilizadas e descrições específicas do processo realizado, orientadas pela definição do <em>Product Backlog</em>, a partir da metodologia ágil Scrum, que prevê a organização a partir de sprints.

## Equipe de Trabalho
O projeto orienta-se por meio de metodologias ágeis, desta forma, o Scrum é utilizado como base para a definição de papéis dentro da equipe, que organiza-se da seguinte forma:

- **Product Owner:** Andreia Cristina Bera
- **Scrum Master:** Débora Alexia C. Silva
- **Developers:**
    - Arthur Zebral de Castro Koehne
    - Carolina Morais Rabelo
    - Laila Suelen Martins Costa
    - Pedro Arthur Silva Santos


## Ferramentas
As ferramentas utilizadas no projeto são:

- **Controle de Versão:** A ferramenta de controle de versão adotada no projeto foi o
[Git](https://git-scm.com/), sendo que o [Github](https://github.com)
foi utilizado para hospedagem do repositório. O projeto segue a seguinte convenção para o nome de branches:

   `main`: versão estável já testada do software<br>
   `unstable`: versão já testada do software, porém instável<br>
   `testing`: versão em testes do software<br>
   `dev`: versão de desenvolvimento do software<br>

    Quanto à gerência de issues, o projeto adota a seguinte convenção para
etiquetas:

   `documentation`: melhorias ou acréscimos à documentação<br>
   `bug`: uma funcionalidade encontra-se com problemas<br>
   `enhancement`: uma funcionalidade precisa ser melhorada<br>
   `feature`: uma nova funcionalidade precisa ser introduzida


- **Editor de Código:** Foi escolhido o [Visual Studio Code](https://code.visualstudio.com/), dada a a possibilidade de integração com o sistema de repositório do código fonte.


- **Criação de <em>User Flow</em> e <em>Wireframe</em>:** Foi determinada a ferramenta [Marvel](https://marvelapp.com/) por melhor compreender as necessidades de nossa solução.


- **Gerenciamento do Projeto**: A fim de centralizar as informações sobre o projeto, foi utilizado o [GitHub Project](https://github.com/orgs/ICEI-PUC-Minas-PMV-ADS/projects/380/views/1) para a criação de um quadro no modelo Kanban. 


- **Comunicação:** Utilizou-se os aplicativos [Microsoft Teams](https://teams.microsoft.com/_#/school/conversations/Geral?threadId=19:JYqqHMA-705z01V5n8kpeZTrU33PPFyJm1hMFNnMI681@thread.tacv2&ctx=channel) para reuniões da equipe e [WhatsApp](https://web.whatsapp.com/) para comunicações por texto. 


## Processo
Dada a orientação do projeto a partir da metodologia ágil <em>Scrum</em>, o processo de desenvolvimento se deu a partir da definição do Product Backlog e do planejamento e realização de Sprints, conforme descrito a seguir. 

A organização objetiva do BackLog, bem como a divisão e distribuição dos respectivos itens, se dá a partir do Quadro de Tarefas denominado [Gerenciamento do Projeto DailyCare](https://github.com/orgs/ICEI-PUC-Minas-PMV-ADS/projects/380/views/1), semelhante ao Kanban, através da ferramenta GitHub Project, encontrando-se hospedado nesse mesmo repositório. A estruturação do quadro se dá a partir das seguintes colunas:

- **Backlog:** contém todos itens do backlog do produto que ainda serão abordados nas próximas sprints.
- **To Do:** contém os itens que serão revisados e realizados na sprint atual. 
- **In Progress:** diz respeito aos itens que estão em desenvolvimento.
- **In Review:** itens que já foram desenvolvidos, mas precisam de revisão e validação de outros integrantes da equipe.
- **Done:** itens já desenvolvidos, revisados, validados e entregues.

### Product Backlog


| Sprint | Período  | Itens | Status |
|--------|-------------|---------------------------------------------|-----------|
|Sprint 1|09/03 a 02/04| **Documentação de Contexto**<br> * Introdução<br> * Problemas<br> * Objetivos<br> * Justificativa<br> * Especificação do Público Alvo<br> **Especificação do Projeto**<br>* Personas<br> * Histórias de Usuário<br> * Requisitos Funcionais e Não Funcionais<br> * Restrições| Done |
|Sprint 2|03/04 a 23/04| **Metodologia**<br> * Estruturação da Equipe<br> * Definição de Ferramentas<br> * Estruturação do Processo<br>**Projeto de Interface**<br> * User Flow<br> * Interface - HomePage<br> * Interface - Tela de Login<br> * Interface - Calendário<br> * Interface - Tela de Anotações<br> * Interface - Tela de Dados Médicos<br> * Interface - Tela de Notificações | In Progress |
|Sprint 3|24/04 a 14/05| **Template Padrão do Site**<br> **Programação das Funcionalidades**<br>* Checklist dos Requisitos Funcionais e Não Funcionais a serem implementados<br> * Solução com requisitos priorizados em desenvolvimento<br> * Desenvolvimento da Homepage<br>| To Do |
|Sprint 4|15/05 a 11/06| **Programação das demais funcionalidades**<br> **Plano de Testes de Software**<br> **Registro de Testes de Software** | To Do |
|Sprint 5|12/06 a 25/06| **Implantação da Solução**<br> * Integração de funcionalidades<br> * Hospedagem da Solução<br> **Desenvolvimento da apresentação**<br> **Vídeo de apresentação da solução** | To Do |


### Sprint 1
Ocorreu no período correspondente entre 09/03/2023 e 02/04/2023.<br>

**1. Planejamento**

Priorizou-se a redação dos elementos compreendidos como Documentação de Contexto e Especificação do Projeto, até o dia 31/03/2023, junto à realização de reuniões semanais para alinhamentos e redistribuição de tarefas. 

O item Documentação de Comentação de Contexo desdobrou-se ainda nas seções Introdução, Problemas, Objetivos, Justificativa e Esoecificação de Público Alvo. A estrutura da documentação, nesse processo, foi realizada por Andreia Bera e Carolina Morais. A pesquisa bibliográfica foi realizada por Pedro Arthur e Laila Martins. A revisão, edição e atualização do texto foi feita por Débora Alexia.

O elemento Especificação de Projeto dividiu-se em sub-itens que foram divididos entre os membros da equipe da seguinte maneira:

- **Persona Danielle Barbosa e respectivas histórias de usuário:** Arthur Zebral, Andreia Bera e Débora Alexia
- **Persona Felipe Ribeiro e respectivas histórias de usuário:** Laila, Carolina e Pedro Arthur
- **Requisitos Funcionais:** Carolina e Laila
- **Requisitos Não Funcionais:** Andreia e Pedro Arthur
- **Apresentação em Slides do Projeto:** Débora Alexia

Previu-se a entrega integral dos itens para a data de 02/04/2023.

**2. Execução**

A execução da Documentação de Contexto se deu por meio de pesquisa bibliográfica em materiais de saúde e relativo à políticas públicas e realidade social de pessoas neurodivergentes. Obteve-ve, assim, argumentos e pesquisas que fortaleceram a necessidade da criação de uma solução tecnológica voltada para esse público, dada a confirmação de que a acessibilidade é um tema emergente. 

A Especificação do Projeto teve como cerne de desenvolvimento a realização de um [questionário](https://forms.gle/BxSYtFkoTfSoWAX47), através do Google Forms, voltado para o público alvo: pessoas neurodivergentes e cuidadores ou responsáveis de pessoas enquadradas nesse grupo. Os [resultados](https://docs.google.com/spreadsheets/d/1FCC5IKlKbxzKNqrhX_hOuEqWELrnLgdW53fJmeGDfRA/edit?usp=sharing) da pesquisa aplicada foram de encontro com o objetivo do Projeto e as respostas retornaram correspondência em relação às necessidades que busca-se atender. 

Ademais, o questionário foi utilizado como base para a criação das personas e suas respectivas histórias de usuário, pois através desde pode-se identificar as principais dificuldades e necessidades desse público no que diz respeito à organização pessoal. 

A apresentação realizada conseguiu abordar todos os pontos necessários dos itens entregáveis da primeira sprint e rendeu observações gratificantes em relação à objetividade e à demonstração de resultados de pesquisa através de dados porcentuais e gráficos. Um ponto negativo em relação à apresentação se deu na extrapolação do tempo pré-definido de 10 minutos, ainda que tenha ultrapassado pouco do tempo limite.

Em retorspectiva da primeira sprint, conclui-se uma entrega satisfatória, que conseguiu abordar com exatidão os itens especificados e contou com uma boa divisão de tarefas e trabalho em equipe. 


**3. Evidências**

As evidências relativas aos itens entregues nessa sprint se encontram nesse mesmo repositório. Os recursos extras utilizados também serão listados a seguir.

- [Documentação de Contexto](https://github.com/ICEI-PUC-Minas-PMV-ADS/E1-PROJ-WEB-T16-Time3-ProjDailyCare/blob/main/docs/01-Documenta%C3%A7%C3%A3o%20de%20Contexto.md)
- [Especificação do Projeto](https://github.com/ICEI-PUC-Minas-PMV-ADS/E1-PROJ-WEB-T16-Time3-ProjDailyCare/blob/main/docs/02-Especifica%C3%A7%C3%A3o%20do%20Projeto.md)
- [Questionário - Google Forms](https://forms.gle/BxSYtFkoTfSoWAX47) e [Resultados](https://docs.google.com/spreadsheets/d/1FCC5IKlKbxzKNqrhX_hOuEqWELrnLgdW53fJmeGDfRA/edit?usp=sharing)


### Sprint 2

Prevista para o período correspondente entre 03/04 a 23/04.

**1. Planejamento**

A reunião da referida Sprint e seus respectivos planos, organização e divisão de tarefas ocorreu em 03/04/2023. A partir da realização, definiu-se como os principais itens entregáveis a Metodologia e o Projeto de Interface, obtendo-se a seguinte atualização no [Quadro de Tarefas](https://github.com/orgs/ICEI-PUC-Minas-PMV-ADS/projects/380/views/1):

![Gerenciamento do Projeto DailyCare](https://user-images.githubusercontent.com/112430045/233465267-fa9935c5-2be6-469e-a0cb-335ecc283949.png)

O presente item, Metodologia foi desenvolvido por Débora Alexia e desdobrou-se nos seguintes subitens:

-  **Equipe de trabalho**
-  **Ferramentas**
-  **Processo**
    - Product Backlog
    - Sprint X
    - Planejamento
    - Execução
    - Evidências

O item Projeto de Inteface dividiu-se entre os demais membros da equipe de acordo com os seguintes elementos:

- **User Flow:** Carolina Morais
- **Interface - HomePage**: Arthur Zebral
- **Interface - Tela de Login:** Arthur Zebral
- **Interface - Calendário:** Andreia Bera e Laila Martins
- **Interface - Tela de Anotações:** Pedro Arthur
- **Interface - Tela de Dados Médicos:** Andreia Bera e Laila Martins
- **Interface - Tela de Notificações:** Pedro Arthur

Previu-se a entrega integral dos itens para a data de 23/04/2023.

**2. Execução**

Aguardando finalização da Sprint.

**3. Evidências**

Aguardando finalização da Sprint.
