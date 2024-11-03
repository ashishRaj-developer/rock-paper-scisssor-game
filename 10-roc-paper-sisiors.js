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
      computerMoves= 'Rock';
    } else if (randomNumber >=1/3 && randomNumber < 2/3){
      computerMoves = 'Paper';
    } else{
      computerMoves = 'Scissors';
    }
}

function playGame(playerMove){
  pickRandomNumber();

  if (playerMove === 'Rock'){

    if (computerMoves === 'Rock'){
        Result = 'Tie';
    } else if (computerMoves === 'Paper'){
      Result = 'you Lose'
    } else{
      Result = 'You Win'
    }

  }
    
  else if (playerMove === 'Paper'){
    if (computerMoves === 'Paper'){
        Result = 'Tie';
    } else if (computerMoves === 'Scissors'){
      Result = 'you Lose'
    } else{
      Result = 'You Win'
    }

  }
  
  else if (playerMove === 'Scissors'){
    if (computerMoves === 'Scissors'){
        Result = 'Tie';
    } else if (computerMoves === 'Rock'){
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
    