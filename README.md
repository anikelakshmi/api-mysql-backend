# Node.js Rest APIs with Express & MySQL example

MySQl Setup 
Download and  install MySQl if not having 
Set root user


CREATE TABLE studentdb.glossaries(
    id int  NOT NULL AUTO_INCREMENT, 
    term varchar(100), 
    definition varchar(2000),
     PRIMARY KEY (id)
);



## Project setup
Download  api-mysql-backend
cd api-mysql-backend

#DB config
navigate to api-mysql-backend\app\config
Update db.config with DB credentials



```
npm install
```

### Run
```
node server.js
```


### Unit Tests
Not added yet.Will add soon
