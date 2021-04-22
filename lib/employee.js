const connection = require('./db');
class Employee {
  constructor(first_name, last_name, role_id, manager_id) {
    this.first_name = first_name;
    this.last_name = last_name;
    this.role_id = role_id;
    this.manager_id = manager_id;
  }

  addNewEmployee() {
    const query = 'INSERT INTO department (first_name, last_name, role_id, manager_id) VALUES (?,?,?, ?)'
    connection.query(query, [this.first_name, this.last_name, this.role_id, this.manager_id], (err, res) => {
      console.log(res);
      console.log(`Employee Id: ${res.insertId}`);
      this.id = res.insertId;
    })
    return this;
  }

}

module.exports = Employee;