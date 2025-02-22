document.addEventListener("DOMContentLoaded", function () {
    const crossword = [
        "SPAM",
        "VPN",
        "BACKUP",
        "COOKIE",
        "ANTIVIRUS",
        "FIREWALL"
    ];

    let attempts = 5;
    let score = 0;

    document.getElementById("checkBtn").addEventListener("click", function () {
        let correctAnswers = 0;
        let inputs = document.querySelectorAll("td input");

        inputs.forEach((input, index) => {
            let row = Math.floor(index / 6);
            if (input.value.toUpperCase() === crossword[row][index % crossword[row].length]) {
                input.classList.add("correct");
                input.classList.remove("incorrect");
                correctAnswers++;
            } else {
                input.classList.add("incorrect");
                input.classList.remove("correct");
            }
        });

        if (correctAnswers === inputs.length) {
            score += 8;
        }

        attempts--;
        document.getElementById("attempts").innerText = attempts;

        if (attempts <= 0) {
            document.getElementById("checkBtn").disabled = true;
        }
    });

    document.getElementById("resetBtn").addEventListener("click", function () {
        location.reload();
    });
});
