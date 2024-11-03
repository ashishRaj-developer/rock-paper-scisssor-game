let randomNumber;
let computerMoves;
let Result;
    
let obj = JSON.parse( localStorage.getItem("obj"))||{
  wins: 0,
  Loss: 0,
  Tie: 0
}

function pickRandomNumber(){
  randomNumber = Math.random();
    if (randomNumber >=0 && randomNumber < 1/3){
      computerMoves= 'rock';
    } else if (randomNumber >=1/3 && randomNumber < 2/3){
      computerMoves = 'paper';
    } else{
      computerMoves = 'scissors';
    }
}

function playGame(playerMove){
  pickRandomNumber();

  if (playerMove === 'rock'){

    if (computerMoves === 'rock'){
        Result = 'Tie';
    } else if (computerMoves === 'paper'){
      Result = 'you Lose'
    } else{
      Result = 'You Win'
    }

  }
    
  else if (playerMove === 'paper'){
    if (computerMoves === 'paper'){
        Result = 'Tie';
    } else if (computerMoves === 'scissors'){
      Result = 'you Lose'
    } else{
      Result = 'You Win'
    }

  }
  
  else if (playerMove === 'scissors'){
    if (computerMoves === 'scissors'){
        Result = 'Tie';
    } else if (computerMoves === 'rock'){
      Result = 'you Lose'
    } else{
      Result = 'You Win'
    }

  }

  if (Result === 'You Win'){
    obj.wins += 1
  }else if (Result === 'you Lose'){
    obj.Loss += 1
  }else {
    obj.Tie += 1
  }
  
  document.querySelector('.js-results').innerText = `${Result}`
  document.querySelector('.js-moves').innerHTML = `you 
    <img src="${playerMove}-emoji.png" class="icon">
    <img src="${computerMoves}-emoji.png" class="icon">
    computer `
  document.querySelector('.js-score').innerText = `Wins: ${obj.wins} Loss: ${obj.Loss} Tie: ${obj.Tie}`
  localStorage.setItem("obj",JSON.stringify(obj))
}
document.querySelector('.js-score').innerText = `Wins: ${obj.wins} Loss: ${obj.Loss} Tie: ${obj.Tie}`
    
