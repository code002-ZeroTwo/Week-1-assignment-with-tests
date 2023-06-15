/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

function isAnagram(str1, str2) {
  let count = 0;
  let length = str2.length > str1.length ? str2.length : str1.length;
  for (const char1 of str1) {
    for (const char2 of str2) {
      if(char1.toUpperCase() === char2.toUpperCase()) {
        count++;
        str2 = str2.replace(char2,'');
        str1 = str1.replace(char1,'');
      }
    }
    
  }
  if (count == length){
    return true;
  }
  return false;
}

module.exports = isAnagram;
