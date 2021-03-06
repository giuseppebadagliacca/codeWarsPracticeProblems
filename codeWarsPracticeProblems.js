// pallindrome

function isPallidrom(string) {
  let reversed = string.split('').reverse().join('')
  return reversed === string ? true : false

}
//  console.log(isPallidrom('ottok'))

function oldSchoolReverse(string) {
  let finalStr = ''

  for (let i = string.length - 1; i >= 0; i--) {
    finalStr += string[i]
  }
  return finalStr
}

//  console.log(oldSchoolReverse('joe'))


//  char in a string - Should practice

function mostCharsInString(string) {
  string = string.toLowerCase()
  let stringCharObj = {}
  for (let i = 0; i < string.length; i++) {
    if (stringCharObj[string[i]]) {
      stringCharObj[string[i]] += 1
    } else {
      stringCharObj[string[i]] = 1
    }
  }
  return stringCharObj
}

// console.log(mostCharsInString('Hello - I would love to work at Hylan'))

function commonWords(string) {
  stringArr = string.split(' ')
  const finObj = {}
  for (let i = 0; i <= stringArr.length - 1; i++) {
    finObj[stringArr[i]] ? finObj[stringArr[i]] += 1 : finObj[stringArr[i]] = 1
  }
  return finObj
}

//console.log(commonWords('joe likes milk bob also likes milk'))

// reverse word

function reverseWord(string) {
  return string.split('').reverse().join('')
}

// console.log(reverseWord('Barbara'))

// pallindrome

function isPallidrom(string) {
  let reversed = string.split('').reverse().join('')
  return reversed === string ? true : false

}
//  console.log(isPallidrom('ottok'))

function oldSchoolReverse(string) {
  let finalStr = ''

  for (let i = string.length - 1; i >= 0; i--) {
    finalStr += string[i]
  }
  return finalStr
}

//  console.log(oldSchoolReverse('joe'))


//  char in a string - Should practice

function mostCharsInString(string) {
  string = string.toLowerCase()
  let stringCharObj = {}
  for (let i = 0; i < string.length; i++) {
    if (stringCharObj[string[i]]) {
      stringCharObj[string[i]] += 1
    } else {
      stringCharObj[string[i]] = 1
    }
  }
  return stringCharObj
}

// console.log(mostCharsInString('Hello - I would love to work at Hylan'))

function commonWords(string) {
  stringArr = string.split(' ')
  const finObj = {}
  for (let i = 0; i <= stringArr.length - 1; i++) {
    finObj[stringArr[i]] ? finObj[stringArr[i]] += 1 : finObj[stringArr[i]] = 1
  }
  return finObj
}

// The Western Suburbs Croquet Club has two categories of membership, Senior and Open. They would like your help with an application form that will tell prospective members which category they will be placed. To be a senior, a member must be at least 55 years old and have a handicap greater than 7. In this croquet club, handicaps range from -2 to +26; the better the player the lower the handicap.

// console.log(commonWords('joe likes milk bob also likes milk'))

function openOrSenior(data) {
  const openOrSen = data.map(x => x[0] >= 55 && x[1] > 7 ? 'Senior' : "Open")
  return openOrSen
}

