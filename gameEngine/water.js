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
  var weaponList = ['rock', 'glass', 'water'];
  var P2w = weaponList[Math.floor(Math.random() * 3)];
  judge(P1w, P2w);
}

function judge(P1w, P2w) {
  var result = P1w + ' ' + P2w;
  switch(result) {
    case "rock water":
      P1win = false
      P2win = true;
      break;
    case "rock rock":
      P1win = false;
      P2win = false;
      break;
    case "rock glass":
      P1win = true;
      P2win = false;
      break;
    case "glass water":
      P1win = true;
      P2win = false;
      break;
    case "glass glass":
      P1win = false;
      P2win = false;
      break;
    case "glass rock":
      P1win = false;
      P2win = true;
      break;
    case "water rock":
      P1win = true;
      P2win = false;
      break;
    case "water water":
      P1win = false;
      P2win = false;
      break;
    case "water glass":
      P1win = false;
      P2win = true;
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