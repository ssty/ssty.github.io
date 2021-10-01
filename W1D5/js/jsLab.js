/* runs test to see if expected argument is === to value returned by function2test argument */
function myFunctionTest(expected, found) {
    if (expected === found) {
        return "TEST SUCCEEDED";
    } else {
        return "TEST FAILED.  Expected " + expected + " found " + found;
    }
}

/* max returns the maximum of 2 arguments */
function max(a, b) {
    if (a > b) {
        return a;
    } else {
        return b;
    };
}
console.log("Expected output of max(20,10) is 20  " + myFunctionTest(20, max(20, 10)));

/* max3 takes 3 numbers as arguments and returns the largest */
function maxOfThree(a, b, c) {
    return max(max(a, b), c);

}

//Write a function isVowel() that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
function isVowel(a) {
    if (a.length == 1) {
        if (a == 'a' || a == 'e' || a == 'i' || a == 'o' || a == 'u') {
            return true;
        }
        else {
            return false;
        }
    }
    else {
        console.log("Error!!!: Enter an alphabet only");
    }

}

//Define a function sum()that sums all the numbers in an array of numbers. 
function sum(a) {
    let i = 0;
    let sum = 0;
    let len = a.length;
    for (i; i < len; i++) {
        sum += a[i];
    }
    return sum;
}

//Define a function multiply() that multiplies all the numbers in an array of numbers. 
function multiply(a) {
    let i = 0;
    let sum = 1;
    let len = a.length;
    for (i; i < len; i++) {
        sum *= a[i];
    }
    return sum;
}

//Define a function reverse() that computes the reversal of a string.
function reverse(word){
    let reversedWord = "";
    let len = word.length;
    for (i=len-1; i >= 0; i--) {
        reversedWord += word.charAt(i);               
    }
    return reversedWord;
}

//Write a function findLongestWord() that takes an array of words and returns the length of the longest one.
function findLongestWord(array){
    let longestWord = 0;
    for (i=0; i < array.length; i++) {
        if(i == 0){
            longestWord = array[0].length;
        } 
        else{                        
            if(longestWord < array[i].length) {
                longestWord = array[i].length;
            }
        }        
    }
    return longestWord;
}

//Write a function filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i.
function filterLongWords(array, checkLength){
    let filteredWord = new Array(array.length);
    let k = 0;
    for (i=0; i < array.length; i++) {
        if(array[i].length > checkLength){
            filteredWord[k] = array[i];
            k++;
        }        
    }
    return filteredWord;
}

const arr = [1, 3, 5, 3, 3];
document.writeln("multiplying every element of array [1, 3, 5, 3, 3] by 10 <br/>Answer: ");
const multiplyBy10 = arr.map(function(elem, i, array) {
return elem * 10;
})
document.writeln(multiplyBy10.toString() + "<br/><br/>");

document.writeln("multiplying every element of array [1, 3, 5, 3, 3] by 10 <br/>Answer: ");
const equalsTo3 = arr.filter(function(elem, i, array) {
return elem === 3;
});
document.writeln(equalsTo3.toString() + "<br/><br/>");

document.writeln("product every element in array [1, 3, 5, 3, 3] <br/>Answer: ");
const productOfAll = arr.reduce(function(prevValue, elem, i, array) {
return prevValue * elem;
});
document.writeln(productOfAll.toString() + "<br/><br/>");

console.log("Expected output of maxOfThree(5,44) is 44  " + myFunctionTest(maxOfThree(5, 44)));
console.log("Expected output of maxOfThree(55,4,44) is 55  " + myFunctionTest(55, maxOfThree(55, 4, 44)));

//call a function isVowel() that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
console.log("The alphabet a is vowel : " + isVowel("a"));
console.log("The alphabet b is vowel : " + isVowel("b"));
console.log("The word best is vowel : " + isVowel("best"));

//call a function sum() and a function multiply() that sums and multiplies (respectively) all the numbers in an array of numbers. 
console.log("The summation of numbers [1,2,3,4,5] is  : " + sum([1,2,3,4,5]));
console.log("The multiplication of numbers [1,2,3,4,5] is  : " +  multiply([1,2,3,4,5]));

//call a function reverse() that computes the reversal of a string.
console.log("The reverse of 'here is reverse' is  : " + reverse("here is reverse"));

//call a function findLongestWord() that takes an array of words and returns the length of the longest one.
console.log('The longest word length in array ["here","there","see","estimation","hi"] is  : ' + findLongestWord(["here","there","see","estimation","hi"]));

//call a function filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i.
console.log('The list of words with length more than 3 is array ["here","there","see","estimation","hi"] is  : ' + filterLongWords(["here","there","see","estimation","hi"],3));
