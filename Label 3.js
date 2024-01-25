/* Task 1: Array Reduction
Create an array of numbers. Write a function that uses the reduce method to calculate the sum of all even numbers in the array. */
const calculateSumOfEven = (numbers) => {
  const sum = numbers.reduce(
    (total, next) => (next % 2 === 0 ? total + next : total + 0),
    0
  );
  console.log(sum);
};

calculateSumOfEven([2, 4, 7, 1, 9, 3]);

/* Task 2: Leap Year Checker
  Write a function that determines whether a given year is a leap year. */
const checkLeapYear = (year) => {
  if ((0 == year % 4 && 0 != year % 100) || 0 == year % 400) {
    console.log(year + " is a leap year");
  } else {
    console.log(year + " is not a leap year");
  }
};

/* Task 3: Count Vowels:
  Write a function that counts the number of vowels in a given string.
  Example: Happy New Year */

const countVowels = (text) => {
  const vowels = ["a", "e", "i", "o", "u"];
  const textArray = text.split("");
  const count = textArray.filter((letter) =>
    vowels.includes(letter.toLowerCase())
  ).length;
  console.log(count);
};

countVowels("Happy New Year");

/* Task 4: Unique Values
  Create an array of numbers with some duplicate values. Write a function to filter out the duplicate values and return a new array with only unique numbers. Print the result. */
function getUniqueValues(arr) {
  return [...new Set(arr)];
}

var numbersWithDuplicates = [1, 2, 3, 4, 5, 3, 2, 6, 7, 8, 9, 1];
var uniqueNumbers = getUniqueValues(numbersWithDuplicates);
console.log(uniqueNumbers);

/* Task 5: Find Maximum Value:
  Write a function that takes an array of numbers and returns the maximum value. */
function findMaxValue(arr) {
  return Math.max(...arr);
}

var numbers = [10, 5, 8, 20, 15, 25];
var maxValue = findMaxValue(numbers);
console.log(maxValue);

var students = [
  { name: "Alice", grades: [90, 85, 88] },
  { name: "Bob", grades: [80, 92, 87] },
  { name: "Charlie", grades: [95, 89, 94] },
];

/* Task 6: Advanced Sorting
  Create an array of objects representing students with 'name' and 'grades' properties. Write a function to sort the students by average grade in descending order. */
function sortByAverageGradeDescending(studentArray) {
  return studentArray.sort((a, b) => {
    const avgA =
      a.grades.reduce((acc, curr) => acc + curr, 0) / a.grades.length;
    const avgB =
      b.grades.reduce((acc, curr) => acc + curr, 0) / b.grades.length;
    return avgB - avgA;
  });
}

var sortedStudents = sortByAverageGradeDescending(students);
console.log(sortedStudents);

/* Task 7: Functional Programming - Reduce
  Write a function that uses the reduce function to calculate the total value of an array of objects with a 'quantity' and 'price' property.interview */
var products = [
  { quantity: 2, price: 10 },
  { quantity: 3, price: 5 },
  { quantity: 1, price: 20 },
];

/* Task 8: Array Intersection
  Write a function that takes two arrays and returns a new array containing only the elements that appear in both arrays. */
function calculateTotalValue(productsArray) {
  return productsArray.reduce(
    (total, product) => total + product.quantity * product.price,
    0
  );
}

var totalValue = calculateTotalValue(products);
console.log(totalValue);

function findIntersection(arr1, arr2) {
  return arr1.filter((value) => arr2.includes(value));
}

var array1 = [1, 2, 3, 4, 5];
var array2 = [3, 4, 5, 6, 7];
var intersectionResult = findIntersection(array1, array2);
console.log(intersectionResult);
