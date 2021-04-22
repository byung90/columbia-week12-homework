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
}