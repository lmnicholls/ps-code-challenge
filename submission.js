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
  let largestProduct = 0;
  
  for (let i = 0; i < array.length; i++) {
  	let currentProduct = array[i] * array[i + 1];
    
    if (currentProduct > largestProduct) {
    	largestProduct = currentProduct;
    }
	}
  return largestProduct; 
};

const removeParenth = function(str) {
  // your code here - don't forget to return a string!
};

const scoreScrabble = function(str) {
    let onePoint = /[aeioulnrst]/gi;
  let twoPoints = /[dg]/gi;
  let threePoints = /[bcmp]/gi;
  let fourPoints = /[fhvwy]/gi;
  let fivePoints = /[k]/gi;
  let eightPoints = /[jx]/gi;
  let tenPoints = /[qz]/gi;
  
  let score = 0;
  if (str.match(onePoint) !== null) {
  	score += str.match(onePoint).length * 1;
  }
  if (str.match(twoPoints) !== null) {
  	score += str.match(twoPoints).length * 2;
  }
  if (str.match(threePoints) !== null) {
  	score += str.match(threePoints).length * 3;
  }
  if (str.match(fourPoints) !== null) {
  	score += str.match(fourPoints).length * 4;
  }
  if (str.match(fivePoints) !== null) {
  	score += str.match(fivePoints) * 5;
  }
  if (str.match(eightPoints) !== null) {
  	score += str.match(eightPoints).length * 8;
  }
  if (str.match(tenPoints) !== null) {
  	score += str.match(tenPoints).length * 10;
  }
  return score;
};
