//::::::::::::::::::::::::::::::::::Lesson 3- Built-ins :::::::::::::::::::::::::::::::
//::::::::::::::::: Lecture 12.1- Proxies vs. ES5 Getter/Setter ::::::::::::::::

//:::::::ES5 Getter/Setter::::::::::::::
/*With ES5's getter and setter methods, you need to know before hand the properties
 that are going to be get/set */

 var obj = {
    _age: 5,
    _height: 4,

    get age() {
        console.log(`getting the "age" property`);
        console.log(this._age);
    },
    get height() {
        console.log(`getting the "height" property`);
        console.log(this._height);
    }
};

obj.age;
obj.height;

/*But look what happens when we now add a new property to the object: */
obj.weight = 120;
console.log(obj.weight);


//::::::::::::: ES6 Proxy ::::::::::::::::::::

/*With ES6 Proxies, we do not need to know the properties beforehand: */
const proxyObj = new Proxy({age: 5, height: 4}, {
    get(targetObj, property) {
        console.log(`getting the "${property}" property`);
        console.log(targetObj[property]);
    }
});

proxyObj.age;
proxyObj.height;


/*All well and good, just like the ES5 code, but look what happens when we add a new property: */

proxyObj.weight = 120;
proxyObj.weight;


//:::another example:::
const dhaka = {
   status: 'Capital of Bangladesh',
   temperature: '32°C',
   date: '25th May, 2019'
};

const handlerOfDhaka = {
   get(targetObj, propName) {
       if(propName === 'status') {
           console.log(`Dhaka is the ${targetObj[propName]}.`);
       }
       else if(propName === 'temperature') {
           console.log(`Dhaka is so hot today & ${propName} is ${targetObj[propName]}.`);
       }
       else {
           console.log(targetObj[propName]);
       }
   }
};

const proxyOfDhaka = new Proxy(dhaka, handlerOfDhaka);
proxyOfDhaka.status;
proxyOfDhaka.temperature;
proxyOfDhaka.date = 'date can change';
proxyOfDhaka.date;
proxyOfDhaka.population = '2 crore';
proxyOfDhaka.population;

