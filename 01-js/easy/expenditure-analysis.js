/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

function calculateTotalSpentByCategory(transactions) {
   
  let newobj = {};
  for(let transaction of transactions){
    if(transaction.category in newobj) {
      newobj[transaction.category] += transaction.price;
    }
    else{
      newobj[transaction.category] = transaction.price;
    }
  }
  let resultarr = [];
  for(let key in  newobj){
    let tempobj = {
      "category":key,
      "totalSpent":newobj[key],
    } 
    resultarr.push(tempobj);
  }
  return resultarr;
}

module.exports = calculateTotalSpentByCategory;
