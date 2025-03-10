// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = []

let nombre = document.getElementById('amigo').value;

console.log(nombre); 

function agregarAmigo() {
    // Obtener el valor del campo de entrada
    let nombre = document.getElementById('amigo').value.trim();  // .trim() para eliminar espacios innecesarios

    // Validar que el campo no esté vacío
    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
    } else {
        
        // Aquí puedes agregar el nombre al arreglo de amigos o hacer lo que necesites
        console.log("Nombre agregado: " + nombre);
        
        // Limpiar el campo de entrada después de añadir el nombre
        document.getElementById('amigo').value = "";
        
        // Ejemplo de cómo agregarlo a la lista (suponiendo que tengas un <ul> con id 'listaAmigos')
        let listaAmigos = document.getElementById('listaAmigos');
        let nuevoAmigo = document.createElement('li');
        nuevoAmigo.textContent = nombre;
        listaAmigos.appendChild(nuevoAmigo);
    }
}
