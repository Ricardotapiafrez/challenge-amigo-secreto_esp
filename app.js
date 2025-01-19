// Declarar un arreglo para almacenar los nombres de los amigos
let listaDeAmigos = [];

// Función para agregar amigos
function agregarAmigo() {
    // Capturar el valor del campo de entrada
    const campoNombre = document.getElementById("amigo");
    const nombre = campoNombre.value.trim(); // Eliminar espacios innecesarios

    // Validar la entrada
    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return; // Salir de la función si el campo está vacío
    }

    // Agregar el nombre al arreglo
    listaDeAmigos.push(nombre);

    // Actualizar la lista visible en la página
    actualizarListaAmigos();

    // Limpiar el campo de entrada
    campoNombre.value = "";
}

// Función para recorrer el array y mostrar los nombres en la lista HTML
function actualizarListaAmigos() {
    // Obtener el elemento de la lista
    const listaElement = document.getElementById("listaAmigos");

    // Limpiar la lista existente
    listaElement.innerHTML = "";

    // Iterar sobre el arreglo y agregar cada nombre como un <li>
    for (let i = 0; i < listaDeAmigos.length; i++) {
        const listItem = `<li>${i + 1}. ${listaDeAmigos[i]}</li>`;
        listaElement.innerHTML += listItem;
    }
}

// Función para sortear un amigo aleatoriamente
function sortearAmigo() {
    // Validar que haya amigos en la lista
    if (listaDeAmigos.length === 0) {
        alert("La lista está vacía. Por favor, agrega nombres antes de realizar el sorteo.");
        return;
    }

    // Generar un índice aleatorio
    const indiceAleatorio = Math.floor(Math.random() * listaDeAmigos.length);

    // Obtener el nombre sorteado
    const amigoSorteado = listaDeAmigos[indiceAleatorio];

    // Mostrar el resultado
    const resultadoElement = document.getElementById("resultado");
    resultadoElement.innerHTML = `<li>¡El amigo secreto es: <strong>${amigoSorteado}</strong>!</li>`;
}
