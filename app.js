var timer = 60;
var score = 0;

const makebubble = () => {
  var clutter = "";
  for (let i = 0; i < 188; i++) {
    var rn = Math.floor(Math.random() * 10);
    clutter += `<div class="bubble">${rn}</div>`;
  }

  document.querySelector(".p-btm").innerHTML = clutter;
};
const ResetGame = () => {
  location.reload();
};
const runTimer = () => {
  let timerDOM = document.querySelector(".timer");
  const Intrvl1 = setInterval(() => {
    if (timer > 0) {
      timer--;
      timerDOM.textContent = timer;
    } else {
      var bubblecontainer = document.querySelector(".p-btm");
      bubblecontainer.innerHTML = `Game Over at a score of ${score}`;
      bubblecontainer.innerHTML += `<button class="reset">Reset Game</button>`;
      document.querySelector(".reset").addEventListener("click", () => {
        ResetGame();
      });
      clearInterval(Intrvl1);
    }
  }, 1000);
};

const getNewHit = () => {
  var rn = Math.floor(Math.random() * 10);
  document.querySelector("#hitval").textContent = rn;
};

const increaseScore = () => {
  score += 10;
  document.querySelector(".scoreval").textContent = score;
};

document.querySelector(".p-btm").addEventListener("click", (e) => {
  var clickedNum = parseInt(e.target.textContent);
  var hitrn = document.querySelector("#hitval").textContent;
  if (clickedNum == hitrn) {
    increaseScore();
    makebubble();
    getNewHit();
  }
});
makebubble();
runTimer();
getNewHit();
