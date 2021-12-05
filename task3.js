// Given a phone number. Write a function to clean it up, so it is valid. The rules are as follows:

// If the phone number is 10 digits assume that it is good

// If the phone number consists of 11 symbols and the first one is + and others are numbers, then trim + and return remaining 10 digits.

// If the phone number is less than 10 digits assume that it is a bad number
// If the phone number is longer than 10, then it is a bad number
// If the phone number contains + symbol more than one, consider it as a bad number.
// If the phone number contains + symbol not as the first character, consider it as a bad number.

let number = '+14234567811';

function badNumber(num) {
  if (num.length > 10 || num.length < 10) console.log('Bad Number');
  else if (num[0] !== '+') console.log('Bad Number');
}

function goodNumber(num) {
  if (num.length === 10) console.log('Good number');
}

function trimNumber(num) {
  if (num.length === 11 && num[0] === '+') num = num.substring(1);
  console.log(num);
}
trimNumber(number);
