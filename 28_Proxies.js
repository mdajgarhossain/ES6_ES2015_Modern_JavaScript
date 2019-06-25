//::::::::::::::::::::::::::::::::::Lesson 3- Built-ins :::::::::::::::::::::::::::::::
//::::::::::::::::: Lecture 12- Proxies: Proxy in ES6 :::::::::::::::::::

//::::::::::::::::::::Create a Proxy:::::::::::::::
//:::::::::A Pass Through Proxy::::::::
/*The simplest way to create a proxy is to provide an object and then an empty handler object. */

// var jewel = {status: 'Software Developer'};
// var developer = new Proxy(jewel, {});

// console.log(developer.status);


// var city = {
//     name: 'Dhaka',
//     status: 'Capital of Bangladesh'
// };
// var proxyOfCity = new Proxy(city, {});

// console.log(proxyOfCity.name);
// console.log(proxyOfCity.status);


// const ajgar = {status: 'looking for work'};
// const agent = new Proxy(ajgar, {});

// console.log(ajgar.status); // main Object
// console.log(agent.status); // proxy Object


/*If we want the proxy object to actually intercept the request, that's what the 
handler object is for! */

//::::::::::::Get Trap:::::::::::::

// const ajgar = {status: 'looking for work'};
// const handler = {
//     get(target, propName) {
//         console.log(target);
//         console.log(propName);
//     }
// };

// const agent = new Proxy(ajgar, handler);
// console.log(agent.status);
// agent.status;


//:::another example:::
// const course = {
//     name: 'ES6',
//     duration: '2 Hours'
// };

// const handlerOfCourse = {
//     get(target, propName) {
//         console.log(target);
//         console.log(propName);
//     }
// };

// const proxyOfCourse = new Proxy(course, handlerOfCourse);
// proxyOfCourse.name;
// proxyOfCourse.duration;


//:::another example:::
// const book = {
//     name: 'Finding Peace',
//     author: 'Ustad Nouman Ali Khan',
//     page: 272
// };

// const handlerOfBook = {
//     get(target, propName) {
//         console.log(target);
//         console.log(propName);
//     }
// };

// const proxyOfBook = new Proxy(book, handlerOfBook);
// proxyOfBook.author;
// proxyOfBook.page;


//:::another example:::
// const targetObject = {
//     status: 'Make proxy of this object'
// };

// const handlerOfTarget = {
//     get(targetObject, propName) {
//         console.log(targetObject);
//         console.log(propName);
//     }
// };

// const proxyObject = new Proxy(targetObject, handlerOfTarget);
// proxyObject.status;


//:::::::::::Accessing the Target object from inside the proxy::::::::::::::::::

const day = {
    temperature: '32°C',
    status: 'So Hot'
};

const handlerOfDay = {
    get(target, propName) {
        console.log(target);
        console.log(propName);
        return target[propName];
    }
};

const proxyOfDay = new Proxy(day, handlerOfDay);
console.log(proxyOfDay.temperature);
console.log(proxyOfDay.status);


//::::::::::Having the proxy return info, directly:::::::::::::::::::::::

const hossain = {status: 'looking for Job'};
const handlerOfHossain = {
    get(target, propName) {
        return `Let's face the interview`;
    }
};

const proxyOfHossain = new Proxy(hossain, handlerOfHossain);
console.log(proxyOfHossain.status);

/*So the get trap will take over whenever any property on the proxy is accessed. If we
 want to intercept calls to change properties, then the set trap needs to be used! */

 //::::::::::::::Set Trap:::::::::::::::::::
 const bkash = {
     status: 'Mobile Banking',
     mobileNumber: '01794272207',
     balance: 1020
};
 const handler = {
     set(target, propName, value) {
         if(propName === 'cashOut') {
             value = value*.98; // cash out 2% kate
         }
         target[propName] = value;
     }
 };

 const agent = new Proxy(bkash, handler);
 agent.cashOut = 1000;
 console.log(agent.cashOut);


 //:::another example:::
 const coder = {
     name: 'Karim',
     test: 'looking for a bug'
};

const handlerOfCoder = {
    set(target, propName, value) {
        console.log(target);
        target[propName] = value;
    }
};


const proxyOfCoder = new Proxy(coder, handlerOfCoder);
proxyOfCoder.name = 'Jewel' //change existing property's value:  set a new value
console.log(proxyOfCoder.name);
proxyOfCoder.language = 'JavaScript'; //adding new property and set a value
console.log(proxyOfCoder.language);
console.log(proxyOfCoder.status);

