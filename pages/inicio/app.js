const hamburger = document.querySelector(".hamburger");
const navegacao = document.querySelector(".navegacao");
const info = document.querySelector("#info")
let menuAberto = false
function openMenu (){
    navegacao.classList.toggle("active")
    if (navegacao.classList.value === 'navegacao active'){
        info.style.display = 'none'
    } else {
        info.style.display = 'block'
    }
}
hamburger.addEventListener("click", () => openMenu());

const imagemCarrossel = document.querySelector("#carrossel");
let carrossel = 3
let imagemAtual = 0
function proximaImg (){
    if(imagemAtual >= carrossel){
        imagemAtual = 0
    }
    imagemCarrossel.src = `../../img/carrossel/${imagemAtual}.jpg`
    imagemAtual ++
}

function voltarImg (){
    if(imagemAtual <0){
        imagemAtual = 2
    }
    imagemCarrossel.src = `../../img/carrossel/${imagemAtual}.jpg`
    imagemAtual --
}

setInterval(proximaImg, 3000)