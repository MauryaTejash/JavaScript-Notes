//promise object represent eventual completion of async task
const promise = new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log('promise is completed');
        resolve() //it is a method
    })
})

//then prop is work for the resolve
promise.then(function(){
    console.log('executed resolve');
    
})

//type 2 for calling the Promise
// new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log('resolve call');
//         resolve({username: 'tejash',age:112}) //resolve take the values and during then it calls
//     },1000)
// }).then(function(user){
//     console.log('then working');
//     console.log(user);
    
// })

//type 3 for calling the Promise
const promise2 = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = 1
        if(!error){
            resolve({username: 'Tejash',age: 123})
        }else{
            reject('ERROR 404') //reject work for the errors
        }
        
    })
}).then(function(user){
    console.log('resolve done');
    console.log(user);
    
    
}).catch(function(user){
    console.log('reject done');
    console.log(user);
    
    
})


//type 4 for calling the Promise using sync and await

// const promise3 = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         let error = true
//         if(!error){
//             resolve({username: 'Tejash Maurya',age: 123})
//         }else{
//             reject('ERROR 404') //reject work for the errors
//         }
//     },1000)
// })

// async function res() {
//     // async and await always wrap in the trycatch block 
//     try {
//         const response = await promise3
//         console.log(response);
//     } catch (error) {
//         console.log('Error occers at last');        
//     }   
// }
// res()

// async function result() {
//     try {
//         //during the 'fetch' we have to use 'await' because it take time to get the data
//         const value = await fetch('https://api.github.com/users/mauryatejash')

//         //here also await is used because convert into json format will take the time
//         const ans = await value.json()
//         console.log(ans);

//     } catch (error) {
//         console.log("Error at result");
//     }
// }
// result()


//type 5 for calling the fetch using the 'then' and 'catch'

fetch('https://api.github.com/users/mauryatejash')

//here 2 '.then' is used bec 1st will convert the fetch data into json and 2nd will print the data 
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data); 
})
.catch((error)=>{
    console.log("Error at then and catch");
    
})