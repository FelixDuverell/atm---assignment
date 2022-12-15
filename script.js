// BANK ACCOUNT


// the object is responsible for the logic in this assignment
const account = {
    balance: 100,
    getBalance: function () {
        alert(`Your balance is: ${this.balance}`);
        atm();
    },
    
    firstName: "Felix",
    lastName: "Duverell",

    getAccountName: function() {
        alert(`Account Holder: ${this.firstName} ${this.lastName}`)
        atm();
    },
    
    makeDeposit: function () {
        const deposit = parseFloat(prompt("How much would you like to deposit?"));
        // add a if/else to not be able to type a negative ammount.

        if (deposit <= 0) {
            (prompt("Please enter a valid number"));

            this.makeDeposit();
        } else if (deposit <=  this.balance) {
            this.balance += deposit;
            this.getBalance();
        }
        atm();
      },

    makeWithdraw: function() {
        const withdraw = parseFloat(prompt("How much would you like to withdraw?"))

        if (withdraw > this.balance) {
            const error = parseFloat(prompt("Not enough to cover"));


            this.makeWithdraw();
        } else if (withdraw <= 0) {
            // 
            (prompt("Please enter a valid number"));

            this.makeWithdraw();
        } else if (withdraw <= this.balance) {
            this.balance -= withdraw;
            this.getBalance();
        }
        atm();
    },

    exit: function() {
        const exit = (prompt("Are you sure you want to exit?  If 'YES' press enter - If 'NOT' type no!"));
        
        // i want to make message 5 a question and if spelled yes then exit if not then go back to option screen.
        if (exit === `yes`) {
            throw exit();
        } else if (exit === `no`) {
            return atm();
        }
    },

    error: function() {
        const error = parseFloat(prompt("Enter a valid choice"))
        
        atm();
    },
}

console.log(account)


// this is responsible for the user interface;
function atm() {
    const message = parseFloat(prompt("Select a choice 1.) See balance 2.) Make a deposit 3.) Make a withdrawal 4.) Get account name 5.) Exit"))

    if (message === 1){
        account.getBalance();

    } else if (message === 2){
        account.makeDeposit();
        
    } else if (message === 3){
        account.makeWithdraw();

    } else if (message === 4){
        account.getAccountName();

    } else if (message === 5){
        account.exit();
    } else if (message === 6, 7, 8, 9) {
        account.error();
    } 

}

atm()

        

// REQUIREMENTS
// Create an object called account that has the following properties:

// EXTRA: exitAccount, should be a function
// this function should exit the account
// HINT: there are a few different ways to do this, it's up to which way you choose.

// EXTRA = OPTIONAL NOT MANDATORY

// Remember that a function is just a value. And if a function is just a
// value then we can both pass it as a parameter to a function and
// pass it as a property of an object.

// The object should handle all of the functionality (logic)

// The atm() function should be responsible for showing the user interface
// and based on the user input show the right meny choice

// HINT:
// these operators could probably be useful in this assignment:
// && operator
// || operator

// In this assignment you do not have to create any HTML you will only output
// to the console. But you will use prompt instead of just regular console.

// to handle one of the potential errors you can use this built in method isNaN(), this is how you use it:
const variableName = 10;
isNaN(variableName);

// this is the function atm(), I've created some start code for you
// function atm() {
//   const message = parseFloat(prompt("Display message"));
  // you need to answer the question why we are using parseFloat() method here?


  // you can answer as a comment in your code, and yes you need to some research of your own

  // to show the right output based on the user input you can
  // either use a if/else statement or a switch.
  // Write a comment and motivate your choice
// }
