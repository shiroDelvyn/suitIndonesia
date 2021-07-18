var P1win = NULL;
var P2win = NULL;

function playAudioWin() {
  var win = new Audio('../audio/win.mp3');
  win.play();
}

function playAudioLose() {
  var lose = new Audio('../audio/lose.mp3');
  lose.play();
}

function setWeapon(weapon) {
  var P1w = weapon;
  enemySetWeapon(P1w);
}

function enemySetWeapon(P1w) {
  var weaponList = ['rock', 'paper', 'scissors'];
  var P2w = weaponList[Math.floor(Math.random() * 3)];
  judge(P1w, P2w);
}

function judge(P1w, P2w) {
  var result = P1w + ' ' + P2w;
  switch(result) {
    case "rock scissors":
      P1win = true;
      P2win = false;
      break;
    case "rock rock":
      P1win = false;
      P2win = false;
      break;
    case "rock paper":
      P1win = false;
      P2win = true;
      break;
    case "paper scissors":
      P1win = false;
      P2win = true;
      break;
    case "paper paper":
      P1win = false;
      P2win = false;
      break;
    case "paper rock":
      P1win = true;
      P2win = false;
      break;
    case "scissors rock":
      P1win = false;
      P2win = true;
      break;
    case "scissors scissors":
      P1win = false;
      P2win = false;
      break;
    case "scissors paper":
      P1win = true;
      P2win = false;
      break;
  }

  showWinners(P1w, P2w);
}

function showWinners(P1w, P2w) {
  if (P1win === true && P2win === false) {
    playAudioWin();
    document.getElementById('demo').innerHTML = "Player 1 wins !";
    document.getElementById('weapon').innerHTML = "Player 1 = " + P1w + "    Bot = " + P2w;
  } else if (P1win === false && P2win === true) {
    playAudioLose();
    document.getElementById('demo').innerHTML = "The bot wins !";
    document.getElementById('weapon').innerHTML = "Player 1 = " + P1w + "    Bot = " + P2w;
  } else {
    document.getElementById('demo').innerHTML = "Draw !!";
    document.getElementById('weapon').innerHTML = "";
  }
}