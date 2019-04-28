//::::::::::::::::::::::::::::::::::Lesson 2- Functions::::::::::::::::::::::::::::::::
//:::::::::::::::::Lecture 4- Default Function Parameters::::::::::::::::

// function greet(name, greeting) {
//     if(typeof name !== 'undefined') {
//         name;
//     }
//     else {
//         name = 'Student';
//     }

//     if(typeof greeting !== 'undefined') {
//         greeting;
//     }
//     else {
//         greeting = 'Welcome';
//     }

//     return `${greeting} ${name}`;
// }

// console.log(greet());
// console.log(greet('Jewel'));
// console.log(greet('Jewel', 'Howdy'));

/*same thing with ternary operator*/
// function greet(name, greeting) {
//     name = typeof name !== 'undefined' ? name : 'Student';
//     greeting = typeof greeting !== 'undefined' ? greeting : 'Welcome';

//     return `${greeting} ${name}`;
// }

// console.log(greet());
// console.log(greet('Jewel'));
// console.log(greet('Jewel', 'Howdy'));


/* ES6 has introduced a new way to create defaults. It's called default function parameters. */

//:::::::::::::::::Default function parameters::::::::::::::::

/*Default function parameters are quite easy to read since they're placed in the function's parameter list: */

// function greet(name = 'Student', greeting = 'Welcome') {
//     return `${greeting} ${name}`;
// }
// console.log(greet());
// console.log(greet('Jewel'));
// console.log(greet('Jewel', 'Howdy'));


//:::another example:::

// function myfunction(name = 'Learner', age = 18, profession = 'Student') {
//     console.log(`I am ${name} and I am ${age} years old.`);
//     console.log(`Now I am a ${profession}.`);
// }
// myfunction();
// myfunction('Ajgar');
// myfunction('Ajgar', 25);
// myfunction('Ajgar', 25, 'Software Developer');


// function myfunction(name = 'Learner', age = 18, profession) {
//     console.log(`I am ${name} and I am ${age} years old.`);
//     console.log(`Now I am ${profession}.`);
// }
// myfunction();
// myfunction('Ajgar', 25);
// myfunction('Ajgar', 25, 'Software Developer');


//:::another example:::
function MyConstructor(name = 'Google', area = 'Silicon Valley') {
    this.name = name;
    this.area = area;
    this.contact = function() {
        console.log(`Company Name: ${this.name} and Address: ${this.area}`);
        return () => {
            console.log(`We love ${this.name} and We are all Explorer!`); 
        }
    }
}
const obj1 = new MyConstructor();
console.log(obj1);
console.log(obj1.name);
console.log(obj1.area);
obj1.contact()();


// const obj1 = new MyConstructor('Data Soft', 'Shamoly');
// console.log(obj1);
// console.log(obj1.name);
// console.log(obj1.area);
// obj1.contact()();

