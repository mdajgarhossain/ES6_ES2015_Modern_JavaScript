//::::::::::::::::::::::::::::::::::Lesson 3- Built-ins :::::::::::::::::::::::::::::::
//::::::::::::::::: Lecture 10- WeakMaps :::::::::::::::::::

//::::::::::: What is a WeakMap? ::::::::::::
/*A WeakMap can only contain objects as keys */

const course1 = {title: 'jQuery', duration: 3};
const course2 = {title: 'Bootstrap', duration: 5};

const tutorials = new WeakMap();
tutorials.set(course1, true);
tutorials.set(course2, false);

// tutorials.set('course3', 'React'); // throw an error

console.log(tutorials);


const library = new WeakMap();
library.set({title: 'Book-1'}, 'JavaScript');
library.set({title: 'Book-1'}, 'EcmaScript 6');

console.log(library);

//:::::::::::::::::Garbage Collection::::::::::::
const frameworks = new WeakMap();

frameworks.set({name: 'React'}, {duration: 15});
frameworks.set({name: 'Express'}, 'nodeJS');

let myFramework = {name: 'React/Redux', duration: '3 days'};
frameworks.set(myFramework, true);

console.log(frameworks);
console.log(frameworks.has(myFramework));

myFramework = null;
console.log(frameworks);
console.log(frameworks.has(myFramework));

