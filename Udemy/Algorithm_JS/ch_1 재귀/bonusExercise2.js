/*
bonus.2
Write a recursive function called isPalindrome which 
returns true if the string passed to it is a palindrome 
(reads the same forward and backward). 
Otherwise it returns false.
*/

// isPalindrome('awesome') // false
// isPalindrome('foobar') // false
// isPalindrome('tacocat') // true
// isPalindrome('amanaplanacanalpanama') // true
// isPalindrome('amanaplanacanalpandemonium') // false

function isPalindrome(string) {
  // add whatever parameters you deem necessary - good luck!
  function helpReverse(string) {
    if (string.length === 0) return "";
    return helpReverse(string.slice(1)) + string[0];
  }
  let reverse = helpReverse(string);
  if (reverse === string) return true;
  else return false;
}

let solve = isPalindrome("amanaplanacanalpandemonium");
console.log(solve);
