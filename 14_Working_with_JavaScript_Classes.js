//::::::::::::::::::::::::::::::::::Lesson 2- Functions::::::::::::::::::::::::::::::::
//:::::::::::::::::Lecture 7- Working with JavaScript Classes::::::::::::::::

//::::::::Class is just a function::::::::::::::::

// class Developers {
//     constructor(name, language, job) {
//         this.name = name;
//         this.language = language;
//         this.job = job;
//     }

//     introduce() {
//         console.log(`My names's ${this.name} and I am a ${this.job}!`);        
//     }

//     favoriteLanguage() {
//         console.log(`My favorite programming language is ${this.language}!`);
//     }
// }

// const karim = new Developers('Karim', 'JavaScript', 'Software Developer');

// console.log(typeof Developers);  // return function

//:::another example:::

// class Country {
//     constructor(name = 'Bangladesh', capital = 'Dhaka') {  // using Defaults
//         this.name = name;
//         this.capital = capital;
//     }

//     print(population) {
//         console.log(`${this.capital} is the capita of ${this.name}
// and Its population is ${population} crore!`);
//     }
// }

// const country = new Country();
// console.log(country);
// country.print(2.5);

// const america = new Country('America', 'New York');
// console.log(america);
// america.print(10);


//::::::::::::::::::::::::::::Static methods:::::::::::::::::::::::

// class Plane {
//     constructor(numEngines) {
//         this.numEngines = numEngines;
//         this.enginesActive = false;
//     }

//     static badWeather(planes) {
//         for(const plane of planes) {
//             this.enginesActive = false;
//             console.log(`Sorry, ${plane} will not fly because of bad weather!`);
//             // console.log(`Sorry, ${planes.join(' and ')} will not fly because of bad weather!`);
//         }
//     }

//     startEngines() {
//         console.log(`Starting engines...`);
//         this.enginesActive = true;
//     }
// }

// const qatarAirways = new Plane(3);
// console.log(qatarAirways);
// qatarAirways.badWeather(['Plane-1']);  //throws an error

/*The 'static' keyword in front of badWeather() method that makes badWeather() a method that's accessed directly on the Plane class, so we can call it like this: */

// Plane.badWeather(['Plane-1', 'Plane-2']);

//:::another example:::

class Birds {
    constructor(name) {
        this.name = name;
        this.pakhna = true;
    }

    static fly() {  // this method is unchanged, that means this method is same for all instances
        this.pakhna = true;
        console.log(`${this.name} can fly! Ha ha ha...`);
    }

    sounds(sound) {  // this method is dynamic or changeable, that means this method vary from object to object
        console.log(`${this.name} sounds like ${sound}!`);
    }
}

const doel = new Birds('Doel');
console.log(doel);
doel.sounds('Kichir Michir');
Birds.fly();



///:::another example:::
// function Course() {
//     this.name = 'JavaScript';
// }
// const course = Course();  // No errors
// console.log(course);


// /*let's see it in class */
// class Courses {
//     constructor(name) {
//         this.name = 'Rect-Redux';
//     }
// }

// const course1 = Courses();  // throws an error
// const course1 = new Courses();  // Now, No errors
// console.log(course1);

