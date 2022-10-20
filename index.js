const inquirer = require('inquirer');
const mysql = require('mysql2');
// require('console.table');


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
        //name, mssage, type (choices if list)
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
        } else if(answer.doNext === "view all roles") {
            db.query(`select * from roles`, (err, results) => {
                console.table(results)
            })
        }
        else if(answer.doNext === "add a department") {
        addDepartment();
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
init()