// 1. Write a function that takes a number and returns true if it is a positive number and false if it is a negative number.
const isNumberPositive = (num) => {
    if (num < 0) {
        return false;
    } else return true;
}

console.log(isNumberPositive(-1));
console.log(isNumberPositive(10));

// 2. Write a function that takes a number of days and converts it into an age.
const convertDaysToAge = (days) => {
    let age = days/365;
    console.log(age); 
}

convertDaysToAge(3650);
convertDaysToAge(6570);

// 3. Write a function that takes three numbers and returns the largest of the three numbers.
const getLargestNumber = (num1, num2, num3) => {
    let max = Math.max(num1, num2, num3);
    return max;
}

console.log(getLargestNumber(2, 1, 4));
console.log(getLargestNumber(6,2,3));

// 4. Write a function that takes an array of names and returns the last name from the array of names.
// using names as parameter instead of multiple of name1, 2, 3 to ensure it works for all lengths of arrays.
const getLastName = (names) => {
    console.log(names[names.length - 1]);
}

getLastName(["Charlie", "Rob", "Andy"]);
getLastName(["Ash", "Stu"]);

// 5. 