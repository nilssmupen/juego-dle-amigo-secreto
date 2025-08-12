// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// variables
let amigos = []

// Funciones
    // Asignar un texto diferente    
function Asignaciondetexto(elemento , texto) {
    let textoHTML= document.querySelector(elemento)
    textoHTML.innerHTML = texto
}   
    // Click a añadir y agragarlo a la lista
function agregarAmigo(){
    let inputAmigos =   document.querySelector("#amigo").value
if (amigos.includes(inputAmigos)) {return agregarAmigo()

} else {
    amigos.push(inputAmigos);
    return inputAmigos
}

}
console.log (amigos)

// funciones y asignaciones

