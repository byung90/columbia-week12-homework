const mysql = require('mysql');
const password = require('./../config.js')

const connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: password,
  database: 'employeeTracker_db'

});

connection.connect((err) => {
  if (err) throw err;

})

module.exports = connection;