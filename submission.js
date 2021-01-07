const findSum = function(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
     sum += array[i];
  }
  return sum;
};

const findFrequency = function(array) {
  // your code here - don't forget to return an object!
};

const isPalindrome = function(str) {
  let string = str.toLowerCase();
  let flippedStr = '';
  
  for (let i = string.length - 1; i >= 0; i--) {
  	flippedStr = flippedStr + string[i];
  }
  
  if (string === flippedStr) {
  	return true;
  } else {
  	return false;
  }
};

const largestPair = function(array) {
  // your code here - don't forget to return a number!
};

const removeParenth = function(str) {
  // your code here - don't forget to return a string!
};

const scoreScrabble = function(str) {
  // your code here - don't forget to return a number!
};
