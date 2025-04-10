
# PROJETO AYCA

Este projeto é um sistema web de gestão para escritórios contábeis, desenvolvido com o objetivo de centralizar e organizar as áreas **fiscal**, **financeira** e **contábil** em um único ambiente digital.
## Sobre Stack

O sistema foi projetado para centralizar a gestão contábil de empresas, organizando dados em três áreas principais:

- **Fiscal**: Lançamentos e relatórios de tributos.
- **Financeiro**: Controle de receitas, despesas e fluxo de caixa.
- **Contábil**: Escrituração contábil e geração de balanços.

Todas as áreas alimentam o **Dashboard**, que apresenta uma visão geral dos dados e relatórios para o contador.

- **Frontend**: React.js / Tailwind CSS / Vite
- **Backend**: Node.js / Express.js
- **Banco de Dados**: PostgreSQL
- **Outras Ferramentas**:
  - Prisma (ORM)
  - JWT (Autenticação)
  - Swagger (Documentação da API)
  - Docker (Ambiente)

## Instalação
- Node.js
- Docker e Docker Compose
- Git

## Demonstração 

Abaixo está uma demonstração do funcionamento do sistema de gestão contábil:

### 🔐 Login
O usuário realiza o login com autenticação segura. O sistema identifica seu perfil e autoriza o acesso às áreas fiscal, financeira ou contábil.

### 📂 Módulos

- **Fiscal**: Permite lançamentos de notas fiscais e geração de relatórios tributários.
- **Financeiro**: Controle de contas a pagar/receber, fluxo de caixa e relatórios financeiros.
- **Contábil**: Escrituração contábil, geração de balancetes e integração com relatórios fiscais/financeiros.

Cada módulo gera documentos que alimentam automaticamente o **Dashboard**.

### 📊 Dashboard

O painel unificado apresenta uma visão geral dos dados:
- Gráficos financeiros
- KPIs contábeis e fiscais
- Acesso rápido aos últimos relatórios

### 👤 Perfil do Contador

Usuários com perfil de **contador** possuem acesso completo ao dashboard, podendo visualizar e exportar relatórios integrados de todas as áreas.

---

📌 *Obs.: a interface ilustrada no diagrama representa o fluxo interno do sistema e pode ser personalizada conforme o cliente.*

📺 Uma versão em vídeo da demonstração pode ser incluída aqui, ou um link para deploy (caso esteja hospedado):

🔗 [Acessar o sistema online (exemplo)] https://github.com/Yasmml/app_3b
## Funcionalidades

 **Login Seguro**: Autenticação com controle de acesso por perfil (ex: contador, auxiliar).
- **Módulo Fiscal**: Lançamento de notas fiscais e geração de relatórios tributários.
- **Módulo Financeiro**: Controle de contas, fluxo de caixa e relatórios financeiros.
- **Módulo Contábil**: Escrituração contábil, balancetes e relatórios contábeis.
- **Dashboard Integrado**: Visão geral com indicadores e acesso rápido a relatórios.
- **Perfil do Contador**: Acesso completo com exportação de dados e visualização unificada.
- **Segurança**: Proteção de dados e rotas com autenticação JWT.

## Aprendizados

Durante o desenvolvimento deste projeto, a equipe teve a oportunidade de aprender e praticar diversos conceitos importantes, como:

- Estruturação de sistemas modulares com múltiplas áreas (fiscal, financeiro, contábil)
- Criação de rotas protegidas e controle de autenticação
- Integração entre frontend e backend 
- Criação de dashboards com dados consolidados 
- Melhoria da organização do código com boas práticas de versionamento (Git/GitHub)
- Trabalho em equipe com divisão de responsabilidades
## Autores 

Yasmim Martins Lima – Backend 
Cauã Machado – Frontend 
Anna Clara da Silva – Gestora

## Contribuindo

Contribuições são muito bem-vindas! Se você deseja sugerir melhorias, corrigir bugs ou adicionar novas funcionalidades, siga os passos abaixo:

1. Faça um fork do projeto
2. Crie uma branch com sua feature:  
3. Faça as alterações necessárias e commit
4. Envie para o seu fork
5. Abra um Pull Request explicando suas mudanças

---

💡 Sugestões, dúvidas e melhorias também podem ser enviadas via *issues*.

Obrigado por colaborar!