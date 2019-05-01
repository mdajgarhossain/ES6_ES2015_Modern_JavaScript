//::::::::::::::::::::::::::::::::::Lesson 2- Functions::::::::::::::::::::::::::::::::
//:::::::::::::::::Lecture 6- JavaScript Classes::::::::::::::::


//::::::::::::::ES5 "Class" Recap:::::::::::::

// function Developers(name,language, job) {
//     this.name = name;
//     this.language = language;
//     this.job = job;
// }

// Developers.prototype.introduce = function() {
//     console.log(`Howdy, My name's ${this.name} and I am a ${this.job}!`);
// }

// const jewel = new Developers('Jewel', 'JavaScript', 'Software Developer');
// console.log(jewel);
// jewel.introduce();

// const ajgar = new Developers('Ajgar', 'JavaScript', 'Web Programmer');
// console.log(ajgar);
// ajgar.introduce();


//:::another example:::

// function Plane(numEngines) {
//     this.numEngines = numEngines;
//     this.enginesActive = false;
// }

// // methods "inherited" by all instances
// Plane.prototype.startEngines = function() {
//     console.log(`Starting engines...`);
//     this.enginesActive = true;
// }

// const jewelsPlane = new Plane(7);
// console.log(jewelsPlane);
// jewelsPlane.startEngines();

// const ajgarsPlane = new Plane(3);
// console.log(ajgarsPlane);
// ajgarsPlane.startEngines();


/*NOTE: 
the constructor function is called with the new keyword
the constructor function, by convention, starts with a capital letter
the constructor function controls the setting of data on the objects that will be created
"inherited" methods are placed on the constructor function's prototype object */

//::::::::::::::::::::ES6 Classes::::::::::::::::::::::::::

/*same 'Plane' class would look like if it were written using the new 'class' syntax: */
class Plane {
    constructor(numEngines) {
        this.numEngines = numEngines;
        this.enginesActive = false;
    }

    startEngines() {
        console.log(`Starting engines...`);
        this.enginesActive = true;
    }
}

const karimsPlane = new Plane(5);
console.log(karimsPlane);
karimsPlane.startEngines();


//:::another example:::
class Developers {
    constructor(name, language, job) {
        this.name = name;
        this.language = language;
        this.job = job;
    }

    introduce() {
        console.log(`My names's ${this.name} and I am a ${this.job}!`);        
    }

    favoriteLanguage() {
        console.log(`My favorite programming language is ${this.language}!`);
    }
}

const karim = new Developers('Karim', 'JavaScript', 'Software Developer');
console.log(karim);
karim.introduce();
karim.favoriteLanguage();

