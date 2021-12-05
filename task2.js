// Write a function that calculates sum, difference, multiplication and division between given array elements depending on passed operation symbol. Write appropriate function for each operation.
'use strict';
let arr = [28, 7, 2];

function sum(item) {
  const totalNum = item.reduce((acc, cur) => {
    return acc + cur;
  }, 0);
  console.log(totalNum);
}

function diff(item) {
  const totalNum = item.reduce((acc, cur) => {
    return acc - cur;
  });
  console.log(totalNum);
}

function mult(item) {
  const totalNum = item.reduce((acc, cur) => {
    return acc * cur;
  }, 1);
  console.log(totalNum);
}

function division(item) {
  const totalNum = item.reduce((acc, cur) => {
    return acc / cur;
  });
  console.log(totalNum);
}

sum(arr);
diff(arr);
mult(arr);
division(arr);
