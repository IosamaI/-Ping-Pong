
const playerScore1 = document.querySelector("#ps1");
const playerScore2 = document.querySelector("#ps2");
const playerD1 = document.getElementById("p1");
const playerD2 = document.getElementById("p2");
let se = document.querySelector("select")
let count1 = 0;
let count2 = 0;
let win = NaN;
let gameover = false;


se.addEventListener("change", function () {
    win = parseInt(this.value)
    reset();

})

// Function to handle the click event 
playerD1.addEventListener("click", function () {
    if (!gameover) {

        if (count1 === win) {
            playerD1.style.backgroundColor = "green";
            playerD2.style.backgroundColor = "red";
            playerScore1.classList.add("win")
            playerScore2.classList.add("loss")
            alert("Player 1 wins!");
            gameover = true;
        }
        else {
            count1++
            playerScore1.textContent = count1;
        }
    }
});

document.getElementById("p2").addEventListener("click", function () {
    if (!gameover) {

        if (count2 === win) {
            playerD2.style.backgroundColor = "green"
            playerD1.style.backgroundColor = "red"
            playerScore2.classList.add("win")
            playerScore1.classList.add("loss")
            alert("Player 2 wins!");
            gameover = true;

        }
        else {
            count2++
            playerScore2.textContent = count2;
        }
    }
});
document.getElementById("reset").addEventListener("click", reset);

function reset() {
    count1 = 0;
    count2 = 0;
    playerScore1.textContent = count1;
    playerScore2.textContent = count2;
    playerD2.style.backgroundColor = null
    playerD1.style.backgroundColor = null
    playerScore1.classList.remove("win", "loss")
    playerScore2.classList.remove("win", "loss")
    gameover = false;


}
