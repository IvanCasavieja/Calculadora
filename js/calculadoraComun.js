const pantalla = document.querySelector(".pantalla");
const calculadora = document.querySelector(".calculadora")
const botones = document.querySelectorAll(".btn")
const botonesCientifica = document.querySelectorAll(".cientifica")
const botonesComun = document.querySelectorAll(".comun")

botones.forEach(boton => {
    boton.addEventListener("click", () => {

        const botonApretado = boton.textContent

        if (boton.id === "C") {
            pantalla.textContent = "0"
            return
        }

        if (boton.id === "borrar") {
            if (pantalla.textContent.length === 1 || pantalla.textContent === "Error!") {
                pantalla.textContent = 0
            } else {
                pantalla.textContent = pantalla.textContent.slice(0, -1)
            }
            return
        }

        if (boton.id === "igual") {
            try {
                const resultado = eval(pantalla.textContent);
                if (isNaN(resultado) || !isFinite(resultado)) {
                    throw "Error!";
                }
                pantalla.textContent = resultado;
            } catch {
                pantalla.textContent = "Error!"
            }
            return
        }

        if (pantalla.textContent.length < 14) {
            if (pantalla.textContent === "0" || pantalla.textContent === "Error!") {
                pantalla.textContent = botonApretado;
            } else {
                pantalla.textContent += botonApretado;
            }
        }
    })
})

const calculadoraComun = document.querySelector("#btnCalculadora").addEventListener("click", () => {
    calculadora.style.width = "350px"
    calculadora.style.gridTemplateColumns = "repeat(4, 1fr)"
    botonesCientifica.forEach(btns => {
        btns.style.display = "none"
    });
    botonesComun.forEach(btns => {
        btns.style.display = "flex"
    });
})

const calculadoraCientifica = document.querySelector("#calculadoraCientifica").addEventListener("click", () => {
    calculadora.style.width = "650px"
    calculadora.style.gridTemplateColumns = "repeat(7, 1fr)"
    botonesCientifica.forEach(btns => {
        btns.style.display = "flex"
    });
    botonesComun.forEach(btns => {
        btns.style.display = "none"
    });
})
