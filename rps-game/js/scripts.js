function rpsGame(yourChoice) {
    console.log(yourChoice);

    let humanChoice = yourChoice.id;
    
    console.log(humanChoice);

    let botChoice = intToIdOfChoice(randomChoice()) ;  //random function convert to {0,1,2} where 0 means rock, 1->paper, 2->scissors

    let winner = decideWhoWon(humanChoice, botChoice);    

    let message = showMessage(winner); //message who won {You won, You lose, You draw} {color: green, red, gray}
}


 function decideWhoWon(humanChoice, botChoice) {

    
}

function showMessage(whoIsWon) {
    
}

function randomChoice() {
    return Math.floor(Math.random() * 3); 
}

function intToIdOfChoice(number) {
        let options = {
            
        }
}

