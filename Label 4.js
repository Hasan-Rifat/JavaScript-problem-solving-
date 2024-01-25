// 1. Task: Object Transformation
/* Create an array of objects representing customers with 'name', 'purchases', and 'loyaltyPoints' properties. Write a function to transform the array by doubling the 'loyaltyPoints' of customers with more than 5 purchases.*/

const customers = [
  { name: "customer 1", purchases: 5, loyaltyPoints: 10 },
  { name: "customer 2", purchases: 10, loyaltyPoints: 20 },
  { name: "customer 3", purchases: 15, loyaltyPoints: 30 },
  { name: "customer 4", purchases: 20, loyaltyPoints: 40 },
];

const transformCustomers = (customers) => {
  return customers.map((customer) => {
    if (customer.purchases > 5) {
      customer.loyaltyPoints = customer.loyaltyPoints * 2;
    }
    return customer;
  });
};

console.log(transformCustomers(customers));

/*2. Task: Function Memoization
Implement a memoization function that caches the results of expensive function calls and returns the cached result when the same inputs occur again. */

const expensiveFunction = (arg1, arg2) => {
  console.log("expensiveFunction called with: ", arg1, arg2);
  return arg1 + arg2;
};

const memoize = (fn) => {
  const cache = {};
  return (...args) => {
    const key = JSON.stringify(args);
    if (cache[key]) {
      console.log("cache hit");
      return cache[key];
    }
    console.log("cache miss");
    const result = fn(...args);
    cache[key] = result;
    return result;
  };
};

const memoizedFunction = memoize(expensiveFunction);
memoizedFunction(1, 2);
memoizedFunction(1, 2);
memoizedFunction(2, 3);
memoizedFunction(2, 3);

/*3. Task: Object Sorting with Multiple Criteria
Create an array of objects representing products with 'name', 'price', and 'category' properties. Write a function to sort the array first by 'category' in ascending order and then by 'price' in descending order within each category. */

const products = [
  { name: "product 1", price: 10, category: "category 1" },
  { name: "product 2", price: 20, category: "category 2" },
  { name: "product 3", price: 30, category: "category 3" },
  { name: "product 4", price: 40, category: "category 4" },
  { name: "product 5", price: 50, category: "category 5" },
  { name: "product 6", price: 60, category: "category 6" },
  { name: "product 7", price: 70, category: "category 7" },
  { name: "product 8", price: 80, category: "category 8" },
  { name: "product 9", price: 90, category: "category 9" },
  { name: "product 10", price: 100, category: "category 10" },
];

const sortProducts = (products) => {
  return products.sort((a, b) => {
    if (a.category === b.category) {
      return b.price - a.price;
    }
    return a.category.localeCompare(b.category);
  });
};

console.log(sortProducts(products));

/* 4. Task:  */
// Example: Demonstrate the workflow of the function being used here to find out unique from 2 array

const findUniqueElements = (arr1, arr2) => {
  const uniqueArr1 = arr1.filter((element) => !arr2.includes(element));
  const uniqueArr2 = arr2.filter((element) => !arr1.includes(element));
  return [...uniqueArr1, ...uniqueArr2];
};

const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];
console.log(findUniqueElements(array1, array2)); // Output: [1, 2, 6, 7]

/* Task 5: Review this JavaScript code . The function mysteryFunctionX takes a number as input and creates an array representing a mysterious sequence up to that number. Can you decipher what this function does? Additionally, what would be the output for the provided example (mysteriousNumberX)? */

function mysteryFunctionX(limitX) {
  const sequenceX = [1];
  for (let x = 1; x <= limitX; x++) {
    sequenceX[x] = x * sequenceX[x - 1];
  }
  return sequenceX;
}

// Example usage:
const mysteriousNumberX = 5;
console.log(mysteryFunctionX(mysteriousNumberX));
// Output: [1, 1, 2, 6, 24, 120]
