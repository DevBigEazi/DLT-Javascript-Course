// Strings Recap

const str = 'I love ducks, he said, ducks are great!';

// lastIndexOf() search for substring or an element from the beginning to the end
const dk = str.indexOf('ducks', 24);
console.log(dk);

const str2 = 'I love ducks, ducks are cool to "love" ';

// lastIndexOf() search for substring or an element from the end to the beginning
const lv = str2.lastIndexOf('love', 31);

console.log(lv);

console.log(str2.includes('cele')); // return bolean value
console.log(str2.startsWith('I'));// return bolean value
console.log(str2.endsWith('love'));// return bolean value


// slice()
const string = 'Holy Spirit';
console.log(string.slice(5));
// console.log(string.split(' '));

// How to reverse strings
const reverse = string.split(' ').reverse().join(' ');

// repeat()
console.log(reverse.repeat(3));

// trim()
const string2 = '    Hello World  ';
console.log(string2.trimStart());


const str3 = '  example@gmail.com  ';
console.log(str3.trimEnd());
console.log(str3);


const trim = str3.trim();
console.log(trim);

// replace()
const str4 = 'Welcome to DLTAfrica, Ikeshi, Ota, Ogun state.';

const repl = str4.replace('Ikeshi', '🥭')

console.log(repl);










