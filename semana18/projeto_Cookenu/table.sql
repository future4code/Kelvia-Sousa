create table cookenuUser (
	id varchar(255) primary key,
    name varchar(255) not null ,
    email varchar(255) not null,
    password varchar(255) 
);

create table cookenuRecipe (
	id VARCHAR(64) PRIMARY KEY,
    title varchar(255) not null,
    creationDate date not null,
    description varchar(255) not null, 
	user_id VARCHAR(64),
    FOREIGN KEY (user_id) REFERENCES cookenuUser(id)
)