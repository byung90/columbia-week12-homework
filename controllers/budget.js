const {
  getDepartmentSalary
} = require('./../models/budget');
const {
  getAllDepartments
} = require('./../models/department');
const inquirer = require('inquirer');

const getCombinedDepartmentSalary = async () => {
  const allDepartments = await getAllDepartments();
  let formattedDepartments = [];

  for (const department of allDepartments) {
    formattedDepartments.push(`${department.id}. ${department.name}`);
  }

  const department = await inquirer.prompt({
    type: 'list',
    name: 'department',
    message: 'Which department salary do you want?',
    choices: formattedDepartments
  })

  const departmentId = department.department.substring(0, department.department.indexOf('.'));

  const departmentBudget = await getDepartmentSalary(departmentId);
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  })

  console.log(formatter.format(departmentBudget));
}

module.exports = {
  getCombinedDepartmentSalary
}