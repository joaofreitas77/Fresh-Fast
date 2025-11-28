const restaurantes = [
  {
    id: 1,
    nome: "Silva Truck",
    categoria: "Lanches",
    distancia: "1.2 km",
    tempo: "40 min",
    taxa: "R$ 3,00",
    logo: "../../img/img-restaurantes/logos/silvatruck.jpg",
    descricao: "Os melhores hamburguers artesanais da região.",
    produtos: [
      { id: "1-1", nome: "X-Burger", descricao: "Hambúrguer artesanal com queijo", preco: "R$ 14,90", precoValue: 14.90, img: "../../img/img-restaurantes/lanches.jpg" },
      { id: "1-2", nome: "Batata Frita", descricao: "Porção crocante", preco: "R$ 9,90", precoValue: 9.90, img: "../../img/img-restaurantes/lanches.jpg" }
    ]
  },

  {
    id: 2,
    nome: "SuaPizza Delivery",
    categoria: "Pizza",
    distancia: "1.4 km",
    tempo: "50 min",
    taxa: "R$ 3,00",
    logo: "../../img/img-restaurantes/logos/suapizza.jpg",
    banner: "../../img/img-restaurantes/pizza.jpg",
    descricao: "Pizzas incríveis preparadas no forno a lenha.",
    produtos: [
      { id: "2-1", nome: "Pizza Calabresa", descricao: "Calabresa, queijo e molho especial", preco: "R$ 29,90", precoValue: 29.90, img: "../../img/img-restaurantes/pizzacalabresa.jpg" },
      { id: "2-2", nome: "Pizza Frango", descricao: "Frango desfiado e catupiry", preco: "R$ 32,90", precoValue: 32.90, img: "../../img/img-restaurantes/pizzafrango.jpg" }
    ]
  },

  {
    id: 3,
    nome: "Açai da Carla",
    categoria: "Açai",
    distancia: "0.8 km",
    tempo: "30 min",
    taxa: "R$ 3,00",
    logo: "../../img/img-restaurantes/logos/acaidacarla.jpg",
    descricao: "Melhor açaí da região.",
    produtos: [
      { id: "3-1", nome: "Açai pequeno", descricao: "200ml - Tradicional", preco: "R$ 8,90", precoValue: 8.90, img: "../../img/img-restaurantes/acai.jpg" },
      { id: "3-2", nome: "Açai grande", descricao: "400ml com toppings", preco: "R$ 15,00", precoValue: 15.00, img: "../../img/img-restaurantes/acai.jpg" }
    ]
  },

  {
    id: 4,
    nome: "Mimus Doces",
    categoria: "Bolos e Doces",
    distancia: "1 km",
    tempo: "30 min",
    taxa: "R$ 3,00",
    logo: "../../img/img-restaurantes/logos/mimusdoces.jpg",
    descricao: "Bolos e guloseimas, entregas para toda cidade.",
    produtos: [
      { id: "4-1", nome: "Bolo de chocolate", descricao: "Bolo úmido com cobertura", preco: "R$ 18,90", precoValue: 18.90, img: "../../img/img-restaurantes/bolosEdoces.jpg" },
      { id: "4-2", nome: "Bolo para aniversário", descricao: "Personalizado (sob encomenda)", preco: "R$ 32,90", precoValue: 32.90, img: "../../img/img-restaurantes/bolosEdoces.jpg" }
    ]
  },

  {
    id: 5,
    nome: "Luciano Espetos",
    categoria: "Carnes",
    distancia: "1.1 km",
    tempo: "40 min",
    taxa: "R$ 3,00",
    logo: "../../img/img-restaurantes/logos/lucianoespetos.jpg",
    descricao: "Espetinhos, pão de alho e churrasco.",
    produtos: [
      { id: "5-1", nome: "Espetinho de carne", descricao: "Carne bovina suculenta", preco: "R$ 9,90", precoValue: 9.90, img: "../../img/img-restaurantes/carnes.jpg" },
      { id: "5-2", nome: "Pão de alho", descricao: "Porção assada", preco: "R$ 10,00", precoValue: 10.00, img: "../../img/img-restaurantes/paodealho.jpg" }
    ]
  },

  {
    id: 6,
    nome: "3 Marias Pastelaria",
    categoria: "Salgados",
    distancia: "0.7 km",
    tempo: "30 min",
    taxa: "R$ 3,00",
    logo: "../../img/img-restaurantes/logos/3mariaspastelarias.jpg",
    descricao: "Maior pastel da cidade pelo melhor preço.",
    produtos: [
      { id: "6-1", nome: "Pastel de frango catupiry", descricao: "Recheio farto", preco: "R$ 10,00", precoValue: 10.00, img: "../../img/img-restaurantes/pastelfrango.jpg" },
      { id: "6-2", nome: "Pastel de pizza", descricao: "Queijo e molho", preco: "R$ 10,00", precoValue: 10.00, img: "../../img/img-restaurantes/pastelpizza.jpg" }
    ]
  },

  {
    id: 7,
    nome: "Mil Doces",
    categoria: "Variados",
    distancia: "1 km",
    tempo: "50 min",
    taxa: "R$ 3,00",
    logo: "../../img/img-restaurantes/logos/mildoces.jpg",
    descricao: "Aqui você encontra todos tipos de lanches!",
    produtos: [
      { id: "7-1", nome: "Bolo de chocolate", descricao: "Fatia generosa", preco: "R$ 20,00", precoValue: 20.00, img: "../../img/img-restaurantes/bolosEdoces.jpg" },
      { id: "7-2", nome: "Salgados", descricao: "Sortidos", preco: "R$ 2,50", precoValue: 2.50, img: "../../img/img-restaurantes/salgados.jpg" }
    ]
  },

  {
    id: 8,
    nome: "Pizzaria Nápoles Santa-Luzia",
    categoria: "Pizza",
    distancia: "1,2 km",
    tempo: "50 min",
    taxa: "R$ 3,00",
    logo: "../../img/img-restaurantes/logos/napoles.jpg",
    descricao: "Melhor pizzaria da região!",
    produtos: [
      { id: "8-1", nome: "Pizza pequena", descricao: "2 sabores", preco: "R$ 30,90", precoValue: 30.90, img: "../../img/img-restaurantes/pizzanapoles.jpeg" },
      { id: "8-2", nome: "Pizza grande", descricao: "Ideal para família", preco: "R$ 55,90", precoValue: 55.90, img: "../../img/img-restaurantes/pizzanapoles.jpeg" }
    ]
  },

  {
    id: 9,
    nome: "Quero Mais",
    categoria: "Salgados",
    distancia: "0.9 km",
    tempo: "20 min",
    taxa: "R$ 3,00",
    logo: "../../img/img-restaurantes/logos/queromais.jpg",
    descricao: "A melhor salgateria da cidade!",
    produtos: [
      { id: "9-1", nome: "Pastel de frango", descricao: "Pequeno/tradicional", preco: "R$ 2,00", precoValue: 2.00, img: "../../img/img-restaurantes/pastelfrango.jpg" },
      { id: "9-2", nome: "Salgados", descricao: "Sortidos fritos", preco: "R$ 2,00", precoValue: 2.00, img: "../../img/img-restaurantes/salgados.jpg" }
    ]
  },

  {
    id: 10,
    nome: "BigHangus",
    categoria: "Lanches",
    distancia: "1 km",
    tempo: "50 min",
    taxa: "R$ 3,00",
    logo: "../../img/img-restaurantes/logos/bighangus.jpg",
    descricao: "O sabor do tamanho da sua fome",
    produtos: [
      { id: "10-1", nome: "X-Frango", descricao: "Frango empanado", preco: "R$ 12,99", precoValue: 12.99, img: "../../img/img-restaurantes/xfrango.jpg" },
      { id: "10-2", nome: "X-Calabresa", descricao: "Sabor marcante", preco: "R$ 15,90", precoValue: 15.90, img: "../../img/img-restaurantes/xcalabresa.jpg" }
    ]
  },

  {
    id: 11,
    nome: "Savory",
    categoria: "Lanches",
    distancia: "1.3 km",
    tempo: "40 min",
    taxa: "R$ 3,00",
    logo: "../../img/img-restaurantes/logos/savory.jpg",
    descricao: "Burgers, Coxinhas, Churros & Fritas!",
    produtos: [
      { id: "11-1", nome: "ONION", descricao: "Burger com cebola empanada", preco: "R$ 19,99", precoValue: 19.99, img: "../../img/img-restaurantes/onion.jpeg" },
      { id: "11-2", nome: "SAVORY DUPLO", descricao: "Duplo smash", preco: "R$ 24,99", precoValue: 24.99, img: "../../img/img-restaurantes/savoryduplo.jpeg" }
    ]
  },

  {
    id: 12,
    nome: "Delivery da Roseane",
    categoria: "Lanches",
    distancia: "1,5 km",
    tempo: "35 min",
    taxa: "R$ 3,00",
    logo: "../../img/img-restaurantes/logos/deliverydaro.jpg",
    descricao: "Apenas delivery, peça já o seu!",
    produtos: [
      { id: "12-1", nome: "X-Frango", descricao: "Clássico do delivery", preco: "R$ 13,00", precoValue: 13.00, img: "../../img/img-restaurantes/xfrango.jpg" },
      { id: "12-2", nome: "Franbacon", descricao: "Frango com bacon", preco: "R$ 14,00", precoValue: 14.00, img: "../../img/img-restaurantes/xcalabresa.jpg" }
    ]
  },

  {
    id: 13,
    nome: "Armando Salgados",
    categoria: "Salgados",
    distancia: "0,4 km",
    tempo: "20 min",
    taxa: "R$ 3,00",
    logo: "../../img/img-restaurantes/logos/armandosalgados.jpg",
    descricao: "Salgados com ótimo custo-benefício.",
    produtos: [
      { id: "13-1", nome: "Bolo de carne", descricao: "Salgado recheado", preco: "R$ 1,00", precoValue: 1.00, img: "../../img/img-restaurantes/salgados.jpg" },
      { id: "13-2", nome: "Coxinha", descricao: "Clássica", preco: "R$ 1,00", precoValue: 1.00, img: "../../img/img-restaurantes/salgados.jpg" }
    ]
  },

  {
    id: 14,
    nome: "Burgão Lanches",
    categoria: "Lanches",
    distancia: "2,6 km",
    tempo: "50 min",
    taxa: "R$ 3,00",
    logo: "../../img/img-restaurantes/logos/burgaolanches.jpg",
    descricao: "Melhor hamburger da região!",
    produtos: [
      { id: "14-1", nome: "X-Burgao", descricao: "Hamburguer especial", preco: "R$ 20,00", precoValue: 20.00, img: "../../img/img-restaurantes/hamburgao.jpeg" },
      { id: "14-2", nome: "X-Frango", descricao: "Frango suculento", preco: "R$ 18,90", precoValue: 18.90, img: "../../img/img-restaurantes/hamburgao1.jpeg" }
    ]
  },

  {
    id: 15,
    nome: "H-Burger",
    categoria: "Lanches",
    distancia: "1,8 km",
    tempo: "40 min",
    taxa: "R$ 3,00",
    logo: "../../img/img-restaurantes/logos/H-Burger.jpg",
    descricao: "Hamburgueria artesanal em Desterro.",
    produtos: [
      { id: "15-1", nome: "H-Burger Clássico", descricao: "Carne suculenta e queijo", preco: "R$ 20,00", precoValue: 20.00, img: "../../img/img-restaurantes/h-burger.jpg" },
      { id: "15-2", nome: "H-Smash", descricao: "Smash burger especial", preco: "R$ 18,00", precoValue: 18.00, img: "../../img/img-restaurantes/h-smash.jpeg" }
    ]
  }
];

