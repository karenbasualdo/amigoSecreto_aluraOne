// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. 
// Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];


function agregarAmigo() {
    // Capturar el valor del campo ingresado
    let nombre = document.getElementById("amigo").value.trim();
    

    // Validar que no esté vacío
    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }


    // Agregar al array el nombre
    amigos.push(nombre);

    // Actualizar la lista en el HTML
    mostrarAmigos();

    // Limpiar el campo de entrada
    document.getElementById("amigo").value = "";
}


function mostrarAmigos() {
    // Obtener el elemento de la lista
    let lista = document.getElementById("listaAmigos");

    // Limpiar la lista existente
    lista.innerHTML = "";

    // Recorrer el array con un bucle for
    for (let i = 0; i < amigos.length; i++) {
        // Agregar cada amigo como un <li>
        lista.innerHTML += `<li>${amigos[i]}</li>`;
    }
}

function sortearAmigo() {
    // Validar que haya amigos disponibles
    if (amigos.length === 0) {
        alert("No hay amigos en la lista para sortear.");
        return;
    }
    
    //generar indice aleatorio para amigo
    let indiceAleatorio= Math.floor(Math.random()*amigos.length);

    //obtener nombre sorteado amigo a partir del indice
    let amigoSorteado = amigos[indiceAleatorio];

    // mostar resultado
    //comilla invertida ` sino no funciona
    document.getElementById('resultado').innerHTML = ` El amigo secreto es: <strong>${amigoSorteado}</strong>`;
}

