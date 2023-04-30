const min = function(numbers) {
  // Write code here that returns the smallest value in numbers
  let smallest = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] < smallest) {
      smallest = numbers[i];
    }
  }
  return smallest;
}


/*
 * This is some test runner code that's simply calling our min function defined
 * above to verify it's returning the proper minimum. Do not modify it!
 */

const flightPrices = [1260, 490, 599, 1400, 820];
console.log(`The cheapest flight amongst $1260, $490, $599, $1400 and $820 costs \$${min(flightPrices)}`);

const golfScores = [-1, 3, 0, -4, 1, 4, -2];
console.log(`The winning golf score amongst -1, 3, 0, -4, 1, 4 and -2 is ${min(golfScores)}`);

const pageNumbers = [232];
console.log(`The shortest book out of a list of single book with 232 pages has ${min(pageNumbers)} pages`);

const temperatures = [45, 10, -20, 0, 3, -20];
console.log(`The coldest temperature amongst 45C, 10C, -20C, 0C, 3C and -20C is ${min(temperatures)}C`);


/* REFAIT */
/*
const min = function(numbers) {
  let smallest = numbers[0];
  for (let i = 1; i < numbers.length; i ++) {
    if (numbers[i] < smallest) {
      smallest = numbers[i];
    }
  }
  return smallest;
}


/* Here's a line-by-line explanation of the min function:


const min = function(numbers) {

This line defines a function called min that takes an array of numbers as its input.


let smallest = numbers[0];

This line initializes a variable called smallest to the first element of the input array. This assumes that the array is not empty, which is reasonable because finding the minimum of an empty array doesn't make sense.


for (let i = 1; i < numbers.length; i++) {

This line starts a for loop that iterates over the elements of the input array, starting at index 1. We start at index 1 because we've already initialized smallest to the first element of the array.


if (numbers[i] < smallest) {
  smallest = numbers[i];
}

This if statement checks whether the current element of the array (at index i) is smaller than the current value of smallest. If it is, then smallest is updated to the value of the current element. This ensures that smallest always contains the smallest value seen so far.


}
This curly brace marks the end of the for loop.


return smallest;

This line returns the value of smallest after the loop has finished iterating over the input array. This is the minimum value of the array.

So, altogether, the min function finds the minimum value of an input array by iterating over its elements, updating a variable called smallest as it goes, and returning the final value of smallest after the loop is done.

*/