function carregarDadosDoRestaurante(id) {
    const restaurante = restaurantes.find(r => r.id == id);
    if (!restaurante) return;

    document.getElementById("restauranteNome").textContent = restaurante.nome;
    document.getElementById("descricao").textContent = restaurante.descricao;
    document.getElementById("categoria").textContent = restaurante.categoria || "";
    document.getElementById("logo").src = restaurante.logo;

    const produtosDiv = document.getElementById("produtos");
    produtosDiv.innerHTML = "";

    restaurante.produtos.forEach(produto => {
        produtosDiv.innerHTML += `
            <div class="card-produto"
                 data-prod-id="${produto.id}"
                 data-nome="${produto.nome}"
                 data-preco="${produto.precoValue}"
                 data-desc="${produto.descricao}"
                 data-img="${produto.img}">
                
                <img src="${produto.img}" alt="${produto.nome}">
                <h3>${produto.nome}</h3>
                <p class="preco">${produto.preco}</p>
            </div>
        `;
    });

    document.querySelectorAll(".card-produto").forEach(card => {
        card.addEventListener("click", () => {
            const produto = {
                id: card.dataset.prodId,
                nome: card.dataset.nome,
                preco: Number(card.dataset.preco),
                descricao: card.dataset.desc,
                img: card.dataset.img
            };
            abrirModal(produto);
        });
    });
}


const modal = document.getElementById("produtoModal");
const modalImg = document.getElementById("modalImg");
const modalNome = document.getElementById("modalNome");
const modalDesc = document.getElementById("modalDesc");
const modalPreco = document.getElementById("modalPreco");
const fecharModal = document.getElementById("fecharModal");
const btnAddCarrinho = document.getElementById("btnAddCarrinho");

let produtoSelecionado = null;

function abrirModal(produto) {
    produtoSelecionado = produto;
    modalImg.src = produto.img;
    modalNome.textContent = produto.nome;
    modalDesc.textContent = produto.descricao;
    modalPreco.textContent = "R$ " + Number(produto.preco).toFixed(2);
    modal.style.display = "flex";
}

if (fecharModal) fecharModal.onclick = () => modal.style.display = "none";
window.onclick = (e) => { if (e.target === modal) modal.style.display = "none"; };

if (btnAddCarrinho) btnAddCarrinho.onclick = () => {
    if (!produtoSelecionado) return;
    let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
    carrinho.push(produtoSelecionado);
    localStorage.setItem("carrinho", JSON.stringify(carrinho));
    window.location.href = "../carrinho/carrinho.html";
};




