//::::::::::::::::::::::::::::::::::Lesson 1- Syntax::::::::::::::::::::::::::::::::::
//:::::::::::::::::::Lecture 2- Template Literals::::::::::::::::

/*Prior to ES6, the old way to concatenate strings together was by using the string concatenation operator ( + ) */
const student = {
    name: 'Jewel',
    guardian: 'Parents'
};

const teacher = {
    name: 'Mr. Kamruzzaman',
    room: 'KZ123'
};

// let message = student.name + ' please see ' + teacher.name + ' in ' + teacher.room + ' to pick up your report card.';

// console.log(message);


/* But it gets more complicated when you need to build multi-line strings. */
// let note = teacher.name + '\n\n' +
// 'Please excuse ' + student.name + '.\n' +
// 'He is recovering from the flu. \n\n' +
// 'Thank you, \n' +
// student.guardian;

// console.log(note);


//:::::::::::::::::::::::::::Template Literals:::::::::::::::::::::

let message = `${student.name} please see ${teacher.name} in ${teacher.room} to pick up your report card.`;

console.log(message);


let note = `${teacher.name}


Please excuse ${student.name}.
He is recovering from the flu.


Thank you,
${student.guardian}`;

console.log(note);
