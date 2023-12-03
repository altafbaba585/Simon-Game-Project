let gameseq = [];
let userseq = [];
let btns = ["red", "yellow", "green", "purple"];
let started = false;
let level = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function () {
  if (started == false) {
    // console.log("game started");
    started = true;
    levelUp();
  }
});

function gameFlash(btn) {
  btn.classList.add("flash");
  setTimeout(function () {
    btn.classList.remove("flash");
  }, 300);
}

function userFlash(btn) {
  btn.classList.add("userFlash");
  setTimeout(function () {
    btn.classList.remove("userFlash");
  }, 300);
}

function levelUp() {
  userseq = [];
  level++;
  h2.innerText = `level ${level}`;
  let ranIndex = Math.floor(Math.random() * 3);
  let ranColor = btns[ranIndex];
  let ranBtn = document.querySelector(`.${ranColor}`);
  gameseq.push(ranColor);
  //   console.log(gameseq);
  //   console.log(ranIndex);
  //   console.log(ranColor);
  //   console.log(ranBtn);
  gameFlash(ranBtn);
}
function checkAns(idx) {
  //   console.log("current level", level);

  if (userseq[idx] == gameseq[idx]) {
    if (userseq.length == gameseq.length) {
      setTimeout(levelUp, 1000);
    }
  } else {
    h2.innerHTML = `Game Over Your score was <b>${level}</b><br>Press any key to start`;
    document.querySelector("body").style.backgroundColor = "red";
    setTimeout(function () {
      document.querySelector("body").style.backgroundColor = "white";
    }, 150);
    reset();
  }
}

function btnPress() {
  let btn = this;
  userFlash(btn);
  userColor = btn.getAttribute("id");
  userseq.push(userColor);
  checkAns(userseq.length - 1);
}

let allBtn = document.querySelectorAll(".btn");
for (btn of allBtn) {
  btn.addEventListener("click", btnPress);
}
function reset() {
  started = false;
  userseq = [];
  gameseq = [];
  level = 0;
}
