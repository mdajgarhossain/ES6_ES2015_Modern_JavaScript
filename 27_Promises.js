//::::::::::::::::::::::::::::::::::Lesson 3- Built-ins :::::::::::::::::::::::::::::::
//::::::::::::::::: Lecture 11- Promises :::::::::::::::::::

//:::From Twinkle Cats:::
//::::::::::Understanding Asynchronous Task::::::::::

/*console.log('First Task');

setTimeout(() => {
    console.log('Second Task after 3 seconds');
}, 3000);

console.log('Third Task');

setTimeout(() => {
    console.log('Fourth Task after 1 second');
}, 1000);

setTimeout(() => {
    console.log('Fifth Task after 100ms');
}, 100);*/

//::::::::Create a Promise:::::::::

// let myFirstPromise = new Promise((resolve, reject) => {
//     let name = 'JavaScript Developer';
//     resolve(name);
// });
// console.log(myFirstPromise);

// myFirstPromise
//     .then((name) => {
//         console.log(`We are ${name}`);
//     })
    /*.catch((error) => {

    })*/

//:::How above example is Asynchronous?:::

// let myFirstPromise = new Promise((resolve) => {

//     let name = 'JavaScript Developer';

//     setTimeout(() => resolve(name), 3000);
// });

// myFirstPromise
//     .then((name) => {
//         console.log(`We are ${name}`);
//     })


//:::fetch API returns Promise:::

fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => console.log(response.json()))
    .catch((err) => console.log(err))


/*since response.json() returns another Promise, so we can chain it with .then() method */
fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((body) => {
        console.log(body);
        body.map((data) => console.log(data.name))
    })
    .catch((err) => console.log(err))


/*Now we want to see data in browser with fetch API and manipulate DOM*/
fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((body) => {
        
        const list = body.map(data => {
            let li= document.createElement('li');
            let text = `Name: ${data.name},  Email: ${data.email}`;
            let textNode = document.createTextNode(text);

            li.appendChild(textNode);
            return li;
        });

        list.forEach((li) => {
            document.getElementById('mylist').appendChild(li);
        });
        
    })
    .catch((err) => console.log(err))

    