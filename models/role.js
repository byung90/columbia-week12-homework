const connection = require('./../lib/db');

//Create new department to db
const createRole = (role) => {
  return new Promise((resolve, reject) => {
    const query = 'INSERT INTO role (title, salary, department_id) VALUES (?,?,?)'
    connection.query(query, [role.title, role.salary, role.departmentId], (err, res) => {
      if (err) reject(err);
      console.log(`Role Id: ${res.insertId}`)
      resolve();
    })
  })
}

//Delete a department from db
const deleteRole = (roleId) => {
  return new Promise((resolve, reject) => {
    const query = 'DELETE FROM role WHERE id=?'
    connection.query(query, roleId, (err, res) => {
      if (err) reject(err);
      console.log('Role Deleted');
      resolve();
    })
  })
}

const getAllRoles = () => {
  return new Promise((resolve, reject) => {
    const query = 'select * from role';
    connection.query(query, (err, res) => {
      if (err) reject(err);
      resolve(res);
    })
  })
}

module.exports = {
  createRole,
  deleteRole,
  getAllRoles
};