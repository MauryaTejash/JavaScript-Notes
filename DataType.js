let val = 22;
console.log(typeof val);

let val2 = String(val)
console.log(val2);

let com = null;
console.log(typeof null);

let com2 = Number(null);
console.log(com2);

let com1 = undefined;
console.log(typeof undefined);

let name = "Tejash";
console.log(typeof name);

let name1 = Number(name)
console.log(name1);

let des = true
console.log(+true);

console.log(2+2);

console.log(+"");

console.log("1"+2+3);

console.log(1+2+"3");

// let val3 = 100;
// ++val3
// console.log(val3);


let val3 = 3;
const y = ++val3
console.log(val3,y);

let val4 = 3;
const x = val4++
console.log(val4,x);

const id = Symbol('456');
const newId = Symbol('456');

console.log(id);
console.log(newId);

console.log(id === newId);

