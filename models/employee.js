const connection = require('./../lib/db');

//Create new department to db
const createEmployee = (employee) => {
  return new Promise((resolve, reject) => {
    if (employee.managerId) {
      const query = 'INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?,?,?, ?)'
      connection.query(query, [firstName, lastName, roleId, managerId], (err, res) => {
        if (err) reject(err);
        console.log(`Employee Id: ${res.insertId}`)
        resolve();
      })
    }
    else {
      const query = 'INSERT INTO employee (first_name, last_name, role_id) VALUES (?,?,?, ?)'
      connection.query(query, [firstName, lastName, roleId], (err, res) => {
        if (err) reject(err);
        console.log(`Employee Id: ${res.insertId}`)
        resolve();
      })
    }
  })
}

//Delete a department from db
const deleteEmployee = (employeeId) => {
  return new Promise((resolve, reject) => {
    const query = 'DELETE FROM employee WHERE id=?'
    connection.query(query, employeeId, (err, res) => {
      if (err) reject(err);
      console.log('Employee Deleted');
      resolve();
    })
  })
}

const getAllEmployees = () => {
  return new Promise((resolve, reject) => {
    const query = 'select * from employee';
    connection.query(query, (err, res) => {
      if (err) reject(err);
      resolve(res);
    })
  })
}

const getAllEmployeesByManagerId = (managerId) => {
  return new Promise((resolve, reject) => {
    const query = 'select * from employee where manager_id =?';
    connection.query(query, managerId, (err, res) => {
      if (err) reject(err);
      resolve(res);
    })
  })
}

module.exports = {
  createEmployee,
  getAllEmployees,
  deleteEmployee,
  getAllEmployeesByManagerId
};