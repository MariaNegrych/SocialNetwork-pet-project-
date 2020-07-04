#### **_To start backend:_**

**Step 1** - _create database_

* create database with name **_socialnetwork_**

**Step 2** - _create tables_
```
npx sequelize-cli db:migrate
```
**Step 3** - _create user statuses and add test users_
```
npx sequelize-cli db:seed:all
```
* password to all test users **_Mn23081995_**

**Step 4** - _start server_
```
node index
```

#### **_To start frontend:_**

**Step 1** - _start command_
```
ng s
```
