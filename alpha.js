function addClass(elementId){
    const id = document.getElementById(elementId);
    id.classList.add('hidden');
}

function removeClass(elementId){
    const id = document.getElementById(elementId);
    id.classList.remove('hidden');
}

// random alphabet genarate 
function randomAlphabet(){
    const randomValue = Math.random();
    const value = randomValue * 25;
    const index = Math.round(value);
    
    const letter = 'abcdefghijklmnopqrstubwxyz/'
    const letterString = letter.split('');
    const alphabet = letterString[index];
    return alphabet;
}

//set alphabet
function setAlphabet(){
    const alphabet = randomAlphabet();
    const letter = document.getElementById('letter');
    letter.innerText = alphabet;
}

// add or remove background of key 
function addRemoveBg(elementId){
    const id = document.getElementById(elementId);
    id.classList.add('bg-green-600');

}

function enterKey(){
    const keyid = document.addEventListener('keyup', function (event){
    const key = keyid.key;
    return key;
    })

}



function homeScreen(){
    addClass('home-screen');
    removeClass('game-screen');
    setAlphabet();
}
console.log(enterKey())
