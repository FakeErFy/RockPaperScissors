const rock = document.getElementsByClassName('rock')[0]
const paper = document.getElementsByClassName('paper')[1]
const scissor = document.getElementsByClassName('scissor')[2]
const div = document.body
const p = document.createElement('p')

let arr = ['rock', 'paper', 'scissor']

function computerPlay() {
    return arr[Math.floor(Math.random() * arr.length)]
}


function playing(playerSelection, computerSelection) {
    if((playerSelection === 'rock' && computerSelection === 'scissor') || 
        (playerSelection === 'paper' && computerSelection === 'rock') || 
        (playerSelection === 'scissor' && computerSelection === 'playerSelectionpaper')) {
            p.textContent = `Player won with ${playerSelection} vs ${computerSelection}`
        } else if((computerSelection === 'rock' && playerSelection === 'scissor') || 
        (computerSelection === 'paper' && playerSelection === 'rock') || 
        (computerSelection === 'scissor' && playerSelection === 'paper')) {
            p.textContent = "Computer won"
        } else {
            p.textContent = "Draw"
        }
}

rock.addEventListener('click', () => {
    // playing(playerSelection, computerPlay())
    div.appendChild(p)
    // if(playerSelection === 'rock' && computerSelection === 'scissor') {
    //         p.textContent = `Player won with ${playerSelection} vs ${computerSelection}`
    //     } else if(computerSelection === 'paper' && playerSelection === 'rock') {
    //         p.textContent = "Computer won"
    //     } else {
    //         p.textContent = "Draw"
    //     }
        playing('rock', computerPlay())
        // p.textContent = `rock won against ${computerSelection}`
})