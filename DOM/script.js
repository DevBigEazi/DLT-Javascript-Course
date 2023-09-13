// How to select element from html ducument.
// const elById = document.getElementById('elementBelowInput');
// const elByTagName = document.getElementsByTagName('h2');
// const elByClass = document.getElementsByClassName('test');

// const menuClicked = (currEl) => {
//     const menuItems = document.querySelectorAll('.menuItems');

//     for (const menuItem of menuItems) {
//         // console.log(menuItem)
//         let menu = menuItem;
//         menu.classList.remove('active');
//         currEl.classList.add('active');
//     }
// }

// async JS
// const myInterval = setInterval(() => console.log('Hello World'), 2000);

// clearInterval(myInterval);

// const myTimeout = setTimeout(() => console.log('Hello world'), 4000);

// clearTimeout(myTimeout);

// const fetchUser = (username) => {
//     setTimeout(() => {
//         console.log(username)
//     }, 2000);
// }

// const user = fetchUser('Ali');
// console.log(user);

// callback concept
// const fetchUser = (username, callback) => {
//     setTimeout(() => {
//         callback({user: username})
//     }, 2000);
// }

// const fetchUserPhoto = (username, callback) => {
//     setTimeout(() => {
//         callback(['Photo1', ['Photo2']] )
//     }, 2000)
// }

// const fetchPhotoDetails = (photos, callback) => {
//     setTimeout(() => {
//         callback('Photo Details...')
//     }, 2000);
// }

// fetchUser('Ali', (user) => {
//     console.log(user);
//     fetchUserPhoto(user.username, (userPhoto) => {
//         console.log(userPhoto);
//         fetchPhotoDetails(userPhoto[0], (PhotoDetails) => {
//             console.log(PhotoDetails);
//         });
//     });       
// });

// This is callback hell and it's frustrating cos it's unreadable

// Promises
// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         let username = 'Adrian';
//         // resolve({user: username})
//         reject('Error')
//     }, 2000);
// })

// promise.then((user) => {
//     console.log(user);
// })
// .catch((error) => {
//     console.log(error);
// });

// Promise

// Here we dont have access to send the current data
// const fetchUser1 = new Promise ((resolve, reject) => {
//     setTimeout(() => {
//         resolve({username: 'Bola'});
//         reject('Error...')
//     });
// });

// fetchUser1
// .then((user) => console.log(user))
// .catch((error) => console.log(error));


const fetchUser = (username) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // console.log(`Now we have the user ${username}`)
            resolve({username});
        }, 2000);
    });
};

const fetchUserPhoto = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // console.log(`Now we have the user photo`)
            resolve(['Photo1', ['Photo2']] );

        }, 2000);
    });
};

const fetchPhotoDetails = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Photo Details...');
        }, 2000);
    });  
};

fetchUser('Adeshola')
    .then((user) => fetchUserPhoto(console.log(`Now we have the user ${user.username}`)))
    .then((photos) => fetchPhotoDetails(console.log(`Now we have the user ${photos[1]}`)))
    .then((PhotoDetails) => console.log(`This is the ${PhotoDetails}`))