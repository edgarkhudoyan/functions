// Given an array of numbers. Write a function to separate odd and even numbers in different arrays.
'use strict';
let arr = [45, 12, 3, 6, 17, 0];

function isEven() {
  const evens = arr.filter((e) => {
    return e % 2 === 0;
  });
  console.log(evens);
}

function isOdd() {
  const odds = arr.filter((e) => {
    return e % 2 === 1;
  });
  console.log(odds);
}

isEven();
isOdd();
