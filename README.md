# Faux-Amazon-Storefront

## Description

This application implements a simple command line based storefront using the npm [inquirer](https://www.npmjs.com/package/inquirer) package and the MySQL database backend together with the npm [mysql](https://www.npmjs.com/package/mysql) package.

### MySQL Database Setup

To run this application, you should have the MySQL database already set up on your machine. If you don't check out the website [MySQL installation page](https://dev.mysql.com/doc/refman/5.6/en/installing.html) to install the version you need for your operating system. Once you have MySQL installed, you will be able to create the Bamazon database and the Products Table. Run this code inside your MySQL client like to populate the database. Once completed, you will be ready to proceed with running the Bamazon customer interface.

### Customer Interface

The customer interface allows the user to view the current inventory of store items: item IDs, descriptions, department in which the item is located and price. The user is then able to purchase one of the existing items by entering the item ID and the desired quantity. If the selected quantity is currently in stock, the user's order is fulfilled, displaying the total purchase price and updating the store database. If the desired quantity is not available, the user is prompted to modify their order.

To run the customer interface please follow the steps below in your terminal:

	cd bamazon
	npm install
	node bamazonCustomer.js

1. Open your terminal such as Bash.
2. Navigate to the folder that contains the `liri.js` file. 
3. When you run the command: `node bamazonCustomer.js` the following result should display:

![Results] (./images/welcomebamazon.png)

4. From there you will be prompted with a series of questions to purchase product and the amount/quantity, which then will update the system and check whether it is in stock or not.



## TECHNOLOGY USED
* Javascript
* NodeJS
* MySql Workbench
* MAMP
* Node packages:
    * Inqurier
    * MySql 
    * Cli-Table2
   

### Respository
* Git
* GitHub