/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/
function isLetter(character) {
  return /^[a-zA-Z]$/.test(character);
}

function reverse(str){
  return str.split('').reverse().join('');
}

function isPalindrome(str) {
  // remove all the special characters and whitespaces as well 
  for(let i of str){
    if(!isLetter(i)){
      str = str.replace(i,"");
    }
  }
  // and check if given string is palindrome or not
  let firsthalf;
  let secondhalf;
  let length = str.length;
  if(length % 2 === 0){
    let mid = length/2;
    firsthalf = str.slice(0,mid);
    secondhalf = str.slice(mid);
  }
  else{
    let mid = Math.ceil(length/2);
    firsthalf =str.slice(0,mid-1);
    secondhalf = str.slice(mid);

  }
  if(firsthalf.toUpperCase() === reverse(secondhalf).toUpperCase()){
    return true;
  }
  return false;
}

console.log(isPalindrome('Eva, can I see bees in a cave?'));

module.exports = isPalindrome;
