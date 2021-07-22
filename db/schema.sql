DROP TABLE IF EXISTS employee;
DROP TABLE IF EXISTS departments; 
DROP TABLE IF EXISTS roles;


CREATE TABLE department (
  id INTEGER AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(30) NOT NULL  
);

CREATE TABLE role (
  id INTEGER AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(30) NOT NULL,
  salary decimal,
  department_id INT, 
  foreign key (department_id) references department(id) 
);

CREATE TABLE employee (
  id INTEGER AUTO_INCREMENT PRIMARY KEY,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  role_id INT,
  manager_id INT,
  foreign key (role_id) references role(id),
  foreign key (manager_id) references employee(id)    
);






