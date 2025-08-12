// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// variables
let amigos = []

// Funciones
    // Asignar un texto diferente    
function Asignaciondetexto(elemento , texto) {
    let textoHTML= document.querySelector(elemento)
    textoHTML.innerHTML = texto
}   
    //


    // Click a añadir y agragarlo a la lista
function agregarAmigo(){
    console.log(amigos)
        
    let inputAmigos =   document.querySelector("#amigo").value

    if (amigos.includes(inputAmigos)) {
        alert("coloca otro nombre")
        return
    } 

    if (inputAmigos==="") {alert("debes colocar un nombre valido")
        return
    }

    let ListadeAmigos = amigos.push(inputAmigos)

   limpiarcaja()
    return ListadeAmigos
    
}

    // limpiar la caja de input
function limpiarcaja() {
    document.querySelector("#amigo").value = ""
}
// funciones sin hacer el evento y asignaciones

