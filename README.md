# 7Fit 




## 1. Descrição

O **7FIT** é uma plataforma desenvolvida para facilitar o agendamento de atividades físicas coletivas. O objetivo principal é incentivar um estilo de vida saudável e a interação social, permitindo que usuários organizem e participem de eventos esportivos de forma prática.

A ideia central é transformar laços virtuais em conexões reais através do esporte, combatendo o sedentarismo e promovendo o senso de comunidade.

------

## 2. Sobre esta API

API do **7Fit** gerencia o ciclo de vida de atividades esportivas coletivas, integrando a persistência de dados (MySQL) à interface do usuário. Desenvolvida com **NestJS**, ela garante a segurança, integridade e padronização das regras de negócio para o agendamento de eventos e gestão de comunidades.

### 2.1. Principais Funcionalidades

**Cadastro de Usuários:** Registro simples para começar a organizar ou participar de eventos.

**Criação de Eventos:** O organizador pode definir todos os detalhes da atividade.

**Compartilhamento de Convites:** Gere links ou convites diretos para convocar participantes.

**Gestão de Grupos:** Formação de comunidades baseadas em interesses esportivos comuns.



------

## 3. Diagrama de Classes

Adicione a imagem do Diagrama de Classes (se houver)

<div align="center">
    <img src="mudar" title="source: imgur.com" width="50%"/>
</div>

------

## 4. Diagrama Entidade-Relacionamento (DER)

Adicione a imagem do DER

<div align="center">
    <img src="imagem" title="source: imgur.com" />
</div>



------

## 5. Tecnologias utilizadas

| Item                          | Descrição  |
| ----------------------------- | ---------- |
| **Servidor**                  | Node JS    |
| **Linguagem de programação**  | TypeScript |
| **Framework**                 | Nest JS    |
| **ORM**                       | TypeORM    |
| **Banco de dados Relacional** | MySQL      |

------

## 6. Configuração e Execução

1. Clone o repositório 
2. Instale as dependências: `npm install`
3. Configure o banco de dados no arquivo `app.module.ts`
4. Execute a aplicação: `npm run start:dev`