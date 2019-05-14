//::::::::::::::::::::::::::::::::::Lesson 2- Functions :::::::::::::::::::::::::::::::
//:::::::::::::::::Lecture 9- Working with JavaScript Subclasses:::::::::::::

//:::::::::::::::::::Working with subclasses:::::::::::::::::

/*Just remember that, under the hood, the same connections are made between functions and prototypes.*/

//::::::::::super must be called before this::::::
class Apple {
    constructor(energy) {
        this.energy = energy;
    }
}

class GrannySmith extends Apple {
    constructor(tartnessLevel, energy) {
        // super(energy);
        this.tartnessLevel = tartnessLevel; // `this` before `super` will throw an error!
        super(energy);
    }
}

const greenApple = new GrannySmith(7.7, '30 calorie');
console.log(greenApple);

console.log(greenApple instanceof Apple);

console.log(typeof Apple);
console.log(typeof GrannySmith);
console.log(typeof greenApple);


/*
 * Programming Quiz: Building Classes and Subclasses (2-3)
*/

/*Directions:
Create a Bicycle subclass that extends the Vehicle class. The Bicycle subclass should
override Vehicle's constructor function by changing the default values for wheels from
4 to 2 and horn from 'beep beep' to 'honk honk'. */

class Vehicle {
	constructor(color = 'blue', wheels = 4, horn = 'beep beep') {
		this.color = color;
		this.wheels = wheels;
		this.horn = horn;
	}

	honkHorn() {
		console.log(this.horn);
	}
}

// your code goes here
class Bicycle extends Vehicle {
    constructor(color, wheels = 2, horn = 'honk honk') {
        //super(wheels, horn);
        super(color, wheels, horn);
    }
    
}

const myVehicle = new Vehicle();
myVehicle.honkHorn();
const myBike = new Bicycle();
myBike.honkHorn();
console.log(myBike);
