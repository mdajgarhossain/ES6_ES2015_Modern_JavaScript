//::::::::::::::::::::::::::::::::::Lesson 2- Functions :::::::::::::::::::::::::::::::
//:::::::::::::::::Lecture 8- Super and Extends ::::::::::::::::::::::::

//::::::::::::::::::Subclasses with ES6::::::::::::::

// class Tree {
//     constructor(size = 10, leaves = {spring: 'green', summer: 'green', fall: 'orange', winter: null}) {
//         this.size = size;
//         this.leaves = leaves;
//         this.leafColor = null;
//     }

//     changeSeason(season) {
//         this.leafColor = this.leaves[season];
//         if(season === 'spring') {
//             this.size += 1;
//         }
//     }
// }

// class Maple extends Tree {
//     constructor(syrupQty = 15, size, leaves) {
//         super(size, leaves)
//         this.syrupQty = syrupQty;
//     }

//     changeSeason(season) {
//         super.changeSeason(season);
//         if(season === 'spring') {
//             this.syrupQty += 1;
//         }
//     }

//     gatherSyrup() {
//         this.syrupQty -= 3;
//     }
// }

// const myMaple = new Maple(15, 5);
// console.log(myMaple);
// myMaple.changeSeason('fall');
// console.log(myMaple);
// myMaple.gatherSyrup();
// console.log(myMaple);
// myMaple.changeSeason('spring');
// console.log(myMaple);


//:::::::::::::::::::::Compared to ES5 subclasses:::::::::::::::::::::::::

function Tree(size, leaves) {
    this.size = (typeof size === 'undefined' ? 10 : size);
    const defaultLeaves = {spring: 'green', summer: 'green', fall: 'orange', winter: null};
    this.leaves = (typeof leaves === 'undefined' ? defaultLeaves : leaves);
    this.leafColor = null;
}

Tree.prototype.changeSeason = function(season) {
    this.leafColor = this.leaves[season];
    if(season === 'spring') {
        this.size += 1;
    }
}

function Maple(syrupQty, size, leaves) {
    Tree.call(this, size, leaves);
    this.syrupQty = (typeof syrupQty === 'undefined' ? 15 : syrupQty);
}

Maple.prototype = Object.create(Tree.prototype);
Maple.prototype.constructor = Maple;

Maple.prototype.changeSeason = function(season) {
    Tree.prototype.changeSeason.call(this, season);
    if(season === 'spring') {
        this.syrupQty += 1;
    }
}

Maple.prototype.gatherSyrup = function() {
    this.syrupQty -= 3;
}

const myMaple = new Maple(15, 5);
console.log(myMaple);
myMaple.changeSeason('fall');
console.log(myMaple);
myMaple.gatherSyrup();
console.log(myMaple);
myMaple.changeSeason('spring');
console.log(myMaple);

//:::ES6 Examples:::

class Courses {
    constructor(name, prerequisites = ['ES5'], duration = 7) {
        this.name = name;
        this.prerequisites = prerequisites;
        this.duration = duration;
        this.language = 'JavaScript';
    }

    courseStart() {
        console.log(`Programming Language : ${this.language},
Course Name: ${this.name},
Must be finished within ${this. duration} Hours.`);
    }

    deadline() {
        console.log(`'In Sha Allah', I will finish within ${this. duration} Hours.`); 
    }
}

// const ES6 = new Courses('ES6', ['ES5', 'OO JavaScript'], 5);
// console.log(ES6);
// ES6.courseStart();

class React extends Courses {
    constructor(name, prerequisites, duration) {
        super(name, prerequisites, duration);
    }

    processToStart() {
        console.log(`Step 1: Crash Course with Project,
Step 2: Documentation with Project Tutorial,
Step 3: Video Tutorial with Project,
Step 4: Develop Own Project.`);
        super.deadline();
    }
}

const react = new React('ReactJS', ['ES5', 'OO ES5', 'ES6'], 15);
console.log(react);
react.courseStart();
react.processToStart();


//:::another example:::

// class Developers {
//     constructor(name = 'Student', age = 18, language = 'JavaScript') {
//         this.name = name;
//         this.age = age;
//         this.language = language;
//         this.job = 'JavaScript Developer';
//     }

//     introduce() {
//         console.log(`My name's ${this.name} and My favorite programming language is ${this.language}!`);
//     }

//     showAge() {
//         console.log(`I am ${this.age} years old.`);
//     }

//     showJob() {
//         console.log(`I am a ${this.job}.`);
        
//     }
// }

// class Coder extends Developers {
//     constructor(contest, name, language) {
//         super(name, language);
//         this.contest = contest;
//     }
    

//     showAge() {
//         super.showAge();
//         console.log(`I am from subclass's prototype`);
//     }
// }

// const coder1 = new Coder(true, 'Ajgar');
// console.log(coder1);
// coder1.showAge();
// coder1.showJob();

