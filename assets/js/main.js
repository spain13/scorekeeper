console.log("it work");

let counter1 = document.querySelector("#counter1");
let counter2 = document.querySelector("#counter2");

console.log(counter1);
console.log(counter2);

let scoreHome = 0;
let scoreAway = 0;

function scoreHomepluseins() {
  scoreHome += 1;
  counter1.innerHTML = scoreHome;
}
function scoreHomepluszwei() {
  scoreHome += 2;
  counter1.innerHTML = scoreHome;
}
function scoreHomeplusdrei() {
  scoreHome += 3;
  counter1.innerHTML = scoreHome;
}

function scoreAwaypluseins() {
  scoreAway += 1;
  counter2.innerHTML = scoreAway;
}
function scoreAwaypluszwei() {
  scoreAway += 2;
  counter2.innerHTML = scoreAway;
}
function scoreAwayplusdrei() {
  scoreAway += 3;
  counter2.innerHTML = scoreAway;
}

function reset() {
  scoreHome = 0;
  scoreAway = 0;
  counter1.innerHTML = 0;
  counter2.innerHTML = 0;
}
