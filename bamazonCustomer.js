var mysql = require("mysql");
var inquirer = ("inquirer");
var Table = require("cli-table2");

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "bamazon_db",
  port: 8889
});
connection.connect();

var displayConnection = function () {
  connection.query("SELECT * FROM products", function (err, res) {
    if (err) throw err;
    console.log("--------------------------------");
    console.log("        Welcome to Bamazon      ");
    console.log("--------------------------------");
    console.log("Search/Find your Product Below: ");
    console.log("");
    var table = new Table({
      head: ["Product ID", "Product Description", "Cost"],
      colWidths: [12, 32, 8],
      colAligns: ["center", "left", "right"],
      style: {
        head: ["aqua"],
        compact: true
      }
    });
    for (var i = 0; i < res.length; i++) {
      table.push([res[i].id, res[i].product_name, res[i].price]);
    }
    console.log(table.toString());
    console.log("");
  });
};
displayConnection();