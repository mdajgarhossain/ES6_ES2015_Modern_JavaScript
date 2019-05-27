//::::::::::::::::::::::::::::::::::Lesson 3- Built-ins :::::::::::::::::::::::::::::::
//::::::::::::::::: Lecture 7- Maps :::::::::::::::::::

//::::::We know Map Before ES6 ::::::
/* A Map is an array Method which returns a new array*/
const myArray = [1, 2, 3, 4, 5];

const newArray = myArray.map(function(elem) {
    elem = elem + 100;
    return elem;
});

console.log(newArray);


//:::::::::Maps in ES6::::::::::::::::::::
/*The data types Maps in ES6 is a new built-in. Essentially, a Map is an object that
lets you store key-value pairs where both the keys and the values can be objects,
primitive values, or a combination of the two.*/

//:::How to Create a Map:::

const employees = new Map();
console.log(employees);

//:::Modifying Maps:::

const developers = new Map();

developers.set('jewel.hossain@gmail.com', {
    firstName: 'Jewel',
    lastName: 'Hossain',
    role: 'JavaScript Developer'
});

developers.set('Ajgar', 'JavaScript developer');

developers.set('Front-end Developer', {
    name: 'Ajgar',
    age: 25
});

developers.set('age', 27);

developers.set({name: 'Programmers'}, {name: 'Coders'});

console.log(developers);

//:::another example:::
const courses = new Map();

const setOfCourses = new Set(['HTML', 'CSS', 'JavaScript', 'OO JavaScript', 'ES6', 'jQuery', 'Bootstrap', 'React', 'Redux']);
courses.set('Front-end Development', setOfCourses);

const extraCourses = new Set(['DOM', 'APIs', 'Git']);
courses.set('Front-end Development', extraCourses);

console.log(courses);


//:::another example:::
// const fullStack = new Map('key', 'value');
// console.log(fullStack);  //throw an error

// const fullStack = new Map({name: 'Karim'}, {name: 'rahim'});
// console.log(fullStack);  //throw an error


//:::another example:::
const webDeveloper = new Map();

webDeveloper.set('Front-end', setOfCourses);
webDeveloper.set('Back-end', 'Coming soon');

webDeveloper.delete('Back-end');

webDeveloper.clear();

console.log(webDeveloper);

