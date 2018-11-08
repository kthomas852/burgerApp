// Set up MySQL connection.
var mysql = require("mysql");
if(process.env.JAWSDB_URL){
  var connection = mysql.createConnection({
    host: "pfw0ltdr46khxib3.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    port: 3306,
    user: "t82l5x0rufbya6cc",
    password: "cf2ea5xvhq64e7fm",
    database: "q4eczouqz5fvvwfg"
  });
}else {
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "",
  database: "burgers_db"
});
};
// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;