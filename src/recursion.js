/* jshint esversion: 6 */

// Solve the following prompts using recursion.

// 1. Calculate the factorial of a number. The factorial of a non-negative integer n,
// denoted by n!, is the product of all positive integers less than or equal to n.
// Example: 5! = 5 x 4 x 3 x 2 x 1 = 120
// factorial(5); // 120
var factorial = function(n) {
  if (n < 0) {
    return null;
  }
  if (n === 0) {
    return 1;
  }
  return n * factorial(n - 1);
};

// 2. Compute the sum of an array of integers.
// sum([1,2,3,4,5,6]); // 21
var sum = function(array) {
  if (array[0] === undefined) {
    return 0;
  }

  var result = array[0];

  if (array.length !== 1) {
    result += sum(array.slice(1, array.length));
  }

  return result;
};

// 3. Sum all numbers in an array containing nested arrays.
// arraySum([1,[2,3],[[4]],5]); // 15
var arraySum = function(array) {
  var sum = 0;

  if (!Array.isArray(array)) {
    return array;
  } else {
    array.forEach(function (item) {
      sum += arraySum(item);
    });
  }

  return sum;
};

// 4. Check if a number is even.
var isEven = function(n) {
  if (n === 0) {
    return true;
  } else if (n === 1) {
    return false;
  } else {
    return isEven(Math.abs(n) - 2);
  }
};

// 5. Sum all integers below a given integer.
// sumBelow(10); // 45
// sumBelow(7); // 21
var sumBelow = function(n) {
  //
  if (n === 0) {
    return 0;
  } else if (n < 0) {
    return - (Math.abs(n) - 1 + sumBelow(Math.abs(n) - 1));
  } else {
    return n - 1 + sumBelow(n - 1);
  }
};

// 6. Get the integers within a range (x, y).
// range(2,9); // [3,4,5,6,7,8]
var range = function(x, y) {
  var result = [];

  if (x < y && (x + 1) < y) {
    x += 1;
    result.push(x);
    result = result.concat(range(x, y));
  } else if (x > y && (x - 1) > y) {
    x -= 1;
    result.push(x);
    result = result.concat(range(x, y));
  } else if (x === y || (x + 1) === y || (x - 1) === y) {
    return [];
  }

  return result;
};

// 7. Compute the exponent of a number.
// The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64. Here, 8 is the base and 2 is the exponent.
// exponent(4,3); // 64
// https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/computing-powers-of-a-number
var exponent = function(base, exp) {
  if (exp === 0) {
    return 1;
  } else if (exp === 1 || exp === -1) {
    return exp === 1 ? base : (1/base);
  } else if (exp > 0) {
    return base * exponent(base, exp - 1);
  } else if (exp < 0) {
    return (1 / (base * exponent(base, -exp - 1)));
  }
};

// 8. Determine if a number is a power of two.
// powerOfTwo(1); // true
// powerOfTwo(16); // true
// powerOfTwo(10); // false
var powerOfTwo = function(n) {
  if (n === 2 || n === 1) {
    return true;
  } else if (n > 2) {
    return powerOfTwo(n / 2);
  } else {
    return false;
  }
};

// 9. Write a function that reverses a string.
var reverse = function(string) {
  var result = '';
  if (string.length === 1) {
    return string.slice(0);
  } else {
    result = result.concat(string.slice(-1));
    string = string.slice(0, string.length - 1);
    return result.concat(reverse(string));
  }
};

// 10. Write a function that determines if a string is a palindrome.
var palindrome = function(string) {
  if (string.length === 1) {
    return true;
  } else if (string.length === 2 && (string.slice(-1).toLowerCase() === string[0].toLowerCase())) {
    return true;
  } else if (string.slice(-1).toLowerCase() === string[0].toLowerCase()) {
    // remove the first letter and last letter
    string = string.slice(1, string.length - 1);
    return palindrome(string);
  } else {
    return false;
  }
};

// 11. Write a function that returns the remainder of x divided by y without using the
// modulo (%) operator.
// modulo(5,2) // 1
// modulo(17,5) // 2
// modulo(22,6) // 4
var modulo = function(x, y) {
  if (y === 0) {
    return NaN;
  }

  if (x < 0) {
    x = -x;
    var xIsNeg = true;
  } else {
    var IsNeg = false;
  }

  if (y < 0) {
    y = -y;
  }

  if (x < y) {
    return (xIsNeg ? - x : x);
  } else if (x === y) {
    return 0;
  } else {
    return (xIsNeg ? -modulo(x - y, y) : modulo(x - y, y));
  }
};

