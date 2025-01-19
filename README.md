### Documentación: Challenge Amigo Secreto

---

#### **Clase:**  
**Practicando Lógica de Programación: Challenge Amigo Secreto**

#### **Unidad:**  
**Principiante en Programación G8 - ONE**

#### **Certificación:**  
**ORACLE ONE G8 - INACAP**

---

### Descripción

El presente código implementa una aplicación que permite a los usuarios crear una lista de amigos, visualizarla en tiempo real y realizar un sorteo aleatorio para seleccionar a un "amigo secreto". Este proyecto es ideal para practicar conceptos fundamentales de programación, como manipulación de arreglos, interacción con el DOM y validaciones básicas.

---

### Funcionalidades Confirmadas

1. **Capturar el valor del campo de entrada:** Se utiliza `document.getElementById` para obtener el valor ingresado en el campo de texto.  
   - Código relacionado: `const campoNombre = document.getElementById("amigo");`.

2. **Validar la entrada:** Si el campo está vacío, se muestra un mensaje de alerta: "Por favor, inserte un nombre."  
   - Código relacionado:  
     ```javascript
     if (nombre === "") {
         alert("Por favor, inserte un nombre.");
         return;
     }
     ```

3. **Actualizar el array de amigos:** Los nombres ingresados se agregan al arreglo `listaDeAmigos` utilizando `.push()`.  
   - Código relacionado: `listaDeAmigos.push(nombre);`.

4. **Limpiar el campo de entrada:** Después de agregar un nombre, el campo de texto se limpia.  
   - Código relacionado: `campoNombre.value = "";`.

5. **Obtener el elemento de la lista:** Se utiliza `document.getElementById` para seleccionar el elemento HTML donde se mostrará la lista.  
   - Código relacionado: `const listaElement = document.getElementById("listaAmigos");`.

6. **Limpiar la lista existente:** Antes de mostrar los nombres actualizados, se elimina el contenido previo de la lista.  
   - Código relacionado: `listaElement.innerHTML = "";`.

7. **Iterar sobre el arreglo:** El código recorre el arreglo `listaDeAmigos` con un bucle `for`.  
   - Código relacionado:  
     ```javascript
     for (let i = 0; i < listaDeAmigos.length; i++) {
         const listItem = `<li>${i + 1}. ${listaDeAmigos[i]}</li>`;
         listaElement.innerHTML += listItem;
     }
     ```

8. **Agregar elementos a la lista:** Los nombres se añaden como elementos `<li>` al elemento HTML de la lista.  
   - Código relacionado: `listaElement.innerHTML += listItem;`.

9. **Validar que haya amigos disponibles:** Antes de realizar el sorteo, se verifica que el arreglo no esté vacío.  
   - Código relacionado:  
     ```javascript
     if (listaDeAmigos.length === 0) {
         alert("La lista está vacía. Por favor, agrega nombres antes de realizar el sorteo.");
         return;
     }
     ```

10. **Generar un índice aleatorio:** Se utiliza `Math.random()` y `Math.floor()` para seleccionar un índice al azar dentro del rango del arreglo.  
    - Código relacionado: `const indiceAleatorio = Math.floor(Math.random() * listaDeAmigos.length);`.

11. **Obtener el nombre sorteado:** El índice aleatorio se utiliza para acceder al nombre correspondiente en el arreglo.  
    - Código relacionado: `const amigoSorteado = listaDeAmigos[indiceAleatorio];`.

12. **Mostrar el resultado:** El nombre sorteado se muestra en el elemento HTML correspondiente.  
    - Código relacionado:  
      ```javascript
      const resultadoElement = document.getElementById("resultado");
      resultadoElement.innerHTML = `<li>¡El amigo secreto es: <strong>${amigoSorteado}</strong>!</li>`;
      ```

---

### Consideraciones

- Es necesario que los elementos HTML correspondientes existan en la página (como el campo de entrada, la lista, y el área de resultado).  
- El proyecto puede extenderse añadiendo funcionalidades como eliminar amigos de la lista o guardar la lista en almacenamiento local.  

