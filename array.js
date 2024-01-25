// Array Problems
const arr = [1, 5, 9, 14, 5, 22, 48, 25, 22, 20, 9, 13];

// 1. Removing duplicate elements from array

const removeDuplicate = (arr) => {
  if (arr.length > 1) {
    const newArr = arr.filter(
      (element, index, array) => array.indexOf(element) === index
    );
    return newArr;
  } else {
    return arr;
  }
};

const result1 = removeDuplicate(arr);
// console.log(result1);

// 2. Largest and Smallest element of array

const findLargestAndSmallest = (arr) => {
  const newArr = [...arr];
  const sorted = newArr.sort((a, b) => a - b);
  const largest = sorted[sorted.length - 1];
  const smallest = sorted[0];
  return { largest, smallest };
};

const result2 = findLargestAndSmallest(arr);
// console.log(result2);

// 3. Slice (22, 48) from the array

const slicePortion = (arr, from, to) => {
  const slicedArr = arr.slice(arr.indexOf(from), arr.indexOf(to) + 1);
  return slicedArr;
};

const result3 = slicePortion(arr, 22, 48);
console.log(result3);
