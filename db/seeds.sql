INSERT INTO departments (name)
VALUES
    ('Engineering'),
    ('Finance'),
    ('Legal'),
    ('Sales');

INSERT INTO roles (title, salary, department_id)
VALUES
    ('Sales Lead', 100000, 4),
    ('Salesperson', 80000, 4),
    ('Lead Engineer', 150000, 1),
    ('Software Engineer', 120000, 1),
    ('Account Manager', 160000, 2),
    ('Accountant', 125000, 2),
    ('Legal Team Lead', 250000, 3),
    ('Lawyer', 190000, 3);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES
    ('Michael', 'Baker', 1, null),
    ('Tiffany', 'Harbert', 2, 1),
    ('Pablo', "Clarke", 3, null),
    ('John', 'Rust', 4, 3),
    ('JImmy', 'Chandler', 5, null),
    ('David', 'Surber', 6, 5),
    ('Margaret', 'Burchfield', 7, null),
    ('Paul', 'Taylor', 8, 7)