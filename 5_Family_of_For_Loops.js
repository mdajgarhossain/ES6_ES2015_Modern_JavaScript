//::::::::::::::::::::::::::::::::::Lesson 1- Syntax::::::::::::::::::::::::::::::::::
//:::::::::::::::::::Lecture 5- Family of For Loops::::::::::::::::

//:::::::::::The for loop::::::::::::

// const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// for(let i = 0; i < digits.length; i++) {
//     console.log(digits[i]);
// }

// const newDigits = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// for(let i = 1; i <= newDigits.length; i++) {
//     console.log(newDigits[i-1]);
// }


//::::::::::::The for...in loop::::::::::::::::

// const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// for(const index in digits) {
//     console.log(digits[index]);
// }

// for(const position in digits) {
//     console.log(digits[position]);
// }


//:::another example:::
// Array.prototype.decimalfy = function() {
//     for(let i = 0; i < this.length; i++) {
//         this[i] = this[i].toFixed(2);
//     }
// };

// const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// for(const index in digits) {
//     console.log(digits[index]);
// }


//:::::::::::::::::For...of loop:::::::::::::::::::::::
/*The for...of loop is used to loop over any type of data that is iterable */

// const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// for(const index of digits) {
//     console.log(index);
// }

// for(const digit of digits) {
//     console.log(digit);
// }


/*You can stop or break a for...of loop at anytime. */
// const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// for(const digit of digits) {
//     if(digit % 2 === 0) {
//         continue;
//     }
//     console.log(digit);
// }


/*And we don’t have to worry about adding new properties to objects. The for...of loop will only loop over the values in the object. */
// Array.prototype.decimalfy = function() {
//     for(let i = 0; i < this.length; i++) {
//         this[i] = this[i].toFixed(2);
//     }
// };

// const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// for(const digit of digits) {
//     console.log(digit);
// }


//:::::::::::::::::::::Quiz::::::::::::::::::::::::
/*Directions:
Write a for...of loop that:

1.loops through each day in the days array
2.capitalizes the first letter of the day and 
3.prints the day out to the console */

const days = ['saturday', 'sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday'];

// for(day of days) {
//     console.log(day.toUpperCase());//all uppercase 
// }

// for(day of days) {
//     let upperCase = day.charAt(0).toUpperCase();
//     console.log(upperCase);//only first letter uppercase and logged it
// }

// for(day of days) {
//     let upperCase = day.charAt(2).toUpperCase();
//     console.log(upperCase);//certain index uppercase with charAt() method and only logged it
// }


// for(day of days) {
//     let upperCase = day.charAt(0).toUpperCase() + day.slice(1);
//     console.log(upperCase);
// }


for(day of days) {
    console.log(day.charAt(0).toUpperCase() + day.slice(1));
}



/***Note: Iterable is an object, which one can iterate over. It generates an Iterator
when passed to iter() method. Iterator is an object, which is used to iterate over an
iterable object using __next__() method. ... Note that every iterator is also a
iterable, but not every iterable is an iterator.*/

/***Note: Iterable objects is a generalization of arrays. That’s a concept that allows
to make any object useable in a for..of loop. */