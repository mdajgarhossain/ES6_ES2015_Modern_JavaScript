//::::::::::::::::::::::::::::::::::Lesson 3- Built-ins :::::::::::::::::::::::::::::::
//::::::::::::::::: Lecture 13- Generators :::::::::::::::::::::


//:::::::::::::: Regular function :::::::::
/*function getEmployee() {
    console.log('The function has started');

    const names = ['Ajgar', 'Jewel', 'Karim', 'Rahim', 'Amla'];
    
    for(const name of names) {
        console.log(name);
    }

    console.log('The function has ended');
}

getEmployee();*/


//::::::::::::: Pausable Functions :::::::::::::

/*function* getEmployee() {
    console.log('The function has started');

    const names = ['Ajgar', 'Jewel', 'Karim', 'Rahim', 'Amla'];
    
    for(const name of names) {
        console.log(name);
    }

    console.log('The function has ended');
}

getEmployee();*/


//:::::::::::: Generators & Iterators ::::::::::::
/*function* getEmployee() {
    console.log('The function has started');

    const names = ['Ajgar', 'Jewel', 'Karim', 'Rahim', 'Amla'];
    
    for(const name of names) {
        console.log(name);
    }

    console.log('The function has ended');
}

const generatorIterator = getEmployee();
generatorIterator.next();*/

/*The code never paused! So how do we get this magical, pausing functionality? */

//:::::::::: The Yield Keyword :::::::::::::::

/*function* getEmployee() {
    console.log('The function has started');

    const names = ['Ajgar', 'Jewel', 'Karim', 'Rahim', 'Amla'];
    
    for(const name of names) {
        console.log(name);
        yield;
    }

    console.log('The function has ended');
}

const generatorIterator = getEmployee();
generatorIterator.next();
generatorIterator.next();*/


//:::::::::::Yielding Data to the "Outside" World:::::::::::::::

/*function* getEmployee() {
    console.log('The function has started');

    const names = ['Ajgar', 'Jewel', 'Karim', 'Rahim', 'Amla'];
    
    for(const name of names) {
        yield name;
    }

    console.log('The function has ended');
}

const generatorIterator = getEmployee();
let result = generatorIterator.next();
console.log(result.value);

console.log(generatorIterator.next().value);
console.log(generatorIterator.next().value);*/


//:::::::: All in action ::::::::::

/*function* developers() {
    console.log(`Select Developers one by one`);

    const names = ['JavaScript', 'React', 'NodeJS'];
    for(const name of names) {
        console.log(name);
        yield;
    }

    console.log(`All Developers selected successfully`);
}

const devsIterator = developers();
devsIterator.next();
// devsIterator.next();
// devsIterator.next();
// devsIterator.next();*/

/*Now yeilding data outside the funcion */
function* developers() {
    console.log(`Select Developers one by one`);

    const names = ['JavaScript', 'React', 'NodeJS'];
    for(const name of names) {
        yield name;
    }

    console.log(`All Developers selected successfully`);
}

const devsIterator = developers();
const result = devsIterator.next();
console.log(result.value);
console.log(result.done);

console.log(devsIterator.next().value);
console.log(devsIterator.next().value);

console.log(devsIterator.next().done);
console.log(devsIterator.next().value);


//:::another example:::
function* course() {
    yield 'JavaScript Fundamentals';
    yield 'React';
    // console.log(' fnction ended');
}

const courseIterator = course();
const returnObject = courseIterator.next();
console.log(returnObject.value);

console.log(courseIterator.next().value);
console.log(courseIterator.next());

