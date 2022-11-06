let numeriHtml = document.querySelector('.numeri-casuali')
let finalResultOk = document.querySelector ('.risultato-finale-ok')
let finalResultNo = document.querySelector ('.risultato-finale-no')

let arrayRandom = [];
for (var i = 0; i < 5 ; i++){
    let result = true;
    let numberRandom = Math.floor(Math.random()*100)+1;
    for (var j = 0; j < i; j++){
        if (arrayRandom [j] == numberRandom)result =false;
    }
    if (result){
        arrayRandom[i] = numberRandom;
    } else {
        i--;
    }
}
console.log('numeri casuali:' , arrayRandom)
numeriHtml.innerHTML = `<div class=".numeri-casuali">${arrayRandom}</div>`

setTimeout(sparizioneNumeri, 5000)

function sparizioneNumeri (){
    numeriHtml.classList.add('displaynone')
}

setTimeout(chiedereNumeriUtente, 8000)

let arrayPrompt = []

function chiedereNumeriUtente(){
    for(let i = 0; i < 5; i++){
        let numeriInseriti = parseInt(prompt('inserisci i numeri che ricordi')) 
        arrayPrompt.push(numeriInseriti)
    }
    console.log('numeri inseriti:' , arrayPrompt)
    
    var isEqual = arrayPrompt.toString() === arrayRandom.toString();
    console.log(isEqual);
    if (isEqual === true) {
        finalResultOk.innerHTML = `<div class=".risultato-finale-ok">${'CORRETTI '}</div>`
    } else {
        finalResultNo.innerHTML = `<div class=".risultato-finale-no">${'SBAGLIATI !!!'}</div>`
    }
}