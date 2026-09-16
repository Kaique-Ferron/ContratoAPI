# React + JSON Server — Projeto para 2 aulas

Projeto simples para ensinar React consumindo uma API simulada.

## Instalação

Abra o terminal na pasta do projeto:

```bash
npm install
```

## Rodar o backend simulado

Abra um terminal:

```bash
npm run server
```

O JSON Server ficará em:

```text
http://localhost:3001
```

Teste no navegador:

```text
http://localhost:3001/tarefas
```

## Rodar o React

Abra OUTRO terminal:

```bash
npm run dev
```

O Vite mostrará o endereço do React, normalmente:

```text
http://localhost:5173
```

---

## Aula 1

Foco:

- dados mockados
- JSON Server
- GET
- fetch
- async/await
- useEffect
- useState
- organização em service
- listagem dos dados

Fluxo:

```text
React
  ↓
tarefaService.js
  ↓
GET /tarefas
  ↓
JSON Server
  ↓
db.json
```

## Aula 2

Foco:

- POST
- PATCH
- DELETE
- atualização do estado
- CRUD
- independência entre frontend e backend

Rotas utilizadas:

```text
GET    /tarefas
POST   /tarefas
PATCH  /tarefas/:id
DELETE /tarefas/:id
```

## Ideia principal

O frontend não precisa esperar o backend real ficar pronto.

Durante o desenvolvimento usamos:

```text
React → Service → JSON Server
```

Depois podemos trocar por:

```text
React → Service → Backend real
```

sem reconstruir os componentes React.
