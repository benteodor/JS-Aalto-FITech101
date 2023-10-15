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
