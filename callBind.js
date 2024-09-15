function set(username){
    this.username = username
}
//call passed the current execution context to another function
//it not uses 'this' as current execution context of function but uses 'this' from another func execution context
function createUser(username,age,city){
    set.call(this,username)
    
    this.age = age
    this.city = city
}

const user = new createUser('Tejash',10,'vns')
console.log(user);

