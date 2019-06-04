//::::::::::::::::::::::::::::::::::Lesson 3- Built-ins :::::::::::::::::::::::::::::::
//::::::::::::::::: Lecture 9- Looping Through Maps :::::::::::::::::::

//:::Map Recap:::
// const recapMap = new Map();

// recapMap.set('Country Map', {name: 'Bangladesh', capital: 'Dhaka'});
// recapMap.set('District');
// recapMap.set('District', 'Cumilla');

// recapMap.delete('District');

// console.log(recapMap);

// console.log(recapMap.has('District'));
// console.log(recapMap.has('Country Map'));

// console.log(recapMap.get('District'));
// console.log(recapMap.get('Country Map'));

// recapMap.clear();
// console.log(recapMap);

//:::::::::::::::Looping Through Maps::::::::::::::::::::::::::::::::

//::::::::::::1. Using the MapIterator:::::::::::::::::
const islam = new Map();

islam.set('Base-1', 'Kalima');
islam.set('Base-2', 'Namaz');
islam.set('Base-3','Roza');
islam.set('Base-4', 'Hazz');
islam.set('Base-5', 'Zaqat');

console.log(islam);

const iteratorObjForKeys = islam.keys();
console.log(iteratorObjForKeys.next());
console.log(iteratorObjForKeys.next());
console.log(iteratorObjForKeys.next());
console.log(iteratorObjForKeys.next());
console.log(iteratorObjForKeys.next());
console.log(iteratorObjForKeys.next()); // iteration is over, done is true

const iteratorObjForValues = islam.values();
console.log(iteratorObjForValues.next());
console.log(iteratorObjForValues.next());
console.log(iteratorObjForValues.next()); // iteration is going on, done is false

//::::::::::::::::2. Using a for...of Loop::::::::::::::::::
const prayers = new Map();

prayers.set('Number-1', 'Fajar');
prayers.set('Number-2', 'Duhur');
prayers.set('Number-3', 'Asor');
prayers.set('Number-4', 'Magreeb');
prayers.set('Number-5', 'Esha');

console.log(prayers);

for(const number of prayers) {
    console.log(number);
}

for(const number of prayers) {
    let [key, value] = number;
    // console.log(key, value);
    console.log(key);
    console.log(value);
}

/*for(const number of prayers) {
    for(index of number) {
        if(index === number[0]) {
           key = number[0];
        }
    }
    for(index of number) {
        if(index === number[1]) {
            value = number[1];
        }
    }
    console.log(key, value);
}*/

//::::::::::::::::::3. Using a forEach Loop:::::::::::::::::

//:::Recap forEach():::
const myArray = ['Karim', 'Rahim', 'Jewel'];

myArray.forEach(function printNames(element, index, array) {
    console.log(element, index, array);
});

const myArray2 = ['jQuery', 'Bootstrap', 'React', 'Redux'];

myArray2.forEach((name) => console.log(name));


const courses = new Map();

courses.set('course-1', 'ES6');
courses.set('course-2', 'jQuery');
courses.set('course-3', 'Bootstrap');

console.log(courses);

courses.forEach((value, key) => console.log(key, value));

//Another example
const developers = new Map();

const setOfTopics = new Set(['JavaScript', 'OOP JavaScript', 'ES6', 'jQuery', 'Bootstrap', 'React']);
developers.set('Front-end', setOfTopics);
developers.set('Back-end', ['mySQL', 'nodeJS', 'express']);

console.log(developers);

developers.forEach((value, index) => console.log(index, value));

