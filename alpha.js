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
    addRemoveBg(alphabet, alphabet)
    return letter;
}

// add or remove background of key 
function addRemoveBg(elementId, elementId2) {
    const id = document.getElementById(elementId);
    id.classList.add('bg-green-600');
    const id2 = document.getElementById(elementId);
    id2.classList.remove('bg-green-600');

}



eneterKey();
function homeScreen() {
    addClass('home-screen');
    removeClass('game-screen');
    setAlphabet();

}

// function eneterKey(event){
//     if(event.key==='Enter'){
//         homeScreen()
//     }

// }
// document.addEventListener('keyup', eneterKey)

function eneterKey() {
    document.addEventListener('keyup', function (event) {
        if (event.key === 'Enter') {
            addClass('home-screen');
            removeClass('game-screen');
            return setAlphabet();
        }
    })
}

function playGame() {
    const letter = document.getElementById('letter')
    document.addEventListener('keyup', function (event) {
        if (event.key === letter.innerText.toLowerCase()) {
            setAlphabet()
        }
    })
}

playGame();

