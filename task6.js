// Write a function which receives two strings and removes appearances of the second string from the first one.

let str1 = 'This is some text';
let str2 = 'is';

function checkInclude(where, what) {
  if (where.includes(what)) return where.replace(what, '');
}

console.log(checkInclude(str1, str2));
