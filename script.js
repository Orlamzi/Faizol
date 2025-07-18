const nextBtn = document.getElementById('next-btn');
nextBtn.addEventListener('click', () => {
    window.location.href = 'password.html';
    console.log('hi');
});

const themeBtn = document.getElementById('theme-change');
const body = document.body;

const savedTheme = localStorage.getItem('theme');
if(savedTheme === 'dark') {
    body.classList.add('dark-theme');
    themeBtn.textContent = 'Light Mode';
}

themeBtn.addEventListener('click', () => {
    body.classList.toggle('dark-theme');
    if(body.classList.contains('dark-theme')) {
        themeBtn.textContent = 'Light Mode';
        localStorage.setItem('theme', 'dark');
    } else {
        themeBtn.textContent = 'Dark Mode';
        localStorage.setItem('theme', 'light');
    }
    console.log('dark mode');
});


const person = {
    name: 'orlamzi'
}
person.name = 'tao'
person.email = 'tfqorlamzi@gmail.com'
console.log(person);

const firstName = 'Ola'
const output = firstName
console.log(output, typeof output);

const numbers = [1,2,3,4]
console.log(numbers, typeof numbers);

function sayHello(){
    console.log('Hello');
}
console.log(sayHello, typeof sayHello);


// WORKING WITH STRINGS........

let x;
const y = "Hello World"
x = y.toLowerCase()
console.log(x); //hello world

x = y.charAt(1)
console.log(x); // e

x = y.indexOf('e')
console.log(x); // 1

x = y.substring(1, 4)
console.log(x); // ell

x = y.substring(7)
console.log(x); // orld (starts at the 7th index)

x = y.slice(-11, -6)
console.log(x); // Hello (starts from backward)

x = x.trim()
console.log(x); //this only deletes excessive whitespace

x = y.replace('World', 'Orlamzi')
console.log(x); // replaces 'World' with 'Orlamzi'

x = y.includes('Hell')
console.log(x); //checks if the variable includes that strings and returns true/false

x = y.split() //['Hello World']
console.log(x);
x = y.split(' ') //(2) ['Hello', 'World']
console.log(x);
x = y.split('') //(11) ['H', 'e', 'l', 'l', 'o', ' ', 'W', 'o', 'r', 'l', 'd']
console.log(x);

//CHALLENGE 1
// change the first letter of the word 'developer' to uppercase
const word = 'developer'
/* let newWord = word.charAt(0).toUpperCase() + word.substring(1) OR....
let newWord = word[0].toUpperCase() +word.substring(1)  OR.....*/
let newWord = `${word[0].toUpperCase()}${word.slice(1)}`
console.log(newWord);



// WORKING WITH NUMBERS.....
let a;
const num = 5.35737
a = num.toFixed(2) //rounds it off to a 2 decimal place =5.36
//There's no length property for number, but we can do this to get the lenght:
a = num.toString().length; // is 7
a = num.toPrecision(2); // is 5.4
a = num.toPrecision(3); // is 5.36
a = num.toExponential(2); // is 5.36
console.log(a);


// MATH OBJECT.....
console.log(Math);
let b;

b = Math.sqrt(7) // =2.6457513110645907
//b = Math.ceil(Math.sqrt(7)) give us 3 instead of the nonsense above line

b = Math.abs(-5) // 5
b = Math.abs(5) // 5
b = Math.abs('5') // 5

b = Math.round(4.2) //=4...rounds normally.
b = Math.ceil(4.2) //=5....rounds up
b = Math.floor(4.9) //=4....rounds down

b = Math.pow(2, 3) //=8... 2 raised to power 3

b = Math.min(4,5,3) //returns the smallest value in the arg. =3

b = Math.max(4,5,3) // =5

b = Math.random() // gives us random decimals between 0 and 1
b = Math.random() *10 // gives us ,,    ,,     ,,     0 and 9
b = Math.random() *10 +1 // gives us ,,    ,,     ,,     1 and 10
b = Math.floor(Math.random() *10 +1); //rounds it down to whole numbers
b = Math.floor(Math.random() *100 +1); //between 1 and 100..

console.log(b);

//CHALLENGE 2...
/*
const c = Math.floor(Math.random() *100 +1);
const d = Math.floor(Math.random() *50 +1);
const sumResult = c + d;
const diffResult = c - d;
const prodResult = c * d;
const quotResult = c / d;
const remResult = c % d;

console.log('sum is ' +c +' ' +'+ ' +d +'= ' +sumResult);
console.log('difference is ' +c +' ' +'- ' +d +'= ' +diffResult);
console.log('product is ' +c +' ' +'x ' +d +'= ' +prodResult);
console.log('quotient is ' +c +' ' +'/ ' +d +'= ' +quotResult);
console.log('Remainder is ' +c +' ' +'% ' +d +'= ' +remResult); */

const c = Math.floor(Math.random() *100 +1);
const d = Math.floor(Math.random() *50 +1);
const sum = c + d;
const sumResult = `${c} + ${d} = ${sum}`;
console.log(sumResult);

