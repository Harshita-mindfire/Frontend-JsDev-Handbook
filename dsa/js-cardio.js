// Challenge 1: String reversal

function reverseString(str) {

    /** using reduce */
    return str.split('').reduce((acc, char) => acc = char + acc, "")

    /////////////////////////////


    /**using split, reverse and join methods*/
    // return str.split("").reverse().join("")

    ////////////////////////////////////////

    /** using a for */
    // let strRev = '';
    // for(let i = str.length-1; i>=0; i--){
    //     strRev = strRev + str[i]
    // }
    // return strRev

    /////////////////////////////////

    /** using for of */
    // let strRev = '';
    // for(char of str){
    //     strRev = char + strRev
    // }
    // return strRev

}

const reverseOutput = reverseString("hello");
console.log("Reverse of hello --> ", reverseOutput)

// Challenge 2: Validate a plaindrome

function isPalindrome(str) {
    // use any method to calculate reverse of string
   const reverseStr= str.split('').reduce((acc, char) => acc = char + acc, '');
   return str === reverseStr
}

const isPalindromeOutput = isPalindrome("hello");
console.log("is hello a Palidrome --> ", isPalindromeOutput)


// Challenge 3: Reverse an integer

function reverseInt(int) {

    const reverse = int.toString().split('').reverse().join('')
   return parseInt(reverse) * Math.sign(int)
}

const reverseIntOp = reverseInt(-12345);
console.log("reverse of -12345 is --> ", reverseIntOp)


// capatalize letters

function capitalizeLetters(sentence) {
    return sentence.split(' ').map(word => word[0].toUpperCase() + word.substring(1).toLowerCase()).join(' ')
}

console.log("After capitalize i love js ---> ", capitalizeLetters("i lOVe js"))


//Tip: we use 'for in' with objects 

// CHALLENGE 5: MAX CHARACTER
// Return the character that is most common in a string
// ex. maxCharacter('javascript') == 'a'
function maxCharacter(str) {
    const charMap = {};
    let maxNum = 0;
    let maxChar = '';
  
    str.split('').forEach(function(char) {
      if(charMap[char]) {
        charMap[char]++;
      } else {
        charMap[char] = 1;
      }
    });
  
    for(let char in charMap) {
      // debugger;
      if(charMap[char] > maxNum) {
        maxNum = charMap[char];
        maxChar = char;
      }
    }
  
    return maxChar;
}