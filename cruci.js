document.addEventListener("DOMContentLoaded", function() {
  // Lista de preguntas
  let questions = [
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
    },
    {
      question: "Archivo que guarda sitios con tu info",
      correct: "Cookie",
      options: ["Historial", "Cookie", "Spyware", "Ransomware"]
    },
    {
      question: "Software que protege contra virus",
      correct: "Antivirus",
      options: ["Antivirus", "Rootkit", "Adware", "Troyano"]
    },
    {
      question: "Barra el tráfico de red no autorizado",
      correct: "Firewall",
      options: ["Firewall", "Worm", "Spyware", "Backdoor"]
    }
  ];

  let currentQuestionIndex = 0;
  let score = 0;
  let selectedAnswer = "";

  // Referencias a elementos del DOM
  const startBtn = document.getElementById("startBtn");
  const quizScreen = document.getElementById("quiz-screen");
  const startScreen = document.getElementById("start-screen");
  const questionText = document.getElementById("question-text");
  const optionsDiv = document.getElementById("options");
  const verifyBtn = document.getElementById("verifyBtn");
  const feedback = document.getElementById("feedback");
  const scoreDisplay = document.getElementById("score");
  const resetBtn = document.getElementById("resetBtn");

  // Iniciar la trivia
  startBtn.addEventListener("click", function() {
    startScreen.classList.add("hidden");
    quizScreen.classList.remove("hidden");
    loadQuestion();
  });

  // Cargar la pregunta actual
  function loadQuestion() {
    let question = questions[currentQuestionIndex];
    questionText.innerText = question.question;
    optionsDiv.innerHTML = "";
    feedback.innerText = "";
    selectedAnswer = "";

    question.options.forEach(option => {
      let button = document.createElement("button");
      button.innerText = option;
      button.classList.add("option-btn");
      button.addEventListener("click", function() {
        // Quitar selección previa
        document.querySelectorAll(".option-btn").forEach(btn => btn.classList.remove("selected"));
        button.classList.add("selected");
        selectedAnswer = option;
        verifyBtn.classList.remove("hidden");
      });
      optionsDiv.appendChild(button);
    });
  }

  // Verificar la respuesta
  verifyBtn.addEventListener("click", function() {
    let question = questions[currentQuestionIndex];
    if (selectedAnswer === question.correct) {
      feedback.innerText = "Correcto";
      feedback.style.color = "green";
      score += 8; // Sube 8 puntos por acierto
    } else {
      feedback.innerText = "Incorrecto";
      feedback.style.color = "red";
    }
    scoreDisplay.innerText = `Puntos: ${score}`;

    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
      // Muestra la siguiente pregunta tras 1s
      setTimeout(loadQuestion, 1000);
      verifyBtn.classList.add("hidden");
    } else {
      // Fin de la trivia
      feedback.innerText = `Juego terminado. Puntos finales: ${score}`;
      verifyBtn.classList.add("hidden");
    }
  });

  // Reiniciar la trivia
  resetBtn.addEventListener("click", function() {
    currentQuestionIndex = 0;
    score = 0;
    scoreDisplay.innerText = "Puntos: 0";
    feedback.innerText = "";
    verifyBtn.classList.add("hidden");
    loadQuestion();
  });
});


