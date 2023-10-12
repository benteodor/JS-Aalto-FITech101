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