input = [[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]

// console.log(openOrSenior(input))

// Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.

var summation = function (num) {
  let finNum = num
  if (num === 1) { return 1 }
  finNum += summation(num - 1)
  return finNum
}

//   console.log(summation(300))

// We need a function that can transform a number into a string.

function numberToString(num) {
  return num.toString()
}

//   In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". You function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).
function DNAStrand(dna) {
  const finArr = []
  dna.split('').forEach(x => {
    if (x.toUpperCase() === 'A') {
      finArr.push('T')
    } else if (x.toUpperCase() === 'T') {
      finArr.push('A')
    } else if (x.toUpperCase() === 'C') {
      finArr.push('G')
    } else if (x.toUpperCase() === 'G') {
      finArr.push('C')
    }
  })
  return finArr.join('')
}

//console.log(DNAStrand('ATTGC'))


// In a factory a printer prints labels for boxes. For one kind of boxes the printer has to use colors which, for the sake of simplicity, are named with letters from a to m.

// The colors used by the printer are recorded in a control string. For example a "good" control string would be aaabbbbhaijjjm meaning that the printer used three times color a, four times color b, one time color h then one time color a...

// Sometimes there are problems: lack of colors, technical malfunction and a "bad" control string is produced e.g. aaaxbbbbyyhwawiwjjjwwm with letters not from a to m.

// You have to write a function printer_error which given a string will return the error rate of the printer as a string representing a rational whose numerator is the number of errors and the denominator the length of the control string. Don't reduce this fraction to a simpler expression.

function printerError(s) {
  const errors = s.split('').filter(x => 'nopqrstuvwxyz'.split('').includes(x))
  return `${errors.length}/${s.length}`
}
// alt answer with regEx. Very clever
// const printerError = s => `${(s.match(/[n-z]/g) || []).length}/${s.length}`;

let s = "aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz"

// console.log(printerError(s))

//We need a function that can transform a string into a number. What ways of achieving this do you know?

const stringToNumber = str => Number(str)

// return Series: 1 + 1/4 + 1/7 + 1/10 + 1/13 + 1/16 +...

//You need to round the answer to 2 decimal places and return it as String.

//If the given value is 0 then it should return 0.00

function SeriesSum(n) {
  if (n === 0) {
    return '0.00'
  } else {
    let numbersLeft = n
    let sum = 1
    let div = 4
    while (numbersLeft > 1) {
      sum += (1 / div)
      div += 3
      numbersLeft--
    }
    return String(sum.toFixed(2))
  }
}

// console.log(SeriesSum(2))


const reverseWords = str => str.split('').reverse().join('');

// console.log(reverseWord('joey badagLIAcca'));

// You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

function getMiddle(s) {
  s = s.split('')
  if (s.length % 2 === 0) {
    while (s.length != 2) {
      s.pop()
      s.shift()
    }
  } else {
    while (s.length != 1) {
      s.pop()
      s.shift()
    }
  }
  return s.join('')
}

// console.log(getMiddle('love'))

// big o intro ...

// want to avoid nested loops. aim for o(3n). --> Linear
// use 2 non nested loops to construct objects made up of char and freq of EACH char in string. 
// a 3rd non nested loop to comapare objects.

function anagrams(string1, string2) {
  if (string1.length !== string2.length) {
    return false;
  } else {
    strObj1 = {};
    strObj2 = {};

    for (let val of string1) {
      strObj1[val] = (strObj1[val] || 0) + 1;
    }
    for (let val of string2) {
      strObj2[val] = (strObj2[val] || 0) + 1;
    }
    for (let keys in strObj1) {
      if (!strObj2[keys]) {
        return false;
      }
      if (strObj2[keys] !== strObj1[keys]) {
        return false;
      }
      return true;
    }
  }
}

// console.log(anagrams('at', 'ta'));


function isIsogram(str) {
  const myObj = {};
  for (let val of str) {
    myObj[val.toLowerCase()] = (myObj[val.toLowerCase()] || 0) + 1;
  }
  for (let keys in myObj) {
    if (myObj[keys] > 1) {
      return false;
    }
  }
  console.log(myObj)
  return true;
}

// console.log(isIsogram('FAT')); 
// 0(2n) --> because there are two loops  

function isIsogram(str) {
  return new Set(str.toUpperCase()).size == str.length;
}

// love this solution --> unsure of its big o


// This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.

const simpleMultiplication = number => number % 2 === 0 ? number * 8 : number * 9;


// Build a function that returns an array of integers from n to 1 where n>0.

const reverseSeq = n => {
  const numArr = [];
  while (n > 0) {
    numArr.push(n);
    n--;
  }
  return numArr;
};
// console.log(getMiddle('love'))

// implement a function called countUniqueValues, which accepts a sorted array, and counts the unique values in the array. There can be nagative numbers in the array, but it will always be sorted. 

// [1,1,1,1,1,2]
function countUniqueValues(arr) {
  if (arr.length === 0) return 0;
  let i = 0;
  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j]
    }
  }
  return i + 1;
}

// console.log(countUniqueValues([1,2,3,4,4,4,4,4,4,4,4,4,5,6,7,7,7,7,7,7])); // return 7 o(n) --> linear 

// write a function maxSubarraySum which accepts an array of integers and a number called n. The function should calculate the maximum sum of n consecutive elemnts in the array. 


//Write a function named first_non_repeating_letter that takes a string input, and returns the first character that is not repeated anywhere in the string.

function firstNonRepeatingLetter(s) {

  for (let i = 0; i < s.length; i++) {
    if (s.indexOf(s[i].toLowerCase()) === s.lastIndexOf(s[i].toLowerCase())) {
      return s[i];
    }
  }
  return null
}

// console.log(firstNonRepeatingLetter('pop'))

//You are given an array(list) strarr of strings and an integer k. Your task is to return the first longest string consisting of k consecutive strings taken in the array.

