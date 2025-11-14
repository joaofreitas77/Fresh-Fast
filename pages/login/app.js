const formulario = document.querySelector('#formulario')
formulario.addEventListener('submit', function (event) {
    event.preventDefault()
    const usersList = JSON.parse(localStorage.getItem("users"));
    let sameEmailCount = 0;

    const email = event.target.email.value
    const senha = event.target.senha.value

    for (let i = 0; i < usersList.length; i++) {
        if (email === usersList[i].user.email) {
            if (senha === usersList[i].user.senha) {
                sameEmailCount++;
            }
        }
    }

    if (sameEmailCount == 0) {
        alert("Usuário inexistente!!")
    } else {
        localStorage.setItem("logedUser", JSON.stringify({ email }))
        window.location.href = '/pages/inicio/index.html'
    }

    sameEmailCount = 0;
})

const checkbox = document.querySelector('#checkbox')
checkbox.addEventListener('change', function (event) {
    if (event.target.checked) {
        document.querySelector('#senha').type = 'text'
    } else {
        document.querySelector('#senha').type = 'password'

    }
})