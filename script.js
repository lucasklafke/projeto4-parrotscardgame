const MAX = 14
const MIN = 4

function validateCards(qtCards){
    if (qtCards % 2 != 0){
        return false
    } else
    if (qtCards < MIN){
        return false
    } else
    if (qtCards > MAX){
        return false
    } else {
        return true
    }
} 
let qtCards = 0
do{
    qtCards = prompt("escolha quantas cartas o jogo de memória deve ter (4 a 14)")
} while(!validateCards(qtCards))



function createCards(qtCards){
    for( i=0; i < qtCards; i += 1){
        let section = document.querySelector("section")
        section.innerHTML += `<div class="card" onclick="applyGame(this)"><img src="images/front.png"></img></div>`

    }
}

function applyGame(selecionado){
    function select(){
        let card = document.querySelector(".card")
        selecionado.classList.add("otherside")
    }
}

createCards(qtCards)
