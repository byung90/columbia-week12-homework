const {
  createEmployee,
  getAllEmployees,
  deleteEmployee,
  getAllEmployeesByManagerId
} = require('./../models/employee');
const {
  getAllRoles
} = require('./../models/role');
const inquirer = require('inquirer');

const addNewEmployee = async () => {
  const allRoles = await getAllRoles();
  const formattedRoles = [];

  for (const role of allRoles) {
    formattedRoles.push(`${role.id}. ${role.title} - Salary: ${role.salary} - Department Id: ${role.department_id}`)
  }

  const allEmployeesByDepartment = await getAllEmployees();
  const formattedEmployees = [];

  for (const employee of allEmployeesByDepartment) {
    formattedEmployees.push(`${employee.id}. ${employee.first_name} ${employee.last_name}`)
  }

  const employee = await inquirer.prompt([
    {
      type: 'input',
      name: 'firstName',
      message: 'What is the first name?'
    },
    {
      type: 'input',
      name: 'lastName',
      message: 'What is the last name?'
    },
    {
      type: 'list',
      name: 'role',
      message: 'What is the role of the employee?',
      choices: formattedRoles
    },
    {
      type: 'list',
      name: 'managerId',
      message: 'Who is the manager?',
      choices: formattedEmployees
    }
  ]);

  const roleId = employee.role.substring(0, employee.role.indexOf('.'));
  const managerId = employee.managerId.substring(0, employee.managerId.indexOf('.'));

  const newEmployee = {
    firstName: employee.firstName,
    lastName: employee.lastName,
    roleId: roleId,
    managerId: managerId
  }
  await createEmployee(newEmployee);
}

const viewAllEmployees = async () => {
  const allEmployees = await getAllEmployees();
  const formattedEmployees = [];

  for (const employee of allEmployees) {
    formattedEmployees.push(`${employee.first_name}. ${employee.last_name}`)
  }

  console.log(formattedEmployees);
}

const removeEmployee = async () => {
  const allEmployees = await getAllEmployees();
  const formattedEmployees = [];

  for (const employee of allEmployees) {
    formattedEmployees.push(`${employee.id}. ${employee.first_name} ${employee.last_name}`)
  }

  const employee = await inquirer.prompt(
    {
      type: 'list',
      name: 'employee',
      message: 'Choose employee to delete',
      choices: formattedEmployees
    }
  );

  const employeeId = employee.employee.substring(0, employee.employee.indexOf('.'));

  await deleteEmployee(employeeId);
}

const viewEmployeesByManager = async () => {
  const allEmployees = await getAllEmployees();
  const formattedEmployees = [];

  for (const employee of allEmployees) {
    formattedEmployees.push(`${employee.id}. ${employee.first_name} ${employee.last_name}`)
  }

  const manager = await inquirer.prompt({
    type: 'list',
    name: 'manager',
    message: 'Who is the manager?',
    choices: formattedEmployees
  });

  const managerId = manager.manager.substring(0, manager.manager.indexOf('.'));

  const allEmployeesByManager = await getAllEmployeesByManagerId(managerId);
  const formattedEmployeesByManager = [];

  for (const employee of allEmployeesByManager) {
    formattedEmployeesByManager.push(`${employee.id}. ${employee.first_name} ${employee.last_name}`)
  }

  console.log(formattedEmployeesByManager);
}

module.exports = {
  viewEmployeesByManager,
  viewAllEmployees,
  addNewEmployee,
  removeEmployee
}