let val = [1,2,5,8]
for (const nums of val) {
    console.log(nums);
    
}

const greet = "hello98"

for (const gree of greet) {
    console.log(`value is ${gree}`)
}


const map = new Map()
map.set('IN','india')
map.set('UK','uKKKK')

// not possible using the for in loop in map
// for (const key in map) {
//     console.log(key);
    
// }
//console.log(map);

                        // printing the map value using for of loop
for (const key of map) {
    console.log(key);   
}

                        // destructuring of array value in map
for (const [key,value] of map) {
    console.log(key, ':> '+ value);
    
}

                // the Object is not iteratable in this form

// const myObj = {
//     'name': 'Tejash',
//     'age': 10,
//     'bg': 'a',
//     'sub': 'All'
// }

// for (const [key,value] of myObj) {
//     console.log(key,value);
    
// }

const myObj = {
    name: 'Tejash',
    age: 10,
    bg: 'a',
    sub: 'All'
}
// for (const my in myObj) {
//     console.log(myObj[my]);
    
// }


                    // to access the Object values we use the for in loop
for (const key in myObj) {
    console.log(`key is ${key} and value is ${myObj[key]}`);
    
}


const prog = [1,5,8,9,'hello']
for (const key in prog) {
    console.log(prog[key]);
    
}

                            //use of foreach 
const done = ['hello',4,5,'h']
done.forEach(function (name) {
    console.log(name);
    
});

done.forEach( (name) =>{
    console.log(name);
    
})

                //array of object can be access by for parameter
// const cod = [
//     {   name:"tejash",
//         age: 10
//     },
//     {
//         val: 20,
//         hel: "tej"
//     },
//     {
//         geth: 125,
//         data:789
//     }
// ]

// cod.forEach( (get)=>{
//     console.log(get.name);
    
// } )



const number = ["hello","a","b","tejash",12]

const data = number.forEach( (val) =>{
    console.log(val);
    return val   //foreach will not return any value
    
})
console.log(data);

                        //use of Filter and it will not return value automatically
const num = [1,2,3,4,5,6,7,9,10]
// const newN = num.filter( (nums) => nums > 2)
const newN = num.filter( (nums) =>{
    return nums > 2
})
console.log(newN);

                        //use of Map and it will return value automatically

const num1 = [1,2,3,4,5,6,7,9,10]
// const newNum = num1.map( (num) => num+10 )
// const newNum = num1.forEach( (num) => num+10)

                              //chaining of array using map
const newNum = num1
                .map( (num) => num*10)
                .map( (num) => num+1)
                .filter( (num) => num >80)
 console.log(newNum);


                            //use of reduce is mainly to add the array or object values

 const getNum = [1,12,3]
 const rVal = getNum.reduce( function(acc, currVal){ //accumulator is IMP in this and initialise with 0
    console.log(`Acc: ${acc} and currVal: ${currVal}`);
    return acc + currVal
 },2)

//  const rVal = getNum.reduce( (acc,currVal) =>acc+currVal ,0)  //In arrow function reduce is used
 console.log(rVal);
 