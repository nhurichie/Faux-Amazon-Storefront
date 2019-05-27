//*********************************
//REQUIRE KEYS 
//*********************************
var mysql = require("mysql");
var inquirer = require("inquirer");
var Table = require("cli-table2");

//*********************************
//CONNECTION FROM MYSQL - JS
//*********************************
var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "****",
  database: "bamazon_db",
  port: 8889
});
connection.connect();

//*********************************
//DISPLAY PRODUCT INFO FROM MYSQL
//*********************************
var displayConnection = function () {
  connection.query("SELECT * FROM products", function (err, res) {
    if (err) throw err;
    console.log(" ----------------------------------------------");
    console.log("                  HELLO! Bamazon                ");
    console.log(" ----------------------------------------------");
    console.log("");
    console.log("  Search for your Bike/Cycling Product Below: ");
    console.log("");

    //*********************************
    //TERMINAL: DISPLAY FORMATTING
    //*********************************
    var table = new Table({
      head: ["Product ID", "Product Description", "Cost"],
      colWidths: [12, 24, 8],
      colAligns: ["center", "left", "right"],
      style: {
        head: ["aqua"],
        compact: true
      }
    });
    //**************************************************
    //FORLOOP DISPLAY PRODUCT INFO FROM MYSQL - TERMINAL
    //**************************************************
    for (var i = 0; i < res.length; i++) {
      table.push([res[i].id, res[i].product_name, res[i].price]);
    }
    console.log(table.toString());
    console.log("");
  });
};

//*************************************
//FUNCTION TO PROMPT:SELECT & PURCHASE
//*************************************
var shoppingCart = function () {
  inquirer.prompt({
    name: "productToPurchase",
    type: "input",
    message: "Enter Product ID to make a purchase!"
  }).then(function (responseOne) {
    //*****************************
    //CONNECTING QUERY TO DATABASE
    //*****************************
    var selection = responseOne.productToPurchase;
    connection.query("SELECT * FROM products WHERE Id=?", selection, function (err, res) {

      //*****************************
      //PRODUCT SELECTION to PURCHASE
      //*****************************
      if (err) throw err;
      if (res.length === 0) {
        console.log("ERROR: Product doesn't exists, make another selection!");

        shoppingCart("Good Selection!");
      } else {
        inquirer.prompt({
          name: "quantity",
          type: "input",
          message: "How many items do you want to put in your cart?"
        }).then(function (responseTwo) {

          //********************************
          //SELECT NEW PRODUCT LOW INVENTORY
          //********************************
          var quantity = responseTwo.quantity;
          if (quantity > res[0].stock_quantity) {
            console.log("OH NO! We're getting low and only have " + res[0].stock_quantity + " items left!")
            shoppingCart();
          } else {
            console.log("");
            console.log(res[0].product_name + " purchased");
            console.log(quantity + " qty @ $" + res[0].price);

            var newItemQuantity = res[0].stock_quantity - quantity;
            connection.query(
              "UPDATE products SET stock_quantity = " + newItemQuantity + "WHERE id= " + res[0].id, function (err, resUpdate) {
                if (err) throw err;
                console.log("");
                console.log("Order Processed!");
                console.log("Thanks for shopping at Bamazon!");
                console.log("");
                connection.end();
              }
            )
          }
        })
      }
    })
  })
}

displayConnection();