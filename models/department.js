const connection = require('./../lib/db');

//Create new department to db
const createDepartment = (departmentName) => {
  return new Promise((resolve, reject) => {
    const query = 'INSERT INTO department (name) VALUES (?)'
    connection.query(query, departmentName, (err, res) => {
      if (err) reject(err);
      console.log(`Department Id: ${res.insertId}`)
      resolve();
    })
  })
}

//Delete a department from db
const deleteDepartment = (departmentId) => {
  return new Promise((resolve, reject) => {
    const query = 'DELETE FROM department WHERE id=?'
    connection.query(query, departmentId, (err, res) => {
      if (err) reject(err);
      console.log('Department Deleted');
      resolve();
    })
  })
}

const getAllDepartments = () => {
  return new Promise((resolve, reject) => {
    const query = 'select * from department';
    connection.query(query, (err, res) => {
      if (err) reject(err);
      resolve(res);
    })
  })
}

module.exports = {
  createDepartment,
  deleteDepartment,
  getAllDepartments
};