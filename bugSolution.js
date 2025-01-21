function foo(a, b) {
  //Check for falsy values
  if (!a || !b) {
    return 0; // Handle null, undefined, 0, '', false, etc.
  } else if (typeof a !== 'number' || typeof b !== 'number'){
    return NaN;
  }
  return a + b;
}

console.log(foo(null, 5)); // Output: 0
console.log(foo(5, null)); // Output: 0
console.log(foo(5, 5)); // Output: 10
console.log(foo(0,5)); //Output: 0
console.log(foo('',5)); //Output: 0
console.log(foo(false,5)); //Output: 0
console.log(foo('a',5)); //Output: NaN