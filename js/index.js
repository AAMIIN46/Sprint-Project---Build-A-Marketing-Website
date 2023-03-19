// Add your Javascript work here

// Task 1: Create a basic Calculator

/* 



1. Start creating three prompts, the first two for the two numbers and the second one for the operation
2. Also declare another variable for the result.
3. Using conditional statement, check if the operation is addition, subtraction, division or multipilcation
4. Add the output to the result variable you created.
5. Console.log the result.

*/
const value1 = prompt("entere first nume");
const value2 = prompt("entere first nume");
const value3 = prompt("entere first nume");
if (value1 && value2 && value3) {
  const result = value1 + value2 * value3;
  console.log(result);
} else {
  console.log("number sax ah gali waala fadlan");
}
