# Teste Full-Stack Teddy

## Sobre o sistema

Este sistema permite o gerenciamento de clientes, oferecendo uma interface simples e eficiente para realizar as operações de CRUD (Criar, Ler, Atualizar e Deletar) de clientes.

### Funcionalidades

- Tela inicial para inserção do nome do usuário.
- Tela com a lista de clientes cadastrados, permitindo:
  - Cadastro de novos clientes.
  - Seleção de clientes.
  - Atualização de informações dos clientes.
  - Exclusão de clientes.
- Tela específica para visualização dos clientes selecionados.

## Arquitetura do sistema

O projeto segue uma arquitetura de containers usando **Docker**. Ele está dividido em três serviços principais: **frontend**, **backend** e **banco de dados (Postgres)**, conforme especificado no arquivo `docker-compose.yml`.

## Instruções de instalação e uso

1. **Clone o repositório**:

   ```bash
   git clone https://github.com/RaphaelBrasil/Teste-Full-Stack-Teddy
   ```

2. **Navegue até a raiz do projeto** e suba os containers:

   ```bash
   cd Teste-Full-Stack-Teddy
   docker-compose up --build
   ```

3. **Acesse o Front-End** no navegador:

   - URL: `http://localhost:3000/welcome`

4. **Acesse o Back-End** se necessário:
   - URL: `http://localhost:4000`

## Tecnologias Utilizadas

- **Frontend**:

  - React
  - Vite

- **Backend**:

  - Nest.js
  - TypeORM

- **Banco de dados**:

  - Postgres

- **Containerização**:
  - Docker
