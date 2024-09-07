function one(){
    const user = "tejash"

    function two(){
        const name = "Maurya"
        console.log(user);    
    }
    //console.log(name);
    two();
}

one()


                                //scope in function decelaration

console.log(fnone(5)); //this will give the output correctly

function fnone(val){
    return val
}

console.log(res(6)); //in this case no output comes because it can't be accessed

const res = function fntwo(val1){
    return val1
}
