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
function sortearAmigo() {
        // tener un numero pseudoaleatorio y llamar al elmento html
       
        let numeroAleatorio = Math.floor(Math.random()* amigos.length)
        Asignaciondetexto("#resultado" , `Tu amigo secreto es ${amigos[numeroAleatorio]} `)
        let listaLimpia= document.querySelector("ul")
        listaLimpia.innerHTML = ""
        
       return 
}
    
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
    
    actualizarLista()

   limpiarcaja()
    return 
    
}

function actualizarLista() {
    // Limpia 

    let lista = document.querySelector("ul");
    lista.innerHTML = "";  

    // por cada nombre crea un "il"  

    amigos.forEach(nombre => {
        let li = document.createElement("li");
        li.textContent = nombre;
        lista.appendChild(li);
    }
    );
}
    // limpiar la caja de input
function limpiarcaja(elemetode) {
    document.querySelector("#amigo").value = ""
    Asignaciondetexto("h2" , "Digite el nombre de sus amigos")
}
// funciones sin hacer el evento y asignaciones