// 12. Write a function that multiplies two numbers without using the * operator or
// Math methods.
var multiply = function(x, y) {

  if (x < 0 && y < 0) {
    x = -x;
    y = -y;
    var turnNeg = false;
  } else if (x < 0) {
    x = -x;
    var turnNeg = true;
  } else if (y < 0) {
    y = -y;
    var turnNeg = true;
  } else {
    var turnNeg = false;
  }

  if (x === 0 || y === 0) {
    return 0;
  } else if (x === 1) {
    return (turnNeg ? -y : y);
  } else {
    return (turnNeg ? -y - multiply(x - 1, y) : y + multiply(x - 1, y));
  }
};

// 13. Write a function that divides two numbers without using the / operator or
// Math methods to arrive at an approximate quotient (ignore decimal endings).
var divide = function(x, y) {
  if (y === 0) {
    return NaN;
  } else if (x === 0) {
    return 0;
  }

  var count = 0;

  if (x < 0 && y < 0) {
    x = -x;
    y = -y;
    var turnNeg = false;
  } else if (x < 0) {
    x = -x;
    var turnNeg = true;
  } else if (y < 0) {
    y = -y;
    var turnNeg = true;
  } else {
    var turnNeg = false;
  }

  if (y === 1) {
    return x;
  } else if (x >= y) {
    count += 1;
    count += divide(x - y, y);
  }
  return turnNeg ? -count : count;
};

// 14. Find the greatest common divisor (gcd) of two positive numbers. The GCD of two
// integers is the greatest integer that divides both x and y with no remainder.
// gcd(4,36); // 4
// http://www.cse.wustl.edu/~kjg/cse131/Notes/Recursion/recursion.html
// https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm
var gcd = function(x, y) {
  if (x < 0 || y < 0) {
    return null;
  }

  if (x > y) {
    var largest = x;
    var smallest = y;
  } else if (x < y) {
    var largest = y;
    var smallest = x;
  } else {
    return 1;
  }

  var remainder = largest % smallest;

  if (remainder === 0) {
    return smallest;
  } else if (remainder === 1) {
    return remainder;
  } else {
    return gcd(remainder, smallest);
  }
};

// 15. Write a function that compares each character of two strings and returns true if
// both are identical.
// compareStr('house', 'houses') // false
// compareStr('tomato', 'tomato') // true
var compareStr = function(str1, str2) {
  if (str1.length > 0 || str2.length > 0) {
    if (str1.charAt(0) !== str2.charAt(0)) {
      return false;
    }
    return compareStr(str1.slice(1, str1.length), str2.slice(1, str2.length));
  } else {
    return true;
  }
};

// 16. Write a function that accepts a string and creates an array where each letter
// occupies an index of the array.
var createArray = function(str) {
  var result = [];

  if (str.length === 1) {
    result.push(str);
  } else {
    result.push(str[0]);
    result = result.concat(createArray(str.slice(1, str.length)));
  }

  return result;
};

// 17. Reverse the order of an array
var reverseArr = function(array) {
  var result = [];
  if (array.length === 1) {
    return array.pop();
  } else {
    result.push(array.pop());
    result = result.concat(reverseArr(array));
  }

  return result;
};

// 18. Create a new array with a given value and length.
// buildList(0,5) // [0,0,0,0,0]
// buildList(7,3) // [7,7,7]
var buildList = function(value, length) {
  var result = [value];
  if (length === 1) {
    return result;
  } else {
    result = result.concat(buildList(value, length - 1));
  }

  return result;
};

