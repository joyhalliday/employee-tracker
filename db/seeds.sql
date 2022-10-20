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

INSERT INTO employee (first_name, last_name, role_id)
VALUES ("Homer", "Simpson", 1),
        ("Ned", "Flanders", 2),
        ("Clancy", "Wiggam", 3),
        ("Selma", "Bouvier", 4),
        ("Seymour", "Skinner", 5),
        ("Lenny", "Leonard", 6),
        ("Carl", "Carlson", 7),
        ("Barney", "Gumble", 8),
        ("Helen", "Lovejoy", 9);