function longestConsec(strarr, k) {
  const finArr = [];

  while (k) {
    let longest = "";
    for (let i = 0; i < strarr.length; i++) {
      if (strarr[i].length > longest.length) {
        longest = strarr[i]
      }
    }
    finArr.push(longest);
    k--;
    const index = strarr.indexOf(longest);
    strarr.splice(index, 1);
  }

  return finArr.join('');
}

// console.log(longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], 4));

// print a arrays within arrays to one final array. 

function oneDimensionalArray(arr) {
  const finArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      finArr.push(...oneDimensionalArray(arr[i]));
    } else {
      finArr.push(arr[i]);
    }
  }
  return finArr;
}
const crazyArr = [1, 2, [3, 4, [5, [6, 6.5, 6.75, 6.99], 7], 8], 9, 10];

// console.log(oneDimensionalArray(crazyArr)); //big o(n) linear?? not sure

//console.log(oneDimensionalArray(crazyArr)); //big o(n) linear?? not sure

// Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

function even_or_odd(number) {
  return number % 2 === 0 ? "Even" : "Odd";
}

function removeExclamationMarks(s) {
  let fin = '';

  s.split('').forEach(x => x === '!' ? null : fin += x)
    ;
  return fin;
}

//console.log(removeExclamationMarks('H!e!l!l!o World!'))

//Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

let reverse = function (x) {
  x = x.toString().split('')

  if (x[0] === '-') {
    x.shift()
    return Number(`-${x.reverse().join('')}`)
  } else {
    return Number(x.reverse().join(''))
  }
};

//Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The relative order of the elements may be changed.

var removeElement = function (nums, val) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === val) {
      const index = nums[i];
      nums.splice(index, 1)
    }
  }
  return nums
};

//console.log(removeElement([1,2,2,2,2,3,44,5],2));


//Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

var containsDuplicate = function (nums) {
  const numsObject = {};
  for (let i = 0; i < nums.length; i++) {
    numsObject[nums[i]] ? numsObject[nums[i]] += 1 : numsObject[nums[i]] = 1;
  }
  for (let key in numsObject) {
    if (numsObject[key] > 1) {
      return true;
    }
  }
  return false;
};

// console.log(containsDuplicate([1,2,3,3])); // -->0(2n) linear solution


// Our football team finished the championship. The result of each match look
// like "x:y". Results of all matches are recorded in the collection.

// For example: ["3:1", "2:2", "0:1", ...]

// Write a function that takes such collection and counts the points of our team
// in the championship. Rules for counting points for each match:

// if x > y: 3 points
// if x < y: 0 point
// if x = y: 1 point

function points(games) {
  let sum = 0;
  games.forEach(x => {
    if (Number(x[0]) > Number(x[2])) {
      sum += 3;
    } else if (Number(x[0]) < Number(x[2])) {
      null;
    } else if (Number(x[0]) === Number(x[2])) {
      sum += 1;
    }
  })
  return sum;
}

//console.log(points(["1:1", "2:2", "3:3", "4:4", "2:2", "3:3", "4:4", "3:3", "4:4", "4:4"]));



//Create a function which answers the question "Are you playing banjo?". If your name starts with the letter "R" or lower case "r", you are playing banjo!

function areYouPlayingBanjo(name) {
  return name[0] === "r" || name[0] === "R" ? `${name} plays banjo` : `${name} does not play banjo`
}

//In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?

function makeNegative(num) {
  return -Math.abs(num);
}

//OR

function makeNegative(num) {
  return num < 0 ? num : -num;
}

//There is a bus moving in the city, and it takes and drop some people in each bus stop. You are provided with a list (or array) of integer pairs. Elements of each pair represent number of people get into bus (The first item) and number of people get off the bus (The second item) in a bus stop.

var number = function (busStops) {
  let sum = 0;
  busStops.forEach(x => {
    sum += x[0];
    sum -= x[1];
  })
  return sum;
}

//console.log(number([[3,0],[9,1],[4,10],[12,2],[6,1],[7,10]])) //should give us 17. 

//In this simple Kata your task is to create a function that turns a string into a Mexican Wave. You will be passed a string and you must return that string in an array where an uppercase letter is a person standing up. 

function wave(str) {
  const final = [];
  str = str.split('');
  for (let i = 0; i < str.length; i++) {
    if (str[i] === " ") {
      null;
    } else {
      str[i] = str[i].toUpperCase();
      final.push(str.join(''));
      str[i] = str[i].toLowerCase();
    }
  }
  return final;
}

