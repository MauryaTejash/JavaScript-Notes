console.log("2">3);

console.log(3 > "A");


console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);
console.log(null < 0);

console.log(undefined == 0);
console.log(undefined >= 0);
console.log(undefined > 0);

// stack memory is used here where the copy is passed
let val = "tejash";
let val1 = val;
val1 = "maurya";
console.log(val);
console.log(val1);


// heap memory is used here where the reference is passed
let sum = {
    name: "Hello",
    age: 7
}

let sum1 = sum;

sum1.name = "Tejash";
sum1.age = 10
console.log(sum);
console.log(sum1);