// 19. Implement FizzBuzz. Given integer n, return an array of the string representations of 1 to n.
// For multiples of three, output 'Fizz' instead of the number.
// For multiples of five, output 'Buzz' instead of the number.
// For numbers which are multiples of both three and five, output “FizzBuzz” instead of the number.
// fizzBuzz(5) // ['1','2','Fizz','4','Buzz']
var fizzBuzz = function(n) {
  var result = [];

  if (result.length < n) {
    if (n % 3 === 0 && n % 5 === 0) {
      result.push('FizzBuzz')
      result = fizzBuzz(n - 1).concat(result);
    } else if (n % 3 === 0) {
      result.push('Fizz');
      result = fizzBuzz(n - 1).concat(result);
    } else if (n % 5 === 0) {
      result.push('Buzz');
      result = fizzBuzz(n - 1).concat(result);
    } else {
      result.push(String(n));
      result = fizzBuzz(n - 1).concat(result);
    }
  }

  return result;
};

// 20. Count the occurrence of a value in a list.
// countOccurrence([2,7,4,4,1,4], 4) // 3
// countOccurrence([2,'banana',4,4,1,'banana'], 'banana') // 2
var countOccurrence = function(array, value) {
  var count = 0;

  if (array.length === 1) {
    if (array[0] === value) {
      return 1;
    }
  } else {
    if (array.pop() === value) {
      count += 1;
    }
    count += countOccurrence(array, value);
  }

  return count;
};

// 21. Write a recursive version of map.
// rMap([1,2,3], timesTwo); // [2,4,6]
var rMap = function(array, callback) {
  var result = [];

  result.push(callback(array[0]));

  if (array.length !== 1) {
    result = result.concat(rMap(array.slice(1, array.length), callback));
  }

  return result;
};

// 22. Write a function that counts the number of times a key occurs in an object.
// var obj = {'e':{'x':'y'},'t':{'r':{'e':'r'},'p':{'y':'r'}},'y':'e'};
// countKeysInObj(obj, 'r') // 1
// countKeysInObj(obj, 'e') // 2
var countKeysInObj = function(obj, key) {
  var count = 0;

  if (typeof(obj) !== 'object') {
    return 0;
  } else {
    if (Object.keys(obj).includes(key)) {
      count += 1;
    };
    for (var k in obj) {
      count += countKeysInObj(obj[k], key);
    }
  }

  return count;
};

// 23. Write a function that counts the number of times a value occurs in an object.
// var obj = {'e':{'x':'y'},'t':{'r':{'e':'r'},'p':{'y':'r'}},'y':'e'};
// countValuesInObj(obj, 'r') // 2
// countValuesInObj(obj, 'e') // 1
var countValuesInObj = function(obj, value) {
  var count = 0;

  if (typeof(obj) !== 'object') {
    if (obj === value) {
      count += 1;
    }
  } else {
    for (var k in obj) {
      count += countValuesInObj(obj[k], value);
    }
  }

  return count;
};

// 24. Find all keys in an object (and nested objects) by a provided name and rename
// them to a provided new name while preserving the value stored at that key.
var replaceKeysInObj = function(obj, oldKey, newKey) {
  if (typeof(obj) !== 'object') {
    return 0;
  } else {
    for (var k in obj) {
      if (k === oldKey) {
        obj[newKey] = obj[oldKey];
        delete obj[oldKey];
      }
      replaceKeysInObj(obj[k], oldKey, newKey);
    }
  }

  return obj;
};

// 25. Get the first n Fibonacci numbers. In the Fibonacci sequence, each subsequent
// number is the sum of the previous two.
// Example: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34.....
// fibonacci(5); // [0,1,1,2,3,5]
// Note: The 0 is not counted.
var fibonacci = function(n) {
  if (n <= 0) {
    return null;
  } else if (n === 1) {
    var result = [0, 1];
  } else {
    var previousFib =  fibonacci(n - 1);
    var currentFib = previousFib[previousFib.length - 1] + previousFib[previousFib.length - 2];

    var result = previousFib.concat(currentFib);
  }

  return result;
};

// 26. Return the Fibonacci number located at index n of the Fibonacci sequence.
// [0,1,1,2,3,5,8,13,21]
// nthFibo(5); // 5
// nthFibo(7); // 13
// nthFibo(3); // 2
var nthFibo = function(n) {
  if (n < 0) {
    return null;
  } else if (n === 0 || n === 1) {
    return n;
  } else {
    return nthFibo(n - 1) + nthFibo(n - 2);
  }
};

// 27. Given an array of words, return a new array containing each word capitalized.
// var words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
var capitalizeWords = function(array) {
  if (array.length === 1) {
    return [array[0].toUpperCase()];
  } else {
    return capitalizeWords(array.slice(0, array.length - 1)).concat(array.pop().toUpperCase());
  }
};

