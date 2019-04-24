//::::::::::::::::::::::::::::::::::Lesson 1- Syntax::::::::::::::::::::::::::::::::::
//:::::::::::::::::::Lecture 4- Object Literal Shorthand::::::::::::::::

/*unnecessary repetition of code example */
let name = 'Jewel';
let age = 25;
let profession = 'Software Developer';

// const person = {
//     name: name,
//     age: age,
//     profession: profession
// };

// console.log(person);


//::::::::::::::::::::::::Object literal shorthand::::::::::::::::::::::

/*The good news is that you can remove those duplicate variables names from object properties _if_ the properties have the same name as the variables being assigned to them. */
// const person = {name, age, profession};

// console.log(person);


//::::::::::::::::Shorthand method names:::::::::::::::::::

// const person = {
//     name,
//     age,
//     profession,
//     introduce: function() {
//         console.log(`My name is ${this.name} and I am a ${this.profession}.`);
//     }
// };
// console.log(person);
// person.introduce();

/*In this example, an anonymous function is being assigned to the property calculateWorth, but is the function keyword really needed? In ES6, it’s not! */
const person = {
    name,
    age,
    profession,
    introduce() {
        console.log(`My name is ${this.name} and I am a ${this.profession}.`);
    }
};

console.log(person);
person.introduce();
