

//variables y arrays

//fechas para el calendario
const MONTH_NAMES = ["ENERO", "FEBRERO", "MARZO", "ABRIL", "MAYO", "JUNIO", "JULIO", "AGOSTO", "SEMPTIEMBRE", "OCTUBRE", "NOVIEMBRE", "DICIEMBRE"]
const DIAS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31]
const DIAS_OBJETO = [];

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


let actualMonth = new Date();
let actualYear = new Date();
let monthName = MONTH_NAMES[actualMonth.getMonth()];


// inicio
function greeting() {
    alert("¡Bienvenido a tu agenda personal!");
}
greeting();

// MES Y AÑO ACTUAL CALENDARIO
const CURRENT_DATE = document.getElementById("currentDate");
CURRENT_DATE.innerHTML = `<p>
                            ${ monthName }
                            ${ actualYear.getFullYear()}
                        </p>`;

// imprimir los dias del mes - por cada dia, modal popup

const DAYS_WEEK = document.getElementById("daysWeek");
const CLOSE_MODAL = document.getElementById("cerrarModal");
const NEW_TASK = document.getElementById("newTask");
DIAS_OBJETO.forEach(dia => {
    const boton = document.createElement("button");
    boton.className = "daysButton";
    boton.innerHTML = `${dia.numero}`;
    boton.addEventListener("click", dia => {
        modalPopUp.showModal();
        // numero.agregarTarea(asd, ads)
    }) 
    //clase objetos para almacenar tareas


    //cerrar modal
    CLOSE_MODAL.addEventListener("click", () => {
        modalPopUp.close();
    })

    DAYS_WEEK.appendChild(boton);
});


//colorTheme
const colorTheme = document.getElementById("modeTheme");

colorTheme.addEventListener("click", () => {
    document.body.classList.toggle("orange");
    if(document.body.classList.contains("orange")){
        localStorage.setItem("mode", "orange");
    } else {
        localStorage.setItem("mode", "pink");
    }
});




