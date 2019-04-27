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


