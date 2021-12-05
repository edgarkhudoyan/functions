// Write a function, which receives a string, finds possible largest numbers in the string and returns their sum.
let str = 'FwrtY45KHL120mn10P';

function findSum(str) {
  let temp = 0;
  let sum = 0;

  for (let i = 0; i < str.length; i++) {
    let number = str[i];

    if (!isNaN(String(number) * 1)) temp += number;
    else {
      sum += parseInt(temp);
      temp = '0';
    }
  }
  return sum + parseInt(temp);
}

console.log(findSum(str));
