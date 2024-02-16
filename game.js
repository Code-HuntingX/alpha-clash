


playGame();
function homeScreen() {
    addClass('home-screen');
    removeClass('game-screen');
    setAlphabet();

}


function eneterKey() {
    document.addEventListener('keyup', function (event) {
        if (event.key === 'Enter') {
            addClass('game-over');
            removeClass('game-screen');
            return setAlphabet();
        }
    })
}