
// const fetchUser = (username, callback) => {
//     setTimeout(() => {
//         callback({user: username})
//     }, 2000) // we dont know the actual time
// }


// const fetchUserPhoto = (username, callback) => {
//     setTimeout(() => {
//         callback(['Photo1', ['Photo2']]);
//     }, 2000)
// }

// const userPhotoDetails = (photos, callback) => {
//     setTimeout(() => {
//         callback('Photo Details....');
//     }, 2000)
// }

// fetchUser('Ali', (user) => {
//     console.log(user)
//     fetchUserPhoto(user.username, (photos) => {
//         console.log(photos);
//         userPhotoDetails(photos[0], (details) => {
//             console.log(details);
//             userPhotoDetails(photos[0], (details) => {
//                 console.log(details);
//                 userPhotoDetails(photos[0], (details) => {
//                     console.log(details);
//                     userPhotoDetails(photos[0], (details) => {
//                         console.log(details);
//                     })
//                 })
//             })
//         })
//     });
// });


// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         // resolve({user: 'Lagbaja'});
//         reject('Error fetching data');
//     }, 2000);
// });

// promise
// .then((user) => console.log(user))
// .catch((error) => console.log(error));

const fetchUser = (username) => {
   return new Promise((resolve, reject) => {
        setTimeout(() => {
            // console.log(`Now we get the user ${username}`);
            resolve({user: username});
            // reject('Error fetching user');
        }, 2000);
   });
};

const fetchUserPhoto = (username) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // console.log('Now we get the user Photo')
            resolve(['Photo1', ['Photo2']]);
        }, 2000);
    });
};

const userPhotoDetails = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Photo Details....')
        }, 2000);
    });
};

const displayData = async () => {
    const user = await fetchUser('Abdul');
    console.log(user);
    const userPhoto = await fetchUserPhoto(user);
    console.log(userPhoto[1]);
    const details = await userPhotoDetails(userPhoto);
    console.log(details);
}

// displayData();


// fetchUser('Matex')
// .then((user) => console.log(user))
// .then((user) => fetchUserPhoto(user))
// .then((userPhoto) => console.log(userPhoto[1]))
// .then((userphoto) => userPhotoDetails(userphoto))
// .then((details) => console.log(`This is the ${details}`))


// getting country currency

const country = (countryName) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({countryName});
        }, 2000);
    });
};

const countryCurrency = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve('Naira and Kobo');
            }, 3000);
        });
};

const currencyNotes = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(['20 NGN', '50 NGN', '100 NGN', '200 NGN', '500 NGN', '1000 NGN']);
            }, 4000);
        });
};

const exchangeRate = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('745.32 NGN/ USD');
        }, 5000);
    });
};

const countryData = async () => {
    const countryName = await country('Nigeria');
    console.log(countryName);
    const currency = await countryCurrency();
    console.log(currency);
    const notes = await currencyNotes();
    console.log(notes);
    const rate = await exchangeRate();
    console.log(rate);
};

countryData();

// country('Nigeria')
// .then((country) => console.log(country))
// .then((country) => countryCurrency(country))
// .then((currency) => console.log(currency))
// .then((currency) => currencyNotes(currency))
// .then((notes) => console.log(notes))
// .then((notes) => exchangeRate(notes))
// .then((rate) => console.log(rate))


//async await
// const fetchNumber = () => {
//     return 35;
// }

// const consoleNumber = async () => {
//     const number = await fetchNumber();
//     console.log(number)
// }

// consoleNumber()

// fetchNumber()
// .then((number) => console.log(number));



