function addClass(elementId) {
    const id = document.getElementById(elementId);
    id.classList.add('hidden');
}

function removeClass(elementId) {
    const id = document.getElementById(elementId);
    id.classList.remove('hidden');
}

// random alphabet genarate 
function randomAlphabet() {
    const randomValue = Math.random();
    const value = randomValue * 25;
    const index = Math.round(value);

    const letter = 'abcdefghijklmnopqrstubwxyz/'
    const letterString = letter.split('');
    const alphabet = letterString[index];
    return alphabet;
}

//set alphabet
function setAlphabet() {
    const alphabet = randomAlphabet();
    const letter = document.getElementById('letter');
    letter.innerText = alphabet;
    addBg(alphabet);
    return letter;
}

// add background of key 
function addBg(elementId) {
    const id = document.getElementById(elementId);
    id.classList.add('bg-green-600');
}
// remove background of key 
function removeBg(elementId) {
    const id = document.getElementById(elementId);
    id.classList.remove('bg-green-600');
}





// play game section ----------------------->


function playGame() {
    const lifeId = document.getElementById('life');
    const scoreId = document.getElementById('score');
    const gameScore = document.getElementById('total-score')
    let score = 0;
    let life = 5;
    const letter = document.getElementById('letter');
    document.addEventListener('keyup', function (event) {

        if (event.key === letter.innerText.toLowerCase()) {
            removeBg(letter.innerText.toLowerCase());
            setAlphabet();
            // scoreId.innerText = score = score + 1;
            score = score + 1;
            scoreId.innerText = score;
        }
        else {
            life = life - 1;
            lifeId.innerText = life;
            if (life <= 0) {
                addClass('game-screen');
                removeClass('game-over');
            removeBg(letter.innerText.toLowerCase());
                gameScore.innerText = score;
                score = 0;
                life = 5;
                
            }
        }
       
    })
}

function playAgain(){
    const lifeId = document.getElementById('life');
    const scoreId = document.getElementById('score');
    addClass('game-over');
    removeClass('game-screen');
    setAlphabet();
    lifeId.innerText = 5;
    scoreId.innerText = 0;
    
    
}