// 28. Given an array of strings, capitalize the first letter of each index.
// capitalizeFirst(['car','poop','banana']); // ['Car','Poop','Banana']
var capitalizeFirst = function(array) {
  if (array.length === 1) {
    return [array[0].slice(0,1).toUpperCase() + array[0].slice(1, array[0].length)];
  } else {
    return capitalizeFirst(array.slice(0, array.length - 1)).concat(array[array.length - 1][0].toUpperCase() + array[array.length - 1].slice(1, array[array.length - 1].length));
  }
};

// 29. Return the sum of all even numbers in an object containing nested objects.
// var obj1 = {
//   a: 2,
//   b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//   c: {c: {c: 2}, cc: 'ball', ccc: 5},
//   d: 1,
//   e: {e: {e: 2}, ee: 'car'}
// };
// nestedEvenSum(obj1); // 10
var nestedEvenSum = function(obj) {
  var sum = 0;

  for (var k in obj) {
    if (typeof(obj[k]) === 'number' && obj[k] % 2 === 0) {
      sum += obj[k]
    } else if (typeof(obj[k]) === 'object') {
      sum += nestedEvenSum(obj[k]);
    }
  }

  return sum;
};

// 30. Flatten an array containing nested arrays.
// flatten([1,[2],[3,[[4]]],5]); // [1,2,3,4,5]
var flatten = function(array) {
  var result = [];

  array.forEach(function(element) {
    if (!Array.isArray(element)) {
      result = result.concat(element);
    } else {
      result = result.concat(flatten(element));
    }
  });

  return result;
};

// 31. Given a string, return an object containing tallies of each letter.
// letterTally('potato'); // {p:1, o:2, t:2, a:1}
var letterTally = function(str, obj) {
  if (obj === undefined) {
    obj = {};
  }

  var letter = str[0];

  if (obj[letter] === undefined) {
    obj[letter] = 1;
  } else {
    obj[letter]++;
  }


  if (str.length !== 1) {
    letterTally(str.slice(1, str.length), obj);
  }

  return obj;
};

// 32. Eliminate consecutive duplicates in a list. If the list contains repeated
// elements they should be replaced with a single copy of the element. The order of the
// elements should not be changed.
// compress([1,2,2,3,4,4,5,5,5]) // [1,2,3,4,5]
// compress([1,2,2,3,4,4,2,5,5,5,4,4]) // [1,2,3,4,2,5,4]
var compress = function(list) {
  var result = [];

  if (list.length === 1) {
    return list[0];
  } else {
    if (list[0] !== list[1]) {
      result = list.slice(0, 1);
    }

    result = result.concat(compress(list.slice(1, list.length)));
  }

  return result;
};

// 33. Augment every element in a list with a new value where each element is an array
// itself.
// augmentElements([[],[3],[7]], 5); // [[5],[3,5],[7,5]]
var augmentElements = function(array, aug) {
  var result = [];

  var currentArray = array.shift();
  currentArray.push(aug);
  result.push(currentArray);

  if (array.length !== 0) {
    result = result.concat(augmentElements(array, aug));
  }

  return result;
};

// 34. Reduce a series of zeroes to a single 0.
// minimizeZeroes([2,0,0,0,1,4]) // [2,0,1,4]
// minimizeZeroes([2,0,0,0,1,0,0,4]) // [2,0,1,0,4]
var minimizeZeroes = function(array) {
  var result = [];

  if (array.length === 1) {
    return array[0];
  } else {
    if (array[0] !== 0 || (array[0] === 0 && array[0] !== array[1])) {
      result = array.slice(0, 1);
    }

    result = result.concat(minimizeZeroes(array.slice(1, array.length)));
  }

  return result;
};

// 35. Alternate the numbers in an array between positive and negative regardless of
// their original sign. The first number in the index always needs to be positive.
// alternateSign([2,7,8,3,1,4]) // [2,-7,8,-3,1,-4]
// alternateSign([-2,-7,8,3,-1,4]) // [2,-7,8,-3,1,-4]
var alternateSign = function(array) {
  var result = [];

  if (array.length === 1) {
    return [Math.abs(array[0])];
  } else if (array.length % 2 === 1) {
    result = alternateSign(array.slice(0, array.length - 1)).concat(Math.abs(array.slice(array.length - 1)));
  } else {
    result = alternateSign(array.slice(0, array.length - 1)).concat(-Math.abs(array.slice(array.length - 1)));
  }

  return result;
};

