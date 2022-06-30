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
//console.log(oneDimensionalArray(crazyArr)); //big o(n) linear?? not sure

// Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

function even_or_odd(number) {
  return number%2 ===0 ? "Even": "Odd";
}

function removeExclamationMarks(s) {
  let fin = '';
  
  s.split('').forEach(x=> x==='!'? null:fin += x)
;
  return fin;
}

console.log(removeExclamationMarks('H!e!l!l!o World!'))

//Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

let reverse = function(x) {
  x=x.toString().split('')

if(x[0] ==='-'){
x.shift()
return Number(`-${x.reverse().join('')}`)
}else{
return Number(x.reverse().join(''))
}
};