const reset = document.querySelector('#reset')
const maxScore = document.querySelector('#maxScore')
let gameIsOver = false


const p1All = {
    score: document.querySelector('#p1Score'),
    add: document.querySelector('#p1Add'),

}

const p2All = {
    score: document.querySelector('#p2Score'),
    add: document.querySelector('#p2Add')

}

function updateScore(player, opponent) {
    if (!gameIsOver) {
        let newValue = parseInt(player.score.innerText) + 1
        player.score.innerText = newValue
        if (parseInt(player.score.innerText) === parseInt(maxScore.value)) {
            player.score.style.color = 'green';
            opponent.score.style.color = 'red';
            gameIsOver = true
        }
    }

}

p1All.add.addEventListener('click', function () {
    updateScore(p1All, p2All)
})
p2All.add.addEventListener('click', function () {
    updateScore(p2All, p1All)
})

function resetScore() {
    gameIsOver = false;
    p1All.score.innerText = 0;
    p1All.score.style.color = "";
    p2All.score.innerText = 0;
    p2All.score.style.color = "";
}
reset.addEventListener('click', resetScore)
maxScore.addEventListener('change', resetScore)