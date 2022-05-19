# Node.js Rest APIs with Express & MySQL example

MySQl Setup

CREATE TABLE studentdb.glossaries(
    id int  NOT NULL AUTO_INCREMENT, 
    term varchar(100), 
    definition varchar(2000),
     PRIMARY KEY (id)
);



## Project setup

#DB config
naviaget to api-mysql-backend\app\config
Update db.config with DB credentials

Download  api-mysql-backend


cd api-mysql-backend

```
npm install
```

### Run
```
node server.js
```
