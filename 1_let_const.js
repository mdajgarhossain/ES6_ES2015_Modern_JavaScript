//Hoisting::::::::::::::::::::::::

// function getClothing(isCold) {
//     if(isCold) {
//         var freezing = 'grab a jacket';
//     }
//     else {
//         var hot = 'It\'s a shorts kind of day';
//         console.log(freezing);
//     }
// }
// getClothing(false);

// function getClothing(isCold) {
//     if(isCold) {
//         var freezing = 'grab a jacket';
//         console.log(freezing);        
//     }
//     else {
//         var hot = 'It\'s a shorts kind of day';
//         console.log(hot);
//     }
// }
// getClothing(true);

//Hoisting issue removed:::::::::::::::::

// function getClothing(isCold) {
//     if(isCold) {
//         let freezing = 'grab a jacket';
//     }
//     else {
//         let hot = 'It\'s a shorts kind of day';
//         console.log(freezing);
//     }
// }
// getClothing(false);

// function getClothing(isCold) {
//     if(isCold) {
//         let freezing = 'Grab a jacket';
//         console.log(freezing);
        
//     }
//     else {
//         const hot = 'It\'s a shorts kind of day';
//         console.log(hot);
//     }
// }
// getClothing(true);
// getClothing(false);


//Rules for using 'let' keyword::::::::::::::::
// let a = 1;

// can be reassigned in the same scope:::
// a = 2;
// a = 3;
// if(true) {
//     let a = 2;
//     console.log(a);  
//     a = 4;
//     console.log(a);    
// }
// a = 70;
// console.log(a);

// can't be redeclared in the same scope:::
// let a = 1;
// Uncaught SyntaxError: Identifier 'a' has already been declared

//Rules for using 'const' keyword::::::::::::::::

//  Must be assigned an initial value:::
// const x;
// Uncaught SyntaxError: Missing initializer in const declaration
const x = 100;

// can't be redeclared in the same scope:::
// const x = 300;

// if(true) {
//     const x= 2;
//     console.log(x);  
//     const x = 4;
//     console.log(x);    
// }
// Uncaught SyntaxError: Identifier 'x' has already been declared

//can't not be reassigned:::
x =700;
// Uncaught TypeError: Assignment to constant variable.

 if(true) {
     const a = 2;
     console.log(a);  
     a = 4;
     console.log(a);    
 }
 // Uncaught TypeError: Assignment to constant variable.
