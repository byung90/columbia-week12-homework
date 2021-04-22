const connection = require('./db');
class Role {
  constructor(title, salary, department_id) {
    this.title = title;
    this.salary = salary;
    this.department_id = department_id;
  }

  addNewRole() {
    const query = 'INSERT INTO department (title, salary, department_id) VALUES (?,?,?)'
    connection.query(query, [this.title, this.salary, this.department_id], (err, res) => {
      console.log(res);
      console.log(`Role Id: ${res.insertId}`);
      this.id = res.insertId;
    })
    return this;
  }

}

module.exports = Role;