const p1 = {
    score: 0,
    button: document.querySelector('#p1Button'),
    display: document.querySelector('#p1Display')
}

const p2 = {
    score: 0,
    button: document.querySelector('#p2Button'),
    display: document.querySelector('#p2Display')
}


const resetButton = document.querySelector('#reset')
const winningScoreSelect = document.querySelector('#playto');

let winningScore = 0;
let originalScore = 0;
let isGameOver = false;

p1.button.disabled = true;
p2.button.disabled = true;
resetButton.disabled = true;


function updateScores(player, oppenent) {
    if (!isGameOver) {
        player.score += 1;

        if (player.score === (winningScore - 1) && oppenent.score === (winningScore - 1)) {
            winningScore += 1;
        }
        if (player.score === winningScore) {
            isGameOver = true;
            player.display.classList.add('has-text-success');
            oppenent.display.classList.add('has-text-danger');
            player.button.disabled = true;
            oppenent.button.disabled = true;
            winningScore = originalScore;
            
        }
        player.display.textContent = player.score;

    }
}

p1.button.addEventListener('click', function () {
    updateScores(p1, p2)
})

p2.button.addEventListener('click', function () {
    updateScores(p2, p1)
})

winningScoreSelect.addEventListener('change', function () {
    winningScore = parseInt(this.value);
    originalScore = winningScore;
    reset();

})

resetButton.addEventListener('click', reset)

function reset() {

    isGameOver = false;
    for (let p of [p1, p2]) {
        p.score = 0;
        p.display.textContent = 0;
        p.display.classList.remove('has-text-success', 'has-text-danger');
        p.button.disabled = false;
    }
    
    resetButton.disabled = false;

}



