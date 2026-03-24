# 📄 Product Requirements Document (PRD) - TechStation API

## 1. Visão Geral do Produto

A **TechStation API** é o backend responsável por gerenciar todo o ecossistema de e-commerce da TechStation, uma loja especializada em hardware de alta performance, periféricos premium e setups táticos. A API fornece os dados e a lógica de negócios necessários para o frontend (loja virtual) e, futuramente, para um painel administrativo.

## 2. Objetivos

* **Performance:** Garantir tempos de resposta rápidos para uma experiência de navegação fluida na loja de hardware.
* **Escalabilidade:** Suportar picos de tráfego, especialmente durante lançamentos de novos setups ou promoções (ex: Black Friday).
* **Confiabilidade:** Assegurar a integridade dos dados, especialmente em transações financeiras e controle de estoque de itens de alto valor.
* **Manutenibilidade:** Código limpo, testável e bem documentado, facilitando a adição de novas funcionalidades (ex: configurador de setups personalizados).

## 3. Escopo e Funcionalidades Core

### 3.1. Gestão de Produtos (Hardware & Periféricos)
* **CRUD Completo:** Criação, leitura, atualização e exclusão (soft delete) de produtos.
* **Especificações Técnicas Flexíveis:** Suporte a atributos variados usando campos JSON (ex: tipo de switch em teclados, DPI em mouses, taxa de atualização em monitores, layout ANSI/ABNT2).
* **Controle de Estoque:** Gerenciamento preciso de inventário, vital para produtos de alto ticket.
* **Categorização Avançada:** Organização em categorias hierárquicas (ex: Periféricos > Teclados > Mecânicos Customizados).
* **Gestão de Imagens:** Suporte a múltiplas imagens de alta resolução por produto.

### 3.2. Categorias
* **CRUD e Soft Delete em Cascata:** Gerenciamento de categorias com desativação segura, sem quebrar produtos associados.
* **Geração de Slugs:** URLs amigáveis automáticas para melhor SEO da loja.

### 3.3. Autenticação e Usuários
* **Registro e Login:** Autenticação segura via Email e Senha (criptografia BCrypt).
* **Emissão de JWT:** Controle de sessão via JSON Web Tokens.
* **Controle de Acesso (RBAC):** Diferenciação entre usuários comuns (`USER`) e administradores (`ADMIN`) para proteção de rotas sensíveis.

### 3.4. Pedidos (Checkout)
* **Criação Transacional:** Processo atômico que garante: verificação de estoque, criação do pedido, inserção dos itens e baixa no estoque em uma única transação segura no banco de dados.
* **Snapshot de Preços:** Congelamento do valor do produto no momento exato da compra, evitando inconsistências em caso de mudanças futuras de preço.
* **Status do Pedido:** Rastreamento do ciclo de vida da compra (Pendente, Pago, Enviado, Entregue, Cancelado).

## 4. Requisitos Não Funcionais

* **Tecnologias:** Node.js, TypeScript, Fastify (foco em performance), Prisma ORM, Zod (validação).
* **Banco de Dados:** PostgreSQL relacional para garantir a consistência das transações e integridade referencial.
* **Documentação da API:** Geração automática e interativa utilizando padrão OpenAPI 3.0 (Swagger/Scalar).
* **Testes:** Cobertura de testes unitários e de integração utilizando Vitest.

## 5. Roadmap Futuro (Backlog)

* **Fase 2:** Integração com Gateways de Pagamento (Stripe/Mercado Pago) e cálculo de frete dinâmico (Correios/Melhor Envio).
* **Fase 3:** Sistema de Avaliações e Reviews de hardware com upload de fotos pelos usuários.
* **Fase 4:** Desenvolvimento de Painel Administrativo (Frontend separado) para gestão completa da loja.
* **Fase 5:** Implementação de um "Configurador de Setup" (Build Your PC/Desk) com validação de compatibilidade entre peças.