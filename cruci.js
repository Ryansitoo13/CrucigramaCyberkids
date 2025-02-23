document.addEventListener("DOMContentLoaded", () => {
    const questions = [
        { question: "Filtra correos no deseados", options: ["Firewall", "VPN", "Antivirus", "Spam"], answer: "Spam" },
        { question: "Red Privada Virtual", options: ["DNS", "VPN", "Proxy", "Malware"], answer: "VPN" },
        { question: "Copia de seguridad de datos", options: ["Cifrado", "Backup", "Malware", "Phishing"], answer: "Backup" },
        { question: "Archivo que guarda sitios con tu info", options: ["Cookies", "Firewall", "Rootkit", "Spoofing"], answer: "Cookies" },
        { question: "Software que protege contra virus", options: ["Antivirus", "Ransomware", "Proxy", "Phishing"], answer: "Antivirus" },
        { question: "Barra el tráfico de red no autorizado", options: ["Firewall", "Keylogger", "Rootkit", "Spam"], answer: "Firewall" }
    ];
    
    let currentQuestionIndex = -1;
    let score = 0;
    
    const questionElement = document.getElementById("question");
    const optionsElement = document.getElementById("options");
    const checkBtn = document.getElementById("checkBtn");
    const resetBtn = document.getElementById("resetBtn");
    const startBtn = document.getElementById("startBtn");
    const feedbackElement = document.getElementById("feedback");
    
    function loadQuestion() {
        if (currentQuestionIndex >= questions.length - 1) {
            questionElement.innerText = `Juego terminado. Puntuación: ${score}`;
            optionsElement.innerHTML = "";
            checkBtn.style.display = "none";
            return;
        }
        currentQuestionIndex++;
        const q = questions[currentQuestionIndex];
        questionElement.innerText = q.question;
        optionsElement.innerHTML = "";
        q.options.forEach(option => {
            const btn = document.createElement("button");
            btn.innerText = option;
            btn.onclick = () => selectAnswer(option, q.answer, btn);
            optionsElement.appendChild(btn);
        });
        checkBtn.style.display = "block";
    }
    
    function selectAnswer(option, correctAnswer, button) {
        if (option === correctAnswer) {
            button.classList.add("correct");
            feedbackElement.innerText = "Correcto";
            score += 8;
        } else {
            button.classList.add("incorrect");
            feedbackElement.innerText = "Incorrecto";
        }
        checkBtn.disabled = false;
    }
    
    startBtn.addEventListener("click", () => {
        startBtn.style.display = "none";
        loadQuestion();
    });
    
    checkBtn.addEventListener("click", () => {
        loadQuestion();
        feedbackElement.innerText = "";
    });
    
    resetBtn.addEventListener("click", () => {
        currentQuestionIndex = -1;
        score = 0;
        startBtn.style.display = "block";
        questionElement.innerText = "Presiona \"Empezar\" para iniciar";
        optionsElement.innerHTML = "";
        checkBtn.style.display = "none";
        feedbackElement.innerText = "";
    });
});
