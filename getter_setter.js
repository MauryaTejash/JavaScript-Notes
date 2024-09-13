class user {
    constructor(name,age){
        this.name = name
        this.age = age
    }

    // to get the value
    get age(){
        return `${this._age}tejash`
    }
    // to set the value
    set age(value){
        return this._age = value.toUpperCase()
    }
}

    // Note
    // Getter and setter are always written in together otherwise give the error

const newUser = new user('Tejash','abc')
console.log(newUser.age);

function get(){
    let value = 'Tejash'
    function ini(){
        let num = 'maurya'
        console.log(value);  
        return ini 
    // }
    // function ini1(){
    //     console.log(value);
    //     console.log(num);   
    // }
    ini()
    // ini1()
}
const name = get()
get()
}