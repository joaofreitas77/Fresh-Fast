const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.navegacao');
const cabecalho = document.querySelector('header')

hamburger.addEventListener('click', () => {
  nav.classList.toggle('active');
  console.log(nav.classList)
  hamburger.classList.toggle('open');
  cabecalho.style.backgroundColor = 'transparent'
  if (nav.classList.value === 'navegacao active') {
    cabecalho.style.backgroundColor = 'rgba(31, 31, 31, 0.95)'
  }
});

hamburger.addEventListener("click", () => openMenu());

const imagemCarrossel = document.querySelector("#carrossel");
let carrossel = 3
let imagemAtual = 0
function proximaImg() {
  if (imagemAtual >= carrossel) {
    imagemAtual = 0
  }
  imagemCarrossel.src = `../../img/carrossel/${imagemAtual}.jpg`
  imagemAtual++
}

function voltarImg() {
  if (imagemAtual < 0) {
    imagemAtual = 2
  }
  imagemCarrossel.src = `../../img/carrossel/${imagemAtual}.jpg`
  imagemAtual--
}

setInterval(proximaImg, 3000)

function logout() {
  localStorage.removeItem("logedUser")
  window.location.href = "/pages/home/index.html"
}