//::::::::::::::::::::::::::::::::::Lesson 1- Syntax::::::::::::::::::::::::::::::::::
//:::::::::::::::::::Lecture 6- Spread... Operator::::::::::::::::

// const myArray = [1, 2, 3, 4, 5];

// console.log(myArray);

// const books = ["Don Quixote", "The Hobbit", "Alice in Wonderland", "Tale of Two Cities"];

// console.log(...books);


// const primes = new Set([2, 3, 5, 7, 11, 13, 17, 19, 23, 29]);

// console.log(...primes);

// const booksSet = new Set(["Don Quixote", "The Hobbit", "Alice in Wonderland", "Tale of Two Cities"]);

// console.log(...booksSet);


//:::::::::::::::::::Combining arrays with concat:::::::::::::::::::::

/*prior to the spread operator, we were forced to use the Array’s concat() method.*/
// const instructor = ['Mohammad', 'Al-Amin', 'Ali', 'Omar', 'Abu Bakar'];
// const developers = ['Ajgar', 'Hossain', 'Jewel'];

// const combined = instructor.concat(developers);

// console.log(combined);
// // console.log(instructor.concat(developers));

// console.log(...combined); //now using spread operator


//:::another example:::
// const fruits = ["apples", "bananas", "pears"];
// const vegetables = ["corn", "potatoes", "carrots"];

// const produce = fruits.concat(vegetables);
// const produce = vegetables.concat(fruits);

// console.log(produce);

// console.log(...produce); //now using spread operator


// const produce = [fruits, vegetables];
// console.log(produce);



/*How about trying the spread operator? */
/*
 * Instructions: Use the spread operator to combine the `fruits` and `vegetables` arrays into the `produce` array.
 */

const fruits = ["apples", "bananas", "pears"];
const vegetables = ["corn", "potatoes", "carrots"];

const produce = [...fruits, ...vegetables]; //combining this two arrays into one array

console.log(produce);

// console.log(...fruits, ...vegetables); //fully spread this two array's element


//:::another example:::
const number = [1, 2, 3, 4, 5];
const names = ['Karim', 'Rahim', 'Jewel'];
const profession = ['Scholar', 'Engineer', 'Software Developer'];

const combined = [...number, ...names, ...profession];

console.log(combined);

//:::::::Spread... operator's all use cases in action::::::::::::::::::::

/*add the elements of an existing array into a new array */
const certsToAdd = ['Object-Oriented JavaScript', 'EcmaScript-6', 'React'];

const newArray = ['JavaScript Fundamentals', ...certsToAdd, 'Redux', 'MySQL', 'MongoDB', 'nodeJS'];

console.log(newArray);


/*pass elements of an array as arguments to a function */
function addThreeNumbers(x, y, z) {
    console.log(x + y + z);
}
const myArray = [1, 2, 3];
addThreeNumbers(...myArray);


/*copy array */
const developers = ['Mohammad','Ajgar', 'Hossain'];
const newDevelopers = [...developers];  // like developers.slice()
const newDevelopers2 = developers.slice();

console.log(newDevelopers);
console.log(newDevelopers2);


newDevelopers.push('Jewel');
console.log(newDevelopers);

newDevelopers.pop();
console.log(newDevelopers);


/*Concatenate arrays */
const arr1 = [0, 1, 2];
const arr2 = [3, 4, 5];

// const concatenated = arr1.concat(arr2); //concat() method
// console.log(concatenated);

const concatenated = [...arr1, ...arr2]; //Spread operator
console.log(concatenated);

const addMoreItems = [...arr1, 'New Items', ...arr2]
console.log(addMoreItems);

