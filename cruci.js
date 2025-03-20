document.addEventListener("DOMContentLoaded", function() {
  // Lista de preguntas
  const questions = [
    {
      question: "Filtra correos no deseados",
      correct: "Spam",
      options: ["Firewall", "VPN", "Antivirus", "Spam"]
    },
    {
      question: "Red Privada Virtual",
      correct: "VPN",
      options: ["Firewall", "VPN", "Antivirus", "Spam"]
    },
    {
      question: "Copia de seguridad de datos",
      correct: "Backup",
      options: ["Cifrado", "Backup", "Malware", "Phishing"]
    }
  ];

  // Referencias al DOM
  const startBtn = document.getElementById("startBtn");
  const quizScreen = document.getElementById("quiz-screen");
  const startScreen = document.getElementById("start-screen");
  const questionText = document.getElementById("question-text");
  const optionsDiv = document.getElementById("options");
  const verifyBtn = document.getElementById("verifyBtn");
  const feedback = document.getElementById("feedback");
  const scoreDisplay = document.getElementById("score");
  const resetBtn = document.getElementById("resetBtn");

  let currentQuestionIndex = 0;
  let score = 0;
  let selectedAnswer = "";

  // Iniciar trivia
  startBtn.addEventListener("click", function() {
    startScreen.classList.add("hidden");
    quizScreen.classList.remove("hidden");
    loadQuestion();
  });

  // Cargar pregunta
  function loadQuestion() {
    const question = questions[currentQuestionIndex];
    questionText.innerText = question.question;
    optionsDiv.innerHTML = "";
    feedback.innerText = "";
    selectedAnswer = "";

    question.options.forEach(option => {
      let button = document.createElement("button");
      button.innerText = option;
      button.classList.add("option-btn");
      button.addEventListener("click", function() {
        document.querySelectorAll(".option-btn").forEach(btn => btn.classList.remove("selected"));
        button.classList.add("selected");
        selectedAnswer = option;
        verifyBtn.classList.remove("hidden");
      });
      optionsDiv.appendChild(button);
    });
  }

  // Verificar respuesta
  verifyBtn.addEventListener("click", function() {
    let question = questions[currentQuestionIndex];
    if (selectedAnswer === question.correct) {
      feedback.innerText = "Correcto";
      feedback.style.color = "green";
      score += 10; // suma puntos a tu gusto
    } else {
      feedback.innerText = "Incorrecto";
      feedback.style.color = "red";
    }
    scoreDisplay.innerText = `Puntos: ${score}`;

    // Pasamos a la siguiente pregunta con un pequeño retardo
    currentQuestionIndex++;
    setTimeout(() => {
      if (currentQuestionIndex < questions.length) {
        loadQuestion();
        verifyBtn.classList.add("hidden");
      } else {
        // Fin de la trivia
        feedback.innerText = `Juego terminado. Puntos finales: ${score}`;
        verifyBtn.classList.add("hidden");
      }
    }, 1000);
  });

  // Reiniciar juego
  resetBtn.addEventListener("click", function() {
    currentQuestionIndex = 0;
    score = 0;
    scoreDisplay.innerText = "Puntos: 0";
    feedback.innerText = "";
    verifyBtn.classList.add("hidden");

    // Regresar a la pantalla de inicio
    quizScreen.classList.add("hidden");
    startScreen.classList.remove("hidden");
  });
});

