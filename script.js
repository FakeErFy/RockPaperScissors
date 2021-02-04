const rock = document.getElementsByClassName('rock')[0]
const paper = document.getElementsByClassName('paper')[0]
const scissor = document.getElementsByClassName('scissor')[0]
const div = document.body
const p = document.createElement('p')
const span = document.createElement('span')
const body = document.body
const getDiv = document.getElementById('target')
const container = document.getElementsByClassName('container')
const result = document.createElement('div')
result.classList.add('result')

const playerScoreh2 = document.getElementById('p-score')
const computerScoreh2 = document.getElementById('c-score')

const svg = document.getElementsByClassName('svg')

let arr = ['rock', 'paper', 'scissor']

let playerScore = 0;
let computerScore = 0;
let totalRounds = 0;

rock.addEventListener('click', function playing(playerSelection) {
    body.appendChild(result)

    function computerPlay(max) {
        return Math.floor(Math.random() * Math.floor(max))
    }
    
    let random = computerPlay(100)
    let randomChoice
    
    if(random <= 33) {
        randomChoice = arr[0].length
    } else if(random <= 66 && random > 33) {
        randomChoice = arr[1].length
    } else if(random <= 99 && random > 66) {
        randomChoice = arr[2].length
    }

        playerSelection = 'rock'
        if(randomChoice === 4 && playerSelection) {
            rock.classList.remove('green')
            rock.classList.remove('red')
            rock.classList.add('grey')
        } else if (randomChoice === 5 && playerSelection) {
            rock.classList.remove('green')
            rock.classList.remove('grey')
            rock.classList.add('red')
            computerScoreh2.textContent = `${++computerScore}`
        } else if(randomChoice === 7 && playerSelection) {
            rock.classList.remove('red')
            rock.classList.remove('grey')
            rock.classList.add('green')
            playerScoreh2.textContent = `${++playerScore}`
        }
        if(playerScore === 5 || computerScore === 5) {
            rock.disabled = true
            paper.disabled = true
            rock.classList.add('disable')
            paper.classList.add('disable')
            if(playerScore === 5) {
                result.textContent = "Congratulations You won 🎉🥳"
            } else {
                result.textContent = "Oh no, you lost! 😞💔"
            }
        }
})

paper.addEventListener('click', function playing(playerSelection) {
    body.appendChild(result)

    function computerPlay(max) {
        return Math.floor(Math.random() * Math.floor(max))
    }
    
    let random = computerPlay(100)
    let randomChoice
    
    if(random <= 33) {
        randomChoice = arr[0].length
    } else if(random <= 66 && random > 33) {
        randomChoice = arr[1].length
    } else if(random <= 99 && random > 66) {
        randomChoice = arr[2].length
    }

        playerSelection = 'paper'
        if(randomChoice === 5 && playerSelection) {
            paper.classList.remove('green')
            paper.classList.remove('red')
            paper.classList.add('grey')
        } else if (randomChoice === 7 && playerSelection) {
            paper.classList.remove('green')
            paper.classList.remove('grey')
            paper.classList.add('red')
            computerScoreh2.textContent = `${++computerScore}`
        } else if(randomChoice == 4 && playerSelection) {
            paper.classList.remove('red')
            paper.classList.remove('grey')
            paper.classList.add('green')
            playerScoreh2.textContent = `${++playerScore}`
        }
        
        if(playerScore === 5 || computerScore === 5) {
            rock.disabled = true
            paper.disabled = true
            scissor.disabled = true
            rock.classList.add('disable')
            paper.classList.add('disable')
            if(playerScore === 5) {
                result.textContent = "Congratulations You won 🎉🥳"
            } else {
                result.textContent = "Oh no, you lost! 😞💔"
            }
        }
})

scissor.addEventListener('click', function playing(playerSelection) {
    body.appendChild(result)

    function computerPlay(max) {
        return Math.floor(Math.random() * Math.floor(max))
    }
    
    let random = computerPlay(100)
    let randomChoice
    
    if(random <= 33) {
        randomChoice = arr[0].length
    } else if(random <= 66 && random > 33) {
        randomChoice = arr[1].length
    } else if(random <= 99 && random > 66) {
        randomChoice = arr[2].length
    }

        playerSelection = 'scissor'
        if(randomChoice === 7 && playerSelection) {
            scissor.classList.remove('green')
            scissor.classList.remove('red')
            scissor.classList.add('grey')
        } else if (randomChoice === 4 && playerSelection) {
            scissor.classList.remove('green')
            scissor.classList.remove('grey')
            scissor.classList.add('red')
            computerScoreh2.textContent = `${++computerScore}`
        } else if(randomChoice === 5 && playerSelection) {
            scissor.classList.remove('red')
            scissor.classList.remove('grey')
            scissor.classList.add('green')
            playerScoreh2.textContent = `${++playerScore}`
        }
        if(playerScore === 5 || computerScore === 5) {
            rock.disabled = true
            paper.disabled = true
            scissor.disabled = true
            rock.classList.add('disable')
            paper.classList.add('disable')
            scissor.classList.add('disable')
            if(playerScore === 5) {
                result.textContent = "Congratulations You won 🎉🥳"
            } else {
                result.textContent = "Oh no, you lost! 😞💔"
            }
        }
})