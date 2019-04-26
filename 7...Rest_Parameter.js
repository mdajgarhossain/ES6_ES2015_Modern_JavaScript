//::::::::::::::::::::::::::::::::::Lesson 1- Syntax::::::::::::::::::::::::::::::::::
//:::::::::::::::::::Lecture 7- ...Rest Parameter::::::::::::::::

/*The rest parameter, also written with three consecutive dots ( ... ), allows you to represent an indefinite number of elements as an array.*/

// const order = [20.17, 18.67, 1.50, "cheese", "eggs", "milk", "bread"];

// console.log(order);
// console.log(...order);//spread operator

// const [total, subtotal, tax, ...elements] = order;//destructuring elements with Rest Parameter
// console.log(total, subtotal, tax, elements);

// const[total, ...elements] = order;
// console.log(total, elements);

// const [total, subtotal, ...items] = order;
// console.log(total, subtotal, items);
// console.log(subtotal);
// console.log(items);

// const [total, , ...items] = order; //ignores subtotal
// console.log(total, items);


/*another example */
// const allNames = ['Ajgar', 'Hossain', 'Jewel'];
// console.log(...allNames);//spread operator

// function printNames(...names) { //rest parameter will package up all spread or expanded arguments into an array(opposite to spread operator)
//     console.log(names); 
    
//     for(name of names) {
//         console.log(name);
//     }
// }
// printNames('Ajgar', 'Hossain', 'Jewel');

/*same example with spread opeartor */
// const allNames = ['Ajgar', 'Hossain', 'Jewel', 'Karim'];

// function printNames(name1, name2, name3) {
//     console.log(name1, name2, name3);
// }
// printNames(...allNames);


/*Using Spread operator and Rest parameter alltogether */
const allNames = ['Ajgar', 'Hossain', 'Jewel', 'Karim'];

function printNames(name1, name2, name3, name4) {
    console.log(name1, name2, name3, name4);
    function usingRestParameter(...packageUpNames) {
        console.log(packageUpNames);    
    }
    usingRestParameter(name1, name2, name3, name4);
}
printNames(...allNames);

/***NOTE: We can think of the rest parameter like the opposite of the spread operator;
  if the spread operator is like unboxing all of the contents of a package, then the 
  rest parameter is like taking all the contents and putting them back into the package. */



//:::::::::::::::::::::Variadic functions:::::::::::::::::::::

/*Variadic functions are functions that take an indefinite number of arguments.*/

// function sum(...allNumbers) {
//     let result = 0;
//     for(const number of allNumbers) {
//         // console.log(number);
//         result += number;
//     }
//     console.log(result); 
// }
// sum(1, 2, 3, 4);
// sum(1, 2);
// sum(10, 36, 7, 84, 90, 110);
// sum(-23, 3000, 575000);



//::::::::::::Using the arguments object::::::::::::::::::
/*In previous versions of JavaScript, this type of function would be handled using the
arguments object. The arguments object is an array-like object that is available as a
local variable inside all functions. It contains a value for each argument being
passed to the function starting at 0 for the first argument, 1 for the second argument,and so on. */

// function sum() {
//     let total = 0;
//     for(const argument of arguments) {
//         // console.log(argument);
//         total += argument;
//     }
//     console.log(total); 
// }
// sum(1, 2, 3, 4);
// sum(1, 2);
// sum(10, 36, 7, 84, 90, 110);
// sum(-23, 3000, 575000);

//:::::::::::::::Using the rest parameter:::::::::::::

function sum(...nums) {
    let total = 0;
    for(const num of nums) {
        total += num;
    }
    return total; 
}
console.log(sum(1, 2, 3, 4));
console.log(sum(1, 2));
console.log(sum(10, 36, 7, 84, 90, 110));
console.log(sum(-23, 3000, 575000));

//:::another example:::
function average(...nums) {
    let sum = 0;
    for (const num of nums) {
      sum += num;
    }
    if (nums.length > 0) {
      return sum / nums.length;
    }
    return 0;
  }
  
console.log(average(2, 6));
console.log(average(2, 3, 3, 5, 7, 10));
console.log(average(7, 1432, 12, 13, 100));
console.log(average());

