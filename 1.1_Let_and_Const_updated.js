//::::::::::::::::::::::::::::::::::Lesson 1- Syntax::::::::::::::::::::::::::::::::::

//:::::::::::::::::::why let and const ?::::::::::::::::::::

// function getClothing(isCold) {
//     if(isCold) {
//         var freezing = 'Grab a jacket';
//     }
//     else {
//         var hot = `It's a shorts kind of day`;
//         console.log(freezing);        
//     }
// }
// getClothing(false); //return 'undefined' because of Hoisting

//:::::::::::::::::::::Hoisting:::::::::::::::::::

/*So at run-time, the getClothing() function actually looks more like this*/
// function getClothing(isCold) {
//     var freezing, hot;
//     if(isCold) {
//         freezing = `Grab a jacket`;
//     }
//     else {
//         hot = `It's a shorts kind of day`;
//         console.log(freezing);
//     }
// }
// getClothing(false);

//:::::::::::::::::::::::::::Let and Const:::::::::::::::::::

/* Use 'let' */
// function getClothing(isCold) { 
//     if(isCold) {
//         let freezing = 'Grab a jacket';
//         console.log(freezing);      
//     }
//     else {
//         let hot = `It's a shorts kind of day`;
//         console.log(freezing);
//     }
// }
// getClothing(false);//Retutn: Uncaught ReferenceError: freezing is not defined, because variable 'freezing' is not scoped to this block else{}. That means freezing is not declared inside the else statement, the function scope, or the global scope, a ReferenceError is thrown.


/* Use 'const' */
// function getClothing(isCold) { 
//     if(isCold) {
//         const freezing = 'Grab a jacket';
//         console.log(hot);      
//     }
//     else {
//         const hot = `It's a shorts kind of day`;
//         console.log(hot);
//     }
// }
// getClothing(true);//Retutn: Uncaught ReferenceError: hot is not defined, because variable 'hot' is not scoped to this block if{}


/*For using 'let' and 'const', variable is stuck in what is known as the temporal dead zone until the variable’s declaration is processed.
Now we declared variable 'hot' in this if{} block*/
// function getClothing(isCold) { 
//     if(isCold) {
//         const freezing = 'Grab a jacket';
//         const hot = `It's a shorts kind of day`;
//         console.log(hot);      
//     }
//     else {
//         const hot = `It's a shorts kind of day`;
//         console.log(hot);
//     }
// }
// getClothing(true);


/*If we use 'var' instead of 'let'*/
function getClothing(isCold) { 
    if(isCold) {
        var freezing = 'Grab a jacket';
        console.log(freezing);      
    }
    else {
        let hot = `It's a shorts kind of day`;
        console.log(freezing);
    }
}
getClothing(false);//Return: undefined, because of using 'var' keyword instead of 'let' variable "freezing" is hoisted top of the function scope

