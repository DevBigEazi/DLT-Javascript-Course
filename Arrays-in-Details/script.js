// // Declaring an array
// // const months = ['January', 'February', 'March', 'April', 'May' ];
// // console.log(months)
// //

// // getting the last element
// // console.log(months[months.length -1]);

// // replacing an element
// // months[1] = 'December';
// // console.log(months);

// // Adding element to array
// // months[5] = 'June';
// // console.log(months);


// // const arr = [
// //     'Apple',
// //     45,
// //     true,
// //     {name: 'Ade'},
// //     () => {
// //         alert('Hello')
// //     }
// // ];


// // const months = ['January', 'February', 'March', 'April', 'May'];
// // console.log(months)

// // for(let i = 0; i < months.length; i++ ) {
// //  console.log(i, months[i])
// // };

// // for(const month of months) {
// //     console.log(month)
// // }

// // push() method
// const names = ['John', 'Bob', 'Bola', 'Bosun'];
// console.log(names);
// console.log(names.length);
// console.log(names.push('Shola'))
// console.log(names);

// const fruits = ['orange', 'apple', 'banana', 'pier', 'cucumba'];
// console.log(fruits)
// const newFruits = fruits.push('garden egg');
// console.log(newFruits);
// console.log(fruits);

// for(const fruit of fruits) {
//     console.log(fruit);
// }

// // pop() method

// const cars = ['Benz', 'Mazeratti', 'Bugati', 'Porsche', 'Rose-Royce'];
// console.log(cars);
// const removedEl = cars.pop();
// console.log(cars);
// console.log(removedEl);

// const cars2 = ['Corolla', 'Lexus', 'Venza'];
// console.log(cars2);
// cars2.push(removedEl);
// console.log(cars2);

// // shift() method
// const $fruits = ['🍎', '🍊', '🍌', '🍍'];
// console.log($fruits);
// console.log($fruits.shift())
// console.log($fruits);

// //coding challenge
// const sftwrStacks = ['LAMP', 'MERN', 'MEAN', 'MEVN'];
// console.log(sftwrStacks)
// const removeE = sftwrStacks.pop();
// console.log(sftwrStacks);

// const newStacks = ['LAPP', 'LEAP', 'MEEN'];
// console.log(newStacks);
// const newStacksLength = newStacks.push(removeE);
// console.log(newStacks);
// console.log(newStacksLength);

// // unShift() method
// const subjects = ['Maths', 'Literatue', 'Agric', 'Econs', 'Yoruba', 'English'];
// console.log(subjects);
// console.log(subjects.unshift('Govenment'));//
// console.log(subjects)

// const favDrink = ['Pepsi', 'Coke', 'Fanta', 'Fearless', 'Maltina', 'Predator'];
// console.log(favDrink);
// const favDrinNewLength = favDrink.unshift('Youghurt');
// console.log(favDrinNewLength)

// console.log(favDrink);

// // splice() method
// const professions = ['Doctor', 'Soldier', 'Driver', 'Pilot', 'Developer', 'Footballer', 'Soldier'];
// console.log(professions);

// // professions.splice(4, 2, 'Teacher', 'Lawyer')
// // console.log(professions);

// // const dev = professions.splice(3, 3)
// // console.log(dev);
// // slice() method

// // const slice = professions.slice(1, 4);
// // console.log(slice);

// // toString()
// // const toStr = professions.toString()
// // console.log(toStr);

// //include()
// const inc = professions.includes('Pil');
// console.log(inc);

// // sort()
// //  const sort = professions.sort();

// // console.log(sort);

// //indexOf()
// const ind = professions.indexOf('Soldier');
// console.log(ind);

// //lastIndexOf()
// const lstInd = professions.lastIndexOf('Soldier', 5);
// console.log(lstInd);

//forEach
const players = ['Enzo', 'Gernacho', 'Madueke', 'Silva'];

//looping through with for loop(ES5)
for(let i = 0; i < players.length; i++) {
    console.log(players[i])
}

//looping through with for of loop(ES6)
for (const player of players) {
    console.log(player)
}

//looping through with forEach (array method)
players.forEach((player, i) => {
    console.log(player);
});

