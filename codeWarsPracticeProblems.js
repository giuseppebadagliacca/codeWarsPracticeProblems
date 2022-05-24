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

  console.log(summation(300))