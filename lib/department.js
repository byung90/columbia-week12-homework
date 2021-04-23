const connection = require('./db');

const addNewDepartment = () => {
  const department_name = this.name;
  const query = 'INSERT INTO department (name) VALUES (?)'
  connection.query(query, department_name, (err, res) => {
    console.log(res);
    console.log(`Department Id: ${res.insertId}`);
    this.id = res.insertId;
  })
};


module.exports = {
  addNewDepartment
};