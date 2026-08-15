const bugs_score = document.getElementById("bugs-score");
const clickBtn = document.getElementById("click-btn");
const firepower = document.getElementById("firepower");

let score = 0;
let clickPower = 10;

clickBtn.addEventListener("click", () => {
    score += clickPower;
    bugs_score.textContent = `${score} BUGS`;
});
