//::::::::::::::::::::::::::::::::::Lesson 2- Functions::::::::::::::::::::::::::::::::
//:::::::::::::::::Lecture 5- Defaults and Destructuring::::::::::::::::

//::::::::::Defaults and destructuring arrays:::::::::::::::

// function createGrid([width = 5, height = 5]) {
//     return `Generates a ${width} x ${height} grid`;
// }
// console.log(createGrid([]));
// console.log(createGrid([2]));
// console.log(createGrid([2, 3]));
// console.log(createGrid([undefined, 3]));
// console.log(createGrid([, 7]));
// console.log(createGrid([7, undefined]));

/*There is a problem with this though, the following code will not work: */
// console.log(createCrid()); // throws an error

/*But, we can use default function parameters for this! */
// function createGrid([width = 5, height = 5] = []) {
//     return `Generates a ${width} x ${height} grid`;
// }
// console.log(createGrid());


//:::another example:::

// function houseDescriptor([houseColor = 'green', shutterColors = ['red']]) {
//     return `I have a ${houseColor} house with ${shutterColors.join(' and ')} shutters`;
//     // return `I have a ${houseColor} house with ${shutterColors} shutters`;
// }
// console.log(houseDescriptor([]));
// console.log(houseDescriptor(['blue']));
// console.log(houseDescriptor(['blue', []]));
// console.log(houseDescriptor(['blue', ['white']]));
// // console.log(houseDescriptor(['blue', 'white']));
// console.log(houseDescriptor([, ['white']]));
// console.log(houseDescriptor(['yellow', ['gray', 'pink']]));
// console.log(houseDescriptor(['yellow', ['gray', 'white', 'pink']]));

//:::another example:::

/*without defaults */
// function introduce([name, profession]) {
//     return `My name's ${name} and I am a ${profession}!`;
// }
// console.log(introduce(['Jewel', 'Software Developer']));
// console.log(introduce([, 'Web Developer']));
// console.log(introduce([]));

/*set defaults */
// function introduce([name = 'User', profession = 'Student']) {
//     return `My name's ${name} and I am a ${profession}!`;
// }
// console.log(introduce(['Jewel', 'Software Developer']));
// console.log(introduce([, 'Web Developer']));
// console.log(introduce([]));
// // console.log(introduce());  //throws an error because parameter is an array


/*to avoid this error we can use '= []' as defaults value of entire array */
// function introduce([name = 'User', profession = 'Student'] = []) {
//     return `My name's ${name} and I am a ${profession}!`;
// }
// console.log(introduce(['Jewel', 'Software Developer']));
// console.log(introduce([, 'Web Developer']));
// console.log(introduce([]));
// console.log(introduce());  //now, no errors

//:::another example:::
function add([num1 = 5, num2 = 5, num3 = [7]]) {
    result = num1 + num2;
    for(const element of num3) {
        output = result + element;
        return `${num1} + ${num2} + ${num3} = ${output}`;
    }
    // return `${num1} + ${num2} + ${num3} = ${output}`;
}
console.log(add([1, 2]));
console.log(add([1, 2, [3]]));
console.log(add([1, 2, []]));  // return undefined
console.log(add([1, , [3]]));
console.log(add([, , [3]]));
console.log(add([]));


//Pending problem
// function add([num1 = 5, num2 = 5, num3 = [7]]) {
//     result = num1 + num2;
//     for(const element of num3) {
//         output = result + element;
//         // return `${num1} + ${num2} + ${num3} = ${output}`;
//     }
//     return `${num1} + ${num2} + ${num3} = ${output}`;
// }
// console.log(add([1, 2, [3, 4]]));


//::::::::::::::::::::::Defaults and destructuring objects::::::::::::::::::::

/*First we can see regular object destructuring */
// const obj1 = {
//     name: 'Jewel',
//     age: 25
// };
// console.log(obj1);
// console.log(obj1.name);
// console.log(obj1.age);

// const {name, age} = obj1;
// console.log(name);
// console.log(age);

// const{age} = obj1;
// console.log(age);

/*Now Defaults with Destructuring Objects*/
// function createSundae({scoops = 1, toppings = ['Hot Fudge']}) {
//     const scoopText = scoops === 1 ? 'scoop' : 'scoops';
//     return `Your sundae has ${scoops} ${scoopText} with ${toppings.join(' and ')} toppings.`;
// }
// console.log(createSundae({}));
// console.log(createSundae({scoops: 2}));
// console.log(createSundae({scoops: 2, toppings: ['Sprinkles']}));
// console.log(createSundae({scoops: 3, toppings: []}));
// console.log(createSundae({toppings: ['Cookie Dough']}));

// console.log(createSundae()); // throws an error

/*We can prevent this issue by providing a default object to the function: */
// function createSundae({scoops = 1, toppings = ['Hot Fudge']} = {}) {
//     const scoopText = scoops === 1 ? 'scoop' : 'scoops';
//     return `Your sundae has ${scoops} ${scoopText} with ${toppings.join(' and ')} toppings.`;
// }
// console.log(createSundae());
// console.log(createSundae({toppings: ['Sprinkles', 'Cookie Dough']}));


//:::another example:::
function houseDescriptor({houseColor = 'green', shutterColors = ['red']} = {}) {
    return `I have a ${houseColor} house with ${shutterColors.join(' and ')} shutters`;
}
console.log(houseDescriptor({houseColor: 'red', shutterColors: ['white', 'gray', 'blue']}));
console.log(houseDescriptor({houseColor: 'red'}));
console.log(houseDescriptor({shutterColors: ['green', 'blue']}));
console.log(houseDescriptor({}));
console.log(houseDescriptor());


//:::another example:::
function myFunction({name = 'Student', profession = ['Software Developer']} = {}) {
    return `My name is ${name} and I am a ${profession.join(' and ')}.`;
}
console.log(myFunction());
console.log(myFunction({}));
console.log(myFunction({name: 'Ajgar', profession: ['JavaScript Programmer']}));
console.log(myFunction({name: 'Jewel'}));
console.log(myFunction({profession: ['Coder']}));
console.log(myFunction({name: 'Ajgar', profession: ['JavaScript Developer', 'Engineer']}));

