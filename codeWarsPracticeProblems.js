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

console.log(commonWords('joe likes milk bob also likes milk'))