// class are not present in the js but it is a prototype
class user {

    // when class is created then constructor is called 
    constructor(username,age,pass){
        this.username = username
        this.age = age
        this.pass = pass
    }
    // this method will encrypt the Password
    encryptPassword(){
        return `${this.pass}abc`
    }

    changeUser(){
        return `${this.username.toUpperCase()}`
    }
}


const setUser = new user("Tejash",12,'123')
console.log(setUser.encryptPassword());
console.log(setUser.changeUser());
