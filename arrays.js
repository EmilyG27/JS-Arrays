let fruits = ['apple', 'banana', 'orange'];

function add(arr, fruit) {
    arr.push(fruit);
    return arr;
}

console.log(add(fruits, "cherry"))

function remove(arr) {
    arr.pop();
    return arr;
}

console.log(remove(fruits))

let numbers = [3, 1, 5, 2, 4];

function order(arr) {
    arr.sort();
    return arr;
}

console.log(order(numbers))

function double(arr) {
    return arr.map(num => num * 2)
}

console.log(double(numbers))

function even(arr) {
    return arr.filter(num => num % 2);
}

console.log(even(numbers))

function sum(arr) {
    return arr.reduce((acc, curr) => acc + curr, 0);
}

console.log(sum(numbers))

//Strings

let message = "Hello, World!";

function stringLength() {
    return message.length
}

console.log(stringLength(message))

function upper() {
    return message.toUpperCase()
}

console.log(upper(message))

function lower() {
    return message.toLowerCase()
}

console.log(lower(message))

let sentence = "The quick brown fox jumps over the lazy dog";

function sub() {
    return sentence.substring(0, 10);
}

console.log(sub(sentence))

function space() {
    return sentence.split(" ");
}

console.log(space(sentence))