let random = (parseInt(Math.random()*100 +1))
const submit = document.querySelector('#guessSubmit')
const userInput = document.querySelector('#field')
const prevGuess = document.querySelector('.pguess')
const remGuess = document.querySelector('.rguess')
const lowOrHigh = document.querySelector('.loworHigh')
const startOver = document.querySelector('.result')

const p = document.createElement('p')

let pGuess = []
let rGuess = 1

let playGame = true

if(playGame){
    submit.addEventListener('click',function(e){
        e.preventDefault()
        const Guess = parseInt(userInput.value)
        validateGuess(Guess)
    })
}

//checking the validation of random number
function validateGuess(Guess){
    if(isNaN(Guess)){
        alert('Please valid number')
    }else if(Guess < 1){
        alert('Please enter Valid number')
    }else if(Guess > 100){
        alert('Please enter Valid number')
    }else{
        pGuess.push(Guess) //pushing the value to array to display the previous guess
        //if remaining guess is more than 10 then
        if(rGuess >=10){
            displayGuess(Guess)
            displayMessage(`Game over random ${random}`)
            endGame()
        }else{
            displayGuess(Guess)
            checkGuess(Guess)
        }
    }
}

function checkGuess(Guess){
    if(Guess === random){
        displayMessage('Right Guess')
        endGame()
    }else if(Guess < random){
        displayMessage('Number is too Low')
    }else if(Guess > random){
        displayMessage('Number is too High')
    }
}

function displayGuess(Guess){
    userInput.value = '' //making the input box empty
    prevGuess.innerHTML += `${Guess} ` //add the value in prevGuess array
    rGuess++;
    remGuess.innerHTML = `${11-rGuess}`
}

function displayMessage(message){
    lowOrHigh.innerHTML = `<h2>${message} </h2>`
}

function endGame(){
    userInput.value = ''
    userInput.setAttribute('disabled','')
    p.classList.add('button')
    p.innerHTML = `<h2 id='newGame'> Start new game</h2>`
    startOver.appendChild(p)
    playGame = false
    newGame()
}

function newGame(){
    const newButton = document.querySelector('#newGame')
    newButton.addEventListener('click',function(e){
        random = (parseInt(Math.random()*100 +1))
        pGuess = []
        rGuess = 1
        prevGuess.innerHTML = ''
        remGuess.innerHTML = `${11-rGuess}`
        userInput.removeAttribute('disabled')
        startOver.removeChild(p)
        playGame = true
    })
    
}