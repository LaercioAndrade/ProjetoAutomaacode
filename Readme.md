              Projeto de Automação com Cypress

Máquina: MacMini 2012
Ferramenta: VSCODE
- Cypress
- Cucumber
- mochawesome

Passo a Passo para configuração de todo o projeto:

1 - Baixar o NodeJS
2 - Criar a pasta do Atividade com o nome ˜Projeto˜
3 - Instalar Cypress mais dependência em paralelo com o cucumber via terminal dentro da pasta ˜Projeto˜ com o comando: - npm install --save-dev cypress cypress-cucumber-preprocessor    
4 - instalar o cypress dentro da pasta do projeto: npx Cypress open
5 - instalar o mochawesome com o comando nem mochawesome -D


           Passo a Passo dentro do VSCODE

1 - dentro da pasta support criar as pastas: 
   - Steps
   - Elements
   - PageObjects

2- configurar o arquivo index.js da pasta Plugin
3 - Configurar a página índex.js dentro da pasta Support
4 - configurar o arquivo cypress.json 5 - criar o arquivo package.json na raiz do projeto
6 - Configurar o arquivo package, json
7 - criar uma pasta exemplos no geral do projeto
8 - mover a pasta exemples para a pasta exemplos
9 - criar o arquivo  test.feature denture da past integration
10 - Escrever o BDD dos testes
11 - Criar o arquivo testSteps,js dentro da pasta Steps
12 - Trazer as estruturas dentro do arquivo testSteps.js
13 - Criar o arquivo testPage dentro da pasta pageObjects
14 - Criar o arquivo testElementse dentro da pasta pageObjects
15 - Configurar o arquivo testPage,js 
16 - Mapear os elementos na página testElements
17 - Criar metodos no arquivo testPage
18 - Executar o comando ‘npm run test:chrome’
19 - Validar se o teste deu positivo
20 - Caso der erro identificar e fazer a correção(algumas vezes pode ser o mapeamento)
21 - Validar relatório
22 - Validar se foi tirado 1 screnshot por step
23 - Verificar o vídeo gerado  
