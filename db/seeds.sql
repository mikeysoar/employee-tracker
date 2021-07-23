USE company;

INSERT INTO department (name)
VALUES
  ('Receptionist'),
  ('Sales'),
  ('Technician'),
  ('Tech Support');

INSERT INTO role (title, salary, department_id)
VALUES
  ('Recptionist', 35000, 1),
  ('Sales manager', 80000, 2),
  ('Salesman', 50000, 2),
  ('Technician Lead', 55000, 3),
  ('Technician', 45000, 3),
  ('Tech Support Lead', 40000, 4),
  ('Tech Support', 35000, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
  ('Ronald', 'Firbank', 1, null),
  ('Virginia', 'Woolf', 2, 1),
  ('Piers', 'Gaveston', 3, 1),
  ('Charles', 'LeRoi', 4, 1),
  ('Katherine', 'Mansfield', 5, 1),
  ('Dora', 'Carrington', 6, 3),
  ('Edward', 'Bellamy', 7, 3),
  ('Montague', 'Summers', 3, 3),
  ('Octavia', 'Butler', 4, 3),
  ('Unica', 'Zurn', 2, 3);