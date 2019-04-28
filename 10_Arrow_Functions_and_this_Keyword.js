//::::::::::::::::::::::::::::::::::Lesson 2- Functions::::::::::::::::::::::::::::::::
//:::::::::::::::::Lecture 3- Arrow Functions and the "this" Keyword::::::::::::::

//::::::::::::::::::::::"this" and Regular Functions:::::::::::::::::::::::

/*The value of the 'this' keyword is based completely on how its function (or method)
 is called. 'this' could be any of the following: */


// 1. A new object
// function Person(name, age, profession) {
//     this.name = name;
//     this.age = age;
//     this.profession = profession;
//     this.introduce = function() {
//         console.log(`My name's ${this.name} and I am a ${this.profession}!`);
//     }
// }

// const person1= new Person('Ajgar', 25, 'Software Developer');
// console.log(person1);
// person1.introduce();


// 2. A specified object
const obj1 = {
    name: 'Karim',
    age: 25,
    printName: function() {
        console.log(`Hello, My name is ${this.name}!`);
    }
};

const obj2 = {
    name: 'Rahim',
    age: 27
};

obj1.printName.call(obj2);
obj1.printName.apply(obj2);


// 3. A context object
const topics = {
    language: 'JavaScript',
    library: 'React',
    print: function() {
        console.log(`I love ${this.language}!`);
    }
};

topics.print(); //In this code, the value of 'this' inside print() will refer to 'topics' object.


// 4. The global object or undefined

/*If the function is called with no context: */
function introduce(language) {
    console.log(`My favorite programming language is ${this.language}!`);
}

introduce('JavaScript');


//:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

//:::::::::::::::::::::::::"this" and Arrow Functions::::::::::::::::::::::::::::::::::

/*With regular functions, the value of 'this' is set based on how the function is 
called. With arrow functions, the value of 'this' is based on the function's 
surrounding context. In other words, the value of 'this' inside an arrow function is 
the same as the value of 'this' outside the function. */

// constructor
// function IceCream() {
//     this.scoops = 0;
// }

// add scoop to ice cream
// IceCream.prototype.addScoop = function() {
//     setTimeout(function() { 
//         this.scoops++;
//         // console.log(this);
//         console.log(`Scoop Added!`);
//         // console.log(dessert.scoops);
//     }, 2000);
// };

// const dessert = new IceCream();
// console.log(dessert);
// dessert.addScoop();
// console.log(dessert.scoops);


// One way around this is to use closure:
// constructor
// function IceCream() {
//     this.scoops = 0;
// }

// add scoop to ice cream
// IceCream.prototype.addScoop = function() {
//     const cone = this;
//     setTimeout(function() { 
//         cone.scoops++;
//         // console.log(this);
//         console.log(`Scoop Added!`);
//         console.log(dessert);
//         console.log(dessert.scoops);      
//     }, 0.5);
// };

// const dessert = new IceCream();
// console.log(dessert);
// dessert.addScoop();
// console.log(dessert.scoops);
// console.log(dessert);



/*Well that's exactly what arrow functions do, so let's replace the function passed to setTimeout() with an arrow function: */

// constructor
// function IceCream() {
//     this.scoops = 0;
// }

// add scoop to ice cream
// IceCream.prototype.addScoop = function() {
//     setTimeout( () => {    // an arrow function is passed to setTimeout
//         this.scoops++;
//         console.log(this);
//         console.log(`Scoop Added!`);
//         console.log(dessert);
//         console.log(dessert.scoops);
//     }, 2000);
// };

// const dessert = new IceCream();
// console.log(dessert);
// dessert.addScoop();
// dessert.addScoop();


/*Now what would happen if we changed the addScoop() method to an arrow function? */
// constructor
function IceCream() {
    this.scoops = 0;
}

// add scoop to ice cream
IceCream.prototype.addScoop = () => {  // addScoop is now an arrow function
    setTimeout( () => {
        this.scoops++;
        console.log(this);
        console.log(`Scoop Added!`);
        console.log(dessert);
        console.log(dessert.scoops);
    }, 2000);
};

const dessert = new IceCream();
console.log(dessert);
dessert.addScoop();

/***Yeah, this doesn't work for the same reason - arrow functions inherit their 'this'
value from their surrounding context. Outside of the addScoop() method, the value of
'this' is the global object. So if addScoop() is an arrow function, the value of
'this' inside addScoop() is the global object. Which then makes the value of 'this' in
the function passed to setTimeout() also set to the global object! */

