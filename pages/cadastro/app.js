document.getElementById('formCadastro').addEventListener('submit', function (event) {
    event.preventDefault();
    let users = new Array();
    let sameEmailCount = 0;
    const usersList = JSON.parse(localStorage.getItem("users"));

    const nome = event.target.nome.value;
    const numero = event.target.num.value;
    const email = event.target.email.value;
    const senha = event.target.senha.value;

    const dadosDoFormulario = { nome, numero, email, senha };

    for (let i = 0; i < usersList.length; i++) {
        if (email === usersList[i].user.email) {
            sameEmailCount++;
        }
    }

    if (sameEmailCount == 0) {
        if (localStorage.hasOwnProperty("users")) {
            users = JSON.parse(localStorage.getItem("users"))
        }

        users.push({ user: dadosDoFormulario })
        localStorage.setItem("users", JSON.stringify(users))
        window.location.href = '/pages/login/index.html'
    } else {
        alert("Email existente!!")
    }

    sameEmailCount = 0;
});

const checkbox = document.querySelector('#checkbox')
checkbox.addEventListener('change', function (event) {
    if (event.target.checked) {
        document.querySelector('#senha').type = 'text'
    } else {
        document.querySelector('#senha').type = 'password'

    }
})
