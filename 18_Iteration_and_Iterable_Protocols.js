//::::::::::::::::::::::::::::::::::Lesson 3- Built-ins :::::::::::::::::::::::::::::::
//:::::::::::::::::Lecture 2- Iteration & Iterable Protocols:::::::::::::

//:::::::::Iteration:::::::::::::::

/*When we looping over an array the process of getting the next item, one after the other is Iteration */

// const numbers = [1,2,3,4,5];
// for(const number of numbers) {
//     console.log(number);
// }

/*Note: The data types String, Array, Map, Set follow the iterable protocols
And Objects are not iterable by default */

//:::::::::Iterable and Iterator::::::::::::::::

/*
Iterable:
An Iterable is any object that implements a method whose key is Symbol.Iteartor
and this method is going to return an Iterator,

Itearble {
    [Symbol.Iteartor]() : Iterator;
}

Iterator:
An Iteartor is an object that is going to implement the next() method and this next()
method knows how to access elements in a collection (be it an array or a string or map
or set). And it return an object called IResultObj & this object contains two
properties. First property is value and this can be any data type and this value is
going to be the actual value within the collection. Second property is a boolean flag 
called done and this done indicates the iteration is complete or not, so if done is
true the iteration is complete or if done is false there are more elements to be iterated over .

Iterator {
    next() : IResultObj;
}
IResultObj {
    value: any
    done: boolean
}

Note: In ES2015(ES6) Array, String, Map, Set are all Iterable.

*/

//:::Create our own Iterator:::

// let iterable = [1, 2, 3];

// function createIterator(array) {
//     let count = 0;
//     return {
//         next: function() {
//             return count < array.length ? 
//             {value: array[count++], done: false} : {value: undefined, done: true};
//         } 
//     }
// }

// let myIterator = createIterator(iterable);
// console.log(myIterator.next());
// console.log(myIterator.next());
// console.log(myIterator.next());

// console.log(myIterator.next());



/*From line 69 to  97 is optional*/

/*For...of loop applicable only for iterable objects, so now we are gonna aplly for...of loop in the above array or iterable object*/

// let iterable = [1, 2, 3];
// for(const value of iterable) {
//     console.log(value);
// }

/*So we can see under the hood this happens */
// let iterable = [1, 2, 3];

// function createIterator(array) {
//     let count = 0;
//     return {
//         next: function() {
//             result =  count < array.length ? 
//             {value: array[count++], done: false} : {value: undefined, done: true};
//             return result.value;
//         } 
//     }
// }

// let myIterator = createIterator(iterable);
// console.log(myIterator.next());
// console.log(myIterator.next());
// console.log(myIterator.next());

// console.log(myIterator.next());


//:::Iterating Objects::::
/*Objects are not iterable by default, so they don't work with the for...of loop by default */
let person = {
    fname:'Ajgar',
    lname:'Hossain'
};

// for(const props of person) {
//     console.log(props);  //throw an error
// }

/*Now we are gonna iterating this person Object */
person[Symbol.iterator] = function() {
    let properties  = Object.keys(person);
    let count = 0;
    let isDone = false;
    let next = () => {
        if(count >= properties.length) {
            isDone = true;
        }
        return {done: isDone, value: this[properties[count++]]};
    }
    return {next};
};

for(const props of person) {
    console.log(props);  //this time no errors
}


//:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
//::::::::::::::::::::From the lecture's discussion:::::::::::::::::

/*Two new protocols in ES6
1. Iterable protocol and 2. Iterator protocol */

//::::::::The Iterable Protocol:::::::::
/*The iterable protocol is used for defining and customizing the iteration behavior of objects. strings and arrays are built-in iterables. */

// const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// for(const digit of digits) {
//     console.log(digit);
// }


//::::::::The Iterator Protocol:::::::::
/*The iterator protocol is used to define a standard way that an object produces a sequence of values.  */

const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const arrayIterator = digits[Symbol.iterator]();

console.log(arrayIterator);
console.log(arrayIterator.next());
console.log(arrayIterator.next());
console.log(arrayIterator.next());


// const myObject = {
//     name: 'Jewel',
//     age: 25
// }

// const objIterator = myObject[Symbol.iterator](); // in this case we have to implement our own [Symbol.iterator]() method
// console.log(objIterator.next());

