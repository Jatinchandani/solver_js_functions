//Import the library
const solverjs = require("solverjs");

//Finding Average
const myArray = [28, 10, 1998];
const calculatedAverage = solverjs.avg(myArray);
console.log(calculatedAverage);

//Finding length of yard in meters
const lengthInYard = 90;
const lengthInMetre = solverjs.ydToMe(lengthInYard);
console.log(`${lengthInYard} yd = ${lengthInMetre} m`);

//converting feet to centimeters
const lengthInFeet = 28;
const lengthInCentimetre = solverjs.ftToCm(lengthInFeet);
console.log(`${lengthInFeet} ft = ${lengthInCentimetre} cm`);

//converting square meters to square inches
const areaInSquareMetre = 25;
const areaInSquareInch = solverjs.sqMeToSqIn(areaInSquareMetre);
console.log(`${areaInSquareMetre} sq. m. = ${areaInSquareInch} sq. in.`);

//converting hectares to square kilometers
const areaInHectare = 2;
const areaInSquareKilometre = solverjs.hectToSqKm(areaInHectare);
console.log(`${areaInHectare} hect = ${areaInSquareKilometre} sq. km.`);

//converting bytes to bits
const storageInByte = 600;
const storageInBit = solverjs.byteToBit(storageInByte);
console.log(`${storageInByte} byte = ${storageInBit} bit`);

//converting GIgabytes to Kilobytes
const storageInGigaByte = 10.5;
const storageInKiloByte = solverjs.gbToKb(storageInGigaByte);
console.log(`${storageInGigaByte} gb = ${storageInKiloByte} kb`);

//converting Nanoseconds to Microseconds
const timeInNanoSecond = 15000000;
const timeInMicroSecond  = solverjs.nsToUs(timeInNanoSecond);
console.log(`${timeInNanoSecond} ns = ${timeInMicroSecond} microsecond`);

//converting Nanoseconds to Months
//const timeInNanoSecond = 200000000;
const timeInMonth  = solverjs.nsToMm(timeInNanoSecond);
console.log(`${timeInNanoSecond} ns = ${timeInMonth} month`);

//Matrix operations
const matrix1 = [ 
    [1,2,4],
    [6,3,9],
    [9,5,5]
];
const matrix2 = [ 
[3,1,9],
[10,12,2],
[19,8,5]
];

const matrixSum12 = solverjs.matAdd(matrix1, matrix2);
const matrixSubtract12 = solverjs.matSub(matrix1, matrix2);

console.log("Sum of Given Matrices");
for(let i = 0;i<3;i++) console.log(matrixSum12[i]);   

console.log("Subtraction of 2nd matrix from 1st");
for(let i = 0;i<3;i++) console.log(matrixSubtract12[i]);

//finding a number that is reverse to the given number
const num2 = 43215; 
const num2Reverse = solverjs.reverse(num2);
console.log(`Reverse of ${num2} is ${num2Reverse}`);

//Factorial
const numB = 5;
const num6Factorial = solverjs.fac(numB);
console.log(`Factorial of ${numB} is ${num6Factorial}`);

//finding total permutations of a string
const anotherString = "jat";
const totalPermutations = solverjs.permutation(anotherString);
console.log(`Total permutations of 'jat' are ${totalPermutations}`);

//calculating the day on the given data
const date = "28/10/1997";
const day  = solverjs.dateToDay(date);
console.log(`There is ${day} on ${date}`);

//calculating the age according to the given date of birth
const dateOfBirth = "28/10/1997";
const calculatedAge = solverjs.dobToAge(dateOfBirth);
console.log(`The age according to DOB ${dateOfBirth} is ${calculatedAge}`);