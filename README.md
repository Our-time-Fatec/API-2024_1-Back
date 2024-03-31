## API - 2DSM - 2024-1 - Server

Exemplo de código usado como exemplo para fazer a conexão com o SGBD PostgreSQL.

### Instruções de uso

Antes de prosseguir é necessário ter criado as tabelas no SGBD PostgreSQL e ter carregado os dados nesses tabelas.

Baixar as pastas no seu computador:
```
git clone https://github.com/arleysouza/abp-2024-1-2dsm-server.git servidor
```
Instalar os pacotes necessários para rodar o servidor:
```
cd servidor
npm i
```
Certifique-se de editar as propriedades de conexão com o SGBD no `/src/controllers/db.ts`:
```
  user: "postgres",
  host: "localhost",
  database: "bdapi",
  password: "123",
  port: 5432,
```
Instruções para subir o servidor:
```
npm run dev
ou
npm start
```
URL base:
```
http://localhost:3100/
```
