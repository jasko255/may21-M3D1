
// 1)
// Create a function to calculate the sum of the two given integers. If the two values are the same, then returns the triple of their sum.

// let calc = function (a,b){
//     if(a===b){
//         return 3*(a+b)
//     } else{
//         return a+b
//     }
// }

// console.log(calc(4,4));


// 2)
// Create a function to check two given numbers. Return true if one of the numbers is 50, or if their sum is 50.

// let calc1 = function (a,b){
//     if(a=== 50 || b === 50){
//         return true
//     } else if (a+b === 50){
//         return true
//     } else{
//         return false
//     }
// }

// console.log(calc1(44,6));


// 3)
// Create a function to remove a character at the specified position of a given string and return the new string.

// let calc3 = function (str){
    
// }

// console.log(calc(4,4));

// 4)
//  Create a function to find the largest of three given integers.
let calc4 = function (a,b,c){
    let myArr = [a,b,c]
    return Math.max(...myArr)
}

console.log(calc4(4,55,10));

// 5)
// Create a function to check whether two numbers are in range 40..60 or in the range 70..100 inclusive.

// let calc5 = function (a,b){
//     if(a >= 40 && a <= 60  || b >= 40 && b <= 60  ){
//         return `${a}  and  ${b} +  is in range 40..60 `
//     } else if (a >= 70 && a <= 100){
//         return a + ' is in range 70..100'
        
//     }else{
//         return 'none of the ranges'
//     }
// }

let calc5 = function (a,b){
    if(a >= 40 && a <= 60  && b >= 40 && b <= 60  ){
        return `Both ${a}  and  ${b}   are in range 40..60 `
    } else if (a >= 70 && a <= 100 && b >= 70 && b <= 100 ){
        return `Both ${a}  and  ${b}   are in range 70..100 `
        
    }else{
        return 'Both are not in the same ranges'
    }
}

console.log(calc5(77, 47));

// 6) 
// Create a function that creates and returns the specified number of copies of a given string (positive number).

let calc6 = function (str){
    for (let i = 0; i < str.length; i++){
       console.log(str);
          }
   
}

calc6('string');

// 7)
// Create a function that returns the city name of a given string, if the string begins with "Los" or "New", otherwise returns blank.

// 8)
// Create a function to calculate the sum of three elements of a given array of integers of length 3.

// 9)
// Create a function to test whether an array of integers of length 2 contains 1 or a 3. 

// 10)
// Create a function to test whether an array of integers of length 2 does not contain 1 or a 3

// 11)
// Create a function to find the longest string from a given array of strings.

// 12)
// Create a function to find the types of a given angle.

// Types of angles:
//     Acute angle: An angle between 0 and 90 degrees.
//     Right angle: An 90 degree angle.
//     Obtuse angle: An angle between 90 and 180 degrees.
//     Straight angle: A 180 degree angle.

// 13)
// Create a function to find the index of the greatest element of a given array of integers

// 14)
// Create a function to get the largest even number from an array of integers.

// 15)
// Create a function to check from two given integers, whether one is positive and another one is negative.

// 16)
// Create a function to create new string with first 3 characters are in lower case and the others in upper case. If the string length is less than 3 convert all the characters in upper case. 

// 17)
// Create a function to calculate the sum of the two given integers, If the sum is in the range 50..80 return 65 other wise return 80.

// 18)
// Create a function to convert a number to a string, the content of which depends on the number's factors. Follow next example:

// If the number has 3 as a factor, output 'Diego'.
// If the number has 5 as a factor, output 'Riccardo'.
// If the number has 7 as a factor, output 'Stefano'.
// If the number does not have 3, 5, or 7 as a factor, just pass the number's digits straight through.
// Examples
// 28's factors are 1, 2, 4, 7, 14, 28.
// this would be a simple "Stefano".
// 30's factors are 1, 2, 3, 5, 6, 10, 15, 30.
// this would be a "DiegoRiccardo".
// 34 has four factors: 1, 2, 17, and 34.
// this would be "34".

// 19)
// Create a function that given a phrase returns its acronym, like British Broadcasting Corporation returns BBC

