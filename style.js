/*const name = "Popa Teodor";
const yearOfBirth = 1996;

console.log(`${name} was born in ${yearOfBirth}.`); */

// Block scoping

{
  const name = "P. Teodor";
  console.log(name);
  {
    console.log(name);
  }
}

// Formatting and Linting - Code formatting

const name = "Teodor!";
let age = 27;
console.log(`My name is ${name} and I am ${age} years old`);

// Linting

const first = "test";
const second = "test";
if (first === second) {
  console.log("Hello!");
}

// Defining and using functions

const hello = () => {
  console.log("Hello everyone!");
};
hello();

// Function parameters

const greet = (name) => {
  console.log(`Hello ${name}!`);
};

greet("Teodor");

// Returning a value from a function

const greeting = (who = "Popa Teodor") => {
  return `Hi ${who}!`;
};

const output = greeting("Teo");
console.log(output);

// Conditional Statements and Loops

let a = "10";
let b = "20";

if (a === b) {
  console.log("The same");
} else {
  console.log("Not the same");
}
a = "20";
if (a === b) {
  console.log("The same");
} else {
  console.log("Not the same");
}

// Loops
//For

for (let i = 0; i < 7; i++) {
  console.log(i);
}

//While

let i = 0;
while (true) {
  if (i >= 7) {
    break;
  }
  console.log(i);
  i++;
}

// Defining and accessing an array

/*const array = ["One", "Two"];
console.log(array);
console.log(array[0]);
console.log(array[1]);*/

// Adding and removing content

/*const array = [];
array.push("One");
array.push("Two");
array.push("Three");
console.log(array);
const shifted = array.shift();
console.log(array);
const popped = array.pop();
console.log(array);
console.log(`removed: ${shifted}, ${popped}`);*/

// Iterating over an array
/*const array = ["One", "Two", "Three"];
for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
}
console.log("---");
for (const value of array) {
  console.log(value);
}*/

/*const array = ["One", "Two", "Three"];
const log = (value) => {
  console.log(value);
};
array.forEach(log);*/

const array = ["One", "Two", "Three"];
array.forEach((value) => {
  console.log(value);
});

// Accessing an array from a separate file

/*const list = [];
const dequeue = () => {
  if (isEmpty()) {
    return null;
  }
  return list.shift();
};
const enqueue = (element) => {
  return list.push(element);
};
const isEmpty = () => {
  return list.length === 0;
};
export { dequeue, enqueue, isEmpty };*/

import * as queue from "./queue.js";
queue.enqueue("first");
queue.enqueue("second");
queue.enqueue("third");
while (!queue.isEmpty()) {
  console.log(queue.dequeue());
}

// Maps

const translations = new Map();
translations.set("yksi", "one");
translations.set("kaksi", "two");
translations.set("kolme", "three");
console.log(translations.has("neljä"));
translations.set("neljä", "four");
console.log(translations.has("neljä"));
translations.delete("yksi");
console.log(translations);
console.log(translations.get("kaksi"));
console.log(translations.get("two"));

// Sets
const uniques = new Set();
uniques.add("one");
uniques.add("two");
uniques.add("two");
uniques.add("two");
console.log(uniques);
uniques.delete("two");
console.log(uniques);
console.log(uniques.has("two"));

// Iteration

const countryNames = new Map();
countryNames.set("FIN", "Finland");
countryNames.set("SWE", "Sweden");
for (const [key, value] of countryNames) {
  console.log(`${key} -> ${value}`);
}
console.log("---");
const countries = new Set();
countries.add("Finland");
countries.add("Sweden");
for (const value of countries) {
  console.log(value);
}

// Defining an object
// Adding a property

const person = {
  name: "Teodor Popa",
  yearOfBirth: 1996,
};
person.inventorOf = "Mocha";
console.log(person.name);
console.log(person["name"]);
console.log(person["year-of-birth"]);
console.log(person.inventorOf);

// Iterating over properties

const person = {
  name: "Teodor P",
  yearOfBirth: 1961,
};
for (const [key, value] of Object.entries(person)) {
  console.log(`${key}: ${value}`);
}

// JSON and objects

const jsonString = '{"name": "Teodor", "yearOfBirth": 1996}';
const obj = JSON.parse(jsonString);
console.log(obj.name);
const string = JSON.stringify(obj);
console.log(string);

// Asynchronous Functions
// Defining asynchronous functions

const waitAndPrint = async (message, seconds) => {
  await new Promise((resolve) => setTimeout(resolve, seconds * 1000));
  console.log(message);
};
waitAndPrint("First call!", 3);
waitAndPrint("Second call!", 2);
waitAndPrint("Third call!", 1);
