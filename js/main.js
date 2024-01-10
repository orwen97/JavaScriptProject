
//variables y arrays 
const MONTH_NAMES = ["ENERO", "FEBRERO", "MARZO", "ABRIL", "MAYO", "JUNIO", "JULIO", "AGOSTO", "SEMPTIEMBRE", "OCTUBRE", "NOVIEMBRE", "DICIEMBRE"]
const DIAS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31]
const DIAS_OBJETO = [];

let actualMonth = new Date();
let actualYear = new Date();
let monthName = MONTH_NAMES[actualMonth.getMonth()];

//clase y objeto para almacenar tareas

class Dia {
    constructor(numero) {
        this.numero = numero;
        this.tareas = {};
    }

    agregarTarea(hora, tarea) {
        this.tareas[hora] = tarea;
    }
}
DIAS.forEach(numero => DIAS_OBJETO.push(new Dia(numero)));

// inicio
function greeting() {
    alert("¡Bienvenido a tu agenda personal!");
}
greeting();

// MES Y AÑO ACTUAL CALENDARIO
const CURRENT_DATE = document.getElementById("currentDate");
CURRENT_DATE.innerHTML = `<p>
                            ${monthName}
                            ${actualYear.getFullYear()}
                        </p>`;

// imprimir los dias del mes - por cada dia

const DAYS_WEEK = document.getElementById("daysWeek");
const DAYS_MONTH = document.getElementById("daysMonth");

DIAS_OBJETO.forEach(dia => {
    const boton = document.createElement("button");
    boton.className = "daysButton";
    boton.innerHTML = `${dia.numero}`;
    boton.addEventListener("click", () => {
        Swal.fire({
            title: "Tareas de la fecha",
            html: `
            <form class="formAgendar">
                <label for="inputTime">Fecha:</label>
                <input type="date" id="inputfecha">
                <label for="inputTime">Selecciona la hora:</label>
                <input type="time" id="inputTime" name="inputTime">
                <label for="inputTask">Descripcion:</label>
                <input type="text" id="inputTask" placeholder ="">
            </form>
            `,
            background : "#F0F0F0",
            confirmButtonText: "Agendar",
            showCancelButton: true,
            cancelButtonText: "Volver"
        })
    })
    DAYS_MONTH.appendChild(boton);
});
// const inputTime = document.getElementById("inputTime").value;
// const inputTask = document.getElementById("inputTask").value;
// const inputFecha = document.getElementById("inputFecha").value;


//colorTheme
const colorTheme = document.getElementById("modeTheme");

colorTheme.addEventListener("click", () => {
    document.body.classList.toggle("orange");
    if (document.body.classList.contains("orange")) {
        localStorage.setItem("mode", "orange");
    } else {
        localStorage.setItem("mode", "pink");
    }
});




