const MAX = 14
const MIN = 4
cardAux = null
const trueFaces = ["unicorn","bobross","explody","metal","fiesta","revert","triple"]
const image = "images/front.png"
let listAux = []
let finishList = []
let id = 0
let cardList = []
// validade qtcard to see if the quantity >4 14< and the number is pair
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


//function that create cards with promt qtCards
function pushCards(){
    for( i=0; i < qtCards/2; i += 1){
        let section = document.querySelector("section")
        card = `<div class="frontCard ${trueFaces[i]}" id="${calcID(id)}" onclick="applyGame(this)"><img src="${image}"></img></div>`
        card2 = `<div class="frontCard ${trueFaces[i]}" id="${calcID(id)}" onclick="applyGame(this)"><img src="${image}"></img></div>`
        cardList.push(card)
        cardList.push(card2)  
    }
}
pushCards()
function createCards(qtCards){
    cardList.sort(comparator);
    for( i=0; i < cardList.length; i += 1){
        const section = document.querySelector("section")
        section.innerHTML += cardList[i]
    }

}
// verify end
function endAlert(){
    if(finishList.length == qtCards/2){
        window.alert("terminou o jogo")
    }
}
// comparator to function random cards
function comparator(){
    return Math.random() - 0.5;
}
// calc the card id
function calcID(){
    id += 1
    return parseInt(id)
}
// switch to classes faces
function switchImageTrue(selected){
    console.log("eai")
    const img = selected.querySelector("div img")
    for(i=0; i < trueFaces.length; i++){
        if (selected.classList.contains(trueFaces[i])){
            img.setAttribute('src',`images/${trueFaces[i]}.gif`);
        }
    }
}
// return the front face card
function switchImageFalse(){
    const imgSelected = listAux[1].querySelector("div img")
    imgSelected.setAttribute('src',`images/front.png`);
    console.log("OI")
    const imgCard = listAux[0].querySelector("div img")
    imgCard.setAttribute('src',`images/front.png`);
    for(i=0; i < listAux.length; i++){
        listAux.splice([i])
    }
}
// empty function for the button makes nothing
function passNone(){
    console.log('vazio')
}
// verify if the par is true and push the class to finishList
function parTrue(selected){
    for(i=0; i < trueFaces.length; i++){
        if (selected.classList.contains(trueFaces[i]) && cardAux.classList.contains(trueFaces[i])){
            par = true
            finishList.push(trueFaces[i])
            selected.setAttribute('onclick',`${passNone()}`)
            console.log(par)
            console.log("oi")
        }
    }
}
//function that create game interactions
function applyGame(selected){
    let cardSelected = selected
    switchImageTrue(selected)
    listAux.push(selected)
    if (cardAux === null) {
        cardAux = selected
        cardAux.setAttribute('onclick',`${passNone()}`)
    }else{       
        par = false
        parTrue(cardSelected)
        if (par === true){
            for(i=0; i < listAux.length; i++){
                listAux.splice([i])
            }
        }
        else if (par === false){
            setTimeout((switchImageFalse),1000);
            cardAux.setAttribute('onclick','applyGame(this)')
        }
        cardAux = null
    }
    endAlert()
}


//create cards to begin the game
createCards(qtCards)
