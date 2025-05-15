
const questions = [
  { q: "Taylor se preocupava com a eficiência dos operários na produção.", options: ["Verdadeiro", "Falso"], correct: "Verdadeiro" },
  { q: "A Teoria Neoclássica valoriza os meios e não os fins.", options: ["Verdadeiro", "Falso"], correct: "Falso" },
  { q: "A burocracia, segundo Weber, preza pela impessoalidade.", options: ["Verdadeiro", "Falso"], correct: "Verdadeiro" },
  { q: "A Experiência de Hawthorne teve relação com:", options: ["Medição de produtividade com foco tecnológico", "Grupos informais e comportamento social", "Divisão do trabalho técnico"], correct: "Grupos informais e comportamento social" }
];

const questionsContainer = document.getElementById("questions");
questions.forEach((item, index) => {
  const div = document.createElement("div");
  div.className = "question";
  div.innerHTML = `<h3>${index + 1}. ${item.q}</h3>` +
    item.options.map(opt => `
      <label><input type="radio" name="q${index + 1}" value="${opt}" /> ${opt}</label><br />
    `).join("");
  questionsContainer.appendChild(div);
});

function checkAnswers() {
  let score = 0;
  let feedback = "";
  questions.forEach((item, index) => {
    const selected = document.querySelector(`input[name="q${index + 1}"]:checked`);
    if (selected && selected.value === item.correct) {
      score++;
    } else {
      feedback += `<p class="incorrect">${index + 1}. Resposta incorreta. Correto: ${item.correct}</p>`;
    }
  });
  document.getElementById("result").innerHTML = `Você acertou ${score} de ${questions.length} questões.` + feedback;
}

function clearAnswers() {
  questions.forEach((item, index) => {
    const inputs = document.getElementsByName(`q${index + 1}`);
    inputs.forEach(input => input.checked = false);
  });
  document.getElementById("result").innerHTML = "";
}
