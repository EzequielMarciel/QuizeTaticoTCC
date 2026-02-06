
const perguntas = [
{// 1
    disciplina: 'artes',
    id: 'pergunta2',
    enunciado: '1º Pergunta. Qual é a principal característica do movimento artístico conhecido como Impressionismo?',
    respostas: [
      { alternativa: 'A', texto: 'A representação de temas mitológicos e históricos com detalhes precisos' },
      { alternativa: 'B', texto: 'A valorização de linhas nítidas e contornos definidos nas figuras' },
      { alternativa: 'C', texto: 'A pintura ao ar livre, com foco na captação da luz natural e seus efeitos momentâneos' },
      { alternativa: 'D', texto: 'O uso exclusivo de cores primárias e formas geométricas abstratas' }
    ],
      respostaCerta: 'C'
  },
  {// 2
    disciplina: 'artes',
    id: 'pergunta2',
    enunciado: 'Quem foi o artista responsável pela pintura "Mona Lisa", uma das obras mais famosas do mundo?',
    respostas: [
      { alternativa: 'A', texto: 'Pablo Picasso' },
      { alternativa: 'B', texto: 'Vincent van Gogh' },
      { alternativa: 'C', texto: 'Michelangelo' },
      { alternativa: 'D', texto: 'Leonardo da Vinci' }
    ],
      respostaCerta: 'D'
  },
  {// 3
    disciplina: 'artes',
    id: 'pergunta2',
    enunciado: 'As "Artes Visuais" incluem diversas formas de expressão. Qual das opções abaixo NÃO é considerada uma arte visual?',
    respostas: [
      { alternativa: 'A', texto: 'Escultura' },
      { alternativa: 'B', texto: 'Música' },
      { alternativa: 'C', texto: 'Fotografia' },
      { alternativa: 'D', texto: 'Arquitetura' }
    ],
      respostaCerta: 'B'
  },
  {// 4
    disciplina: 'artes',
    id: 'pergunta2',
    enunciado: 'A Semana de Arte Moderna, ocorrida no Brasil em 1922, teve como objetivo principal:',
    respostas: [
      { alternativa: 'A', texto: 'Reafirmar os padrões estéticos do academicismo europeu' },
      { alternativa: 'B', texto: 'Promover uma maior fidelidade à realidade brasileira e valorizar temas nacionais' },
      { alternativa: 'C', texto: 'Focar na arte sacra e no estilo barroco tradicional' },
      { alternativa: 'D', texto: 'Criar uma arte secreta, acessível apenas a um pequeno grupo de intelectuais' }
    ],
      respostaCerta: 'B'
  },
  {// 5
    disciplina: 'artes',
    id: 'pergunta2',
    enunciado: 'Qual elemento visual é fundamental na criação de profundidade e volume em um desenho ou pintura?',
    respostas: [
      { alternativa: 'A', texto: 'Linha' },
      { alternativa: 'B', texto: 'Textura' },
      { alternativa: 'C', texto: 'Ponto' },
      { alternativa: 'D', texto: 'Luz e Sombra (Claro e Escuro)' }
    ],
      respostaCerta: 'D'
  }
]
/// Seleciona elementos
const containerEl = document.getElementById('container');
const perguntaEl = document.getElementById('pergunta');
const respostasEl = document.querySelectorAll('.resposta');
const modal = document.getElementById('modalTempo');
modal.style.display = 'none';

// Variáveis globais
let perguntaAtual = 0;
let placar = 0;
let timer; // guarda o intervalo
let tempoRestante = 30; // tempo por pergunta em segundos

function iniciarTimer() {
  clearInterval(timer); // limpa timer anterior
  tempoRestante = 30;   // reinicia para 30 segundos
  atualizarTempo();

  timer = setInterval(() => {
    tempoRestante--;
    atualizarTempo();

    if (tempoRestante <= 0) {
      clearInterval(timer);

      // Mostra modal somente depois do tempo esgotar
      modal.style.display = 'flex';

      // Após 3 segundos, fecha o modal e vai para a próxima pergunta
      setTimeout(() => {
        modal.style.display = 'none';
        proximaPergunta();
      }, 3000);
    }
  }, 1000);
}

function atualizarTempo() {
  const tempo = document.getElementById('temp');
  tempo.textContent = `${String(tempoRestante % 60).padStart(2, '0')}`;
}

function verificacaoResposta(respostaEscolhida) {
  const p = perguntas[perguntaAtual];
  clearInterval(timer); // para o timer quando o usuário responde

  // 🔒 Desabilita todos os botões para evitar double click
  respostasEl.forEach(btn => btn.disabled = true);

  if (respostaEscolhida === p.respostaCerta) {
    perguntaEl.textContent = '✅ Resposta correta!';
    placar++;
  } else {
    perguntaEl.textContent = `❌ Resposta errada! A correta era: ${p.respostaCerta}`;
  }

  setTimeout(() => {
    proximaPergunta();
  }, 1000);
}

function proximaPergunta() {
  perguntaAtual++;

  if (perguntaAtual >= perguntas.length) {
    finalizarQuiz();
    return;
  }

  // Reativa os botões para a nova pergunta
  respostasEl.forEach(btn => btn.disabled = false);

  // Mostra a nova pergunta
  mostrarPergunta();

  // Reinicia o timer
  iniciarTimer();
}

function mostrarPergunta() {
  const p = perguntas[perguntaAtual];
  perguntaEl.textContent = p.enunciado;

  respostasEl.forEach((el, i) => {
    el.textContent = p.respostas[i].alternativa;
    el.dataset.alternativa = p.respostas[i].alternativa;
    el.dataset.texto = p.respostas[i].texto;
  });
}

function finalizarQuiz() {
  clearInterval(timer);

  // Redireciona para a página de pontuações da própria matéria
  window.location.href = "pontuacoes/resultado.html?placar=" + placar + "&total=" + perguntas.length;
}

// Inicializa quiz
mostrarPergunta();
iniciarTimer();

// Eventos
respostasEl.forEach(el => {
  el.addEventListener('click', () => {
    verificacaoResposta(el.dataset.alternativa);
  });

  el.addEventListener('mouseover', () => {
    el.textContent = el.dataset.texto;
  });

  el.addEventListener('mouseout', () => {
    el.textContent = el.dataset.alternativa;
  });
});
