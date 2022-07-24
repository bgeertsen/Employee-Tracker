const inquirer = require('inquirer');
//const db = require('./db/connection');

const questions = [
    {
        type: 'list',
        name: 'main',
        message: "What would you like to do?",
        choices: ['View All Employees', 'Add Employee', 'Update Employee Role', 'View All Roles', 'Add Role', 'View All Departments', 'Add Department']
    }
]

inquirer
.prompt(questions)
.then(answers => {
    return console.log(answers)
})