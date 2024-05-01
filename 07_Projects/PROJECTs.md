# Projects
Project link :
[click here](https://stackblitz.com/edit/dom-project-chaiaurcode-fkskxv) 

# Project 1
Color Switcher Solution CODE
``` javascript
const allbuttons = document.querySelectorAll('.button');
const body = document.body;

allbuttons.forEach((button) =>
  button.addEventListener(
    'click',
    (event) => (body.style.backgroundColor = button.id)
  )
);


```

# Project 2
BMI Calculator
``` javascript

const form = document.querySelector('form')

form.addEventListener('submit', (event)=> {
  event.preventDefault();
  const height = parseInt(document.querySelector('#height').value)
  const weight = parseInt(document.querySelector('#weight').value )
  const results = document.querySelector('#results')
  
  if( height === '' || height <0 || isNaN(height) ){
    results.appendChild(document.createTextNode(`Please Give a valid height: ${height}`))
  } else if( weight === '' || weight <0 || isNaN(weight) ){
    results.textContent = ""
    results.appendChild(document.createTextNode(`Please Give a valid weight: ${weight}`))
  } else {
    results.textContent = ""
   const bmi = (weight / ((height * height) / 10000)).toFixed(2)
     let wh =''
      if(bmi < 18.6){
        wh = `Under Weight`
      }
      else if(bmi >= 18.6 && bmi < 24.9) {
        wh = `Normal Weight`
      }
      else{
        wh = `Over Weight`
      }
    results.textContent = `${bmi}: ${wh} `    
  }


})
```

# Project 3 
Digital Clock
``` javascript
let clock = document.querySelector('#clock');
setInterval(() => {
  let date = new Date();
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);

```

# Project 4

Guess the Number GAME
``` javascript
//creating a random number whose range is from 1 to 100
// console.log(parseInt(Math.random()*100 +1))
const min = 1
const max = 100
let randomNumber = parseInt(Math.random() * (max - min + 1 ) + min)

// selecting elements 

const userInput = document.querySelector('#guessField')
const submitButton = document.querySelector('#subt')
let previousGuesses = document.querySelector('.guesses')
const remainingGuesses =document.querySelector('.lastResult')
const message = document.querySelector('.lowOrHi')
const body = document.body

let numGuess = 1
playGame = true
console.log(randomNumber)
const newG = document.querySelector('#newGameButton')

if(playGame){ 
  submitButton.addEventListener('click' , (event) => {
    event.preventDefault() 
    const guess = parseInt(userInput.value)
    validation(guess)
  } )
  }

function validation(guess){
    if(isNaN(guess)){
      userInput.value = ''
      message.textContent = `Please Enter a Valid Number`
     
    }
      else if(guess > 100){
      userInput.value = ''
      message.textContent = `Above 100 number is not accepted `
    }
    else if(guess < 1 ){
      userInput.value = ''
      message.textContent = `Below 1 number is not accepted `
    }
    else {
      userInput.value = ''
      message.textContent = ``
      previousGuesses.innerHTML  += `${guess}, `
      remainingGuesses.textContent = `${10 - numGuess}`
      numGuess++
      if(numGuess === 12){
      message.textContent = `GAME OVER `
      userInput.setAttribute('disabled', '')
      endGame()
      }

      else{
        checkGuess(guess)
      } 

    }
   
    
}


function checkGuess(guess){
    if(guess === randomNumber){
      message.textContent = ` YOU WON , YOU Guessed the Number Right `
      endGame();
    } else if(guess > randomNumber){
      message.textContent = `Number is HIGH`
    } else if(guess < randomNumber){
      message.textContent = `Number is LOW`
    }
}

function endGame(){
  userInput.setAttribute('disabled', '')
  newG.style.display = 'block'
  newG.classList.add = 'button'
  playGame = false
  newGame()
}

function newGame(){
    newG.addEventListener('click', (event)=> {
    randomNumber = parseInt(Math.random() * (max - min + 1 ) + min)
    userInput.value = ''
    numGuess = 1;
    remainingGuesses.textContent = `10`
    userInput.removeAttribute('disabled');
    previousGuesses.innerHTML  = ``
     newG.style.display = 'none'
      playGame = true
  })


}



```

# Project Five
Keyboard Keycodes Tracking
```javascript
const insert = document.getElementById('insert');
const table = document.createElement('table');
const headerRow = document.createElement('tr');
headerRow.innerHTML = `
  <th>Key Pressed</th>
  <th>Key Code</th>
  <th>Key Name</th>
`;
table.appendChild(headerRow);
insert.appendChild(table);

window.addEventListener('keydown', (event) => {
  const newRow = document.createElement('tr');
  newRow.innerHTML = `
    <td>${event.key}</td>
    <td>${event.keyCode}</td>
    <td>${event.code}</td>
  `;
  table.appendChild(newRow);
});

```

# Project Six
Unlimited BackGround Colors
```javascript
// generating a random number

let intervalId;

function changingColor() {
  let color = '#';
  const hex = '0123456789ABCDEF';
  for (let i = 0; i < 6; i++) {
    color += hex[parseInt(Math.random() * 16)];
  }
  document.body.style.backgroundColor = `${color}`;
}

document.querySelector('#start').addEventListener('click', (event) => {
  clearInterval(intervalId);
  intervalId = setInterval(() => changingColor(), 600);
});

document.querySelector('#stop').addEventListener('click', (event) => {
  clearInterval(intervalId);
});

```
