const MAX = 14
const MIN = 4
cartaAux = null
const trueFaces = ["unicorn","bobross","explody","metal","fiesta","revert","triple"]
const image = "images/front.png"
let listaAux = []
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
function createCards(qtCards){
    for( i=0; i < qtCards/2; i += 1){
        let section = document.querySelector("section")
        card = `<div class="frontCard ${trueFaces[i]}" onclick="applyGame(this)"><img src="${image}"></img></div>`
        card2 = `<div class="frontCard ${trueFaces[i]}" onclick="applyGame(this)"><img src="${image}"></img></div>`
        section.innerHTML += card
        section.innerHTML += card  
    }
}
function switchImageTrue(selected){

    const img = selected.querySelector("div img")
    for(i=0; i < trueFaces.length; i++){
        if (selected.classList.contains(trueFaces[i])){
            img.setAttribute('src',`images/${trueFaces[i]}.gif`);
        }
    }
}
function switchImageFalse(){
    const imgSelected = listaAux[1].querySelector("div img")
    imgSelected.setAttribute('src',`images/front.png`);
    console.log("OI")
    const imgCarta = listaAux[0].querySelector("div img")
    imgCarta.setAttribute('src',`images/front.png`);
    for(i=0; i < listaAux.length; i++){
        listaAux.splice([i])
    }
}
//function that create game interactions
function applyGame(selected){
    listaAux.push(selected)
    switchImageTrue(selected)
    if (cartaAux == null) {
        cartaAux = selected
        console.log("oi")
    }else{

        par = false
        for(i=0; i < trueFaces.length; i++){
            if (selected.classList.contains(trueFaces[i]) && cartaAux.classList.contains(trueFaces[i])){
                console.log("par")
                par = true
            }
        }
        if (!par){
            setTimeout((switchImageFalse),1000);
            
        }
        cartaAux = null
    }
}

createCards(qtCards)
