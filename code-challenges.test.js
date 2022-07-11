// ASSESSMENT 4: JavaScript Coding Practical Questions with Jest

// const { exportAllDeclaration } = require("@babel/types")

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes in an array, removes the first item from the array and shuffles the remaining content.

// a) Create a test with an expect statement using the variable provided. HINT: Check out this resource: https://jestjs.io/docs/expect#expectarraycontainingarray

// describe('removeColor', () => {
//     const expected = (["purple", "blue", "green", "yellow", "pink"], ["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"] );
//     it('takes in an array, removes the first item from the array and shuffles the remaining content.', () => {
//       expect(colors1).toEqual(expect.arrayContaining(expected));
//     });
//     it('takes in an array, removes the first item from the array and shuffles the remaining content.', () => {
//       expect(colors2).not.toEqual(expect.arrayContaining(expected));
//     });
//   });

// describe("removeColor", () => {
//     it("takes in an array, removes the first item from the array and shuffles the remaining content.", () => {
//         expect(removeColor(colors1)).toEqual(["yellow", "blue", "pink", "green"])
//         expect(removeColor(colors2)).toEqual(["saffron", "aquamarine", "periwinkle", "indigo", "ochre"])
//     })
// })
// ReferenceError: removeColor is not defined


const colors1 = ["purple", "blue", "green", "yellow", "pink"]
// Expected output example (can be a different order): ["yellow", "blue", "pink", "green"]
const colors2 = ["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"]
// Expected output example (can be a different order): ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]


// b) Create the function that makes the test pass.

//create a function named removeColor
//takes in an array as paramater and argument 
//removes the first item of the array using shift()
// shuffles or sorts the returned array.

// const removeColor = (array) => {
//      return array.shift(array => {
//         return shuffle(array => {
//             return array.slice(1)
//         })
//      })
// }
// const removeColor = (array) => {
//     let firstElement = array.slice(1)
//     return array
// }

const removeColor = (array) => {
    let newArray = array.slice(1)
        return newArray.sort()
    
// console.log(removeColor(colors1))
//unable to figure this one out.






// --------------------2) Create a function that takes an array of numbers and returns an array of the minimum and maximum numbers in that order.

// a) Create a test with expect statements for each of the variables provided.

// describe("numbersArray", () => {
//     it("takes an array of numbers and returns an array of the minimum and maximum numbers in that order.", () => {
//         expect(numbersArray(nums1)).toEqual([-8, 90])
//         expect(numbersArray(nums2)).toEqual([5, 109])
//     })
// })

const nums1 = [3, 56, 90, -8, 0, 23, 6]
// Expected output: [-8, 90]
const nums2 = [109, 5, 9, 67, 8, 24]
// Expected output: [5, 109]


// b) Create the function that makes the test pass.
//name function numbersArray
//iterate over the array using map
//use math.max and math.min to return largest and lowest values

// const numbersArray = (array) => {
//     let minMath = [Math.min(...array)]
//     let maxMath = [Math.max(...array)]
//     return minMath.concat(maxMath)
    
// }
// console.log(numbersArray(nums1))
// console.log(numbersArray(nums2))




// const numbersArray = (array) => {
//     return array.map( value => {
//         return Math.min(array)
//     })
// }
//  const numbersArray = (array) => {
//     if(Math.max(Math.min(array)) ==)

//  const numbersArray = (array) => {
//     array.map
//     return (Math.max(Math.min(array)))
 
// --------------------3) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.

// a) Create a test with an expect statement using the variables provided.

// describe("randomArray", () => {
//     it("takes in two arrays as arguments and returns one array with no duplicate values.", () => {
//         expect(randomArray(testArray1)).toEqual([3, 7, 10, 5, 4, 8, 2, 1])
//         expect(randomArray(testArray2)).toEqual([3, 7, 10, 5, 4, 8, 2, 1])
//     })
// })

const testArray1 = [3, 7, 10, 5, 4, 3, 3]
const testArray2 = [7, 8, 2, 3, 1, 5, 4]
// Expected output: [3, 7, 10, 5, 4, 8, 2, 1]


// b) Create the function that makes the test pass.
//name function randomArray
//takes in two arguments 
//returns 1 array with no duplicate numbers

// const noDuplicate = testArray1.concat(testArray2)
// // const randomArray = () => {
// //     noDuplicate.filter([4, 5, 3, 7])
// //     return noDuplicate
// // }

// const randomArray = (array1, array2) => {
//     let newArr = array1.concat(array2)
//     newArr.filter(number, index) 
//     return newArr.indexOf(number) === index

// }

// const randomArray = (array1, array2) => {
//         let newArr = array1.concat(array2)
//         return [...new Set(newArr)]
// }
// console.log(randomArray(testArray1, testArray2))
