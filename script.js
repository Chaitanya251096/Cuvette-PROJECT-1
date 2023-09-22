const handOptions = {
  "rock": "icons8-fist-67 1 (1).png",
  "paper": "icons8-hand-64 1.png",
  "scissors": "17911 1.png"
}

let SCORE = 0;
let SCORE1 = 0;


const pickUserHand = (hand) => {
  let hands = document.querySelector(".hands");
   hands.style.display = "none";

  let celbration = document.querySelector(".celbration");
  celbration.style.display = "none";
  
  let contest = document.querySelector(".contest")
  contest.style.display = "flex"

  let userhand = document.querySelector(".userhand")
  userhand.style.display = "block"

  let computerhand = document.querySelector(".computerhand")
  computerhand.style.display = "block"

 
  document.getElementById("userPickImage").src = handOptions[hand];

  pickComputerHand(hand);
};

const pickComputerHand = (hand) => {
    let hands = ["rock", "paper", "scissors"];
    let cpHand = hands[Math.floor(Math.random() * hands.length)];
    
    // set computer image 
    document.getElementById("computerPickImage").src = handOptions[cpHand]
    
    referee(hand, cpHand);
};

const referee = (userHand, cpHand) => {
  if (userHand == "paper" && cpHand == "scissors") {
    setDecision("YOU LOSE!");
    setScore2(SCORE1 + 1);
  }
  if (userHand == "paper" && cpHand == "rock") {
    let nextBtn = document.querySelector(".next-btn")
    nextBtn.style.display = "block"
    setDecision("YOU WIN!");
    setScore(SCORE + 1);
  }
  if (userHand == "paper" && cpHand == "paper") {
    setDecision("It's a tie!");
  }
  if (userHand == "rock" && cpHand == "scissors") {
    setDecision("YOU WIN!");
    let nextBtn = document.querySelector(".next-btn")
    nextBtn.style.display = "block"
    setScore(SCORE + 1);
  }
  if (userHand == "rock" && cpHand == "paper") {
    setDecision("YOU LOSE!");
    setScore2(SCORE1 + 1);
  }
  if (userHand == "rock" && cpHand == "rock") {
    setDecision("It's a tie!");
  }
  if (userHand == "scissors" && cpHand == "scissors") {
    setDecision("It's a tie!");
  }
  if (userHand == "scissors" && cpHand == "rock") {
    setDecision("YOU LOSE!");
    setScore2(SCORE1 + 1);
  }
  if (userHand == "scissors" && cpHand == "paper") {
    setDecision("YOU WIN!");
    let nextBtn = document.querySelector(".next-btn")
    nextBtn.style.display = "block"
    setScore(SCORE + 1);
  }
};

const restartGame = () => {
  let contest = document.querySelector(".contest");
  contest.style.display = "none";

  let celbration = document.querySelector(".celbration")
  celbration.style.display = "none"

  let hurray = document.querySelector(".hurray")
  hurray.style.display = "none"
  
  let wrapper = document.querySelector(".wrapper")
  wrapper.style.display = "flex"

  let scoreboard = document.querySelector(".scoreboard")
  scoreboard.style.display = "flex"
  
  let hands = document.querySelector(".hands");

  hands.style.display = "flex";
  let nextBtn = document.querySelector(".next-btn")
    nextBtn.style.display = "none"

    
}

const setDecision = (decision) => {
  document.querySelector(".decision h1").innerText = decision;
}

const setScore = (newScore) => {
  SCORE = newScore;
  document.getElementById('userSCR').innerText = newScore;
}

const setScore2 = (newScore1) => {
  SCORE1 = newScore1;
  document.getElementById('compSCR').innerText = newScore1;
}


const btnRules = document.querySelector(".rules-btn");
const btnClose = document.querySelector(".close-btn");
const modalRules = document.querySelector(".modal");


btnRules.addEventListener("click", () => {
  modalRules.classList.toggle("show-modal");
});
btnClose.addEventListener("click", () => {
  modalRules.classList.toggle("show-modal");
});

const celebration = () => {

  let contest = document.querySelector(".contest")
  contest.style.display = "block"

  let userhand = document.querySelector(".userhand")
  userhand.style.display = "none"

  let computerhand = document.querySelector(".computerhand")
  computerhand.style.display = "none"

  let wrapper = document.querySelector(".wrapper")
  wrapper.style.display = "none"
    
  let scoreboard = document.querySelector(".scoreboard")
  scoreboard.style.display = "none"

  let referee = document.querySelector(".referee")
  referee.style.display = "block"

  let celbration = document.querySelector(".celbration")
  celbration.style.display = "block"

  let hurray = document.querySelector(".hurray")
  hurray.style.display = "none"
 
}
