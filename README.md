# README: Finding Pairs in an Array

This README file explains the steps to understand and get the solution for the JavaScript code provided, which is used to find pairs in an array that sum up to a given number `x`.

## Problem Description

You are given an array and a target sum `x`. The goal is to find and count the number of unique pairs of elements in the array that add up to the target sum `x`.

## Code Explanation

Let's break down the provided JavaScript code step by step:

```javascript
function findPairs(x, array) {
    // Initialize a counter to keep track of the pairs that sum up to x
    let counter = 0;

    // Remove duplicate elements from the input array
    let arrayFiltered = array.filter((item, index) => {
        return array.indexOf(item) === index;
    });

    // Loop through the filtered array to find pairs
    for (let i = 0; i < arrayFiltered.length - 1; i++){
        for (let j = i + 1; j < arrayFiltered.length; j++){
            // Check if the sum of arrayFiltered[i] and arrayFiltered[j] equals x
            if (arrayFiltered[i] + arrayFiltered[j] === x) {
                // If a pair is found, increment the counter
                counter++;
            }
        }
    }

    // Output the total count of pairs that sum up to x
    console.log(counter);
}
```

## How to Use the Code

1. **Function Signature**: The `findPairs` function takes two arguments: `x`, which is the target sum, and `array`, which is the input array of integers.

2. **Duplicate Removal**: The code starts by removing duplicate elements from the input array `array` using the `filter` method. This ensures that each unique element is only considered once in the pair calculation.

3. **Pair Calculation**: The code then uses nested loops to iterate through the filtered array. The outer loop (`i`) iterates from the first element to the second-to-last element, and the inner loop (`j`) iterates from the element following `i` to the last element. This ensures that each pair of elements is considered once without repetition.

4. **Pair Sum Check**: Inside the inner loop, it checks if the sum of `arrayFiltered[i]` and `arrayFiltered[j]` equals the target sum `x`. If it does, it increments the `counter`, indicating that a valid pair has been found.

5. **Result**: Finally, the code outputs the total count of pairs that sum up to `x` using `console.log`.

## Example Usage

Here are some example usages of the `findPairs` function:

```javascript
findPairs(1, [3, 4, 5, 6]);        // Output: 0 (No pairs sum up to 1)
findPairs(15, [0, 15, 32, 2000, 15000]);  // Output: 1 (Only one pair [15, 0] sums up to 15)
findPairs(42, [1, 1, 10, 32, 41]);  // Output: 2 (Pairs [1, 41] and [10, 32] sum up to 42)
```

## Assumptions

It is assumed that the arrays passed to the function are always composed of integers. That's why filters or conditions are not used, and error handling is not implemented for cases where decimal numbers or strings are provided.

## Conclusion

The `findPairs` function allows you to find and count pairs of unique elements in an array that sum up to a given target value `x`. You can use this code as a starting point for solving similar problems involving arrays and pair sums in JavaScript.

P.S.: Additionally, a function has been created to generate random numbers and arrays with random numbers to continue testing the application.
