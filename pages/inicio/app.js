const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.navegacao');

hamburger.addEventListener('click', () => {
  nav.classList.toggle('active');
  hamburger.classList.toggle('open');
});

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