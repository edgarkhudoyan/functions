// Given a phone number. Write a function to clean it up, so it is valid. The rules are as follows:

// If the phone number is 10 digits assume that it is good

// If the phone number consists of 11 symbols and the first one is + and others are numbers, then trim + and return remaining 10 digits.

// If the phone number is less than 10 digits assume that it is a bad number
// If the phone number is longer than 10, then it is a bad number
// If the phone number contains + symbol more than one, consider it as a bad number.
// If the phone number contains + symbol not as the first character, consider it as a bad number.

let number = prompt('Enter your Number');

function badNumber() {
  alert('Bad Number');
}

function goodNumber() {
  alert('Good number');
}

function trimNumber(num) {
  num = num.substring(1);
  alert(num);
}

badNumber();
goodNumber();
trimNumber();

if (num.length > 10 || num.length < 10) badNumber();
else if (num.length === 10) goodNumber();
else if (num.length === 11 && num[0] === '+') trimNumber();