const e = Math.floor(Math.random() *100 +1);
const f = Math.floor(Math.random() *50 +1);
const diff = e - f;
const diffResult = `${e} - ${f} = ${diff}`;
console.log(diffResult);


// DATES & TIME.......

let g;
g = new Date(); //Tue Jul 15 2025 12:12:09 GMT+0100 (West Africa Standard Time)
g = g.toString(); // above is an OBJECT. we use this to turn it to STRING sha
g = new Date(2025, 6, 15); //Tue Jul 15 2025 00:00:00 GMT+0100 (West Africa Standard Time)
//to add time...
g = new Date(2025, 6, 15, 12, 18, 44); //Tue Jul 15 2025 12:18:44 GMT+0100 (West Africa Standard Time)

//TIMESTAMPS...

g = Date.now(); //1752578525925... keeps changing upon reloads

console.log(g); 


// ARRAY CHALLENGE 1...
const arr = [1,2,3,4,5];
arr.push(6);
arr.unshift(0)
arr.reverse();
console.log(arr);

//ARRAY CHALLENGE 2...
const arr1 = [1,2,3,4,5];
const arr2 = [5,6,7,8,9,10];
let arr3 = [arr1, arr2];
// arr3 = arr3.flat();
arr3 = [...arr1, ...arr2];
arr3.splice(4, 1);
console.log(arr3);


//OBJECT CHALLENGE 1....
const library = [
    {
        title: 'Super',
        author: 'Orlamzi',
        status: {
            own: true,
            reading: false,
            read: false
        }
    },
    {
        title: 'Daunce',
        author: 'Taofeeq',
        status: {
            own: true,
            reading: false,
            read: false
        }
    },
    {
        title: 'Delta',
        author: 'Jaybee',
        status: {
            own: true,
            reading: false,
            read: false
        }
    }
];
library[0].status.read = true;
library[1].status.read = true;
library[2].status.read = true;
console.log(library);

//const {title} = library[0]; //destructuring title from the first object in the array*/
const {title: firtBook} = library[0];
// console.log(firstBook);

const libraryJSON = JSON.stringify(library);
console.log(libraryJSON);


//FUNCTIONS...
function sayHi(){
    console.log('Hiiii');
}
sayHi();

function add(num1, num2){
    console.log(num1 + num2);
}
add(3, 5);

function isEven(num){
    if(num % 2 === 0) {
        return true;
    } else {
        return false;
    }
}
let outp = isEven(6);
if (outp) {
    console.log('This number is even');
} else {
    console.log('This number is odd');
}

function getGrade(score){
    if(score >= 70 && score <= 100) {
        return 'A';
    } else if (score === 60 && score <= 69) {
        return 'B';
    } else if (score === 50 && score <= 59) {
        return 'C';
    } else if (score === 45 && score <= 49) {
        return 'D';
    } else if (score > 100){
        return undefined;
    } else {
        return 'F';
    }
}
let grade = getGrade(60);
console.log('Your grade is ' +grade);

function addnum(a, b) {
    return a + b;
}
const resultt = addnum(5, 8);
console.log(resultt, addnum(2, 4));

function registerUser(user){
    return user +'is registered';
}
console.log(registerUser('orlamzi '));

//FUNCTION CHALLENGE
/*
const getCelcius = (f) => ((f - 32) * 5) / 9
console.log(`The temperature is ${getCelcius(40).toFixed(1)}\xB0C`); */
function getCelcius(f){
    const celsius = ((f - 32) * 5) / 9;
    return celsius;
}
console.log(`Temperature is ${getCelcius(32)}\xB0C`);

//IIFE
(function(length, width){
    const area = length * width;
 /* const output = area;
    console.log(`Area of length ${length} and width ${width} is ${area}`); */
    //or...
    const output = `The Area of length ${length} and width ${width} is ${area}`;
    console.log(output);
}) (5, 4);



//LOGIC & CONTROL FLOW (if, switch Statements)

//if STATEMENT

const i = 4;
const j = 5;
if(i > j) {
    console.log(`${i} is > ${j}`);
} else {
    console.log(`${i} is not greater than ${j}`);
}

//switch STATEMENT
const date = new Date(2025, 7, 18, 15, 12, 39);
const month = date.getMonth();
switch(month) {
    case 1:
        console.log('It is January');
        break;
    case 5:
        console.log('It is May');
        break;
    case 7:
        console.log('It is July');
        break;
    default:
        console.log('It is not January, May, or July');
}

const hour = date.getHours();
switch (true) {
    case hour < 12:
        console.log('GM GM');
        break;
    case hour < 18:
        console.log('Good Day');
        break;
    default:
        console.log('zzzzzzzzzz!');
}


//CALCULATOR CHALLENGE
function calculator(num1, num2, operator) {
    let result;
    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num1 / num2;
            break;
        default:
            result = 'Invalid Operator';
    }
    console.log(result);
    return result;
}
calculator(3, 4, '*');