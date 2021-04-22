DROP DATABASE IF EXISTS employeeTracker_db;
CREATE database employeeTracker_db;

USE employeeTracker_db;

CREATE TABLE department (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(100) NULL,
  PRIMARY KEY (id)
);

CREATE TABLE role (
  id INT NOT NULL AUTO_INCREMENT,
  title VARCHAR(100) NULL,
  salary DECIMAL(10,2) NULL,
  department_id INT NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE employee (
  id INT NOT NULL AUTO_INCREMENT,
  first_name VARCHAR(100) NULL,
  last_name VARCHAR(100) NULL,
  role_id INT NOT NULL,
  manager_id INT,
  PRIMARY KEY (id)
);

INSERT INTO department (name)
VALUES ('HR');

INSERT INTO department (name)
VALUES ('Engineering');

INSERT INTO department (name)
VALUES ('Product');

-- Role 1
INSERT INTO role (title, salary, department_id) 
VALUES ('Senior HR', 80000.00, 1);

-- Role 2
INSERT INTO role (title, salary, department_id)
VALUES ('Junior HR', 50000.00, 1);

-- Role 3
INSERT INTO role (title, salary, department_id)
VALUES ('Senior Engineer', 200000.00, 2);

-- Role 4
INSERT INTO role (title, salary, department_id)
VALUES ('Junior Engineer', 120000.00, 2);

-- Role 5
INSERT INTO role (title, salary, department_id)
VALUES ('Senior Product Manager', 200000.00, 3);

-- Role 6
INSERT INTO role (title, salary, department_id)
VALUES ('Junior Product Manager', 120000.00, 3);

-- Employee 1
INSERT INTO employee (first_name, last_name, role_id)
VALUES ('John', 'Smith', 1);

-- Employee 2
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('Joe', 'Smith', 2, 1);

-- Employee 3
INSERT INTO employee (first_name, last_name, role_id)
VALUES ('Jane', 'Henderson', 3);

-- Employee 4
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('Jordan', 'Henderson', 4, 3);

-- Employee 5
INSERT INTO employee (first_name, last_name, role_id)
VALUES ('Ethan', 'Yoon', 5);

-- Employee 6
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('Erik', 'Eastham', 6, 5);