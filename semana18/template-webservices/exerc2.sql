CREATE TABLE Adress (
	id VARCHAR(64) PRIMARY KEY,
    street VARCHAR(255) NOT NULL,
    number VARCHAR(45) NOT NULL,
    neighborhood VARCHAR(255) NOT NULL,
    city VARCHAR(100) NOT NULL,
    state VARCHAR(255) NOT NULL,
    PostalCode VARCHAR(16) NOT NULL,
    user_id VARCHAR(255),
    FOREIGN KEY (user_id) REFERENCES to_do_list_users(id)
);