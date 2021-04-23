const inquirer = require('inquirer');
const connection = require('./lib/db');
const {
  addNewDepartment,
  viewAllDepartments,
  removeDepartment
} = require('./controllers/department');
const {
  addNewRole,
  removeRole,
  viewAllRoles
} = require('./controllers/role');
const {
  viewEmployeesByManager,
  viewAllEmployees,
  addNewEmployee,
  removeEmployee
} = require('./controllers/employee');


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
          'View combined salary of department',
          'Exit'
        ]
      }
    )
    .then((answer) => {
      switch (answer.action) {
        case 'Add new department':
          addNewDepartment();
          break;
        case 'Add new role':
          addNewRole();
          break;
        case 'Add new employee':
          addNewEmployee();
          break;
        case 'View all departments':
          viewAllDepartments();
          break;
        case 'View all roles':
          viewAllRoles();
          break;
        case 'View all employees':
          viewAllEmployees();
          break;
        case 'View employees by manager':
          viewEmployeesByManager();
          break;
        case 'Update employee role':
          break;
        case 'Update employee manager':
          break;
        case 'Delete department':
          removeDepartment();
          break;
        case 'Delete role':
          removeRole();
          break;
        case 'Delete employee':
          removeEmployee();
          break;
        case 'View combined salary of department':
          break;
        case 'Exit':
          connection.end();
          break;
      }
    })
}

actionOptions();