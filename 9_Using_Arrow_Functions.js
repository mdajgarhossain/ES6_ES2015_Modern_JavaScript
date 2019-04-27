//::::::::::::::::::::::::::::::::::Lesson 2- Functions::::::::::::::::::::::::::::::::
//:::::::::::::::::::Lecture 2- Using Arrow Functions::::::::::::::::

/*Regular functions can be either function declarations or function expressions,
 however arrow functions are always expressions. In fact, their full name is "arrow function expressions" */

 const greet = name => `Hello ${name}!`
 console.log(greet('Ajgar'));
 
 
 //::::::::::Parentheses and arrow function parameteres::::::::::::::::
 
 /* empty parameter list requires parentheses */
 const sayHi = () => console.log(`Hello Developers!`);
 sayHi();
 
 
 /* multiple parameters requires parentheses */
 const topics = (firstTopic, secondTopic) => console.log(`First you need to learn ${firstTopic} then ${secondTopic}.`);
 topics('JavaScript Fundamentals', 'Object-oriented JavaScript');
 
 
 //:::Other Examples:::
 
 const vowels = 'aeiou'.split('');
 const bigVowels = vowels.map((letter) => letter.toUpperCase());
 console.log(bigVowels);
 
 
 const print = _ => console.log(`print() is a arrow function with no parameters!`);
 print();
 
 
 //:::::::::::::::::::Concise and block body syntax:::::::::::::::::
 
 /*concise body syntax */
 // const upperizedNames = ['Ajgar', 'Hossain', 'Jewel'].map(
 //     name => name.toUpperCase()
 // );
 // console.log(upperizedNames);
 
 /*block body syntax */
 const upperizedNames = ['Ajgar', 'Hossain', 'Jewel'].map(name => {
     name.toUpperCase();
     return `${name} has ${name.length} characters in their name!`;
 });
 console.log(upperizedNames);
 
 
 const colors = ['green', 'blue', 'white', 'black', 'Yellow'];
 const favoriteColors = colors.map(color => {
     const jumble = color.split('').reverse();
     return jumble.join('') + '!';
 });
 console.log(favoriteColors);
 
 