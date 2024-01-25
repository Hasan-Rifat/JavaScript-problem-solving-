/* Task 1: Array Filtering and Mapping
Create an array of objects, each representing a person with properties like name, age, and gender. Write a function to filter out all females and then map the remaining people to an array of names. Print the final result. */

const persons = [
  { name: "person 1", gender: "male", age: 20 },
  { name: "person 2", gender: "male", age: 21 },
  { name: "person 3", gender: "female", age: 22 },
  { name: "person 4", gender: "male", age: 23 },
  { name: "person 5", gender: "female", age: 24 },
];

const filteredNames = persons
  .filter((person) => person.gender !== "female")
  .map((person) => person.name);

console.log({ filteredNames });

/* Task 2: Object Manipulation
    Create an array of objects representing books with properties like title, author, and year. Write a function that takes the array and returns a new array with only the book titles. Print the result. */
const books = [
  { title: "Book 1", author: "author 1", year: 1990 },
  { title: "Book 2", author: "author 2", year: 2000 },
  { title: "Book 3", author: "author 3", year: 2010 },
  { title: "Book 4", author: "author 4", year: 2020 },
];

const bookTitles = (books) => {
  return books.map((book) => book.title);
};

console.log(bookTitles(books));

/* Task 3: Function Composition
  Write three functions: one to square a number, one to double a number, and one to add 5 to a number. Compose these functions to create a new function that squares a number, doubles the result, and then adds 5. */

const squareNumber = (number) => {
  return number * number;
};

const doubleNumber = (number) => {
  return number * 2;
};

const add5ToNumber = (number) => {
  return number + 5;
};

const numberOperation = (number) => {
  const square = squareNumber(number);
  const double = doubleNumber(number);
  const add5 = add5ToNumber(number);
  console.log("square: ", square);
  console.log("double: ", double);
  console.log(number, "+ 5 = ", add5);
};

/* Task 4: Sorting Objects
  Create an array of objects representing cars with properties like make, model, and year. Write a function to sort the array of cars by the year of manufacture in ascending order. Print the sorted array. */

const cars = [
  { make: "Toyota", model: "Camry", year: 2020 },
  { make: "Honda", model: "Civic", year: 2019 },
  { make: "Ford", model: "Mustang", year: 2021 },
  { make: "Chevrolet", model: "Malibu", year: 2018 },
  { make: "BMW", model: "X5", year: 2022 },
];

const sortCar = (cars) => {
  return cars.sort((a, b) => {
    if (a.year < b.year) return -1;
    if (a.year > b.year) return 1;
  });
};

console.log({ sortedCars: sortCar(cars) });

/* Task 5: Find and Modify
  Write a function that searches an array of objects for a specific person by name. If found, modify their age property. Print the updated array. */

const modifyAge = (array, name, age) => {
  const exist = array.find((person) => person.name === name);
  const rest = array.filter((person) => person.name !== name);
  if (exist) {
    exist.age = age;
    return [...rest, exist];
  }
};

console.log({ modifiedPersons: modifyAge(persons, "person 2", 50) });
