var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Danii|10742",
  database: "budget_buddy"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Coneccion con la base de datos exitosa!");
});

module.exports = con;
