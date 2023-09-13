
// // Global scope

// const studentName = 'Lukman';

// const displayName = () => {
//     console.log(studentName);
// };

// const displayName2 = () => {
// console.log(studentName)
// };

// displayName();
// displayName2();


// // Local scope
// const someFunction = () => {
//     // local scope 1
//     const _name = 'Tamedo';

//     console.log(_name);

//     // local scope 2
//     const anotherFunction = () => {
//         console.log(_name);
//     };

//     anotherFunction();
// }

// someFunction();


// if (true) {
// let name1 = 'Ajala';

// const fnc = () => {
//     console.log(name1);
//     name1 = 'Tope'
//     console.log(name1);
// }

// fnc();
// }

// console.log(typeof studentName);

// Hoisting
console.log(studentName);
var studentName;
studentName = 'Bola';

// console.log(studentName2);
// const studentName2 = 'Tope';


hoist();

function hoist() {
    console.log('Ade')
}

// hoist2();

// const hoist2 = () => {
//     console.log('Adesumbo')
// }

// Closure
const outer = () => {
    const outerVar = 'Hello'

    const inner = () => {
        const innerVar = 'Hi';
        console.log(outerVar, innerVar);
    };

    return inner
}

const innerFnc = outer();

innerFnc()

// Strings length

const greeting = "Hello, I\'m John \"Doe\" ";
console.log(greeting)

const name1 = "John";
console.log(name1.length);
console.log(name1[3]);
console.log(name1[name1.length -1]);

// Cases in Javascript
const string = "How are you, James";
const lowerCase = string.toLowerCase();
console.log(lowerCase);
const upperCase = string.toUpperCase();
console.log(upperCase);

// Searching for a substring in a string

// indexOf()

const strings = 'I love ducks, he said, ducks are great! Indeed ducks are great😎';
const ducks = strings.indexOf('ducks');
const notExist = strings.indexOf('')

/* since the first occurrence of ducks is at position 
of 7, we can begin searching for the second ducks from 
postion 8 */
const duck2 = strings.indexOf('ducks', 8)
const duck3 = strings.indexOf('ducks', 48)
console.log(ducks);
console.log(notExist);
console.log(duck2);
console.log(duck3);

// lastIndexOf()

const str = 'I love ducks, he said, ducks are great! Indeed ducks are great😎';

const great = str.lastIndexOf('ducks', 46);
console.log(great);

// slice
const slice = str.slice(2, 6)
console.log(slice);

const newString = 'Holy Spirit';

const charAt = newString.charAt(newString.length -1);
console.log(charAt);

const slice2 = newString.slice(5)
console.log(slice2);

const slice3 = newString.slice(0, 7);
console.log(slice3);

const split = newString.split(' ');
console.log(split);

const replace = newString.replace('Holy', 'No')
console.log(replace);

const reverse = split.reverse().join('');
console.log(reverse);

const reverse2 = slice2.split('').reverse().join('');
console.log(reverse2);

const repeat = reverse2.repeat(3);
console.log(repeat);

const months = ['January', 'February', 'March', 'April'];

for (let i = 0; i < months.length; i++) {
    console.log(i, months[i]);
}

// for (const month of months) {
//     console.log(month);
// }


const names1 = ['John', 'Mary', 'Oyin', 'Ade', 'Wole', 'Ojo'];
const pushLength = names1.push('Bola')
console.log(pushLength);
console.log(names1);

const names2 = ['Jose', 'Mariam', 'Ola', 'Fola'];
const removedValue = names2.pop()
console.log(removedValue) // returns the removed element and not the final length of the new array
console.log(names2);

names1.push(removedValue);
console.log(names1);

const fruits = ['🍎', '🍊', '🍌', '🍍', '🍐'];

console.log(fruits.shift());
console.log(fruits);

const foods = ['rice', 'beans', 'garri', 'potatoes'];
console.log(foods.unshift('semo'));
console.log(foods);

const foods2 = ['rice', 'beans', 'garri', 'potatoes', 'beans'];
// const rmv = foods2.splice(1, 2);
// console.log(rmv);
// // all the element will be deleted except the one at the index position 1 and 2
const rmvValue = foods2.splice(2, 1, 'eba', 'amala', 'iyan');
console.log(foods2);
console.log(rmvValue);

const beansInd = foods2.lastIndexOf('beans');
console.log(beansInd);
const toStr = foods2.toString();
console.log(toStr);

const inc = foods.includes('garri');
console.log(inc);
const sort = foods2.sort()
console.log(sort);










