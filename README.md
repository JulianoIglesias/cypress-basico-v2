# Apresentação

* Trata-se de uma breve apresentação dos comandos básicos do framework Cypress, baseados no curso Básico para Cypress do Professor Walmyr https://github.com/wlsf82

# Aplicação

A aplicação se chama Central de Atendimento ao Cliente TAT - [**CAC TAT**](https://cac-tat.s3.eu-central-1.amazonaws.com/index.html) - e foi desenvolvida usando HTML, CSS e JavaScript.

## Funcionalidades da aplicação

A aplicação CAC TAT é um formulário para simular o envio de mensagens à uma central de atendimento ao cliente.

### Campos obrigatórios

Os seguintes campos são obrigatórios, por padrão:

- Nome (campo do tipo texto)
- Sobrenome (campo do tipo texto)
- Email (campo do tipo email, **com validacão**)
- Como podemos te ajudar? (campo de área de texto)

# Pré-requisitos

Antes de começar, garanta que os seguintes sistemas estejam instalados em seu computador.

- [git](https://git-scm.com/) 
- [Node.js](https://nodejs.org/en/) 
- npm (estou usando a versão `8.3.2` 
- [Google Chrome](https://www.google.com/intl/pt_br/chrome/) 
- [Visual Studio Code](https://code.visualstudio.com/)


> **Obs. 2:** Ao instalar o Node.js o npm é instalado junto.

> **Obs. 3:** Para verificar as versões do git, Node.js e npm instaladas em seu computador, execute o comando `git --version && node --version && npm --version` no seu terminal de linha de comando.

## Instalação e inicialização do [Cypress](https://cypress.io) 🌲

1. Na raiz do projeto, execute o comando `npm install cypress@9.5.1 --save-dev` (ou `npm i cypress@9.5.1 -D` para a versão curta)
2. Logo após, execute o comando `npx cypress open` para abrir o Cypress pela primeira vez
3. Por fim, com o _Test Runner_ aberto, delete os exemplos criados automaticamente, crie um arquivo chamado `CAC-TAT.spec.js` e feche o _Test Runner_.

> **Obs. 2:** Quando inicializado pela primeira vez, o Cypress automaticamente cria o arquivo `cypress.json` e o diretório `cypress/`, com os sub-diretórios `fixtures/`, `integration/`, `plugins/` e `support/`, com seus respetivos arquivos (com exceção dos exemplos, que acabamos de deletar).

# Documentação Oficial
* https://docs.cypress.io/guides/overview/why-cypress
