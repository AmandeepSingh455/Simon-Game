let gameSeq = [];
let userSeq = [];
let btns = ["yellow", "red", "blue", "green"];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function () {
  if (started == false) {
    console.log("Game Started");
    started = true;
    levelUp();
  }
});

function btnFlash(btn) {
  //   console.log(btn);
  btn.classList.add("flash");
  setTimeout(function () {
    btn.classList.remove("flash");
  }, 300);
}

function useFlash(btn) {
  //   console.log(btn);
  btn.classList.add("userFlash");
  setTimeout(function () {
    btn.classList.remove("userFlash");
  }, 300);
}

function levelUp() {
  userSeq = [];
  level++;
  h2.innerText = `level ${level}`;

  let randIndx = Math.floor(Math.random() * btns.length);
  let randomColor = btns[randIndx];
  let randbtn = document.querySelector(`.${randomColor}`);

  //   console.log(randbtn);
  //   console.log(randIndx);
  //   console.log(randomColor);

  gameSeq.push(randomColor);
  console.log(gameSeq);
  btnFlash(randbtn);
}

function checkAns(index) {
  // let index = level - 1;
  if (userSeq[index] == gameSeq[index]) {
    if (userSeq.length == gameSeq.length) {
      setTimeout(levelUp, 1000);
    }
  } else {
    h2.innerHTML = `Game over! Your score was <b>${level}</b> <br>Press any key to Start again!`;
    document.querySelector("body").style.backgroundColor = "red";
    setTimeout(function () {
      document.querySelector("body").style.backgroundColor = "white";
    }, 150);
    reset();
  }
}

function btnPress() {
  let btn = this;
  useFlash(btn);

  userColor = btn.getAttribute("id");
  userSeq.push(userColor);
  //   console.log(userSeq);
  checkAns(userSeq.length - 1);
}

let allbtns = document.querySelectorAll(".btn");

for (btn of allbtns) {
  btn.addEventListener("click", btnPress);
}

function reset() {
  started = false;
  gameSeq = [];
  userSeq = [];
  level = 0;
}
