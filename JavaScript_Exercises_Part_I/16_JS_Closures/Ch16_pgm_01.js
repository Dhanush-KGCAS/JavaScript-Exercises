// // Level 1

// // Create a closure which has one inner function
// function outer() {
//     let counter = 0;
  
//     function inner() {
//       counter++;
//       console.log(`Counter: ${counter}`);
//     }
  
//     return inner;
//   }
  
//   const innerFunc1 = outer();
//   myInner(); // Counter: 1
//   myInner(); // Counter: 2

// // Level 2

// // Create a closure which has three inner functions
// function outer() {
//     let data = 'Hello, World!';
  
//     function inner1() {
//       console.log(`Data: ${data}`);
//     }
  
//     function inner2() {
//       data = 'New data!';
//     }
  
//     function inner3() {
//       console.log(`Updated data: ${data}`);
//     }
  
//     return { inner1, inner2, inner3 };
//   }
  
//   const innerFunc2 = outer();
//   innerFunc2.inner1(); // Data: Hello, World!
//   innerFunc2.inner2();
//   innerFunc2.inner3(); // Updated data: New data!

// Level 3

// Create a personAccount out function. It has firstname, lastname, incomes, expenses inner 
// variables. It has totalIncome, totalExpense, accountInfo,addIncome, addExpense and 
// accountBalance inner functions. Incomes is a set of incomes and its description and 
// expenses is also a set of expenses and its description.


function personAccount(firstname, lastname) {
    let incomes = new Map();
    let expenses = new Map();
  
    function totalIncome() {
      let total = 0;
      for (const [amount, _] of incomes) {
        total += amount;
      }
      return total;
    }
  
    function totalExpense() {
      let total = 0;
      for (const [amount, _] of expenses) {
        total += amount;
      }
      return total;
    }
  
    function accountInfo() {
      console.log(`Account Info: ${firstname} ${lastname}`);
      console.log(`Total Income: ${totalIncome()}`);
      console.log(`Total Expense: ${totalExpense()}`);
      console.log(`Account Balance: ${totalIncome() - totalExpense()}`);
    }
  
    function addIncome(amount, description) {
      incomes.set(amount, description);
    }
  
    function addExpense(amount, description) {
      expenses.set(amount, description);
    }
  
    function accountBalance() {
      return totalIncome() - totalExpense();
    }
  
    return {
      totalIncome,
      totalExpense,
      accountInfo,
      addIncome,
      addExpense,
      accountBalance,
    };
  }
  
  let myAccount = personAccount('dhanush', 'Santosh');
  myAccount.addIncome(1000, 'Salary');
  myAccount.addIncome(500, 'Freelance');
  myAccount.addExpense(500, 'Rent');
  myAccount.addExpense(200, 'Utilities');
  myAccount.accountInfo();
