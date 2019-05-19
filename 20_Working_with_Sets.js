//::::::::::::::::::::::::::::::::::Lesson 3- Built-ins :::::::::::::::::::::::::::::::
//::::::::::::::::: Lecture 4- Working with Sets :::::::::::::::::::

//:::::::::::Checking The Length::::::::::::

const months = new Set(['January', 'February', 'March', 'April', 'May', 'June', 'July','August', 'September', 'October', 'November', 'December']);
console.log(months);
console.log(months.size);

// const courses = new Set();
// console.log(courses.size);

const courses = new Set(['JavaScript', 'OO JavaScript', 'ES6', 'jQuery', 'Bootstrap','AJAX', 'React', 'mySQL', 'NodeJS', 'ES6']);
console.log(courses.size);
console.log(courses);

/*From line 17 to 22 is optional */
const myArray = ['abc', 1, 2, 3, true, false, {name: 'Jewel'}, 'abc', 1];
console.log(myArray);
console.log(myArray.length);
console.log(myArray[2]);
console.log(myArray[0]);


/*NOTE: Sets can’t be accessed by their index like an array, so we use the .size 
property instead of .length property to get the size of the Set */

const mySet = new Set(['abc', 1, 2, 3, true, false, {name: 'Jewel'}, 'abc', 1]);
console.log(mySet);
console.log(mySet.size);
console.log(mySet[2]); // return undefined


//:::::::::::::::::::::Checking If An Item Exists::::::::::::::::

const itemsInSet = new Set(['Item-1', 'Item-2', 'Item-3', 'Item-4']);
console.log(itemsInSet);
console.log(itemsInSet.has('Item-5'));
console.log(itemsInSet.has('Item-3'));


const items = new Set();
console.log(items);
console.log(items.has(2));
console.log(items.has(0));
console.log(items.has(undefined));
console.log(items.has(null));


//:::::::::::::::::::::Retrieving All Values::::::::::::::::::::::

const country = new Set(['Bangladesh', 'Turkey', 'Iran', 'Afganistan', 'Palestine', 'America', 'Canada']);
console.log(country);
console.log(country.values());


/*From line 57 to 64 is optional */
// const terrain = {
//     name: 'Bangladesh',
//     capital: 'Dhaka',
//     district: 'Comilla'
// };
// console.log(terrain);
// console.log(Object.keys(terrain));

//:::all in one example:::
const developers = new Set(['JavaScript', 'React', 'NodeJS', 1, 2, true]);

console.log(developers);
console.log(developers.size);

console.log(developers.has('React'));
console.log(developers.has(1));
console.log(developers.has('1'));
console.log(developers.has(true));

console.log(developers.values);
console.log(developers.values());

