const {
  createRole,
  deleteRole,
  getAllRoles
} = require('./../models/role');
const {
  getAllDepartments
} = require('./../models/department');
const inquirer = require('inquirer');

const addNewRole = async () => {
  const allDepartments = await getAllDepartments();
  let formattedDepartments = [];

  for (const department of allDepartments) {
    formattedDepartments.push(`${department.id}. ${department.name}`);
  }

  const role = await inquirer.prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is the new role title?'
    },
    {
      type: 'input',
      name: 'salary',
      message: 'What is role salary?'
    },
    {
      type: 'list',
      name: 'department',
      message: 'Choose the department for the role.',
      choices: formattedDepartments
    }
  ]);

  const departmentId = role.department.substring(0, role.department.indexOf('.'));
  const newRole = {
    title: role.title,
    salary: role.salary,
    departmentId: departmentId
  }

  await createRole(newRole);
}

const viewAllRoles = async () => {
  const allRoles = await getAllRoles();
  const formattedRoles = [];

  for (const role of allRoles) {
    formattedRoles.push(`${role.id}. ${role.title} - Salary: ${role.salary} - Department Id: ${role.department_id}`)
  }

  console.log(formattedRoles);
}

const removeRole = async () => {
  const allRoles = await getAllRoles();
  const formattedRoles = [];

  for (const role of allRoles) {
    formattedRoles.push(`${role.id}. ${role.title} - Salary: ${role.salary} - Department: ${role.departmentId}`)
  }

  const role = await inquirer.prompt(
    {
      type: 'list',
      name: 'role',
      message: 'Choose role to delete',
      choices: formattedRoles
    }
  );

  const roleId = role.role.substring(0, role.role.indexOf('.'));

  await deleteRole(roleId);
}

module.exports = {
  addNewRole,
  removeRole,
  viewAllRoles
}