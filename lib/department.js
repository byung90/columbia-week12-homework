const connection = require('./db');
class Department {
  constructor(name) {
    this.name = name;
  }

  addNewDepartment() {
    const department_name = this.name;
    const query = 'INSERT INTO department (name) VALUES (?)'
    connection.query(query, department_name, (err, res) => {
      console.log(res);
      console.log(`Department Id: ${res.insertId}`);
      this.id = res.insertId;
    })
    return this;
  }
}
module.exports = Department;