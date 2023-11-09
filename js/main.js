// accion: ingresar una fecha y poder guardar una tarea, recordatorio 
// accion2: llamar a una fecha y que muestre si hay tareas o recordatorios

// recorrido: entro al sitio 
// me da la bienvenida
// me pregunta que quiero hacer 
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




// const DATE = prompt("¿A que dia del mes quieres ir?");
// const ADD_TASK = prompt("¿Quieres agregar una tarea? Responde SI o NO");
// const DISPLAY_DAY = prompt("¿Quieres ver las tareas que tienes para este dia?");
// const ACTIONS = prompt("¿Que deseas hacer hoy? Para agregar una tarea ingresa la palabra -tarea-, para visualizar el dia ingresa -ver-").toLocaleLowerCase();

let loop = 0;
let registry = {};


function addTask(date, mensaje){
    let date = prompt("ingresa el dia del mes de la tarea con numeros:")
    let mensaje = prompt("Escribe la tarea");
    console.log("Haz añadido una tarea para el dia " + date);
}



function greeting() {
    alert("¡Bienvenido a tu agenda personal!");
}

greeting();

// do {
//     const ACTIONS = prompt("¿Que deseas hacer hoy? Para agregar una tarea ingresa la palabra -tarea-, para visualizar el dia ingresa -ver-").toLocaleLowerCase();
//     if(ACTIONS === "tarea"){
//         addTask(date, mensaje);
//     } else if(ACTIONS === "ver") {
//         alert()
//     }
// } while(){

// }





// switch (ACTIONS) {
//     case "ver":
//         console.log();
//         break;
//     case "tarea":
//         console.log();
//         break;
//     default:
//         console.log("Ingresa una opcion valida")
// }