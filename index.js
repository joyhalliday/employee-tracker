const inquirer = require('inquirer');
const mysql = require('mysql2');
const table = require('console.table');


const db = mysql.createConnection(
{
    host: 'localhost',
    user: 'root',
    password: 'YourPassword',
    database: 'employee_db'
},
console.log(`Connected to the employee_db database.`)
);
db.connect(err => {
    if (err) throw(err) 
})

questionsArray = [
    {
        name: "doNext",
        message: "What would you like to do next?",
        type: "list",
        choices: ["view all departments", "view all roles", "view all employees", "add a department", "add a role", "add an employee", "update an employee role"]
    }
]

function init() {
    inquirer.prompt(questionsArray).then(answer => {
        console.log(answer.doNext)
        if (answer.doNext === "view all departments") {
            db.query(`select * from department`, (err, results) => {
                console.table(results)
            })
        } else if(answer.doNext === "view all roles") {
            db.query(`select * from roles`, (err, results) => {
                console.table(results)
            })
        } else if(answer.doNext === "view all employees") {
            db.query(`select * from employee`, (err, results) => {
                console.table(results)
            })
        } else if(answer.doNext === "add a department") {
        addDepartment();
        }  else if(answer.doNext === "add a role") {
        addRole();
        } else if(answer.doNext === "add an employee") {
        addEmployee();
        } else if(answer.doNext === "update an employee role") {
        updateRole();
        }

    })
}
function addDepartment() {
    inquirer.prompt([
        {
            name: "newDept",
            message: "What is the new department?",
            type: "input"
        }
    ]) .then(answer => {
        db.query(`insert into department (name) values('${answer.newDept}')`, (err, results) => {
            if(err) throw(err)
            console.table(results)
        })
    })
}
function addRole() {
    inquirer.prompt([
        {
            name: "newRole",
            message: "What is the new role?",
            type: "input"
        },
        {
            name: "newRoleSalary",
            message: "What is the new role salary?",
            type: "input"
        },
        {
            name: "newRoleDept",
            message: "What is the department of the new role?",
            type: "input"
        }
    ]) .then(answer => {
        db.query(`INSERT INTO roles (title, salary, department_id) VALUES(' ${answer.newRole}, ${answer.newRoleSalary}, ${answer.newRoleDept}')`, (err, results) => {
            if(err) throw(err)
            console.table(results)
        })
    })
}
function addEmployee() {
    inquirer.prompt([
        {
            name: "newEmployeeFn",
            message: "What is the new employee's first name?",
            type: "input"
        },
        {
            name: "newEmployeeLn",
            message: "What is the new employee's last name?",
            type: "input"
        },
        {
            name: "newEmployeeRole",
            message: "What is the new employee's role?",
            type: "input"
        },
        {
            name: "newEmployeeManager",
            message: "Who is the new employee's manager?",
            type: "input"
        }
    ]) .then(answer => {
        db.query(`insert into employee (first_name, last_name, role_id, manager_id) values('${answer.newEmployeeFn}' '${answer.newEmployeeLn}' '${answer.newEmployeeRole}' '${answer.newEmployeeManager}')`, (err, results) => {
            if(err) throw(err)
            console.table(results)
        })
    })
}
function updateRole() {
    inquirer.prompt([
        {
            name: "updateEmployee",
            message: "Who is the employee you would like to update the role for?",
            type: "list",
            choices: ["Homer Simpson", "Ned Flanders", "Clancy Wiggam", "Selma Bouvier", "Seymour Skinner", "Lenny Leonard", "Carl Carlson", "Barney Gumble", "Helen Lovejoy" ]
        },
        {
            name: "updateRole",
            message: "What is the role?",
            type: "input"
        },
        {
            name: "updateRoleId",
            message: "What is the new role ID?",
            type: "input"
        },
        {
            name: "updateManagerId",
            message: "What is the new manager ID?",
            type: "input"
        }
    ]) .then(answer => {
        db.query(`insert into employee (first_name, last_name, role_id, manager_id) values('${answer.updateEmployee}, ${answer.updateRole}, ${answer.updateRoleId}, ${answer.updateManagerId}')`, (err, results) => {
            if(err) throw(err)
            console.table(results)
        })
    })
}
init()