const { createDepartment,
  deleteDepartment,
  getAllDepartments
} = require('../models/department');
const inquirer = require('inquirer');

const addNewDepartment = async () => {
  const newDepartment = await inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is the department name?'
    }
  ]);

  await createDepartment(newDepartment.name);
}

const viewAllDepartments = async () => {
  const allDepartments = await getAllDepartments();
  console.log(allDepartments);
}

const removeDepartment = async () => {
  const allDepartments = await getAllDepartments();
  let formattedDepartments = [];

  for (const department of allDepartments) {
    formattedDepartments.push(`${department.id}. ${department.name}`);
  }

  const department = await inquirer.prompt(
    {
      type: 'list',
      name: 'department',
      message: 'Choose department to delete',
      choices: formattedDepartments
    }
  );

  const departmentId = department.department.substring(0, department.department.indexOf('.'));
  await deleteDepartment(departmentId);
}

module.exports = {
  addNewDepartment,
  viewAllDepartments,
  removeDepartment
}