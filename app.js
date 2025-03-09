// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigosIngresados = [];


function agregarAmigo() {
    let amigosIngresados = document.getElementById("nombre").value.trim(); // Elimina espacios en blanco

    if (amigosIngresados === "") {
        alert("Por favor, inserte un nombre."); // Mensaje de error
    } else {
        alert("El nombre ingresado es: " + nombre);
    }
}

