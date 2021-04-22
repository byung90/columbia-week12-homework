const inquirer = require('inquirer');
const mysql = require('mysql');
const password = require('./config.js')

const connection = mysql.createConnection({

  port: 3306,
  user: 'root',
  passowrd: password,
  database: 'employeeTracker_db'

});

connection.connect((err) => {
  if (err) throw err;

})

const actionOptions = () => {
  inquirer
    .prompt(
      {
        name: 'action',
        type: 'list',
        message: 'What would you like to do?',
        choices: [
          'Add new department',
          'Add new role',
          'Add new employee',
          'View all departments',
          'View all roles',
          'View all employees',
          'View employees by manager',
          'Update employee role',
          'Update employee manager',
          'Delete department',
          'Delete role',
          'Delete employee',
          'View combined salary of department'
        ]
      }
    )
    .then((answer) => {
      switch (answer.action) {
        case 'Add new department':
          break;
        case 'Add new role':
          break;
        case 'Add new employee':
          break;
        case 'View all departments':
          break;
        case 'View all roles':
          break;
        case 'View all employees':
          break;
        case 'View employees by manager':
          break;
        case 'Update employee role':
          break;
        case 'Update employee manager':
          break;
        case 'Delete department':
          break;
        case 'Delete role':
          break;
        case 'Delete employee':
          break;
        case 'View combined salary of department':
          break;
      }
    })
}