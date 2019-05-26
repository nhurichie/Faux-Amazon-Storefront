-- ******************
-- DATABASE CREATION
-- ******************

-- Create a MySQL Database called `bamazon`
CREATE DATABASE bamazon_db;

USE bamazon_db;

-- Then create a Table inside of that database called `products`
CREATE TABLE products (
-- The products table should have each of the following columns:
-- * item_id (unique id for each product)
  id INTEGER (11) AUTO_INCREMENT NOT NULL, 
-- * product_name (Name of product)
  producct_name VARCHAR (30) NOT NULL,
-- * department_name
  department_name INTEGER (11) NOT NULL,
-- * price (cost to customer)
  price DECIMAL (10, 2) NOT NULL,
-- * stock_quantity (how much of the product is available in stores)
  stock_quantity INTEGER (11) NOT NULL,
  KEY department_name (department_name),
  PRIMARY KEY (id)
)

INSERT INTO products
VALUES
(1,"road slicks",1,49.50,25),
(2,"cyclocross",1,75.49,15),
(3,"mtb",1,25.50,6),
(4,"bar tape",2,30.49,12),
(5,"full chain",3,49.99,10),
(6,"chain links",3,149.50,5),
(7,"chain lube",3,79.99,10),
(8,"padrone",4,101.00,20);