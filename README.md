# API REST: Do Zero ao Profissional

Esta é uma API RESTful em desenvolvimento que foi desenvolvida com **Node.js**, **Express** e **SQLite**, construída com o objetivo de ser um guia didático e profissional para quem deseja sair do absoluto zero no backend e alcançar padrões de mercado.

O projeto foca em boas práticas, arquitetura limpa, tratamento de erros robusto e semântica HTTP.

---

## Guia Completo no Notion

Para acompanhar toda a evolução lógica, explicações teóricas e o passo a passo detalhado deste projeto viste o meu Notion!

[![Notion](https://img.shields.io/badge/Notion-000000?style=for-the-badge&logo=notion&logoColor=white)](https://sordid-viscose-57f.notion.site/API-33e90e2480a180ada5e6e8d47c660fb7)

---

##  Funcionalidades (Até o momento)

- **CRUD Completo:** Criação, Leitura, Atualização e Eliminação de usuários.
- **Busca Específica:** Rota de busca por ID utilizando `.get()` para performance.
- **Atualização Cirúrgica (PATCH):** Implementação de lógica de *merge* para atualizar apenas campos específicos.
- **Hard Reset:** Comando especializado para limpar a tabela e resetar a contagem de IDs (`sqlite_sequence`).
- **Segurança e Estabilidade:** Uso rigoroso de Blocos `try...catch` em todas as rotas para evitar quedas do servidor.
- **Validação de Dados:** Verificação de tipos (ex: garantir que a idade seja um número inteiro).
- **Semântica REST:** Uso correto de verbos HTTP e códigos de status (200, 201, 400, 404, 500).

---

##  Tecnologias Utilizadas

- **Runtime:** Node.js
- **Framework:** Express.js
- **Base de Dados:** SQLite (com a biblioteca `better-sqlite3`)
- **Ferramentas de Teste:** Postman / Thunder Client

---

##  Estrutura de Arquivos (Em Evolução)

O projeto está passando por um processo de refatoração para seguir padrões de arquitetura de mercado (MVC):

    ├── controllers/    # Lógica de negócio e tratamento de erros
    ├── database/       # Conexão e configuração do SQLite
    ├── routes/         # Definição das rotas e verbos HTTP
    ├── server.js       # Ponto de entrada da aplicação
    ├── .env            # Variáveis de ambiente (ignorado no Git)
    ├── .gitignore      # Proteção de arquivos sensíveis
    └── package.json    # Dependências do projeto

---

## Como Executar o Projeto

1. Clone o repositório:
   git clone https://github.com/seu-usuario/nome-do-repositorio.git

2. Instale as dependências:
   npm install

3. Inicie o servidor:
   npm start
   
   *O servidor estará rodando na porta definida (ex: http://localhost:3000)*

---

##  Desenvolvedor

**Thiago Stein** - Estudante do segundo ano de Engenharia de Software na Unifil e aspirante a Desenvolvedor Backend (Java/Node.js).

---
*Este projeto é uma demonstração de evolução técnica constante. Sinta-se à vontade para explorar o código e o Notion!*
