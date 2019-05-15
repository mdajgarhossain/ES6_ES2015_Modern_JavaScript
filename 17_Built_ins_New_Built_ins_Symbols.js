//::::::::::::::::::::::::::::::::::Lesson 3- Built-ins :::::::::::::::::::::::::::::::
//:::::::::::::::::Lecture 1- Symbols Intro and Symbols:::::::::::::

/*Symbol() is a new addition of primitive data types in JavaScript */

//::::::::::::::Symbols::::::::::::::::::

/*A symbol is a unique and immutable data type that is often used to identify object properties.
To create a symbol, we write Symbol() with an optional string as its description. */

const sym1 = Symbol('apple');
console.log(sym1);

const sym2 = Symbol('banana');
const sym3 = Symbol('banana');
console.log(sym2 === sym3);

// const bowl = {
//     apple: {color: 'red', weight: 136.078},
//     banana: {color: 'yellow', weight: 183.151},
//     orange: {color: 'orange', weight: 170.097},
// };
// console.log(bowl);

/*add another banana */
// const bowl = {
//     apple: {color: 'red', weight: 136.078},
//     banana: {color: 'yellow', weight: 183.151},
//     orange: {color: 'orange', weight: 170.097},
//     banana: {color: 'yellow', weight: 176.845}
// };
// console.log(bowl);

/*previous banana is overwritten, to fix this we can use Symbol() */
const bowl = {
    [Symbol('apple')]: {color: 'red', weight: 136.078},
    [Symbol('banana')]: {color: 'yellow', weight: 183.151},
    [Symbol('orange')]: {color: 'orange', weight: 170.097},
    [Symbol('banana')]: {color: 'yellow', weight: 176.845}
};
console.log(bowl);

//:::another example:::
// const developers = {
//     name: 'Ajgar Hossain',
//     age: 25,
//     religion: 'Islam',
//     country: 'Bangladesh',
//     name: 'Jewel'
// }
// console.log(developers);

/*To fix property overwritten I use Sumbols() */
const developers = {
    [Symbol('name')]: 'Ajgar Hossain',
    [Symbol('age')]: 25,
    [Symbol('religion')]: 'Islam',
    [Symbol('country')]: 'Bangladesh',
    [Symbol('name')]: 'Jewel'
}
console.log(developers);

//:::another example:::
// const programmer = {
//     name: 'Ajgar Hossain',
//     age:25,
//     language: {name: 'JavaScript', framework: 'React'},
//     language: 'C/C++'
// }
// console.log(programmer);

const programmer = {
    name: 'Ajgar Hossain',
    age:25,
    [Symbol('language')]: {name: 'JavaScript', framework: 'React'},
    [Symbol('language')]: 'C/C++'
}
console.log(programmer);
