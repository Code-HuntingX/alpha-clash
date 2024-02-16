


function homeScreen() {
    const scoreId = document.getElementById('score');
    const lifeId = document.getElementById('life');
    lifeId.innerText = 5;
    scoreId.innerText = 0;
    addClass('home-screen');
    removeClass('game-screen');
    playGame();
    setAlphabet();

}


enerKey()
function enerKey() {
    const lifeId = document.getElementById('life');
    const scoreId = document.getElementById('score');
    document.addEventListener('keyup', function (event) {
        if (event.key === 'Enter' && lifeId.innerText == 0 && scoreId.innerText == 1) {
            console.log('ok boss')
            lifeId.innerText = 5;
            scoreId.innerText = 0;
            homeScreen();
        }
    })
}
