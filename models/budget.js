const connection = require('./../lib/db');

const getDepartmentSalary = (departmentId) => {
  return new Promise((resolve, reject) => {
    const query = `select sum(role.salary) as 'Total' from employee join role on employee.role_id = role.id join department on role.department_id = department.id where department.id = ?`;
    connection.query(query, departmentId, (err, res) => {
      if (err) throw err;
      resolve(res[0].Total);
    })
  });
}

module.exports = {
  getDepartmentSalary
}