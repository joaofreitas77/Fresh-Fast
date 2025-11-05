const formulario = document.querySelector('#formulario')
formulario.addEventListener('submit', function(event) {
    event.preventDefault()
    console.log(event.target.email.value)

    const email = event.target.email.value
    const senha = event.target.senha.value

    if(email == 'teste@gmail.com'){
        if(senha == '12345678'){
            window.location.href = '/pages/inicio/index.html'
        } else{alert("Senha incorreta!")}
    } else{alert("Email incorreto!")}
})