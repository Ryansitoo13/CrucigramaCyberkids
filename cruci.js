const questions = [
    { question: "Filtra correos no deseados", answers: ["Firewall", "VPN", "Antivirus", "Spam"], correct: "Spam" },
    { question: "Red Privada Virtual", answers: ["Firewall", "VPN", "Malware", "Phishing"], correct: "VPN" },
    { question: "Copia de seguridad de datos", answers: ["Cifrado", "Backup", "Malware", "Phishing"], correct: "Backup" },
    { question: "Archivo que guarda sitios con tu info", answers: ["Historial", "Cookie", "Spyware", "Ransomware"], correct: "Cookie" },
    { question: "Software que protege contra virus", answers: ["Antivirus", "Rootkit", "Adware", "Troyano"], correct: "Antivirus" },
    { question: "Barra el tráfico de red no autorizado", answers: ["Firewall", "Worm", "Spyware", "Backdoor"], correct: "Firewall" }
];

let currentQuestionIndex = 0;
let selectedAnswer = "";

const startScreen = document.getElementById("start-screen");
const quizContainer = document.getElementById("quiz-container");
const questionText = document.getElementById("question-text");
const optionsContainer = document.getElementById("options-container");
const verifyBtn = document.getElementById("verifyBtn");
const resetBtn = document.getElementById("resetBtn");
const startBtn = document.getElementById("startBtn");
const feedback = document.getElementById("feedback");

startBtn.addEventListener("click", () => {
    startScreen.classList.add("hidden");
    quizContainer.classList.remove("hidden");
    loadQuestion();
});

function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionText.textContent = currentQuestion.question;
    optionsContainer.innerHTML = "";
    verifyBtn.classList.add("hidden");
    
    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.textContent = answer;
        button.classList.add("option");
        button.addEventListener("click", () => selectAnswer(button, answer));
        optionsContainer.appendChild(button);
    });
}

function selectAnswer(button, answer) {
    selectedAnswer = answer;
    document.querySelectorAll(".option").forEach(btn => btn.classList.remove("selected"));
    button.classList.add("selected");
    verifyBtn.classList.remove("hidden");
}

verifyBtn.addEventListener("click", () => {
    if (selectedAnswer === questions[currentQuestionIndex].correct) {
        feedback.textContent = "Correcto";
        feedback.style.color = "green";
    } else {
        feedback.textContent = "Incorrecto";
        feedback.style.color = "red";
    }
    
    setTimeout(() => {
        if (currentQuestionIndex < questions.length - 1) {
            currentQuestionIndex++;
            loadQuestion();
            feedback.textContent = "";
        } else {
            feedback.textContent = "¡Juego terminado!";
        }
    }, 1000);
});

resetBtn.addEventListener("click", () => {
    currentQuestionIndex = 0;
    selectedAnswer = "";
    feedback.textContent = "";
    quizContainer.classList.add("hidden");
    startScreen.classList.remove("hidden");
});

