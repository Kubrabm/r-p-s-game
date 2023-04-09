const compChoice = document.getElementById('computer-choice')
const usrChoice = document.getElementById('user-choice')
const finishresult = document.getElementById('result')
const Choices = document.querySelectorAll('button')
let user
let comp
let result

Choices.forEach(Choice => Choice.addEventListener('click', (e) => {
  user = e.target.id
  usrChoice.innerHTML = user
  allCompChoice()
  allResult()
}))

function allCompChoice() {
  const randomNumber = Math.floor(Math.random() * 3) + 1 
  
  if (randomNumber === 1) {
    comp = 'rock'
  }
  if (randomNumber === 2) {
    comp = 'scissors'
  }
  if (randomNumber === 3) {
    comp = 'paper'
  }
  compChoice.innerHTML = comp
}

function allResult() {
  if (comp === user) {
    result = 'its a draw!'
  }
  if (comp === 'rock' && user === "paper") {
    result = 'you win!'
  }
  if (comp === 'rock' && user === "scissors") {
    result = 'you lost!'
  }
  if (comp === 'paper' && user === "scissors") {
    result = 'you win!'
  }
  if (comp === 'paper' && user === "rock") {
    result = 'you lost!'
  }
  if (comp === 'scissors' && user === "rock") {
    result = 'you win!'
  }
  if (comp === 'scissors' && user === "paper") {
    result = 'you lost!'
  }
  finishresult.innerHTML = result
}
