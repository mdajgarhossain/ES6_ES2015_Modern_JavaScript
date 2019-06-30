//::::::::::::::::::::::::::::::::::Lesson 3- Built-ins :::::::::::::::::::::::::::::::
//::::::: Lecture 13.1 - Generators: Sending Data into/out of a Generator::::::::

/** So we can get data out of a generator by using the yield keyword. We can also send 
data back into the generator, too. We do this using the .next() method:*/

// function* displayResponse() {
//     const response = yield;
//     console.log(`Your resonse is "${response}"!`);
// }

// const iterator = displayResponse();
// iterator.next();
// iterator.next('Hello Developers');


//:::another example:::
// function* mobile() {
//     const myMobile = yield;
//     console.log(`My Mobile is "${myMobile}"!`);
// }

// const mobileIterator = mobile();
// mobileIterator.next();
// mobileIterator.next('SAMSUNG');
// mobileIterator.next();

/*So the yield keyword is 
        used to pause a generator and 
        used to send data outside of the generator, and 
        then the .next() method is used to pass data into the generator */


function* getEmployee() {
    const names = ['Ajgar', 'Jewel', 'Hossain', 'Arman', 'Karim'];
    const facts = [];

    for(const name of names) {
        facts.push(yield name);
    }

    return facts;
}

const generatorIterator = getEmployee();
// console.log(generatorIterator.next().value);

let name = generatorIterator.next().value;
// console.log(name);
name = generatorIterator.next(`${name} is cool!`).value;
// console.log(name);
name = generatorIterator.next(`${name} is good!`).value;
name = generatorIterator.next(`${name} is awesome!`).value;
name = generatorIterator.next(`${name} is best!`).value;

const positions = generatorIterator.next(`${name} is magnificent!`).value;
console.log(positions.join('\n'));

