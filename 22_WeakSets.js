//::::::::::::::::::::::::::::::::::Lesson 3- Built-ins :::::::::::::::::::::::::::::::
//::::::::::::::::: Lecture 6- Weak Sets :::::::::::::::::::

//:::::::::::What is a WeakSet?::::::::
/*A WeakSet is just like a normal Set with a few key differences. A WeakSet can only contain objects */

let student1 = {name: 'Jewel', age: 25, gender: 'male'};
let student2 = {name: 'Koyel', age: 26, gender: 'female'};
let student3 = {name: 'Moyna', age: 27, gender: 'female'};

const roster = new WeakSet([student1, student2, student3]);
console.log(roster);

/*console.log(roster.values()); // throw an error 
for(const value of roster) {
    console.log(value); // throw an error  because not iterable
}*/


/*Now we are gonna add something other than an object */
// roster.add('Shema'); // throw an error

/*Now if we want to try delete all the items */
// roster.clear(); // throw an error

//:::another example:::
const mySet = new WeakSet();
console.log(mySet);

/*mySet.add(6);
mySet.add('Jewel');*/

mySet.add({name: 'Ajgar', age: 25});
mySet.add({name: 'Hossain', age: 26});
console.log(mySet);

console.log(mySet.has({name: 'Hossain', age: 26})); // return false

let newObject = {name: 'Hossain', age: 26};
mySet.add(newObject);
console.log(mySet);

console.log(mySet.has(newObject)); // return true

mySet.delete({name: 'Hossain', age: 26});
console.log(mySet); // not deleted yet

mySet.delete(newObject);
console.log(mySet); // now successfully deleted

// mySet.clear(); // throw an error

/*console.log(mySet.values()); //throw an error
for(props of mySet) {
    console.log(myset); // throw an error, because not iterable
}*/


//normal set
/*const normalSet = new Set();
normalSet.add(5);
normalSet.add({name: 'Object'});
console.log(normalSet);

console.log(normalSet.has(5)); // return true 
console.log(normalSet.has({name: 'Object'}));// return false

let addInNormal = {name: 'Object'};

normalSet.add(addInNormal);
console.log(normalSet);
console.log(normalSet.has(addInNormal));*/ // return true


//:::::::::::Garbage Collection:::::::::::::::::::

let coder1 = {name: 'Ajgar', language: 'JavaScript'};
let coder2 = {name: 'Jewel', language: 'C'};
let coder3 = {name: 'Hossain', language: 'C++'};

const coders = new WeakSet([coder1, coder2, coder3]);
// console.log(coders);

coder3 = null;
console.log(coders);


// //:::another example:::
// let number1 = 7;
// console.log(number1);

// number1 = 3;
// console.log(number1);

// number1 = null;
// console.log(number1);

// let number2 = 3;
// console.log(number1 + number2); // return 3


// //:::another example:::
// let a = 'number';
// console.log(`a = ${a}`);

// a = null;

// let b = 300;
// a = 200; // a is garbage collected
// console.log(`Now a = ${a}`);


// let result = a + b;
// console.log(`So a + b = ${result}`);

