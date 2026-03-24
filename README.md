# 🚀 TechStation API - Backend

Este repositório contém a API REST de alta performance desenvolvida para suportar a plataforma de e-commerce **TechStation**, especializada em hardware e setups táticos.

## 🛠 Tech Stack

A API foi construída focando em velocidade, tipagem estática e escalabilidade:

* **Runtime:** Node.js (TypeScript)
* **Framework:** Fastify (Foco em altíssima performance)
* **ORM:** Prisma
* **Banco de Dados:** PostgreSQL
* **Validação:** Zod
* **Autenticação:** JWT (`@fastify/jwt`)
* **Documentação:** OpenAPI 3.0 via `@fastify/swagger` + Scalar UI
* **Testes:** Vitest

## 🏗 Arquitetura

O projeto segue uma arquitetura em camadas bem definida para promover a separação de responsabilidades e facilitar a manutenção:

`Request` ➡️ `Routes` ➡️ `Controllers` ➡️ `Services` ➡️ `Prisma/DB`

1. **Routes:** Definição de endpoints, schemas OpenAPI e plugins Fastify.
2. **Controllers:** Entrada/Saída HTTP, validação de requisição (Zod) e tratamento de erros.
3. **Services:** Regras de negócio, transações e chamadas ao banco de dados via Prisma.

## 💾 Modelo de Dados (Principais Entidades)

O esquema do banco de dados (`prisma/schema.prisma`) inclui os seguintes modelos:

* **User:** Usuários do sistema com roles (`USER`, `ADMIN`) e login via Email/Senha (BCrypt).
* **Category:** Categorias de produtos com suporte a *Soft Delete* (`active: boolean`) e Slugs automáticos.
* **Product:** Produtos de hardware. Utiliza campos JSON no Postgres para armazenar flexivelmente variações e especificações técnicas (ex: switches, layouts, imagens).
* **Order & OrderItem:** Gestão de pedidos transacional. O `OrderItem` tira um snapshot dos itens no momento da compra, congelando o preço.

## 🔌 Principais Endpoints

*A documentação interativa e completa (Swagger/Scalar) está disponível na rota `/api-docs` quando o servidor está rodando localmente*.

* **`/auth`**: Registro de usuários e Login com emissão de JWT.
* **`/products`**: CRUD completo de produtos, listagem com filtros avançados e suporte a Soft Delete.
* **`/categories`**: Gestão de categorias com geração automática de slugs e Soft Delete em cascata.
* **`/orders`**: Criação de pedido transacional (Verifica estoque -> Cria Order -> Cria Items -> Atualiza Estoque).

## 🚀 Como Executar Localmente

**Pré-requisitos:** Node.js 18+, PostgreSQL local/container e arquivo `.env` configurado.

```bash
# 1. Instalar dependências
npm install

# 2. Subir banco de dados (Migrations)
npm run prisma:migrate

# 3. Popular banco com dados iniciais (Seed)
npm run prisma:seed

# 4. Rodar em desenvolvimento
npm run dev

# 5. Rodar bateria de testes
npm run test