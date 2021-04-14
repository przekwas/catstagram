CREATE SCHEMA catstagram;
USE catstagram;
CREATE USER 'catstagram' @'localhost' IDENTIFIED WITH mysql_native_password BY 'catstagram';
GRANT ALL PRIVILEGES ON catstagram.* TO 'catstagram' @'localhost';
FLUSH PRIVILEGES;

CREATE TABLE users (
    id CHAR(36) NOT NULL,
    first_name VARCHAR(60) NOT NULL,
    middle_initial VARCHAR(60) NULL,
    last_name VARCHAR(60) NOT NULL,
    username VARCHAR(25) NOT NULL,
    email VARCHAR(60) NOT NULL UNIQUE,
    password VARCHAR(60) NOT NULL,
    role TINYINT DEFAULT 1,
    banned TINYINT DEFAULT 0,
    avatar_url VARCHAR(255) DEFAULT 'https://images-na.ssl-images-amazon.com/images/I/51omZxr6fFL._AC_SX679_.jpg',
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP NULL,
    PRIMARY KEY (id)
);