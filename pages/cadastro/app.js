document.getElementById('formCadastro').addEventListener('submit', function (event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const numero = document.getElementById('num').value;
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;

    const dadosDoFormulario = { nome, numero, email, senha };

    localStorage.setItem('dadosDoFormulario', JSON.stringify(dadosDoFormulario));
    alert('Dados salvos com sucesso!');
});
