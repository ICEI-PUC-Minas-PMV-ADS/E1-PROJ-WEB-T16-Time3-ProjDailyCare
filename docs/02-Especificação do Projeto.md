# Especificações do Projeto

As especificações mais exatas em relação ao desenvolvimento da aplicação, principalmente no que diz respeito ao perfil dos usuários visados, suas expectativas e como atendê-las, foram elaboradas a partir da realização de uma pesquisa de campo, com a aplicação de um formulário de questões através da plataforma Google Forms, cujo público alvo foram pessoas neurodivergentes e pessoas responsáveis por indivíduos inclusos nesse grupo.

Foram colhidas informações de vinte e sete participantes através da pesquisa consolidada. O levantamento dessas informações permitiu ao grupo a idealização de dois tipos distintos de personas e suas respectivas histórias de usuários.

## Personas
As personas criadas a partir da pesquisa supracitada encontram-se descritas a seguir:

|![daniele](https://user-images.githubusercontent.com/127430454/228533303-68a82164-8264-454f-96da-b41c71f78c32.png)|Danielle Barbosa|
|------|-----------------------------------------|
|**Idade:** | 41 |
|**Ocupação:**| Mãe e dona de casa de uma criança de 03 anos de idade portadora de TEA.|
|**Aplicativos de Organização:**|* Google Agenda; <br> * Notas do Celular;|
|**Motivações:**|* Guardar informações, manter agenda e controle de afazeres de maneira mais eficaz e centralizada em apenas um local; <br> * Ter uma rotina mais organizada e menos tumultuada; <br> * Desacelerar, identificar prioridades e estabelecer disciplina.|
|**Frustrações:**|* Dificuldade em administrar agenda da filha com TEA e de fazer anotações em relação aos feedbacks da equipe de saúde; <br> * Aplicações pouco intuitivas que levam-na a preferir fazer anotações em papel; <br> * Ausência de materiais mais práticos e didáticos para auxílio em questões técnicas como laudo de médicos, informações cotidianas do comportamento da paciente; <br> * Dificuldade na manutenção centralizada de lembretes de consultas e exames.|
|**História:**| Mãe, graduada em Física, decidiu parar de dar aulas para Ensino Médio ao receber o diagnóstico de TEA de sua primeira filha. Devido as intensas rotinas de terapia, exames, acompanhamentos médicos e por querer priorizar participação na rotina de sua filha, se dedica à maternidade e está sempre em busca de informações e conhecimentos na área da saúde e participa de diversos grupos de apoio para pais e mães de filhos atípicos. A maternidade atípica acaba trazendo-na sobrecarga, dificuldade de organização de sua rotina negligência com seu auto-cuidado. |



|![felipe](https://user-images.githubusercontent.com/127430454/228591343-573068ab-ecd0-4667-a1a8-3cb9aae99219.png)|Felipe Ribeiro|
|------|-----------------------------------------|
|**Idade:**| 26 | 
|**Ocupação:**| Engenheiro de Alimentos|
|**Aplicativos de Organização:**| * Google Keep; <br> * Trello;|
|**Motivações:**|* Conseguir fazer uma melhor gestão de tempo; <br> * Melhorar produtividade; <br> * Conclusão de projetos e tarefas dentro do prazo;|
|**Frustrações:**| * Dificuldades com mudanças de rotina; <br> * Dificuldades com prazos de tarefas; <br> * Desorganização constante; <br> * Grande grau de distrações;|
|**História**|Jovem engenheiro de alimentos apaixonado por culinária e química, diagnosticado com TEA leve e TDAH. Enfrenta dificuldades no ambiente de trabalho, como procrastinação, falta de organização, dificuldades em cumprir com os prazos. Luta contra mudanças de humor, dificuldade com horário de sono adequado e, devido ao dia-a-dia atribulado, muitas vezes esquece de tomar seus medicamentos, ou não se lembra de ter realizado a medicação.|

  
## Histórias de Usuários

Conforme as vivências, dificuldades e desejos identificados a partir da pesquisa realizada, bem como da elaboração das personas, foram elaboradas as seguintes histórias de usuário:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
|Felipe Ribeiro      | gerenciamento de tarefas importantes|para reduzir a procrastinação e ter mais cautela com os prazos do trabalho.|
|Felipe Ribeiro  |registrar medicação diariamente        | para não perder os horários das medicações e ter confirmação se as tomou ou não.|
|Felipe Ribeiro  | registrar mudanças de humor           | para monitorar os sintomas das mudanças de humor e comunicar ao terapeuta e ao médico.|
|Felipe Ribeiro |acessar a plataforma tanto pelo desktop como pelo celular | utilizar o tempo disponível entre uma atividade e outra para atualizar os dados. |
|Danielle Barbosa | anotar os feedbacks e informações rotineiras dadas pela equipe multidisciplinar e médica |para ter controle das orientações fornecidas pela equipe de saúde e ter um histórico de referências e demandas da equipe|
|Danielle Barbosa      |controlar diariamente os aspectos globais da filha (humor, agitação, engajamento, evacuação, alimentação, etc)|para identificar gatilhos da filha, ter maior monitoramento dessas condições e poder compartilha-las com a equipe médica|
|Danielle Barbosa      |ter acesso a funções específicas de agenda que contemplem minhas necessidades enquanto mão de uma pessoa neuroatípica|para ter acesso a ferramentas de gestão de organização de acordo com as necessidades e compromissos da minha filha|
|Danielle Barbosa  |poder fazer pesquisas sobre as informações diárias de comportamento da minha filha através do histórico produzido|retomar um assunto abordado pela equipe ou reanalisar um aspecto|
|Danielle Barbosa       |ter acesso a gráficos de desempenho dos aspectos globais monitorados|apresentar junto a equipe multidisciplinar / médica o desenvolvimento e eficácia do tratamento|


## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|
|RF-001|Fornecer funcionalidades de calendário que permitam aos pacientes incluírem informações de agendamento de compromissos e consultas, bem como respectivas notificações;|ALTA| 
|RF-002|Permitir a inclusão de informações sobre evolução dos pacientes e observações de terapeutas;|ALTA|
|RF-003|Disponibilizar a geração de gráficos a partir de histórico de dados;|MÉDIA|
|RF-004|Possibilitar a inclusão de dados de aspectos globais do paciente, como humor, atenção, alimentação, engajamento e tolerância;|ALTA|
|RF-005|O sistema deve enviar lembretes ao usuário nos horários das medicações, incluindo uma opção de confirmação|ALTA|
|RF-006|O sistema deve disponibilizar uma busca para os registros de histórico do usuário;|BAIXA|



### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| A plataforma deve ter interface clean, intuitiva e de fácil manuseio pelo usuário | MÉDIA | 
|RNF-002| Deve ter bom contraste entre os elemetos da tela |  MEDIA |
|RNF-003| Deve estar em conformidade com as diretrizes de acessibilidade a D.V. (suporte para leitores de tela e texto descritivo de imagens) |BAIXA|
|RNF-004| Deve ser responsivo para adaptar em diferentes dispositivos e tamanho de telas | ALTA |
|RNF-005| Deve ser compatível para os principais navegadores do mercado (Google Chrome, Firefox, Microsoft Edge), proporcionando experiência semelhante ao usuário |ALTA|
|RNF-006| O sistema deve sinalizar o usuário quando alguma operação está demorando mais que o comum. O tempo de resposta não deve ultrapassar 15 segundos. |MEDIA|
|RNF-007| Deve tratar ao usuário erros inerentes à aplicação (conexão, memória local, memória do provedor, etc) |MEDIA|
|RNF-008| Deve processar requisições do usuário em no máximo 3s |MEDIA|



## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deverá ser entregue até o final do semestre, não podendo extrapolar a data de 25/06/2023 |
|02| O projeto deverá ser desenvolvido utilizando as tecnologias e ferramentas mais recentes de Desenvolvimento Web |
|03| A equipe não poderá delegar ou subcontratar o desenvolvimento do trabalho para terceiros |
