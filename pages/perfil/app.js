function logout() {
  localStorage.removeItem("logedUser")
  window.location.href = "/pages/home/index.html"
}

function pegarDados() {
   return JSON.parse(localStorage.getItem("logedUser" ))
  
}

function mostrarDados(){
  const {email, numero, nome} = pegarDados();
  const dados = document.querySelectorAll("#card-paragrafo");
  dados[0].innerText = nome
  dados[1].innerText = `${email} | ${numero}`


  console.log(dados)
}

mostrarDados();
