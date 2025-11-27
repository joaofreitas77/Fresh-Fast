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
            { nome: "X-Burger", preco: "R$ 14,90", img: "../../img/img-restaurantes/lanches.jpg" },
            { nome: "Batata Frita", preco: "R$ 9,90", img: "../../img/img-restaurantes/lanches.jpg" }
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
            { nome: "Pizza Calabresa", preco: "R$ 29,90", img: "../../img/img-restaurantes/pizzacalabresa.jpg" },
            { nome: "Pizza Frango", preco: "R$ 32,90", img: "../../img/img-restaurantes/pizzafrango.jpg" }
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
        banner: "../../img/img-restaurantes/pizza.jpg",
        descricao: "Melhor açai da região",
        produtos: [
            { nome: "Açai pequeno", preco: "R$ 8,90", img: "../../img/img-restaurantes/acai.jpg" },
            { nome: "Açai grande", preco: "R$ 15,00", img: "../../img/img-restaurantes/acai.jpg" }
        ]
    },

    {
        id: 4,
        nome: "Mimus doces",
        categoria: "Bolos e Doces",
        distancia: "1 km",
        tempo: "30 min",
        taxa: "R$ 3,00",
        logo: "../../img/img-restaurantes/logos/mimusdoces.jpg",
        banner: "../../img/img-restaurantes/pizza.jpg",
        descricao: "Bolos e guloseimas, entregas para toda cidade",
        produtos: [
            { nome: "Bolo de chocolate", preco: "R$ 18,90", img: "../../img/img-restaurantes/bolosEdoces.jpg" },
            { nome: "Bolo para aniversário", preco: "R$ 32,90", img: "../../img/img-restaurantes/bolosEdoces.jpg" }
        ]
    },
    {
        id: 4,
        nome: "Mimus doces",
        categoria: "Bolos e Doces",
        distancia: "1 km",
        tempo: "30 min",
        taxa: "R$ 3,00",
        logo: "../../img/img-restaurantes/logos/mimusdoces.jpg",
        banner: "../../img/img-restaurantes/pizza.jpg",
        descricao: "Bolos e guloseimas, entregas para toda cidade",
        produtos: [
            { nome: "Bolo de chocolate", preco: "R$ 18,90", img: "../../img/img-restaurantes/bolosEdoces.jpg" },
            { nome: "Bolo para aniversário", preco: "R$ 32,90", img: "../../img/img-restaurantes/bolosEdoces.jpg" }
        ]
    },
    {
        id: 4,
        nome: "Mimus doces",
        categoria: "Bolos e Doces",
        distancia: "1 km",
        tempo: "30 min",
        taxa: "R$ 3,00",
        logo: "../../img/img-restaurantes/logos/mimusdoces.jpg",
        banner: "../../img/img-restaurantes/pizza.jpg",
        descricao: "Bolos e guloseimas, entregas para toda cidade",
        produtos: [
            { nome: "Bolo de chocolate", preco: "R$ 18,90", img: "../../img/img-restaurantes/bolosEdoces.jpg" },
            { nome: "Bolo para aniversário", preco: "R$ 32,90", img: "../../img/img-restaurantes/bolosEdoces.jpg" }
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
        banner: "../../img/img-restaurantes/pizza.jpg",
        descricao: "Espetinhos, pão de alho, e tudo relacionado a churrasco, no nosso ponto e também em delivery para toda cidade",
        produtos: [
            { nome: "Espetinho de carne", preco: "R$ 9,90", img: "../../img/img-restaurantes/carnes.jpg" },
            { nome: "Pão de alho", preco: "R$ 10,00", img: "../../img/img-restaurantes/paodealho.jpg" }
        ]
    },
    {
        id: 6,
        nome: "3 Marias pastelaria",
        categoria: "Salgados",
        distancia: "0.7 km",
        tempo: "30 min",
        taxa: "R$ 3,00",
        logo: "../../img/img-restaurantes/logos/3mariaspastelarias.jpg",
        banner: "../../img/img-restaurantes/pizza.jpg",
        descricao: "Maior pastel da cidade pelo melhor preço, garanta já o seu!",
        produtos: [
            { nome: "Pastel de frango catupiry", preco: "R$ 10,00", img: "../../img/img-restaurantes/pastelfrango.jpg" },
            { nome: "Pastel de pizza", preco: "R$ 10,00", img: "../../img/img-restaurantes/pastelpizza.jpg" }
        ]
    },
    {
        id: 7,
        nome: "Mil doces",
        categoria: "Variados",
        distancia: "1 km",
        tempo: "50 min",
        taxa: "R$ 3,00",
        logo: "../../img/img-restaurantes/logos/mildoces.jpg",
        banner: "../../img/img-restaurantes/pizza.jpg",
        descricao: "Aqui você encontra todos tipos de lanches!",
        produtos: [
            { nome: "Bolo de chocolate", preco: "R$ 20,00", img: "../../img/img-restaurantes/bolosEdoces.jpg" },
            { nome: "Salgados", preco: "R$ 2,50", img: "../../img/img-restaurantes/salgados.jpg" }
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
        banner: "../../img/img-restaurantes/pizza.jpg",
        descricao: "Melhor pizzaria da região!",
        produtos: [
            { nome: "Pizza pequena", preco: "R$ 30,90", img: "../../img/img-restaurantes/pizzanapoles.jpeg" },
            { nome: "Pizza grande", preco: "R$ 55,90", img: "../../img/img-restaurantes/pizzanapoles.jpeg" }
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
        banner: "../../img/img-restaurantes/pizza.jpg",
        descricao: "A melhor salgateria da cidade!",
        produtos: [
            { nome: "Pastel de frango", preco: "R$ 2,00", img: "../../img/img-restaurantes/pastelfrango.jpg" },
            { nome: "Salgados", preco: "R$ 2,00", img: "../../img/img-restaurantes/salgados.jpg" }
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
        banner: "../../img/img-restaurantes/pizza.jpg",
        descricao: "O sabor do tamanho da sua fome",
        produtos: [
            { nome: "X-Frango", preco: "R$ 12,99", img: "../../img/img-restaurantes/xfrango.jpg" },
            { nome: "X-Calabresa", preco: "R$ 15,90", img: "../../img/img-restaurantes/xcalabresa.jpg" }
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
        banner: "../../img/img-restaurantes/pizza.jpg",
        descricao: "Burgers, Coxinhas, Churros & Fritas!",
        produtos: [
            { nome: "ONION", preco: "R$ 19,99", img: "../../img/img-restaurantes/onion.jpeg" },
            { nome: "SAVORY DUPLO", preco: "R$ 24,99", img: "../../img/img-restaurantes/savoryduplo.jpeg" }
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
        banner: "../../img/img-restaurantes/pizza.jpg",
        descricao: "Apenas delivery, peça já o seu!",
        produtos: [
            { nome: "X-frango", preco: "R$ 13,00", img: "../../img/img-restaurantes/xfrango.jpg" },
            { nome: "Franbacon", preco: "R$ 14,00", img: "../../img/img-restaurantes/xcalabresa.jpg" }
        ]
    },
    {
        id: 13,
        nome: "Armando salgados",
        categoria: "Salgados",
        distancia: "0,4 km",
        tempo: "20 min",
        taxa: "R$ 3,00",
        logo: "../../img/img-restaurantes/logos/armandosalgados.jpg",
        banner: "../../img/img-restaurantes/pizza.jpg",
        descricao: "Melhor custo beneficio da cidade! Salgados por apenas 1 real cada!",
        produtos: [
            { nome: "Bolo de carne", preco: "R$ 1,00", img: "../../img/img-restaurantes/salgados.jpg" },
            { nome: "Coxinha", preco: "R$ 1,00", img: "../../img/img-restaurantes/salgados.jpg" }
        ]
    },
    {
        id: 14,
        nome: "Burgão Lanches",
        categoria: "lanches",
        distancia: "2,6 km",
        tempo: "50 min",
        taxa: "R$ 3,00",
        logo: "../../img/img-restaurantes/logos/burgaolanches.jpg",
        banner: "../../img/img-restaurantes/pizza.jpg",
        descricao: "Melhor Hamburger da região!",
        produtos: [
            { nome: "X-Burgao", preco: "R$ 20,00", img: "../../img/img-restaurantes/hamburgao.jpeg" },
            { nome: "X-Frango", preco: "R$ 18,90", img: "../../img/img-restaurantes/hamburgao1.jpeg" }
        ]
    },
    {
        id: 15,
        nome: "H-Burger",
        categoria: "lanches",
        distancia: "1,8 km",
        tempo: "40 min",
        taxa: "R$ 3,00",
        logo: "../../img/img-restaurantes/logos/H-Burger.jpg",
        banner: "../../img/img-restaurantes/pizza.jpg",
        descricao: "Hamburgueria Artesanal Delivery em Desterro",
        produtos: [
            { nome: "H-Burger Clássico", preco: "R$ 20,00", img: "../../img/img-restaurantes/h-burger.jpg" },
            { nome: "H-Smash", preco: "R$ 18,00", img: "../../img/img-restaurantes/h-smash.jpeg" }
        ]
    },

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
            <div class="card-produto">
                <img src="${produto.img}" alt="">
                <h3>${produto.nome}</h3>
                <p class="preco">${produto.preco}</p>
            </div>
        `;
    });
}