//console.log(wave("two words"));
//??['Two words', 'tWo words', 'twO words', 'two words', 'two Words', 'two wOrds', 'two woRds', 'two worDs', 'two wordS']


//The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.


function duplicateEncode(word) {
  const countObject = {};
  let finalString = "";
  for (let i = 0; i < word.length; i++) {
    countObject[word[i].toLowerCase()] ? countObject[word[i].toLowerCase()] += 1 : countObject[word[i].toLowerCase()] = 1;
  }

  for (let key in countObject) {
    if (countObject[key] >= 2) {
      countObject[key] = ")"
    } else {
      countObject[key] = "("
    }
  }

  for (let i = 0; i < word.length; i++) {
    finalString += countObject[word[i].toLowerCase()];
  }
  return finalString;
}

//console.log(duplicateEncode("Success")) //")())())";

//The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}. What if the string is empty? Then the result should be empty object literal, {}.


function count(string) {
  if (string.length === 0) {
    return {};
  }
  const finObj = {};
  for (let i = 0; i < string.length; i++) {
    finObj[string[i]] ? finObj[string[i]] += 1 : finObj[string[i]] = 1;
  }
  return finObj;
}

//console.log(count('Joejj'));

//Assume "#" is like a backspace in string. This means that string "a#bc#d" actually is "bd".  Your task is to process a string with "#" symbols.

function cleanString(s) {
  if (s === "") {
    return s;
  }
  let finalString = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "#") {
      finalString.pop();
    } else {
      finalString.push(s[i]);
    }
  }
  return finalString.join('');
}


function alternatingCases(sentence) {
  let finalSentence = "";

  for (let i = 0; i < sentence.length; i++) {
    i % 2 === 0 ? finalSentence += sentence[i].toUpperCase() : finalSentence += sentence[i].toLowerCase();
  }
  return finalSentence;
}

//console.log(alternatingCases("We are the world"))


function findEvenIndex(arr) {
  let sumAfter = arr.reduce((x, y) => x += y, 0) - arr[0];
  let sumBefore = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (sumAfter - arr[i] === 0 && sumBefore === 0) return 0;
    if (sumBefore === sumAfter - arr[i]) {

      return i;
    }
    sumBefore += arr[i];
    sumAfter -= arr[i];
  }

  return -1;
}

//console.log(findEvenIndex([20,10,-80,10,10,15,35]));

//Given an array of integers, find the one that appears an odd number of times.  There will always be only one integer that appears an odd number of times.


function findOdd(A) {
  const amountOfTime = {};

  A.forEach(x => amountOfTime[x] ? amountOfTime[x] += 1 : amountOfTime[x] = 1);

  for (let key in amountOfTime) {
    if (amountOfTime[key] % 2 !== 0) return Number(key);
  }
}

// big O(2n) ==> O(n) linear

function getGrade(s1, s2, s3) {
  const average = (s1 + s2 + s3) / 3;
  if (average >= 90 && average <= 100) {
    return "A";
  } else if (average >= 80 && average < 90) {
    return "B";
  } else if (average >= 70 && average < 80) {
    return "C";
  } else if (average >= 60 && average < 70) {
    return "D";
  } else if (average >= 0 && average < 60) {
    return "F";
  }
}

// console.log(getGrade(95,90,93));


// You are given an odd-length array of integers, in which all of them are the same, except for one single number. Complete the method which accepts such an array, and returns that single different number.

function stray(numbers) {
  const object = {};
  numbers.forEach(x => object[x] ? object[x] += 1 : object[x] = 1
  );
  for (let key in object) {
    if (object[key] === 1) return Number(key);
  }
}

//console.log(stray([1, 1, 1, 1, 1, 2]));



function repeatStringNumTimes(str, num) {
  //if num is not pos --> return "";
  if (num <= 0) return "";

  // create a var that will hold and empty 
  let finalStr = "";

  // while. condition while num === true value 0
  // append str num times 
  while (num) {
    finalStr += str;
    num--;
  }
  return finalStr;
}

//console.log(repeatStringNumTimes("Giuseppe", 3));





function titleCase(str) {
  let splitStrArr = str.toLowerCase();
  splitStrArr = splitStrArr.split(' ');

  for (let i = 0; i < splitStrArr.length; i++) {
    splitStrArr[i] = splitStrArr[i].charAt(0).toUpperCase() + splitStrArr[i].substring(1);
  }

  return splitStrArr.join(' ');
}

//console.log(titleCase("GiuSpPE IS cool!"));



//Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result. Numbers can be from 1 to 9. So 1 will be the first word (not 0). If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.

