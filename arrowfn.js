const user = {
    name: "Tejash",
    course: "ccc",
    message: function(){
        console.log(`${this.name} , welcome`);
        console.log(this);
        
    }
}
user.message()
console.log(this);


// function one(){
//     const val = "Tejash"
//     console.log(this); //not able to access it using 'THIS' inside the function
// }
// one()

                                // arrow function definition
// const arrow = () =>{
//     const newV = "Tejash"
//    console.log(this)   //not able to access it using 'THIS' inside the arrow function
    
// }
// arrow()

                                // IIFE

(function hello(){
    console.log(`tejash`);
    
})();   //to end the IIFE we use the ';' at the end


    //arrow function can have IIFE
( (name) =>{
    console.log(`Tejash ma ${name}`);
    
} )('Tejash')

                        // falsy values

// false, 0, -0, BigInt, 0n, "", null, undefined, NaN


                        // truthy values
    
// true,"0", "false", " ", [], {}, function(){}


const empVal = {
}
if(Object.keys(empVal).length === 0){
    console.log("tejash");
    
}

                            //Nullish coalescing operator (??) : null operator

let val;
val = 5 ?? 10;
val = null ?? 1
val = null ?? undefined
val = null ?? 1 ?? undefined
console.log(val);

