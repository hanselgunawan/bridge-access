# Bridge Access
## What is Bridge Access?
Bridge Southeast Asia is a financial technology firm based in Singapore and the Philippines. Their platform, **Bridge Access**, provides financial services for affiliated employees to do loans, insurance and micropayments by integrating to existing payroll services.
Since their platform is still early in development -- we are tasked to do their **shopping** module which allows clients to purchase items through a third-party online vendor, www.goods.ph . Customers can purchase items by payment installments (called *micropayments*) which are automatically deducted from their payroll.

## User Interface (UI)
These are the UI for this app:
### Product Categories
![](https://imgur.com/oXEROjL.png)

### Product Details
![](https://imgur.com/oSk1DG0.png)

### Shopping Cart
![](https://imgur.com/aSss0kq.png)

### Checkout
![](https://imgur.com/Ag7d2ua.png)
![](https://imgur.com/6xZBGrF.png)

### Success Checkout
![](https://imgur.com/5KElzt7.png)

## Demo
These are the demos for this app:
### Filter by Product Category
![](https://imgur.com/qM1j7NK.gif)

### Filter by Product Sub-Category
![](https://imgur.com/Fpub89w.gif)

### Filter Products by Price
![](https://imgur.com/qkkEjeR.gif)

### Search by User Input
![](https://imgur.com/eelzkEN.gif)

### Pagination
![](https://imgur.com/eo7GRye.gif)

### Add a Product to Cart
![](https://imgur.com/VpBagjD.gif)

### Success Checkout
![](https://imgur.com/5v4xSSY.gif)

## Technologies Used
* [Express](https://www.npmjs.com/package/express)
* [Handlebars](http://handlebarsjs.com/)
* [Bootstrap](https://getbootstrap.com/)
* [MySQL](https://www.npmjs.com/package/mysql)
* [URL](https://www.npmjs.com/package/url)

## Bridge Access Production Link
https://guarded-gorge-21782.herokuapp.com/shop/product_categories/1

## Entity-Relationship-Diagram (ERD)
This is the ERD for this **shopping** module:

![](https://imgur.com/gbYEkz9.png)

### ERD workflow:
1. Customer adds items to their shopping cart, but they can update the quantity or remove items from the cart
2. When they want to check out, an order will be created in **ORDER HEADER** table, which also contains things they buy recorded in the **ORDER DETAIL** table
3. The customer has the option to choose an existing address on file (**ADDRESS** table), or add a new address for shipping (this will automatically add to the database)
4. The total amount of the order will be broken down into payment installments via the **MICROPAYMENTS** table, which will be deducted from their payroll
5. The schedule of the payment installments is generated in the **REPAYMENT** table, which contain a foreign key to the parent **MICROPAYMENT** table.


## Model-View-Controller (MVC) Structure
### MODEL
We divided our models into four:
* Shop
* Address
* Order
* Cart
#### Shop Model
Shop model stores all queries for:
* Product Categories
* Product Subcategories
* Filter By Category Price
* Filter By Subcategory Price
* Search By User Input
* Pagination

#### Address Model
Address model stores all queries for:
* Select an existing address
* Store new address when checkout

#### Order Model
Order model stores all queries for:
* Create new Order Header
* Create new Order Details
* Create new Micropayment
* Create new Repayments

#### Cart Model
Cart model stores all queries for:
* Display shopping cart
* Insert new product to shopping cart
* Delete item from cart
* Update quantity in the cart
* Get number of items currently in cart

### VIEW
These are the views that we use for this app:

![](https://imgur.com/JDGXelr.png)

### CONTROLLER

These are the controllers that we use for this app:

![](https://imgur.com/NpP8elB.png)

## Our Team
* **Hansel B Tritama**
	* E-mail: hanselgunawan94@gmail.com
	* LinkedIn: https://www.linkedin.com/in/hanselbtritama/
	* Github: https://github.com/hanselgunawan

* **William Tan**
	* E-mail: william.tan@biola.edu
	* LinkedIn: https://www.linkedin.com/in/williamtan/
	* Github: https://github.com/william--tan

* **Andre Gunawan**
	* E-mail: johnandrechen@gmail.com
	* LinkedIn: https://www.linkedin.com/in/andre-a-gunawan/
	* Github: https://github.com/andregunawan
