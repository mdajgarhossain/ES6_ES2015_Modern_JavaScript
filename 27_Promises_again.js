//::::::::::::::::::::::::::::::::::Lesson 3- Built-ins :::::::::::::::::::::::::::::::
//::::::::::::::::: Lecture 11.1- Promises again :::::::::::::::::::

//:::From Udacity:::
//::::::::::Promises::::::::::::::

//:::Creation of Promises:::

new Promise(function() {
    window.setTimeout(function createSundae(flavor = 'chocolate') {
        const sundae = {};
        // request ice cream
        // get cone
        // warm up ice cream scoop
        // scoop generous portion into cone!
    }, Math.random() * 2000);
});

//::::::::Indicated a Successful Request or a Failed Request:::::::::::

//:::Successful Request:::
new Promise(function(resolve, reject) {
    window.setTimeout(function createSundae(flavor = 'chocolate') {
        const sundae = {};
        // request ice cream
        // get cone
        // warm up ice cream scoop
        // scoop generous portion into cone!
        resolve(sundae);
    }, Math.random() * 2000);
});

//:::Failed Request:::
new Promise(function(resolve, reject) {
    window.setTimeout(function createSundae(flavor = 'chocolate') {
        const sundae = {};
        // request ice cream
        // get cone
        // warm up ice cream scoop
        // scoop generous portion into cone!
        if (  iceCreamConeIsEmpty(flavor)  ) {
            reject(`Sorry, we're out of that flavor :-(`);//error messege
        }
        resolve(sundae);
    }, Math.random() * 2000);
});


//:::::::::::Promises Return Immediately::::::::::::::::::::::

const myPromiseObj = new Promise(function (resolve, reject) {
    //sundae creation code
    const sundae = {
        flavor: 'Hot Fudge',
        item: 'Vanilla'
    };
    if(sundae.flavor !== 'Hot Fudge') {
        reject(`Sorry, We don't have this flavor!`);
    }
    resolve(sundae);
});

myPromiseObj.then(function(sundae) {
    console.log(`Time to eat delicious ${sundae.flavor}`);  
}, function(msg) {
    self.goCry(); //not a real method
});


//::: All In Action :::

//:::Successful Request:::
const mySundae = new Promise(function(resolve, reject) {
    const sundae = {
        name: 'Cone Ice-Cream',
        flavor: 'Vanilla'
    };
    if(sundae.flavor !== 'Vanilla') {
        msg = `Sorry, We are out of that flavor!`;
        reject(msg);
    }
    resolve(sundae);
});

mySundae.then(function(sundae) {
    console.log(`Time to eat delicious ${sundae.flavor}`);
}, function(msg){
    console.log(msg);
});

//:::Failed Request:::
const mySundae2 = new Promise(function(resolve, reject) {
    const sundae = {
        name: 'Cone Ice-Cream',
        flavor: 'Milk'
    };
    if(sundae.flavor !== 'Vanilla') {
        msg = `Sorry, We are out of that flavor!`;
        reject(msg);
    }
    resolve(sundae);
});

mySundae2.then(function(sundae) {
    console.log(`Time to eat delicious ${sundae.flavor}`);
}, function(msg){
    console.log(msg);
});


//:::Another example:::

//:::Successful Request:::
const myLibrary = new Promise((resolve, reject) => {
    const library = {
        name: 'ReactJS',
        language: 'JavaScript'
    };

    if(library.language !== 'JavaScript') {
        const message = `Please choose JavaScript, Without JavaScript you can't react well`;
        reject(message);
    }
    resolve(library);
});

myLibrary
    .then((library) => {
    console.log(`Thank you for choosing ${library.name}.
    Happy Coding...`);
    })

    .catch((message) => {
        console.log(message);
    })

//:::Failed Request:::
const myLibrary2 = new Promise((resolve, reject) => {
    const library = {
        name: 'ReactJS',
        language: 'Python'
    };

    if(library.language !== 'JavaScript') {
        const message = `Please choose JavaScript. Without JavaScript, you can't react well. Ha ha ha`;
        reject(message);
    }
    resolve(library);
});

myLibrary2
    .then((library) => {
    console.log(`Thank you for choosing ${library.name}.
    Happy Coding...`);
    })

    .catch((message) => {
        console.log(message);
    })

//another task . which will execute first promise or this task?
let a = 5, b = 7, sum;
sum = a + b;
console.log(sum);

