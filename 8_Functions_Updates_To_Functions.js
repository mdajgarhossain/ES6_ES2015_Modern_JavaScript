//::::::::::::::::::::::::::::::::::Lesson 2- Functions::::::::::::::::::::::::::::::::
//:::::::::::::::::::Lecture 1- Updates To Functions::::::::::::::::

//::::::::::::::::::Arrow Functions::::::::::::::::::::

// const upperizedNames = ['Ajgar', 'Hossain', 'Jewel'].map(function(name) {// regular (callback) function
//     return name.toUpperCase();
// });
// console.log(upperizedNames);


//:::::::::::Convert a function to an arrow function:::::::::::::

const upperizedNames = ['Ajgar', 'Hossain', 'Jewel'].map(
    name => name.toUpperCase() // arrow function
);
console.log(upperizedNames);


//:::another example:::
// function myFunction(name) { //regular function
//     return `My name is ${name}!`;
// }
// console.log(myFunction('Ajgar'));


// const myName = name => `My name is ${name}!` //arrow function
// console.log(myName('Ajgar'));


//:::another example:::
// function myFunction(name, profession) { //regular function
//     console.log(`My name is ${name} and I am a ${profession}!`);
// }
// myFunction('Ajgar', 'Software Developer');

const myFunction = (name, profession) => console.log(`My name is ${name} and I am a ${profession}!`); // arrow function
myFunction('Jewel', 'Software Developer');


const introduceMyself = (name, profession) => console.log(`My name is ${name} and I am a ${profession}!`); // arrow function
introduceMyself('Ajgar', 'Software Developer');


//:::another example:::
const names = ['Afghanistan', 'Aruba', 'Bahamas', 'Chile', 'Fiji', 'Gabon', 'Luxembourg', 'Nepal', 'Singapore', 'Uganda', 'Zimbabwe'];

// const longNames = names.filter(function(name) {  //regular function
//     return name.length > 6;
// });
// console.log(longNames);

const longNames = names.filter(name => name.length > 6); //arrow function
console.log(longNames);

