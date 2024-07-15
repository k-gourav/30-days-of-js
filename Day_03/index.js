// Task 1 :
let number = Math.floor(Math.random() * ((Math.random()*2) - 1) * 100);
if (number > 0) console.log(`${number} is positive`);
else if (number < 0) console.log(`${number} is negative`);
else console.log("zero");

// Task 2 :
let age = Math.floor(Math.random() * 100);
let isEligibleToVote;
if (age >= 18) isEligibleToVote = true;
else isEligibleToVote = false;
console.log(isEligibleToVote);

// Task 3 :
let num1 = Math.floor(Math.random() * 100);
let num2 = Math.floor(Math.random() * 100);
let num3 = Math.floor(Math.random() * 100);
if (num1 > num2) {
    if (num1 >= num3) console.log(`${num1} is greatest`)
    else if (num1 < num3) console.log(`${num3} is greatest`);
}
else {
    if (num2 >= num3) console.log(`${num2} is greatest`);
    else console.log(`${num3} is greatest`);
}
console.log(num1, num2, num3);

// Task 4 :
let dayNumber = Math.floor((Math.random() * 8) + 1);
let dayName;
switch (dayNumber) {
    case 1:
        dayName = 'Monday';
        break;
    case 2:
        dayName = 'Tuesday';
        break;
    case 3:
        dayName = 'Wednesday';
        break;
    case 4:
        dayName = 'Thursday';
        break;
    case 5:
        dayName = 'Friday';
        break;
    case 6:
        dayName = 'Saturday';
        break;
    case 7:
        dayName = 'Sunday';
        break;
    default:
        dayName = 'invalid number';
}
console.log(dayName);

// Task 5 :
let score = Math.floor((Math.random() * 100) + 1);
let grade;
switch (true) {
    case (score <= 50):
        grade = 'F';
        break;
    case (score <= 60):
        grade = 'E';
        break;
    case (score <= 70):
        grade = 'D';
        break;
    case (score <= 80):
        grade = 'C';
        break;
    case (score <= 90):
        grade = 'B'
        break;
    case (score > 90):
        grade = 'A';
        break;
    default: 
        grade = 'Invalid grade';
}
console.log(grade);

// Task 6 :
const wholeNum = Math.floor((Math.random() * 100) + 1);
const type = wholeNum % 2 === 0 ? "even" : "odd";
console.log(`${wholeNum} is ${type} number`);

// Task 7 :
const year = Math.floor((Math.random() * 5000) + 1)
const isLeapYear = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0 ? "is leap" : "is not leap";
console.log(`${year} ${isLeapYear} year`);