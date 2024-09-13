console.log(Math.PI);
/*
  The Math value is universal const bec
  writable: false,
  enumerable: false,
  configurable: false
*/

// const constr = Object.getOwnPropertyDescriptor(Math,'PI')
// console.log(constr);


const tej = {
    name: 'Tejash',
    age: 10,
    value: true
}

console.log(tej);
const getVal = Object.getOwnPropertyDescriptor(tej,'age')
console.log(getVal);

Object.defineProperty(tej,'age', {
    writable: false,
    enumerable: false,
    configurable: false
})

console.log((Object.getOwnPropertyDescriptor(tej,'age')))