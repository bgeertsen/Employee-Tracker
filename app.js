const inquirer = require('inquirer');
const db = require('./db/connection');
const cTable = require('console.table');

// const questions = [
//     {
//         type: 'list',
//         name: 'main',
//         message: "What would you like to do?",
//         choices: ['View All Employees', 'Add Employee', 'Update Employee Role', 'View All Roles', 'Add Role', 'View All Departments', 'Add Department']
//     }
// ]

// inquirer
// .prompt(questions)
// .then(answers => {
//     return console.log(answers)
// })
const getDepartments = () => {
    const sql = `SELECT * FROM departments`;

    db.query(sql, (err, rows) => {
        if (err) {
            console.log(`error: ${err}`);
            return;
        }
        return console.table('Departments', rows);
    })
}

const getRoles = () => {
    const sql = ` SELECT roles.title, roles.salary, departments.department_name
                  FROM roles
                  INNER JOIN departments ON roles.department_id=departments.id;`

    db.query(sql, (err, rows) => {
        if (err) {
            console.log(`error: ${err}`);
            return;
        }
        console.table('Roles',rows);
    })
}

const getEmployees = () => {
    const sql = `SELECT employees.first_name, employees.last_name, roles.title, employees.manager_id
                 FROM employees
                 INNER JOIN roles ON employees.role_id=roles.id
                 INNER JOIN employees ON employees.manager_id=employees.first_name`;

    db.query(sql, (err, rows) => {
        if (err) {
            console.log(`error: ${err}`);
            return;
        }
        return console.table('Employees', rows);
    })
}
getDepartments();
getRoles();
getEmployees();