INSERT INTO department (name)
VALUES
  ('Receptionist'),
  ('Sales'),
  ('Technician'),
  ('Tech Support');

  INSERT INTO role (title, salary, department_id)
  VALUES
  ('Sales manager', 80000, 2),
  ('Salesman', 50000, 2),
  -- next position etc....

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
  ('Ronald', 'Firbank', 1, null),
  ('Virginia', 'Woolf', 2, 1),
  ('Piers', 'Gaveston', 3, 1),
  ('Charles', 'LeRoi', 4, 1),
  ('Katherine', 'Mansfield', 5, 1),
  ('Dora', 'Carrington', 6, 3),
  ('Edward', 'Bellamy', 7, 3),
  ('Montague', 'Summers', 8, 3),
  ('Octavia', 'Butler', 9, 3),
  ('Unica', 'Zurn', 10, 3);

;