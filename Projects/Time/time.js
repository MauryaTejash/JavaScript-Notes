const clock = document.getElementById('result')
setInterval(function(){
    let date = new Date();
    clock.innerHTML = date.toLocaleTimeString()
},1000)