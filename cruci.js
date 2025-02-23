const questions = [
    { 
        question: "Filtra correos no deseados",
        options: ["Firewall", "VPN", "Antivirus", "Spam"],
        answer: "Spam"
    },
    { 
        question: "Red Privada Virtual",
        options: ["Firewall", "VPN", "Proxy", "Malware"],
        answer: "VPN"
    },
    { 
        question: "Copia de seguridad de datos",
        options: ["Backup", "Keylogger", "Phishing", "Spyware"],
        answer: "Backup"
    },
    { 
        question: "Archivo que guarda sitios con tu info",
        options: ["Cookies", "Trojan", "Rootkit", "Patch"],
        answer: "Cookies"
    },
    { 
        question: "Software que protege contra virus",
        options: ["Antivirus", "Ransomware", "Botnet", "Worm"],
        answer: "Antivirus"
    },
    { 
        question: "Barra el tráfico de red no autorizado",
        options: ["Firewall", "Phishing", "DDOS", "Exploit"],
        answer: "Firewall"
    }
];

let currentQuestionIndex = 0;
let score = 0;
let attempts = 5;

const questionText = document.getElementById("question-text");
const optionsContainer = document.getElementById("options-container");
const feedback = document.getElementById("feedback");
const checkBtn = document.getElementById("checkBtn");
const resetBtn = document.getElementById("resetBtn");
const startBtn = document.getElementById("startBtn");

startBtn.addEventListener("click", startGame);
checkBtn.addEventListener("click", checkAnswer);
resetBtn.addEventListener("click", resetGame);

function startGame() {
    startBtn.style.display = "none";
    checkBtn.style.display = "inline-block";
    resetBtn.style.display = "inline-block";
    loadQuestion();
}

function loadQuestion() {
    if (currentQuestionIndex >= questions.length) {
        questionText.innerText = `Juego terminado. Puntuación final: ${score}`;
        optionsContainer.innerHTML = "";
        checkBtn.style.display = "none";
        return;
    }

    let questionData = questions[currentQuestionIndex];
    questionText.innerText = questionData.question;
    optionsContainer.innerHTML = "";

    questionData.options.forEach(option => {
        const button = document.createElement("div");
        button.innerText = option;
        button.classList.add("option");
        button.addEventListener("click", () => selectOption(button, option));
        optionsContainer.appendChild(button);
    });
}

let selectedOption = null;
function selectOption(button, option) {
    document.querySelectorAll(".option").forEach(opt => opt.classList.remove("selected"));
    button.classList.add("selected");
    selectedOption = option;
}

function checkAnswer() {
    if (!selectedOption) {
        feedback.innerText = "Selecciona una respuesta.";
        return;
    }

    let correctAnswer = questions[currentQuestionIndex].answer;
    let options = document.querySelectorAll(".option");

    options.forEach(opt => {
        if (opt.innerText === correctAnswer) {
            opt.classList.add("correct");
        } else if (opt.innerText === selectedOption) {
            opt.classList.add("incorrect");
        }
    });

    if (selectedOption === correctAnswer) {
        score += 8;
        feedback.innerText = `¡Correcto! Puntuación: ${score}`;
    } else {
        attempts--;
        feedback.innerText = `Incorrecto. Intentos restantes: ${attempts}`;
        if (attempts === 0) {
            feedback.innerText = `Juego terminado. Puntuación final: ${score}`;
            checkBtn.style.display = "none";
            return;
        }
    }

    setTimeout(() => {
        currentQuestionIndex++;
        selectedOption = null;
        loadQuestion();
    }, 1000);
}

function resetGame() {
    currentQuestionIndex = 0;
    score = 0;
    attempts = 5;
    feedback.innerText = "";
    checkBtn.style.display = "inline-block";
    startGame();
}

