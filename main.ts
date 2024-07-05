// TypeScript Tuples

// A tuple is a typed array with a pre-defined length and types for each index.
// Tuples are great because they allow each element in the array to be a known type of value.
// To define a tuple, specify the type of each element in the array:
//  Example
// define our tuple
let ourTuple: [number, boolean, string];
// initialize correctly
ourTuple = [5, false, 'Coding God was here'];
console.log(ourTuple);


// As you can see we have a number, boolean and a string. But what happens if we try to set them in the wrong order:

// define our tuple
let ourTuple1: [number, boolean, string];

// initialize incorrectly throws an error
// ourTuple1 = [false, 'Coding God was mistaken', 5];  // it will occur a compile time error

// console.log(ourTuple1);
// Even though we have a boolean, string, and number the order matters in our tuple and will throw an error.


// Readonly Tuple
// A good practice is to make your tuple readonly.

// Tuples only have strongly defined types for the initial values:

// define our tuple
let ourTuple2: [number, boolean, string];

// initialize correctly
ourTuple2 = [5, false, 'Coding God was here'];

// We have no type safety in our tuple for indexes 3+
ourTuple2.push('Something new and wrong');

console.log(ourTuple2);
// You see the new valueTuples only have strongly defined types for the initial values:


// define our tuple
let ourTuple3: [number, boolean, string];

// initialize correctly
ourTuple3 = [5, false, 'Coding God was here'];

// We have no type safety in our tuple for indexes 3+
ourTuple3.push('Something new and wrong');

// instead use our readonly tuple
const ourReadonlyTuple: readonly [number, boolean, string] = [5, true, 'The Real Coding God'];

// throws error as it is readonly.
// ourReadonlyTuple.push('Coding God took a day off');   // Error because  Property 'push' does not exist on type 'readonly [number, boolean, string]'.


// Named Tuples
// Named tuples allow us to provide context for our values at each index.

// Example
const graph: [x: number, y: number] = [55.2, 41.3];
// Named tuples provide more context for what our index values represent.

// Destructuring

// Destructuring is exactly the same. We may have an array or object that we are working with, but we only need some of the items contained in these.

// Destructuring makes it easy to extract only what is needed.


// When destructuring arrays, the order that variables are declared is important.

// If we only want the car and suv we can simply leave out the truck but keep the comma:

const vehicles = ['mustang', 'f-150', 'expedition'];

const [car,, suv] = vehicles;



// Destructuring comes in handy when a function returns an array:

function calculate(a, b) {
    const add = a + b;
    const subtract = a - b;
    const multiply = a * b;
    const divide = a / b;
  
    return [add, subtract, multiply, divide];
  }


  
  const [add, subtract, multiply, divide] = calculate(4, 7);