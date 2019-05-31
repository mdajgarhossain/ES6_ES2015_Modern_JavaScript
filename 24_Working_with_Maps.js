//::::::::::::::::::::::::::::::::::Lesson 3- Built-ins :::::::::::::::::::::::::::::::
//::::::::::::::::: Lecture 8- Working with Maps :::::::::::::::::::

// const recapMap = new Map();

// recapMap.set('Creation of map', {
//     name: 'New Map',
//     method() {
//         console.log(`This ${this.name} is active!`);
//     }
// });

// recapMap.set('Another Property', 'This is another Property of this map Object');
// console.log(recapMap);

// console.log(recapMap['Creation of map']); // why undefined ???
// console.log(recapMap['Another Property']); // why undefined ???

// recapMap.delete('Another Property');
// console.log(recapMap);

// recapMap.clear();
// console.log(recapMap);


//:::::::::::::::Working with Maps::::::::::::::::

const members = new Map();

members.set('Karim', 30);
members.set('Rahim', 27);
members.set('Jewel', 25);

console.log(members);

//If an item is exist or not
console.log(members.has('Jalal'));
console.log(members.has('Jewel'));

//Retrieve values from a Map
console.log(members.get('Rahim'));

//:::Another example:::
const courses = new Map();

const setOfCourses = new Set(['jQuery', 'DOM', 'Bootstrap', 'React', 'Redux']);
courses.set('Remaining Courses', setOfCourses);

const topics = new Set(['Html', 'CSS', 'JavaScript', 'OO-JavaScript', 'ES6', 'jQuery', 'DOM', 'BootStrap', 'React', 'Redux']);
courses.set('Front-end Development', topics);

console.log(courses);

console.log(courses.has('Remaining Courses'));
console.log(courses.has('Front-end Development'));
console.log(courses.has('is it exist'));

console.log(courses.get('Remaining Courses'));
console.log(courses.get('is it exist'));

