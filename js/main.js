// accion: ingresar una fecha y poder guardar una tarea, recordatorio 
// accion2: llamar a una fecha y que muestre si hay tareas o recordatorios

// recorrido: entro al sitio 
// me da la bienvenida
// me pregunta que quiero hacer "¿Que deseas hacer hoy? Para agregar una tarea ingresa la palabra -tarea-, para visualizar el dia ingresa -ver-"
// respondo una de dos opciones

// si respondo tarea me pregunta a que dia quiero ir 
// luego me da el espacio para escribir y lo guarda
// me da un mensaje de que se guardo la tarea
// me vuelve a preguntar si quiero tarea o ver

// si respondo ver me pregunta a que dia quiero ir
//se devuelve lo que haya de tareas guardadas en la fecha ingresada
//me pregunta si quiero agregar tarea o ver 

//si no hay nada tira mensaje de que esta el dia libre
//me pregunta si quiero agregar tarea o ver

// json[key] = value

let registry = {};
let day
let task;
let contador = 1;

function greeting() {
    alert("¡Bienvenido a tu agenda personal!");
}

greeting();

while (contador < 2){
    const ACTIONS = prompt("¿Que deseas hacer? Para agregar una tarea ingresa la palabra -tarea-, para visualizar el dia ingresa -ver-").toLocaleLowerCase();
    if(ACTIONS === "tarea"){
        let day = prompt("Ingresa el numero del mes al que quieres ir");
        if(isNaN(day)){
            alert("Por favor ingresa solo tipo numerico");
        }
        let task = prompt("ingresa las notas de la fecha");
        registry[day] = task;
        alert("Añadiste una tarea en el dia " + day);
    } else if(ACTIONS === "ver"){
        let day = prompt("Ingresa el numero del mes al que quieres ir");
        if(isNaN(day)){
            alert("Por favor ingresa solo tipo numerico");
        }
        alert(registry[day]);
    }
}


