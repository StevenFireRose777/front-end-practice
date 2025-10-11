const playerButton = document.getElementById('button-dice');

const bot = document.getElementById('bot-input');

const player = document.getElementById('player-input');


playerButton.addEventListener('click', function(){
  let playerNum = getDiceNumber();
  let botNumber = getDiceNumber();

  bot.innerHTML = botNumber.toString();
  player.innerHTML = playerNum.toString();

  if(playerNum > botNumber){
    alert('You win!');
  }else if(botNumber > playerNum){
    alert('You LOST!');
  }else{
    alert('Tie');
  }


});

function getDiceNumber(){
  return Math.floor(Math.random()* 6 ) + 1;
}