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