function order(words) {
  if (words === "") return "";

  const splitWords = words.split(' ');
  let count = 1;
  let final = [];

  while (splitWords.length >= count) {
    const heta = splitWords.filter(x => {
      if (x.includes(count)) {
        return x;
      }
    })
    final.push(heta);
    count++;

  }
  return final.join(' ');
}

//console.log(order("is2 Thi1s 3a T4est")); //"Thi1s is2 3a T4est"


function zero(equation) {
  if (equation) {
    return helper(0, equation);
  } else {
    return 0;
  }

}
function one(equation) {
  if (equation) {
    return helper(1, equation);
  } else {
    return 1;
  }
}
function two(equation) {
  if (equation) {
    return helper(2, equation);
  } else {
    return 2;
  }
}
function three(equation) {
  if (equation) {
    return helper(3, equation);
  } else {
    return 3;
  }
}
function four(equation) {
  if (equation) {
    return helper(4, equation);
  } else {
    return 4;
  }
}
function five(equation) {
  if (equation) {
    return helper(5, equation);
  } else {
    return 5;
  }
}
function six(equation) {
  if (equation) {
    return helper(6, equation);
  } else {
    return 6;
  }
}
function seven(equation) {
  if (equation) {
    return helper(7, equation);
  } else {
    return 7;
  }
}
function eight(equation) {
  if (equation) {
    return helper(8, equation);
  } else {
    return 8;
  }
}
function nine(equation) {
  if (equation) {
    return helper(9, equation);
  } else {
    return 9;
  }
}

function plus(num) {
  return ["plus", num];
}
function minus(num) {
  return ["minus", num];
}
function times(num) {
  return ["times", num];
}
function dividedBy(num) {
  return ["divide", num];
}

function helper(firstNum, opperationAndSecondNum) {
  if (opperationAndSecondNum[0] === "plus") {
    return firstNum + opperationAndSecondNum[1];
  } else if (opperationAndSecondNum[0] === "minus") {
    return firstNum - opperationAndSecondNum[1];
  } else if (opperationAndSecondNum[0] === "times") {
    return firstNum * opperationAndSecondNum[1];
  } else if (opperationAndSecondNum[0] === "divide") {
    return Number((firstNum / opperationAndSecondNum[1]));
  }
}

//console.log(seven(dividedBy(five())));



function solution(str, ending) {
  if (ending === "") return true;
  return str.split('').slice(-ending.length).join('') === ending;
}

//OR

function solution(str, ending) {
  return str.endsWith(ending);
}

//console.log(solution('abcde', 'cde')); // true

var removeElement = function (nums, val) {
  const finArr = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      finArr.push(nums[i]);
    }
  }
  return finArr;
};

//console.log(removeElement([3, 2, 2, 3, 2], 3));

//Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.


function getSum(a, b) {
  if (a === b) return a;

  let small = b;
  let big = a;
  let sum = 0;
  if (a < b) {
    small = a;
    big = b;
  }

  for (let i = small; i <= big; i++) {
    sum += i;
  }
  return sum;
}

function findNeedle(haystack) {
  return "found the needle at position " + haystack.indexOf("needle");
}

function reverseNum(x) {
  if (x < 0 && x > -2147483647) {
    return -Number(String(Math.abs(x)).split('').reverse().join(''));
  } else if (x > 0 && x < 2147483647) {
    return Number(String(x).split('').reverse().join(''));
  } else {
    return 0;
  }
}

//console.log(reverseNum(-123))


// let nums1 = [1, 2]
// let nums2 = [3, 4]

// var findMedianSortedArrays = function (nums1, nums2) {
//   const combinedArr = nums1.concat(nums2);
//   if (combinedArr.length % 2 === 0) {

//   } else {
//     return combinedArr[(combinedArr.length - 1) / 2]
//   }
// };

// console.log(findMedianSortedArrays(nums1, nums2))

//Complete the square sum function so that it squares each number passed into it and then sums the results together.
function squareSum(numbers) {
  const squared = numbers.map(x => x * x);
  return squared.reduce((x, y) => x + y, 0);
}

//Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
};

// JAVA!!! 
// public class SumArray {

//   public static double sum(double[] numbers) {
//     double sum = 0;

//     for(int i=0;i<numbers.length;i++){
//       sum += numbers[i];
//     }
//     return sum;
//   }
// }

//Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

function descendingOrder(x) {
  x = String(x).split('');
  const numberArr = [];
  x.forEach(x => numberArr.push(Number(x)));
  return Number(numberArr.sort((a, b) => b - a).join(''));
}

console.log(descendingOrder(123));