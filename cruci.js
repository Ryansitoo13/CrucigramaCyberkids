document.addEventListener("DOMContentLoaded", () => {
    const startBtn = document.getElementById("start-btn");
    const triviaContainer = document.getElementById("trivia-container");
    const startScreen = document.getElementById("start-screen");
    const questionEl = document.getElementById("question");
    const optionsEl = document.getElementById("options");
    const checkBtn = document.getElementById("checkBtn");
    const resetBtn = document.getElementById("resetBtn");
    const feedbackEl = document.getElementById("feedback");

    let currentQuestionIndex = 0;
    let score = 0;
    let attempts = 5;

    const questions = [
        { question: "Filtra correos no deseados", answer: "Spam", options: ["Firewall", "VPN", "Antivirus", "Spam"] },
        { question: "Red Privada Virtual", answer: "VPN", options: ["Firewall", "VPN", "Antivirus", "Spam"] },
        { question: "Copia de seguridad de datos", answer: "Backup", options: ["Cifrado", "Backup", "Malware", "Phishing"] },
        { question: "Archivo que guarda sitios con tu info", answer: "Cookie", options: ["Cookie", "Troyano", "Firewall", "Rootkit"] },
        { question: "Software que protege contra virus", answer: "Antivirus", options: ["Antivirus", "Spyware", "Spam", "Phishing"] },
        { question: "Barra el tráfico de red no autorizado", answer: "Firewall", options: ["Firewall", "VPN", "Malware", "Spyware"] }
    ];

    startBtn.addEventListener("click", () => {
        startScreen.style.display = "none";
        triviaContainer.style.display = "block";
        loadQuestion();
    });

    function loadQuestion() {
        if (currentQuestionIndex < questions.length) {
            let q = questions[currentQuestionIndex];
            questionEl.textContent = q.question;
            optionsEl.innerHTML = "";
            q.options.forEach((option, index) => {
                let btn = document.createElement("button");
                btn.textContent = option;
                btn.classList.add("option" + (index + 1));
                btn.addEventListener("click", () => selectAnswer(option));
                optionsEl.appendChild(btn);
            });
        } else {
            feedbackEl.textContent = `Juego terminado. Puntuación final: ${score}`;
            optionsEl.innerHTML = "";
        }
    }

    function selectAnswer(option) {
        let q = questions[currentQuestionIndex];
        if (option === q.answer) {
            score += 8;
            feedbackEl.textContent = "¡Correcto! +8 puntos";
            feedbackEl.style.color = "green";
        } else {
            feedbackEl.textContent = "Incorrecto";
            feedbackEl.style.color = "red";
        }
        currentQuestionIndex++;
        setTimeout(loadQuestion, 1000);
    }

    resetBtn.addEventListener("click", () => {
        currentQuestionIndex = 0;
        score = 0;
        feedbackEl.textContent = "";
        loadQuestion();
    });
});
