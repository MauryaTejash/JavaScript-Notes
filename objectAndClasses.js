const val = {
    username: "tej",
    result : function(){
        //console.log(`user: ${this.username}`);
        console.log(this);
        
    }
}
console.log(val.username);
console.log(val.result());
console.log(this);

//here 'new' is constructure function which is used to create new context
// const cnt = new Promise()


function use(username,age,city){
    this.username = username
    this.age = age
    this.city = city

    //return this
}

//without using the 'new' keyword it overwright the values every time 
// const useOne = use('Tej',10,'Vns')
// const userTwo = use('Tejash',12,'Vns')
// console.log(useOne);

// with the use of 'new' keyword it firstly create a empty 'object' which is called instance
// it always create the new instance and overwright problem resolved
const useOne = new use('Tej',10,'Vns')
const userTwo = new use('Tejash',12,'Vns')
console.log(useOne);
console.log(userTwo);

console.log(useOne.constructure);


                                            // Note

// Array, function, String all are Object and it refer to NULL

function mult(num){
    return num*5
}
mult.power = 5
console.log(mult(5));
console.log(mult.power);
console.log(mult.prototype);


function createUser(username,age){
    this.username = username
    this.age = age
}
createUser.prototype.inc = function(){
    this.age++
    console.log(`age is ${this.age}`);
}
createUser.prototype.print = function(){
    console.log(`age is ${this.age}`);
    
}
const usOne = new createUser('Tejash',20)
const usTwo = createUser('Maurya',30)
usOne.print()
usOne.inc()

let arr = ['tej','thor','hammer']

let heros = {
    name: "thor",
    value: "hammer",
    // getName: function(){
    //     console.log(`the name is ${this.value}`);
        
    // }
}
// by this way we can define our own prototype in object
// by which array, function, string passes and opted the same conditions
Object.prototype.tejash = function(){
    console.log(`The inserted value is tejash`);
    
}

Array.prototype.sayTejash = function(){
    console.log('Saying the tejash'); 
}
heros.tejash()
// arr.tejash()

arr.sayTejash()
heros.sayTejash()
