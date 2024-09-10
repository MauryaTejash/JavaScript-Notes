                    //decelaration of symbol data type
const sys = Symbol("Keyh")

                    //decelaration of Object as literals 
const user = {
    name: "Tejash",
    age: 10,
    login: false,
    email: "abc@abc.com",
    [sys]: "Key2"
}
console.log(user.name);
console.log(user["email"]);
console.log(user.email);

                    //to access the Symbol data type use []
console.log(typeof user[sys]);

user.email = "tej@abc.com"
console.log(user.email);

                    //object freeze
// Object.freeze(user)
user.email = "anc@abc.com"
console.log(user);


                    // uses of function in Object

// user.greet = function(){
//     console.log("hello User ");   
// }

// user.greet1 = function(){
//     console.log(`hello User, ${this.name} `);   
// }

// console.log(user.greet());
// console.log(user.greet1());


                            //singlaton object

// const obj = new Object()

const obj1 = {}
obj1.id = "123a",
obj1.name = "Hello"
console.log(obj1);

                            //to combine the two or more objects
const val = {1: "a", 2: "b"}
const val1 = {3: "c", 4: "d"}

// const val3 = Object.assign({},val, val1)

const val3 = {...val, ...val1}
console.log(val3);

                            //array of objects
const sum = [
    {
        id: 1,
        name: "a"
    },
    {
        id: 1,
        name: "b"
    },
    {
        id: 1,
        name: "c"
    },
]


console.log(sum[0].name);
console.log(user);

                        //  accessing the key and value of Object
// console.log(Object.keys(sum));
// console.log(Object.values(sum));
// console.log(Object.entries(sum));


                        //object destructure

const {email} = user;
console.log(email);

                        //function in js
function sumNumber1(number1,number2){
    // console.log(number1+number2);
    let res = number1+number2
    return res
}

function sumNumber(number1,number2){
    // console.log(number1+number2);
    let res = number1+number2
    return res
}

sumNumber1(1,6) //this will not give any output because the value is return but not print

const ans = sumNumber(1,1)
console.log(typeof ans);


function fname(user){
    return `${user} hello how are Y`
}

console.log(fname("Tejash"));
console.log(fname());  //this is IMP for the Interview question

                        // rest operator in function

function cal(...num){
    return num;
}
console.log(cal(2,5,6,"g"));


                        // passing the Object into function

const count = {
    naam: "Tejash",
    age: 12
}

function sayCount(otherObj){
    console.log(`the name is ${otherObj.naam} and age is ${otherObj.age}`);
    
}
sayCount(count);


                        // passing the Object into function directly
sayCount({
    naam: "maurya",
    age: 15
})


                        //passing the array value into function

const newArr = [10,20,30]
function arrValue(getArr){
    return getArr[1]
}

console.log(arrValue(newArr));

                        //passing the value directly into function
console.log(arrValue([10,20,30]));

