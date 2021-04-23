const inquirer = require('inquirer');
const connection = require('./lib/db');
const {
  addNewDepartment,
  viewAllDepartments,
  removeDepartment
} = require('./controllers/department');

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
          // addNewRole();
          break;
        case 'Add new employee':
          // addNewEmployee();
          break;
        case 'View all departments':
          viewAllDepartments();
          break;
        case 'View all roles':
          // viewAllRoles();
          break;
        case 'View all employees':
          // viewAllEmployees();
          break;
        case 'View employees by manager':
          // viewEmployeesByManager();
          break;
        case 'Update employee role':
          break;
        case 'Update employee manager':
          break;
        case 'Delete department':
          removeDepartment();
          break;
        case 'Delete role':
          // deleteRole();
          break;
        case 'Delete employee':
          // deleteEmployee();
          break;
        case 'View combined salary of department':
          break;
        case 'Exit':
          connection.end();
          break;
      }
    })
}

// function addNewDepartment() {
//   inquirer
//     .prompt({
//       type: 'input',
//       name: 'name',
//       message: 'What is the department name?'
//     })
//     .then((answer) => {
//       const newDepartment = new Department(answer.name);
//       newDepartment.addNewDepartment();
//     })
// }

// function viewAllDepartments() {
//   const query = 'SELECT * FROM department'
//   connection.query(query, (err, res) => {
//     let departments = [];
//     console.log(res);
//     res.forEach(({ id, name }) => {
//       departments.push(`${id}. ${name}`);
//       console.log(
//         `Id: ${id} || Name: ${name}`
//       );
//     });
//     return departments;
//   });
// }

// function deleteDepartment() {
//   inquirer
//     .prompt({
//       type: 'input',
//       name: 'id',
//       message: 'Choose department id to delete'
//     })
//     .then((answer) => {
//       console.log(answer);
//       const query = 'DELETE FROM department WHERE id=?'
//       connection.query(query, answer.id, (err, res) => {
//         console.log('Department Deleted');
//       });
//     })
// }

// function addNewRole() {
//   inquirer
//     .prompt([
//       {
//         type: 'input',
//         name: 'title',
//         message: 'What is the new role title?'
//       },
//       {
//         type: 'input',
//         name: 'salary',
//         message: 'What is role salary?'
//       },
//       {
//         type: 'input',
//         name: 'departmentId',
//         message: 'What is the department id of the role?'
//       }
//     ])
//     .then((answer) => {
//       const newRole = new Role(answer.name);
//       newRole.addNewRole();
//     })
// }

// function viewAllRoles() {
//   const query = 'SELECT * FROM role'
//   connection.query(query, (err, res) => {
//     console.log(res);
//     res.forEach(({ id, title, salary, department_id }) => {
//       console.log(
//         `Id: ${id} || Title: ${title} || Salary: ${salary} || Department Id: ${department_id}`
//       );
//     });
//   });
// }

// function deleteRole() {
//   inquirer
//     .prompt({
//       type: 'input',
//       name: 'id',
//       message: 'Choose role id to delete'
//     })
//     .then((answer) => {
//       console.log(answer);
//       const query = 'DELETE FROM role WHERE id=?'
//       connection.query(query, answer.id, (err, res) => {
//         console.log('Role Deleted');
//       });
//     })
// }

// function addNewEmployee() {
//   inquirer
//     .prompt([
//       {
//         type: 'input',
//         name: 'firstName',
//         message: 'What is the first name?'
//       },
//       {
//         type: 'input',
//         name: 'lastName',
//         message: 'What is the last name?'
//       },
//       {
//         type: 'input',
//         name: 'roleId',
//         message: 'What is the role id of the employee?'
//       },
//       {
//         type: 'input',
//         name: 'managerId',
//         message: 'What is the employee id of the manager?'
//       }
//     ])
//     .then((answer) => {
//       const newEmployee = new Employee(answer.firstName, answer.lastName, answer.roleId, answer.managerId);
//       newEmployee.addNewEmployee();
//     })
// }

// function viewAllEmployees() {
//   const query = 'SELECT * FROM employee'
//   connection.query(query, (err, res) => {
//     console.log(res);
//     res.forEach(({ id, first_name, last_name, role_id, manager_id }) => {
//       console.log(
//         `Id: ${id} || First Name: ${first_name} || Last Name: ${last_name} || Role Id: ${role_id} || Manager Id: ${manager_id}`
//       );
//     });
//   });
// }

// function deleteEmployee() {
//   inquirer
//     .prompt({
//       type: 'input',
//       name: 'id',
//       message: 'Choose employee id to delete'
//     })
//     .then((answer) => {
//       console.log(answer);
//       const query = 'DELETE FROM employee WHERE id=?'
//       connection.query(query, answer.id, (err, res) => {
//         console.log('Employee Deleted');
//       });
//     })
// }

// function viewEmployeesByManager() {
//   inquirer
//     .prompt(
//       {
//         type: 'input',
//         name: 'manager_id',
//         message: "Which manager's employees do you want to see? Enter manager Id"
//       }
//     )
//     .then((answer) => {
//       const query = 'SELECT * FROM employee where manager_id = ?'
//       connection.query(query, answer.manager_id, (err, res) => {
//         console.log(res);
//         res.forEach(({ id, first_name, last_name, role_id, manager_id }) => {
//           console.log(
//             `Id: ${id} || First Name: ${first_name} || Last Name: ${last_name} || Role Id: ${role_id} || Manager Id: ${manager_id}`
//           );
//         });
//       });
//     })
// }

// function viewCombinedSalaryOfDepartment() {
//   inquirer
//     .prompt(
//       {
//         type: 'input',
//         name: 'department_id',
//         message: "Which department's combined salary do you want to know? Enter department id"
//       }
//     )
//     .then((answer) => {
//       const query = 'SELECT * FROM employee where manager_id = ?'
//       connection.query(query, answer.manager_id, (err, res) => {
//         console.log(res);
//         res.forEach(({ id, first_name, last_name, role_id, manager_id }) => {
//           console.log(
//             `Id: ${id} || First Name: ${first_name} || Last Name: ${last_name} || Role Id: ${role_id} || Manager Id: ${manager_id}`
//           );
//         });
//       });
//     })
// }

actionOptions();