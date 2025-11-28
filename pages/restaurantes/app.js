const slider = document.getElementById("slider");
const next = document.getElementById("btn-next");
const prev = document.getElementById("btn-prev");

next.onclick = () => {
    slider.scrollLeft += 200;
};

prev.onclick = () => {
    slider.scrollLeft -= 200;
};

function abrirRestaurante(id) {
    window.location.href = `restaurante.html?id=${id}`;
}



// ==========================================
//   LÓGICA DA PÁGINA INDIVIDUAL
// ==========================================


function carregarDadosDoRestaurante(id) {
    const restaurante = restaurantes.find(r => r.id == id);
    if (!restaurante) return;

    document.getElementById("restauranteNome").innerText = restaurante.nome;
    document.getElementById("descricao").innerText = restaurante.descricao;

    document.getElementById("logo").src = restaurante.logo;

    if (document.getElementById("banner")) {
        document.getElementById("banner").src = restaurante.banner;
    }

    document.getElementById("detalhes").innerText = `${restaurante.categoria} • ${restaurante.taxa}`;

    const produtosDiv = document.getElementById("produtos");
    produtosDiv.innerHTML = "";

    restaurante.produtos.forEach(prod => {
        produtosDiv.innerHTML += `
            <div class="produto-item">
                <p>${prod.nome}</p>
                <span>${prod.preco}</span>
            </div>
        `;
    });
}





