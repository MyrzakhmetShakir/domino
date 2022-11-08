
let h1 = document.querySelector('h1');
let player1 = document.querySelector('.image1');
let player2 = document.querySelector('.image2');
let btn = document.querySelector('button');

let arr = ['one', 'two', 'three', 'four', 'five', 'six'];

btn.addEventListener('click', function () {


  var random1 = Math.floor(Math.random()*6);
  var random2 = Math.floor(Math.random()*6);

  player1.className = 'left image1';
  player2.className = 'left image2';

  player1.className = player1.className + ' ' + arr[random1];
  player2.className = player2.className + ' ' + arr[random2];

  if(random1 > random2) {
    new Audio('images/mixkit-choir-harp-bless-657.wav').play();
    h1.innerHTML = '🚩' + ' Player1 is winner!';
  }
  else if(random2>random1) {
    new Audio('images/mixkit-choir-harp-bless-657.wav').play();
    h1.innerHTML = 'Player2 is winner ' + '🚩';
  }
  else {new Audio('images/mixkit-wrong-answer-bass-buzzer-948.wav').play();
    h1.innerHTML = 'No winner!';}

});
