// const form = document.querySelector('form')

// form.addEventListener('submit',function(e){
//     e.preventDefault() //this will stop the value to move to server

// const height = parseInt(document.querySelector('#Height').value)
// const weight = parseInt(document.querySelector('#Weight').value)
// const result = document.querySelector('#result')

const form = document.querySelector('form');
// this usecase will give you empty
// const height = parseInt(document.querySelector('#height').value)

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#result');
if(height === "" || height < 0 || isNaN(height)){
    results.innerHTML = `Please enter valid height ${height}`
}
else if(weight === "" || weight < 0 || isNaN(weight)){
     results.innerHTML = `Please enter valid weight ${weight}`
}else{
    const bmi = (weight/((height*height)/10000)).toFixed(2)
    results.innerHTML = `${bmi}`
}
})
