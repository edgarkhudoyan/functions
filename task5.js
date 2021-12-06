// Write a function, which receives a string, finds possible largest numbers in the string and returns their sum.
let str = 'FwrtY45KHL120mn10P';

function findSum(str) {
  let arr = [];
  let temp = '';
  let result = 0;

  arr = str.split('');

  for (let i = 0; i < arr.length; i++) {
    if (!isNaN(arr[i]) || arr[i] === '-') {
      temp += arr[i];
    } else {
      if (!isNaN(temp)) {
        result += +temp;
      }
      temp = '';
    }
  }

  return result;
}

console.log(findSum(str));
