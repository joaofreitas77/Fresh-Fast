function carregarCarrinho() {
    let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
    const lista = document.getElementById("listaCarrinho");

    if (carrinho.length === 0) {
        lista.innerHTML = `<p class="vazio">Seu carrinho está vazio.</p>`;
        return;
    }

    lista.innerHTML = "";

    carrinho.forEach((item, index) => {
        lista.innerHTML += `
            <div class="item-card">
                <img src="${item.img}" alt="${item.nome}">
                
                <div class="item-info">
                    <h3>${item.nome}</h3>
                    <strong>R$ ${item.preco}</strong>
                </div>

                <button class="remove-btn" onclick="removerItem(${index})">
                    Remover
                </button>
            </div>
        `;
    });
}

function removerItem(i) {
    let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
    carrinho.splice(i, 1);
    localStorage.setItem("carrinho", JSON.stringify(carrinho));
    carregarCarrinho();
}

const btnFinalizar = document.getElementById("btnFinalizar");
const modalPagamento = document.getElementById("modalPagamento");
const totalPagamento = document.getElementById("totalPagamento");
const btnPagar = document.getElementById("btnPagar");
const btnFecharPagamento = document.getElementById("btnFecharPagamento");

btnFinalizar.onclick = () => {
    let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

    let total = carrinho.reduce((soma, item) => soma + Number(item.preco), 0);

    totalPagamento.textContent = "R$ " + total.toFixed(2);
    modalPagamento.style.display = "flex";
};

btnFecharPagamento.onclick = () => {
    modalPagamento.style.display = "none";
};

btnPagar.onclick = () => {
    localStorage.removeItem("carrinho");
    modalPagamento.style.display = "none";

    alert("Compra finalizada com sucesso!");

    window.location.href = "../restaurantes/index.html";
};


carregarCarrinho();
