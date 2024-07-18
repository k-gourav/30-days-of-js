// Task 1 :
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// Task 2 :
let num = 5;
for (let i = 1; i <= 10; i++) {
  console.log(num * i);
}

// Task 3 :
let sum = 0;
let i = 1;
while (i <= 10) {
  sum += i;
  i++;
}
console.log(sum);

// Task 4 :
let alterSum = 0;
let j = 10;
while (j) {
  alterSum += j;
  j--;
}
console.log(alterSum);

// Task 5 :
let val = 1;
do {
  console.log(val);
  val++;
} while (val <= 5);

// Task 6 :
let factorial = 1;
let number = Math.floor(Math.random() * 10);
do {
  if (!number) break;
  factorial *= number;
  number--;
} while (number);
console.log(factorial);

// Task 7 :
let colStar = 1;
while (colStar <= 5) {
    let star = '';
    let rowStar = 1;
    while (rowStar <= colStar) {
        star = star.concat('*');
        rowStar++;
    }
    console.log(star)
    colStar++;
}

// Task 8 :
let allNum = 1;
while (allNum <= 10) {
  if (allNum === 5) {
    allNum++;
    continue;
  }
  console.log(allNum);
  allNum++;
}

// Task 9 :
let int = 1;
while (int <= 10) {
    if (int === 7) break;
    console.log(int);
    int++;
}