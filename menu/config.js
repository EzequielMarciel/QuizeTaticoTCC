const salvarBtn = document.getElementById("salvarConfig");

salvarBtn.addEventListener("click", () => {
  const maxPerguntas = parseInt(document.getElementById("maxPerguntas").value, 10);
  const tempoQuiz = parseInt(document.getElementById("tempoQuiz").value, 10);

  // Limite de segurança
  const perguntasFinal = maxPerguntas > 30 ? 30 : maxPerguntas;

  // Salva no navegador
  localStorage.setItem("maxPerguntas", perguntasFinal);
  localStorage.setItem("tempoQuiz", tempoQuiz);

  alert("✅ Configurações salvas com sucesso!");
});
// Recupera configurações do perfil
let maxPerguntas = parseInt(localStorage.getItem("maxPerguntas")) || 30;
let tempoQuiz = parseInt(localStorage.getItem("tempoQuiz")) || 50;

// Limita array de perguntas
if (perguntas.length > maxPerguntas) {
  perguntas = perguntas.slice(0, maxPerguntas);
}

// Ajusta temporizador
let sec = tempoQuiz * 60;
tempo.textContent = `${tempoQuiz}:00`;

const tempoPergunta = parseInt(document.getElementById("tempoPorPergunta").value, 10);
localStorage.setItem("tempoPorPergunta", tempoPergunta);


document.getElementById("salvarConfig").addEventListener("click", () => {
  let maxPerguntas = parseInt(document.getElementById("maxPerguntas").value, 10);
  if (maxPerguntas > 30) maxPerguntas = 30;

  localStorage.setItem("maxPerguntas", maxPerguntas);
  alert("✅ Configurações salvas!");
  window.location.href = "../HomePage/QuizeTáticoHome.html"; // volta para home
});