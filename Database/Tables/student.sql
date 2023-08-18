-- CREATE DATABASE School;
-- GO
USE School;
GO


CREATE TABLE student(
    id VARCHAR(200) PRIMARY KEY,
    name VARCHAR(200) NOT NULL,
    class VARCHAR(200) NOT NULL,
    fees FLOAT NOT NULL,
    is_deleted BIT DEFAULT 0
);
GO