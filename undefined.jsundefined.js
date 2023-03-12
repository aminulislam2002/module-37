/* 
 8 ways to get Undefine
1. variable that is not initialized will give undefined
2. function with no return 
3. parameter that is not passed will be undefined
4. if return has nothing on the right side will return undefined
5. property that doesn't exists on an object will give you undefined
6. accessing array elements outside of the index range 
7. deleting an element inside an array
8. set a value directly to undefined
*/

// way 01
let first;
// console.log(first); // return undefined

// way 02
function second(a, b) {
  const total = a + b;
}
const result = second();
// console.log(result); // return undefined

// way 03
function third(a, b, c, d) {
  const total = a + b + c + d;
  console.log(a, b, c, d);
}
// third(2, 5); // return 2 5 undefiened undefined

// way 04
function noNegative(a, b) {
  if (a < 0 || b < 0) {
    return;
  }
  return a + b;
}
const total = noNegative(2, -5);
// console.log(total); // return undefined
 
// way 05
const fifth = { id: 2, name: "ponchom", age: 40 };
// console.log(fifth.age, fifth.salary); // return 40 undefined

// way 06
const sixth = [4, 89, 87, 56, 54];
// console.log(sixth[1], sixth[5], sixth[200]); // return 89 undefined undefined
// you should not do it. Instead use splice

// way 07
delete sixth[1];
// console.log(sixth[1], sixth[5], sixth[200]); // return undefined undefined undefined
// console.log(sixth);

// way 08
const eighth = undefined; // return undefined
const ninth = null; // return object 

// way 09
const data = { results: [], updated: null };
// console.log(typeof undefined);
console.log(typeof null);
