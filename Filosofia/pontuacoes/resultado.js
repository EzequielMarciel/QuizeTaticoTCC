// Lê os parâmetros da URL
const params = new URLSearchParams(window.location.search);
const placar = params.get("placar");
const total = params.get("total");

// Exibe resultado
document.getElementById("resultadoTexto").textContent =
  `Você acertou ${placar} de ${total} perguntas!`;

// Botão X leva para a HomePage
document.getElementById("voltarBtn").addEventListener("click", () => {
  window.location.href = "../../HomePage/QuizeTáticoHome.html";
});