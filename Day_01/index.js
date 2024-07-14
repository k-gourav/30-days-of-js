// Task 1 :
var num = 15;
console.log(num);

// Task 2 :
let person = "Michael John";
console.log(person);

// Task 3 :
const isPresentInMatch = false;
console.log(isPresentInMatch);

// Task 4 :
const value = 15;
console.log(typeof value);

const address = "Nyc"
console.log(typeof address);

const isAlive = true;
console.log(typeof isAlive);

const personalInfo = {
    name: "Rachel",
    address: "Times Square Street",
    age: 45,
}
console.log(typeof personalInfo);

const countryList = ['Italy', 'Germany', 'Brazil', 'Sweden']
console.log(typeof countryList);

// Task 5 :
let initialValue = 15;
console.log(initialValue);

initialValue = 25;
console.log(initialValue);

// Task 6 :
const cycleBrand = 'Trek';
cycleBrand = 'Scott';
console.log(cycleBrand); // it throws an error that constant cannot be reassigned

// Feature Request
console.log(numValue = 12, typeof numValue);
console.log(stringValue = 'hello world', typeof stringValue);
console.log(boolValue = false, typeof boolValue);
console.log(objValue = { name: "Rachel", address: "Times Square Street", age: 45,}, typeof objValue);
console.log(undefined, typeof undefined);
console.log(null, typeof null);
console.log(symbolValue = Symbol('hello'), typeof symbolValue);
console.log(bigValue = 45n, typeof bigValue);

let changedValue = 'I am mutable';
changedValue = 'I am finally mutated';
console.log(changedValue)

const rigidValue = 'I am immutable';
console.log(rigidValue);