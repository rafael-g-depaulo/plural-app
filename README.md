# Sequelize

Sequelize é um **ORM** para NodeJs, para banco de dados relacionais (_MySQL, Postgres_)

ORM: Abstração do banco de dados, a forma como a aplicação se comunica com o banco de dados

Para criar um usuário, temos o User e utilizamos o `.create()`, para criar um novo, enquanto em SQL teriamos algo como INSERT INTO user.

O arquivo de configuração para o Sequelize está na pasta: server/database/database.js

Nele temos as configuração que ficam pre-definidas no .env
No arquivo .env.example tem uma definição, bastando apenas substituir os dados do banco de dados com o da sua maquina local de desenvolvimento ou já em produção.

## Sequelize-cli

O sequelize-cli é uma interface de linha de comando para facilitar a criação de migrations, executar as migrations, criar models, etc.

#### Criando uma migration

No terminal:
**`$ yarn sequelize migration:create --name=create-users`**

**`$ yarn sequelize db:migrate`**

**`$ yarn sequelize db:migrate:undo (DESFAZ A ULTIMA MIGRAION)`**

**`$ yarn sequelize db:migrate:undo:all (DESFAZ TODAS)`**
