//::::::::::::::::::::::::::::::::::Lesson 3- Built-ins :::::::::::::::::::::::::::::::
//::::::::::::::::: Lecture 3- Sets :::::::::::::::::::


//:::::::A Set in Mathematics::::::::::
/* number = {2, 4, ,5, 6} is a set because each number is unique and appears only once
number = {1, 1, 2, 4} is not a set because it contains duplicate entries (the 1 is in there more than once!)*/

//:::::::::::Set in JavaScript::::::::::
/*In JavaScript, we can already represent something similar to a mathematical set using an array. */

const numbers = [2, 4, 5, 6]; //now it's a Set

numbers.push(2);
console.log(numbers); // returns [2, 4, 5, 2], now it's not a set anymore  in the mathematical sense

const names = ['Ajgar', 'Hossain', 'Jewel']; // now a set

names.push('Ajgar');
console.log(names); // now not a set

const myArray = [5, 6, 7]; // now a set

myArray.push('5');
console.log(myArray); // now also a set


//::::::::::::Sets and How to create a Set:::::::::::::::::::
/*In ES6, there’s a new built-in object that behaves like a mathematical set and works similarly to an array. */

//:::Create a Set:::

// const games = new Set();
// console.log(games);

const games = new Set(['Cricket', 'Football', 'Cycling', 'Cricket']);
console.log(games);

const courses = new Set(['JavaScript', 'OOP', 'ES6', 'jQuery', 'React', 'OOP']);
console.log(courses);

const mySet = new Set([1, 2, '1', 'Coders', true, 'Programmer', false, '1', 2]);
console.log(mySet);

const myset2 = new Set([{name: 'Ajgar', age: 25}]);
console.log(myset2);


//::::::::::::::::::::Modifying Sets:::::::::::::::::::::::::::::::

const coders = new Set(['Ajgar', 'Hossain', 'Jewel', 'Ajgar']);

coders.add('Karim');
coders.add('Rahim');
coders.delete('Ajgar');

console.log(coders);


const routine = new Set(['Salat', 'Study', 'Salat', 'Games', {name: 'Ajgar', age: 25}]);

routine.add('Applying Job');
routine.delete('Games');

console.log(routine);

/*If we want to delete all the items */
routine.clear();
console.log(routine);

routine.add('Social Media');
console.log(routine);
routine.add('Thinking');
console.log(routine);
routine.add('Social Media');
console.log(routine);
routine.delete('Research');
console.log(routine);

