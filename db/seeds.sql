INSERT INTO department (name)
VALUES ("Finance"),
    ("Software"),
    ("Marketing"),
    ("Human Resources"),
    ("Graphic Design");

INSERT INTO roles (title, salary, department_id) 
VALUES ("Finance Director", 96000, 1),
        ("Finance Associate", 70000, 1),
        ("Software Developer", 120000, 2),
        ("Junior Software Developer", 80000, 2),
        ("Marketing Director", 75000, 3),
        ("Marketing Assistant", 50000, 3),
        ("HR Director", 75000, 4),
        ("HR Assistant", 50000, 4),
        ("Graphic Designer", 70000, 5);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Homer", "Simpson", 1, NULL),
        ("Ned", "Flanders", 2, 1),
        ("Clancy", "Wiggam", 3, NULL),
        ("Selma", "Bouvier", 4, 2),
        ("Seymour", "Skinner", 5, NULL),
        ("Lenny", "Leonard", 6, 3),
        ("Carl", "Carlson", 7, NULL),
        ("Barney", "Gumble", 8, 4),
        ("Helen", "Lovejoy", 9, NULL);

