document.addEventListener("DOMContentLoaded", function () {
    const palabras = {
        1: "SPAM",
        2: "VPN",
        3: "BACKUP",
        4: "COOKIE",
        5: "ANTIVIRUS",
        6: "FIREWALL"
    };
    
    const crucigrama = document.getElementById("crucigrama");
    
    const filas = [
        [1, 1, 1, 1],
        [2, 2, 2],
        [3, 3, 3, 3, 3, 3],
        [4, 4, 4, 4, 4, 4],
        [5, 5, 5, 5, 5, 5, 5, 5, 5],
        [6, 6, 6, 6, 6, 6, 6]
    ];
    
    filas.forEach((fila, index) => {
        const tr = document.createElement("tr");
        fila.forEach((num) => {
            const td = document.createElement("td");
            const input = document.createElement("input");
            input.setAttribute("maxlength", "1");
            input.dataset.palabra = num;
            td.appendChild(input);
            tr.appendChild(td);
        });
        crucigrama.appendChild(tr);
    });
    
    document.getElementById("checkBtn").addEventListener("click", function () {
        let puntuacion = 0;
        document.querySelectorAll("input").forEach(input => {
            const palabraNum = input.dataset.palabra;
            const palabra = palabras[palabraNum];
            const index = [...input.parentElement.parentElement.children].indexOf(input.parentElement);
            if (input.value.toUpperCase() === palabra[index]) {
                input.style.backgroundColor = "green";
                puntuacion += 8;
            } else {
                input.style.backgroundColor = "red";
            }
        });
        document.getElementById("resultado").innerText = `Puntuación: ${puntuacion}`;
    });
    
    document.getElementById("resetBtn").addEventListener("click", function () {
        document.querySelectorAll("input").forEach(input => {
            input.value = "";
            input.style.backgroundColor = "white";
        });
        document.getElementById("resultado").innerText = "";
    });
});
