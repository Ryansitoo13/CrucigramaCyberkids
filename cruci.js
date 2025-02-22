document.addEventListener("DOMContentLoaded", function () {
    const respuestas = ["SPAM", "VPN", "BACKUP", "COOKIE", "ANTIVIRUS", "FIREWALL"];
    const inputs = document.querySelectorAll("td input");
    const checkBtn = document.getElementById("checkBtn");
    const resetBtn = document.getElementById("resetBtn");
    const feedback = document.getElementById("feedback");

    checkBtn.addEventListener("click", function () {
        let score = 0;
        let index = 0;
        inputs.forEach((input, i) => {
            let expected = respuestas[index][i % respuestas[index].length];
            if (input.value.toUpperCase() === expected) {
                input.style.backgroundColor = "lightgreen";
                score += 8;
            } else {
                input.style.backgroundColor = "salmon";
            }
            if ((i + 1) % respuestas[index].length === 0) index++;
        });
        feedback.innerHTML = `Puntuación: ${score}. Revisa las respuestas incorrectas.`;
    });

    resetBtn.addEventListener("click", function () {
        inputs.forEach(input => {
            input.value = "";
            input.style.backgroundColor = "";
        });
        feedback.innerHTML = "";
    });
});
