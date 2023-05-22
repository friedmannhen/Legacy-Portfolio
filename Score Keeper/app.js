const controlls = document.querySelectorAll(".controllers");
const playerOneSCore = document.querySelector("#playerOneScore");
const playerTwoSCore = document.querySelector("#playerTwoScore");
const WinningScoreSelect = document.querySelector("#winningScore");
let p1Score = 0;
let p2Score = 0;
let winningScore = 6;
for (let controll of controlls) {
  controll.addEventListener("click", function (e) {
    switch (this.id) {
      case "control1":
        p1Score += 1;
        break;
      case "control2":
        p2Score += 1;
        break;
      case "reset":
        p1Score = 0;
        p2Score = 0;
        break;
    }

    playerOneSCore.textContent = p1Score;
    playerTwoSCore.textContent = p2Score;
    let winner = checkScore()
    if (checkScore!=false) {
      alert(`${winner.id.replace("player", "player ").replace("One","1").replace("Two","2").replace("Score"," Won!!")} `)
      return;
    }
    console.log(playerOneSCore);
    if (p1Score > p2Score) {
      playerOneSCore.classList.add("in-lead");
      playerOneSCore.classList.remove("not-in-lead");
      playerOneSCore.classList.remove("tie");
      playerTwoSCore.classList.add("not-in-lead");
      playerTwoSCore.classList.remove("in-lead");
      playerTwoSCore.classList.remove("tie");
    } else if (p1Score < p2Score) {
      playerTwoSCore.classList.add("in-lead");
      playerTwoSCore.classList.remove("not-in-lead");
      playerTwoSCore.classList.remove("tie");
      playerOneSCore.classList.add("not-in-lead");
      playerOneSCore.classList.remove("in-lead");
      playerOneSCore.classList.remove("tie");
    } else {
      playerOneSCore.classList.remove("not-in-lead");
      playerTwoSCore.classList.remove("not-in-lead");
      playerOneSCore.classList.remove("in-lead");
      playerTwoSCore.classList.remove("in-lead");
      playerOneSCore.classList.add("tie");
      playerTwoSCore.classList.add("tie");
    }
  });
}

WinningScoreSelect.addEventListener("change", function (e) {
  winningScore = parseInt(this.value);
  alert(`Winning Score Set to: ${winningScore}`);
});

function checkScore() {
  if (p1Score == winningScore) return playerOneSCore;
  else if (p2Score == winningScore) return playerTwoSCore;
  else return false;
}
