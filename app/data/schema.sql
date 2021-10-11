CREATE DATABASE IF NOT EXISTS bookdb;
USE bookdb;

DROP TABLE IF EXISTS books;
CREATE TABLE books (
	id int PRIMARY KEY AUTO_INCREMENT ,
    title varchar(48) UNIQUE NOT NULL,
    author varchar(24),
    year_published int,
    publisher varchar(24),
    page_count int,
    msrp int
    
);

INSERT INTO books (id, title, author, year_published, publisher, page_count, msrp) VALUES 
(1, 'Big Data', 'Nathan Martz', 2015, 'Manning', 328, 11),
(2, 'Distributed Data Systems with Azure Databricks', 'Alan Bernardo Palacio', 2021, 'Packt', 414, 44),
(3, 'Data Smart', 'John W. Foreman', 2013, 'Wiley', 432, 22),
(4, 'Designing Data-Intensive Applications', 'Martin', 2017, 'OReilly Media', 616, 34)
;