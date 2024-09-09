// Question No1
//1
let numbers = [1, 5, 3, 8, 2,4,6,7,9,10];
// console.log(numbers.sort());
console.log(numbers.sort((a, b) => a - b));

// 2
let squares = numbers.map(number => number * number);
console.log(squares);

// 3
let res = squares.find(number => number > 25);
console.log(res,' greater than 25');

// 4
let res1 = numbers.every(number => number > 5);
if (res1){
    console.log('جميع العناصر في المصفوفة أكبر من 5');
}else{
console.log('ليست جميع العناصر في المصفوفة أكبر من 5');
}

// 5
let res2 = numbers.find(number => number = 3);
if (res2){
    console.log('المصفوفة تحتوي على الرقم 3 ');
}else{
console.log(' المصفوفة لا تحتوي على الرقم 3 ');
}

// 6
let res3 = numbers.filter(number => number % 2 == 0);
console.log(res3);

// 7
const mid1 = (numbers.length / 2) - 1;
const mid2 = numbers.length / 2;

numbers.splice(mid2, 1); 
numbers.splice(mid1, 1); 
console.log(numbers);

// 8
let productValue = 1;
numbers.forEach(number => productValue *= number);

console.log(productValue);

// 9
let index = numbers.findIndex(number => number > 5);
if (index !== -1) {
    console.log('موضع العنصر الأول الذي أكبر من 5 :', index);
} else {
    console.log('لا يوجد رقم أكبر من 5');
}

// 10
let numbersPop = numbers.pop();
console.log(numbersPop);

// 11
numbers.push(100);
console.log( numbers);

// ------------------------
// Question No2
let names = ['Alice', 'Bob', 'Charlie', 'David', 'Eve'];
let namesA = names.filter(item => item.startsWith('A'));

let namesAString =  namesA.join('-');
console.log(namesAString);

// ------------------------
// Question No3
// 1
let fruits = ['apple', 'banana', 'cherry', 'date','elephant', 'bird', 'lion'];

let fruits1 = fruits.some(fruit => fruit.startsWith('b'));
if (fruits1){
    console.log('the array have items starts with b');
}else{
    console.log('the array does not have items starts with b');
}

// 2
let resSlice = fruits.slice(2, 4);
console.log(resSlice);

// 3 
fruits.unshift('yellow');
console.log(fruits);

// ------------------------
// Question No4
// 1
let words = ['hello', 'world', 'javascript', 'array', 'function'];
let wordLengths = words.map(word => word.length);

console.log(wordLengths);

// 2
let wordds = words.includes('javascript');

if (wordds) {
    console.log("javascript word is in the array");
} else {
    console.log("javascript word is not in the array");
}


// ================================================ //
// Functions

function sum(num1, num2){
    return num1 + num2;
}

function substract(num1, num2){
    return num1 - num2;
}

function multiply(num1, num2){
    return num1 * num2;
}

function divide(num1, num2){
    return num1 / num2;
}

function mod(num1, num2){
    return num1 % num2;
}

console.log(sum(5,3));
console.log(substract(10,4));
console.log(multiply(4,3));
console.log(divide(6,3));
console.log(mod(6,3));
