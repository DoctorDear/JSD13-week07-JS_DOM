// --- ส่วนที่ 1: ระบบคลิกแมลง (ของคุณเดิม) ---
const bugs_score = document.getElementById("bugs-score");
const header_bugs_score = document.getElementById("header-bugs-score");
const clickBtn = document.getElementById("click-btn");
const firepower = document.getElementById("firepower");

let score = 0;
let clickPower = 1;

function updateScore() {
    bugs_score.textContent = score;
    if (header_bugs_score) header_bugs_score.textContent = score;
}

clickBtn.addEventListener("click", () => {
    score += clickPower;
    updateScore();
});

const buyTrooperBtn = document.getElementById("buy-trooper-btn");
const trooperCost = document.getElementById("trooper-cost");
const trooperDeployed = document.getElementById("trooper-deployed");

let trooperPrice = 15;
let trooperCount = 0;

buyTrooperBtn.addEventListener("click", () => {
    if (score >= trooperPrice) {
        score -= trooperPrice;

        trooperCount += 1;
        clickPower += 1;

        trooperPrice = Math.floor(trooperPrice * 1.15);

        updateScore();
        trooperCost.textContent = trooperPrice;
        trooperDeployed.textContent = trooperCount;
        firepower.textContent = clickPower;
    } else {
        alert("Not enough Bugs! Spread more Managed Democracy, Helldiver!");
    }
});

const buyDroneBtn = document.getElementById("buy-drone-btn");
const droneCost = document.getElementById("drone-cost");
const droneDeployed = document.getElementById("drone-deployed");
const killRateDisplay = document.getElementById("kill-rate");

let dronePrice = 100;
let droneCount = 0;
let autoKillRate = 0;

buyDroneBtn.addEventListener("click", () => {
    if (score >= dronePrice) {
        score -= dronePrice;
        droneCount += 1;
        autoKillRate += 2;
        dronePrice = Math.floor(dronePrice * 1.15);

        updateScore();
        droneCost.textContent = dronePrice;
        droneDeployed.textContent = droneCount;
        killRateDisplay.textContent = autoKillRate;
    } else {
        alert("Insufficient Bugs for deployment! Get back to the frontlines!");
    }
});
setInterval(() => {
    if (autoKillRate > 0) {
        score += autoKillRate;
        updateScore();
    }
}, 1000);
