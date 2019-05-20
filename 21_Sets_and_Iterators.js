//::::::::::::::::::::::::::::::::::Lesson 3- Built-ins :::::::::::::::::::::::::::::::
//::::::::::::::::: Lecture 5- Sets & Iterators :::::::::::::::::::

//:::::::::Looping over Sets:::::::::::::

/*1. We can use the Set’s default iterator to step through each item in a Set, one by one. */
//:::Using the SetIterator:::

const courses = new Set(['JavaScript', 'OO JavaScript', 'ES6', 'jQuery', 'Bootstrap','AJAX', 'React', 'mySQL', 'NodeJS']);
console.log(courses);

console.log(courses.values());

const iterator = courses.values();
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

console.log(iterator.next()); //done: true, iteration is over

//:::another example:::
const developers = new Set(['Ajgar', 'Hossain', { name: 'Jewel'}]);
console.log(developers);

console.log(developers.values());

myIterator = developers.values();
console.log(myIterator.next());
console.log(myIterator.next());
console.log(myIterator.next());

console.log(myIterator.next()); //done: true, iteration is completed


/*We can use the new for...of loop to loop through each item in a Set. */
//:::Using a for...of Loop:::

const topics = new Set(['ES6', 'jQuery', 'Bootstrap', 'React']);
console.log(topics);

console.log(topics.values());

for(const topic of topics) {
    console.log(topic);
}

//:::another example:::
const colors = new Set(['Green', 'Blue', 'White', 'Sky-blue']);
console.log(colors);

for(const color of colors) {
    console.log(color);
}

