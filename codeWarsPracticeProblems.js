// pallindrome

function isPallidrom(string){
    let reversed = string.split('').reverse().join('')
 return reversed === string ? true:false

}
//  console.log(isPallidrom('ottok'))

 function oldSchoolReverse(string){
    let finalStr = ''

    for(let i=string.length-1; i>=0;i--){
        finalStr += string[i]
    }
    return finalStr
 }

//  console.log(oldSchoolReverse('joe'))


//  char in a string - Should practice

function mostCharsInString(string){
    string = string.toLowerCase()
    let stringCharObj = {}
    for(let i=0; i<string.length;i++){
       if(stringCharObj[string[i]]){
        stringCharObj[string[i]] +=1
       }else{
        stringCharObj[string[i]] =1
       }
    }
    return stringCharObj
}

// console.log(mostCharsInString('Hello - I would love to work at Hylan'))

function commonWords(string){
    stringArr = string.split(' ')
    const finObj = {}
    for(let i=0;i<=stringArr.length-1;i++){
        finObj[stringArr[i]] ? finObj[stringArr[i]] += 1:finObj[stringArr[i]] = 1
    }
    return finObj
}

//console.log(commonWords('joe likes milk bob also likes milk'))

// reverse word

function reverseWord(string){
    return string.split('').reverse().join('')
}

// console.log(reverseWord('Barbara'))

// pallindrome

function isPallidrom(string){
    let reversed = string.split('').reverse().join('')
 return reversed === string ? true:false

}
//  console.log(isPallidrom('ottok'))

 function oldSchoolReverse(string){
    let finalStr = ''

    for(let i=string.length-1; i>=0;i--){
        finalStr += string[i]
    }
    return finalStr
 }

//  console.log(oldSchoolReverse('joe'))


//  char in a string - Should practice

function mostCharsInString(string){
    string = string.toLowerCase()
    let stringCharObj = {}
    for(let i=0; i<string.length;i++){
       if(stringCharObj[string[i]]){
        stringCharObj[string[i]] +=1
       }else{
        stringCharObj[string[i]] =1
       }
    }
    return stringCharObj
}

// console.log(mostCharsInString('Hello - I would love to work at Hylan'))

function commonWords(string){
    stringArr = string.split(' ')
    const finObj = {}
    for(let i=0;i<=stringArr.length-1;i++){
        finObj[stringArr[i]] ? finObj[stringArr[i]] += 1:finObj[stringArr[i]] = 1
    }
    return finObj
}

// The Western Suburbs Croquet Club has two categories of membership, Senior and Open. They would like your help with an application form that will tell prospective members which category they will be placed. To be a senior, a member must be at least 55 years old and have a handicap greater than 7. In this croquet club, handicaps range from -2 to +26; the better the player the lower the handicap.

// console.log(commonWords('joe likes milk bob also likes milk'))

function openOrSenior(data){
    const openOrSen = data.map(x=> x[0]>=55 && x[1]>7 ? 'Senior': "Open")
    return openOrSen
  }

  input =  [[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]

// console.log(openOrSenior(input))

// Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.

var summation = function (num) {
    let finNum = num
    if(num ===1){return 1}
    finNum += summation(num-1)
    return finNum
  }

//   console.log(summation(300))

// We need a function that can transform a number into a string.

function numberToString(num) {
    return num.toString()
  }

//   In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". You function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).
  function DNAStrand(dna){
    const finArr = []
    dna.split('').forEach(x=>{
      if(x.toUpperCase() === 'A'){
        finArr.push('T')
      }else if(x.toUpperCase() === 'T'){
        finArr.push('A')
      }else if (x.toUpperCase() === 'C'){
        finArr.push('G')
      }else if(x.toUpperCase() === 'G'){
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
    const errors = s.split('').filter(x=> 'nopqrstuvwxyz'.split('').includes(x))
    return `${errors.length}/${s.length}`
}
// alt answer with regEx. Very clever
// const printerError = s => `${(s.match(/[n-z]/g) || []).length}/${s.length}`;

let s="aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz"

// console.log(printerError(s))

//We need a function that can transform a string into a number. What ways of achieving this do you know?

const stringToNumber = str => Number(str)