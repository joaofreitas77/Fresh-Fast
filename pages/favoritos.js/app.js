function carregarFavoritos() {
    let favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];
    const lista = document.getElementById("listaFavoritos");

    if (favoritos.length === 0) {
        lista.innerHTML = `<p class="vazio">Nenhum item favoritado.</p>`;
        return;
    }

    lista.innerHTML = "";

    favoritos.forEach((item, index) => {
        lista.innerHTML += `
            <div class="item-card">
                <img src="${item.img}" alt="${item.nome}">
                
                <div class="item-info">
                    <h3>${item.nome}</h3>
                    <strong>${item.preco}</strong>
                </div>

                <button class="remove-btn" onclick="removerFavorito(${index})">
                    Remover
                </button>
            </div>
        `;
    });
}

function removerFavorito(i) {
    let favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];
    favoritos.splice(i, 1);
    localStorage.setItem("favoritos", JSON.stringify(favoritos));
    carregarFavoritos();
}

carregarFavoritos();
