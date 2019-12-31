function rpsGame(yourChoice) {
    console.log(yourChoice);

    let humanChoice = yourChoice.id;

    let botChoice = intToIdOfChoice(randomChoice()); //random function convert to {0,1,2} where 0 means rock, 1->paper, 2->scissors

    let winner = decideWhoWon(humanChoice, botChoice);
    console.log(humanChoice + " " + botChoice);
    console.log(winner);

    let message = showMessage(winner); //message who won {You won, You lose, You draw} {color: green, red, gray}
    console.log(message);

}


function decideWhoWon(humanChoice, botChoice) {
    scoreTable = {
        'rock': {
            'rock': 0.5,
            'paper': 0,
            'scissors': 1
        },
        'paper': {
            'rock': 1,
            'paper': 0.5,
            'scissors': 0
        },
        'scissors': {
            'rock': 0,
            'paper': 1,
            'scissors': 0.5
        }
    };

    return scoreTable[humanChoice][botChoice];
}

function showMessage(humanScore) {
    if (humanScore === 1)
        return {
            message: 'You won',
            color: 'green'
        };
    else if (humanScore === 0.5)
        return {
            message: 'You tied',
            color: 'yellow'
        }
    else
        return {
            message: 'You lose',
            color: 'red'
        }

}

function randomChoice() {
    return Math.floor(Math.random() * 3);
}

function intToIdOfChoice(number) {
    return ['rock', 'paper', 'scissors'][number];
}