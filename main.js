let slideAtual = 0;
const todosSlides = document.querySelectorAll('.slideItem');

function mostrarSlide(index) {
    todosSlides.forEach(slide => slide.classList.remove('ativo'));
    
    if (index >= todosSlides.length) {
        slideAtual = 0;
    } else if (index < 0) {
        slideAtual = todosSlides.length - 1;
    } else {
        slideAtual = index;
    }
    
    todosSlides[slideAtual].classList.add('ativo');
}

function moverSlide(passo) {
    mostrarSlide(slideAtual + passo);
}

setInterval(() => {
    moverSlide(1);
}, 6000);

const botaoGincana = document.getElementById("detalhesGincana");
const botaoNoite = document.getElementById("detalhesNoite");
const mainEscondido = document.getElementById("mainEscondido");

botaoGincana.addEventListener("click", () => {
    mainEscondido.style.display = "block";
    mainEscondido.innerHTML = "<section class='containerInformacoes'><table><thead><tr> <th> ETAPA 1: GINCANA SOLIDÁRIA </th> </tr></thead><tbody class='tabela-formato'><tr> <td> <ul class='lista-provas'><li> 📦 Arrecadação de Alimentos </li><li> 🍼 Arrecadação de Suplementos </li><li> 🥛 Campanha do Leite </li><li> 🩸 Doação de Sangue </li><li> 📸 Memórias Uni-FACEF </li><li> 🤝 Ação em Entidades Sociais </li><li> 🎨 Álbum de Fotografias </li></ul></td> </tr></tbody></table></section>";
});

botaoNoite.addEventListener("click", () => {
    mainEscondido.style.display = "block";
    mainEscondido.innerHTML = "<section class='containerInformacoes'><table><thead><tr> <th> ETAPA 2: ENCERRAMENTO </th> </tr></thead><tbody class='tabela-formato'><tr><td> <ul class='lista-provas'><li> 🎭 Homenagem aos 75 anos  </li><li> 🦁 Mascote da Equipe </li><li> 📣 Caracterização e Animação </li><li> 🏃‍♂️ Atividades Recreativas </li><li> 🎥 Apresentação das Ações Sociais </li></ul></td></tr></tbody></table></section>";
});


const unidadeI = document.getElementById("unidadeI");
const unidadeII = document.getElementById("unidadeII");
const mapaFlutuante = document.getElementById("mapaFlutuante");
const iframeMapa = document.getElementById("iframeMapa");
const fecharMapa = document.getElementById("fecharMapa");

const locais = {
    unidadeI: {
        embed: "https://www.google.com/maps?q=Av.+Major+Nicácio,+2433,+Franca+SP&output=embed",
        link: "https://www.google.com/maps/search/?api=1&query=Av.+Major+Nicácio,+2433,+Franca+SP"
    },
    unidadeII: {
        embed: "https://www.google.com/maps?q=Av.+Ismael+Alonso+Y+Alonso,+2400,+Franca+SP&output=embed",
        link: "https://www.google.com/maps/search/?api=1&query=Av.+Ismael+Alonso+Y+Alonso,+2400,+Franca+SP"
    }
};