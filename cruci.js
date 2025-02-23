document.addEventListener("DOMContentLoaded", function () {
    const startScreen = document.getElementById("startScreen");
    const triviaContainer = document.getElementById("triviaContainer");
    const startBtn = document.getElementById("startBtn");
    const checkBtn = document.getElementById("checkBtn");
    const resetBtn = document.getElementById("resetBtnTrivia");
    const questionElem = document.getElementById("question");
    const optionsContainer = document.getElementById("options");
    const feedback = document.getElementById("feedback");

    let currentQuestionIndex = 0;
    let selectedOption = null;

    const questions = [
        { question: "Filtra correos no deseados", answer: "Spam", options: ["Firewall", "VPN", "Antivirus", "Spam"] },
        { question: "Red Privada Virtual", answer: "VPN", options: ["VPN", "Malware", "Phishing", "Cifrado"] },
        { question: "Copia de seguridad de datos", answer: "Backup", options: ["Cifrado", "Backup", "Malware", "Phishing"] },
        { question: "Archivo que guarda sitios con tu info", answer: "Cookie", options: ["Firewall", "Cookie", "Virus", "Proxy"] },
        { question: "Software que protege contra virus", answer: "Antivirus", options: ["Antivirus", "Spam", "Ransomware", "Malware"] },
        { question: "Barra el tráfico de red no autorizado", answer: "Firewall", options: ["VPN", "Firewall", "Cifrado", "Phishing"] }
    ];

    function loadQuestion() {
        feedback.textContent = "";
        selectedOption = null;
        questionElem.textContent = questions[currentQuestionIndex].question;
        optionsContainer.innerHTML = "";

        questions[currentQuestionIndex].options.forEach(option => {
            const btn = document.createElement("button");
            btn.textContent = option;
            btn.classList.add("option");
            btn.addEventListener("click", () => {
                document.querySelectorAll(".option").forEach(opt => opt.classList.remove("selected"));
                btn.classList.add("selected");
                selectedOption = option;
            });
            optionsContainer.appendChild(btn);
        });
    }

    checkBtn.addEventListener("click", () => {
        if (!selectedOption) {
            feedback.textContent = "Selecciona una opción antes de verificar.";
            feedback.style.color = "red";
            return;
        }

        if (selectedOption === questions[currentQuestionIndex].answer) {
            feedback.textContent = "¡Correcto!";
            feedback.style.color = "green";
            currentQuestionIndex++;
            if (currentQuestionIndex < questions.length) {
                setTimeout(loadQuestion, 1000);
            } else {
                feedback.textContent = "¡Has completado la trivia!";
            }
        } else {
            feedback.textContent = "Incorrecto";
            feedback.style.color = "red";
        }
    });

    startBtn.addEventListener("click", () => {
        startScreen.classList.add("hidden");
        triviaContainer.classList.remove("hidden");
        loadQuestion();
    });

    resetBtn.addEventListener("click", () => {
        currentQuestionIndex = 0;
        startScreen.classList.remove("hidden");
        triviaContainer.classList.add("hidden");
    });
});
