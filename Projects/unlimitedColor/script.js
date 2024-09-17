const random = function(){
    const rValue = '0123456789ABCDEF'
    let value = '#'
    for (let i = 0; i < 6; i++) {
        value+= rValue[Math.floor(Math.random()*16)]    
    }
    return value
}
let result
const start = function(){
    if(!result){
        result = setInterval(changeBG,1000)  
    }

    function changeBG(){
        document.body.style.backgroundColor = random()
    }    
}
const end = function(){
    clearInterval(result)
    result = null
}
document.querySelector('#start').addEventListener('click',start)
document.querySelector('#end').addEventListener('click',end)