// getting the sum total of numbers in an array using forEach method
let sum = 0;
const numbers = [34, 54, 21, 15, 60, 45];
numbers.forEach((number, i) => {
    sum += number;
    console.log(number)
})
console.log(sum)

//map method
const footballClub = [
    {team: 'Chelsea', position: 1, matchPlayed: 23, point: 87},
    {team: 'Man City', position: 2, matchPlayed: 23, point: 80},
    {team: 'Man United', position: 3, matchPlayed: 23, point: 69},
    {team: 'Newcastle', position: 4, matchPlayed: 23, point: 65},
    {team: 'Arsenal', position: 5, matchPlayed: 23, point: 55},
    {team: 'Tottenham', position: 6, matchPlayed: 23, point: 49},
    {team: 'Liverpool', position: 7, matchPlayed: 23, point: 45},
    {team: 'Brentford', position: 8, matchPlayed: 23, point: 36},
    {team: 'Fulham', position: 9, matchPlayed: 23, point: 34},
]

const teamNames = footballClub.map((club, i) => club.team)

console.log(teamNames)

footballClub.map((club, i) => {
    if (club.position === 1) {
        console.log(`${club.team} is the EPL winner🏆 have qualified for Champions League`);
    } else if (club.position <= 4) {
        console.log(`${club.team} have qualified to participate in Champions League`);
    } else if (club.position <= 6) {
        console.log(`${club.team} have qualified to participate in Europa League`);
    } else if (club.position === 7) {
        console.log(`${club.team} have qualified to participate in Europa Conference League`);
    } else {console.log(`${club.team} have been relegated`)};
});

// filter 
const _numbers = [0, -12, -34, 45, 32, 40, -2, -87, -20, 1];
console.log(_numbers);

const negative_numbers = _numbers.filter((_number) => _number < 0)
console.log(negative_numbers);

// let's try the above example with for loop
let negative_numbers1 = []
for(let i = 0; i < _numbers.length; i++) {
    if(_numbers[i] < 0) {
        negative_numbers1.push(_numbers[i])
    }
}
console.log(negative_numbers1);

// let's try the above example with for of loop
let negative_numbers2 = []
for(const _number of _numbers) {
    if (_number < 0) {
        negative_numbers2.push(_number)
    }
}
console.log(negative_numbers2);

// let's try a real word example
const employeesDetails = [
    {fullName: 'Adelani Adelogba', dob: 2023 - 1962, yearSpent: 17},
    {fullName: 'Wale Ilesanmi', dob: 2023 - 1986, yearSpent: 21},
    {fullName: 'Damola Akintunde', dob: 2023 - 1975, yearSpent: 10},
    {fullName: 'Fausat Balogun', dob: 2023 - 1956, yearSpent: 19},
    {fullName: 'Ajoke Odunlade', dob: 2023 - 1980, yearSpent: 17},
]

// const toRetire = employeesDetails.filter((employee) => {
//     if(employee.dob >= 50 || employee.yearSpent >= 20) {
//         return employee
//     }
// })

const toRetire = employeesDetails.filter((employee) => employee.dob >= 50 || employee.yearSpent >= 20)

console.log(toRetire);

// get retired employee names
const toRetireNames = toRetire.map((toRetireName) => toRetireName.fullName)

console.log(toRetireNames);

toRetireNames.forEach((names) => console.log(`${names} is due for retirement and pension😎😍` ));


// find()

const $numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const value =  $numbers.find(($number) => $number > 5) // 6 is first value that satisfy the condition here
console.log(value);

const states = ['Alaska', 'Carlifornia', 'Colorado', 'Hawaii'];

const value2 = states.find((state) => state.startsWith('C'));
console.log(value2);


// reduce()
// let total = 0
const groceryPriceList = [29, 12, 45, 35, 87, 110];

// groceryPriceList.forEach((price) => {
//     total += price;
// });

// console.log(total);

const total = groceryPriceList.reduce((accumulator, currentValue) => {
    return accumulator += currentValue
}, 0);

console.log(total);

const number$ = [1, 2, 3, 4, 5];

const totalNumber$ = number$.reduce((acc, value) => acc += value , 0);

console.log(totalNumber$);


