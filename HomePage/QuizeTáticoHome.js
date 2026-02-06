
// Matemática
const mat = document.getElementById('mat');
mat.addEventListener('click', () => {
    window.location.href = "../Matematica/pagMatematica.html";
});

// Biologia
const bio = document.getElementById('bio');
bio.addEventListener('click', () => {
    window.location.href = "../Biologia/pagBiologia.html";
});

// História
const his = document.getElementById('his');
his.addEventListener('click', () => {
    window.location.href = "../Historia/pagHistoria.html";
});

// Sociologia
const soc = document.getElementById('soc');
soc.addEventListener('click', () => {
    window.location.href = "../Sociologia/pagSociologia.html";
});

// Inglês
const ing = document.getElementById('ing');
ing.addEventListener('click', () => {
    window.location.href = "../Ingles/pagIngles.html";
});

// Arte
const art = document.getElementById('art');
art.addEventListener('click', () => {
    window.location.href = "../Artes/pagArtes.html";
});

// Estudos Gerais
const est = document.getElementById('est');
est.addEventListener('click', () => {
    window.location.href = "../EstudosGerais/pagEstudosGerais.html";
});

// Filosofia
const fil = document.getElementById('fil');
fil.addEventListener('click', () => {
    window.location.href = "../Filosofia/pagFilosofia.html";
});

// Física
const fis = document.getElementById('fis');
fis.addEventListener('click', () => {
    window.location.href = "../Fisica/pagFisica.html";
});

// Geografia
const geo = document.getElementById('geo');
geo.addEventListener('click', () => {
    window.location.href = "../Geografia/pagGeografia.html";
});

// Português
const por = document.getElementById('por');
por.addEventListener('click', () => {
    window.location.href = "../Portugues/pagPortugues.html";
});

// Redação
const red = document.getElementById('red');
red.addEventListener('click', () => {
    window.location.href = "../Redação/pagRedação.html";
});

const configBtn = document.getElementById('configBtn');
configBtn.addEventListener('click', () => {
    window.location.href = "../menu/config.html"; //Consertado
});
// Lógica para o botão "Me surpreenda"
    const randomBtn = document.getElementById("randomBtn");
    const disciplinas = document.querySelectorAll(".disciplinas > div");

    randomBtn.addEventListener("click", () => {
        // Escolhe um índice aleatório
        const randomIndex = Math.floor(Math.random() * disciplinas.length);
        const disciplinaSelecionada = disciplinas[randomIndex];

      setTimeout(() => {
        // destacar visualmente
        disciplinas.forEach(d => d.style.backgroundColor = ""); // limpa destaque
        disciplinaSelecionada.style.backgroundColor = "yellow"; // destaca escolhida
        }, 100);

        // Ou redirecionar para outra página específica da disciplina
        // window.location.href = disciplinaSelecionada.id + ".html";
        
    });
