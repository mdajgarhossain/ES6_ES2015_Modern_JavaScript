//::::::::::::::::::::::::::::::::::Lesson 1- Syntax::::::::::::::::::::::::::::::::::
//:::::::::::::::::::Lecture 3- Destructuring::::::::::::::::

/*In ES6, you can extract data from arrays and objects into distinct variables using destructuring.*/

/*extract data using pre-ES6 techniques */
// const point = [10, 20, -34];

// const x = point[0];
// const y = point[1];
// const z = point[2];

// console.log(x, y, z);


// const person = {
//     name: 'Jewel',
//     age: 25,
//     profession: 'Software Developer'
// };

// const name = person.name;
// const age = person.age;
// const profession = person.profession;

// console.log(name, age, profession);


//::::::::::::::::::::Destructuring::::::::::::::::::::::::::::::::::::

//:::::::::::::Destructuring values from an array:::::::::

// const point = [10, 20, -34];

// const [x, y, z] = point;
// const [a, , c] = point;
// const [d, e] = point;
// const [,g, h] = point;

// console.log(x, y, z);
// console.log(a, c);
// console.log(d, e);
// console.log(g, h);


//:::another example:::
// let positions = ['Gabrielle', 'Jarrod', 'Kate', 'Fernando', 'Mike', 'Walter'];

// let [first, second, third] = positions;

// console.log(second);
// console.log(third);

// let [first, second, , fourth] = positions;

// console.log(first, second, fourth);
// console.log(first, fourth);



//:::::::::::::::::Destructuring values from an object::::::::::::

// const person = {
//     name: 'Jewel',
//     age: 25,
//     profession: 'Software Developer'
// };

// const {name, age, profession} = person;

// console.log(name, age, profession);
// console.log(name, profession);
// console.log(age, profession);
// console.log(age, name);


// const {naam, Boyos, Pesha} = person;

// console.log(naam, Boyos, Pesha);//Return undefined, because there is no property in these names into this 'person' object


// const {profession} = person;
// console.log(profession);

// const {name, age} = person;
// console.log(name, age);


//:::another example:::
const circle = {
    radius: 10,
    color: 'orange',
    getArea: function() {
        return Math.PI * this.radius * this.radius;
     },
     getCircumference: function() {
         return 2 * Math.PI * this.radius;
     }
 };
 console.log(circle.getArea());
 
 let {radius, getArea, getCircumference} = circle;
 
 console.log(getArea);
 console.log(getArea());
 