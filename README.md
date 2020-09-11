# Simple Point Of Sales terminal

## Description 

The Terminal is used by cashiers to enter sales orders and check order total. 
Cashiers might be using Mobile / Tablet / Desktop.

Functionality:

 - Sales orders entry.
    Within - Cashier puts “product name”, “price”, “qty”. It shows all entered lines and calculates totals.
 - Credit check.
    Maximum order amount checking. Cashier puts the maximum amount (credit limit). If the currently entered order total less than the credit limit, the “indicator box” is green, otherwise - the “indicator box” is red.

## Final product

#### Point of Sales Terminal.
!["Screenshot of pos terminal main."](https://github.com/AnnaTykhomyrova/point-of-sales-terminal/blob/master/docs/pos-terminal-main.png)

#### Point of Sales Terminal. Simple validation.
!["Screenshot of pos terminal with simple validation."](https://github.com/AnnaTykhomyrova/point-of-sales-terminal/blob/master/docs/pos-terminal-with-simple-validation.png)

#### Point of Sales Terminal. Green and red indicator if total price is more than credit limit.
!["Screenshot of pos terminal with over and below credit limit."](https://github.com/AnnaTykhomyrova/point-of-sales-terminal/blob/master/docs/pos-terminal-with-over-and-below-credit-limit.png)

#### Point of Sales Terminal. Responsive design.
!["Screenshot of responsive pos terminal."](https://github.com/AnnaTykhomyrova/point-of-sales-terminal/blob/master/docs/pos-terminal-responsive.png)

## Tech Stack
- Express
- Node
- PostgreSQL
- Knex
- React
- Bootstrap