// 36. Given a string, return a string with digits converted to their word equivalent.
// Assume all numbers are single digits (less than 10).
// numToText("I have 5 dogs and 6 ponies"); // "I have five dogs and six ponies"
var numToText = function(str) {
  var splitString = str.split(' ');
  var nums = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];

  if (isNaN(splitString[0])) {
    var result = [splitString[0]];
  } else {
    var result = [nums[parseInt(splitString[0])]];
  }

  if (splitString.length !== 1) {
    result = result.concat(numToText(splitString.slice(1, splitString.length).join(' ')));
  }

  return result.join(' ');
};


// *** EXTRA CREDIT ***

// 37. Return the number of times a tag occurs in the DOM.
var tagCount = function(tag, node) {
  var count = 0;

  if (node === undefined) {
    var node = document.children;
  }

  for (var i = 0; i < node.length; i++) {
    if (node[i].tagName.toLowerCase() === tag.toLowerCase()) {
      count++;
    }

    if (node[i].children.length !== 0) {
      count += tagCount(tag, node[i].children);
    }
  }

  return count;
};

// 38. Write a function for binary search.
// var array = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
// binarySearch(array, 5) // 5
// https://www.khanacademy.org/computing/computer-science/algorithms/binary-search/a/binary-search
var binarySearch = function(array, target, min, max) {
  if (min === undefined || max === undefined) {
    var min = 0;
    var max = array.length - 1;
  }
  if (min > max || max < min) {
    return null;
  }

  var guess = Math.floor((min + max) / 2);

  if (array[guess] === target) {
    return guess;
  } else if (array[guess] > target) {
    max = guess - 1;
    return binarySearch(array, target, min, max);
  } else if (array[guess] < target) {
    min = guess + 1;
    return binarySearch(array, target, min, max);
  }
};

// 39. Write a merge sort function.
// mergeSort([34,7,23,32,5,62]) // [5,7,23,32,34,62]
// https://www.khanacademy.org/computing/computer-science/algorithms/merge-sort/a/divide-and-conquer-algorithms
var mergeSort = function(array) {
  if (array.length === 1 || array.length === 0) {
    return array;
  }

  var mid = Math.floor((array.length - 1) / 2);

  var arrayLeft = mergeSort(array.slice(0, mid + 1));
  var arrayRight = mergeSort(array.slice(mid + 1, array.length));

  var result = arrayLeft.concat(arrayRight);
  var i = 0; // for left array
  var j = 0; // for right array
  var k = 0; // for result array

  while ((i !== arrayLeft.length) && (j !== arrayRight.length)) {
    if (arrayLeft[i] < arrayRight[j]) {
      result[k] = arrayLeft[i];
      i++;
      k++;
    } else {
      result[k] = arrayRight[j];
      j++;
      k++;
    }
  }
  while (i < arrayLeft.length) {
    result[k] = arrayLeft[i];
    k++;
    i++;
  }
  while (j < arrayRight.length) {
    result[k] = arrayRight[j];
    k++;
    j++;
  }

  return result;
};

// 40. Deeply clone objects and arrays.
// var obj1 = {a:1,b:{bb:{bbb:2}},c:3};
// var obj2 = clone(obj1);
// console.log(obj2); // {a:1,b:{bb:{bbb:2}},c:3}
// obj1 === obj2 // false
var clone = function(input) {
  if (Array.isArray(input)) {
    var output = [];

    for (var i = 0; i < input.length; i++) {
      if (!Array.isArray(input[i]) && typeof(input[i]) !== 'object') {
        output.push(input[i]);
      } else {
        output = output.concat([clone(input[i])]);
      }
    }
  } else if (!Array.isArray(input) && typeof(input) === 'object') {
    var output = {};

    for (var k in input) {
      if (!Array.isArray(input[k]) && typeof(input[k]) !== 'object') {
        output[k] = input[k];
      } else {
        output[k] = clone(input[k]);
      }
    }
  }

  return output;
};
