const log = console.log;
const header = document.querySelector("header");
const squars = document.querySelectorAll(".box");
let turn = "X";
const theNineSq = [];

function afterWinning(a, b, c) {
  document.getElementById(`sqr${a}`).style.backgroundColor = "#b1cbbb";
  document.getElementById(`sqr${a}`).style.color = "#eea29a";

  document.getElementById(`sqr${b}`).style.backgroundColor = "#b1cbbb";
  document.getElementById(`sqr${b}`).style.color = "#eea29a";

  document.getElementById(`sqr${c}`).style.backgroundColor = "#b1cbbb";
  document.getElementById(`sqr${c}`).style.color = "#eea29a";

  header.innerHTML = `${
    document.getElementById(`sqr${a}`).innerHTML
  } is Winner`;

  const farwal = setInterval(() => {
    header.innerHTML = `waiting ...`;
  }, 1000);

  setTimeout(() => {
    clearInterval(farwal);
    header.innerHTML = "let's do it again";
  }, 3000);

  setTimeout(() => {
    location.reload();
  }, 4000);
}

function whoWin() {
  for (let x = 1; x < 10; x++) {
    theNineSq[x] = document.getElementById(`sqr${x}`).innerHTML;
  }
  if (
    theNineSq[1] === theNineSq[2] &&
    theNineSq[2] === theNineSq[3] &&
    theNineSq[1] != ""
  ) {
    afterWinning(1, 2, 3);
  } else if (
    theNineSq[4] === theNineSq[5] &&
    theNineSq[5] === theNineSq[6] &&
    theNineSq[4] != ""
  ) {
    afterWinning(4, 5, 6);
  } else if (
    theNineSq[7] === theNineSq[8] &&
    theNineSq[8] === theNineSq[9] &&
    theNineSq[7] != ""
  ) {
    afterWinning(7, 8, 9);
  } else if (
    theNineSq[1] === theNineSq[4] &&
    theNineSq[4] === theNineSq[7] &&
    theNineSq[1] != ""
  ) {
    afterWinning(1, 4, 7);
  } else if (
    theNineSq[2] === theNineSq[5] &&
    theNineSq[5] === theNineSq[8] &&
    theNineSq[2] != ""
  ) {
    afterWinning(2, 5, 8);
  } else if (
    theNineSq[3] === theNineSq[6] &&
    theNineSq[6] === theNineSq[9] &&
    theNineSq[3] != ""
  ) {
    afterWinning(3, 6, 9);
  } else if (
    theNineSq[1] === theNineSq[5] &&
    theNineSq[5] === theNineSq[9] &&
    theNineSq[1] != ""
  ) {
    afterWinning(1, 5, 9);
  } else if (
    theNineSq[3] === theNineSq[5] &&
    theNineSq[5] === theNineSq[7] &&
    theNineSq[3] != ""
  ) {
    afterWinning(3, 5, 7);
  }
}

Array.from(squars).forEach((sq) => {
  sq.addEventListener("click", function () {
    if (sq.innerHTML === "" && turn === "X") {
      sq.innerHTML = "X";
      turn = "O";
      header.innerHTML = `O Turn`;
    } else if (turn === "O" && sq.innerHTML != "X") {
      sq.innerHTML = "O";
      turn = "X";
      header.innerHTML = `X Turn`;
    }
    whoWin();
  });
});

log(theNineSq);
