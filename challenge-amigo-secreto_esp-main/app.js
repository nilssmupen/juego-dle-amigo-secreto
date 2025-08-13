// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// variables
let amigos = []
// Funciones
    // Asignar un texto diferente    
function Asignaciondetexto(elemento , texto) {
    let textoHTML= document.querySelector(elemento)
    textoHTML.innerHTML = texto
}   
    //Click y sortea amigos


    // Click a añadir y agragarlo a la lista
function agregarAmigo(){
    console.log(amigos)
    console.log(amigos.length)
        
    let inputAmigos =   document.querySelector("#amigo").value

    if (amigos.includes(inputAmigos)) {
        Asignaciondetexto("h2" , "Ese nombre ya esta en la lista")
        return
    } 

    if (inputAmigos==="") {
        Asignaciondetexto("h2" , "Tienes que colocar un nombre")
        return
    }

     amigos.push(inputAmigos)

    Asignaciondetexto("ul" , amigos)

   limpiarcaja()
    return 
    
}

    // limpiar la caja de input
function limpiarcaja() {
    document.querySelector("#amigo").value = ""
    Asignaciondetexto("h2" , "Digite el nombre de sus amigos")
}
// funciones sin hacer el evento y asignaciones

