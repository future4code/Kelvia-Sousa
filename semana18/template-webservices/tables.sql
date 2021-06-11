CREATE TABLE IF NOT EXISTS to_do_list_users (
    id VARCHAR(64) PRIMARY KEY,
    name VARCHAR(64) NOT NULL,
    nickname VARCHAR(64) NOT NULL,
    email VARCHAR(64) NOT NULL,
    role VARCHAR(6) NOT NULL DEFAULT 'NORMAL'
);

CREATE TABLE IF NOT EXISTS to_do_list_tasks (
    id VARCHAR(64) PRIMARY KEY,
    title VARCHAR(64) NOT NULL,
    description VARCHAR(1024) DEFAULT "No description provided",
    deadline DATE,
    status ENUM("TO_DO", "DOING", "DONE") DEFAULT "TO_DO",
    author_id VARCHAR(64),
    FOREIGN KEY (author_id) REFERENCES to_do_list_users(id)
);

CREATE TABLE IF NOT EXISTS to_do_list_assignees (
    task_id VARCHAR(64),
    assignee_id VARCHAR(64),
    PRIMARY KEY (task_id, assignee_id),
    FOREIGN KEY (task_id) REFERENCES to_do_list_tasks(id),
    FOREIGN KEY (assignee_id) REFERENCES to_do_list_users(id)
);

create table Adress (
	id VARCHAR(64) PRIMARY KEY,
    street VARCHAR(255) NOT NULL,
    number VARCHAR(45) NOT NULL,
    neighborhood VARCHAR(255) NOT NULL,
    city VARCHAR(100) NOT NULL,
    state VARCHAR(255) NOT NULL,
    PostalCode VARCHAR(16) NOT NULL,
    user_id VARCHAR(255),
	FOREIGN KEY (user_id) references to_do_list_users
);