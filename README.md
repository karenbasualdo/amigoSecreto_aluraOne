# amigoSecreto_aluraOne
proyecto de amigo secreto

Este proyecto es una aplicación web sencilla que permite a los usuarios:

- Agregar nombres de amigos a una lista.
- Mostrar en pantalla los amigos añadidos.
- Realizar un sorteo para elegir aleatoriamente al amigo secreto.

---

 Estructura del proyecto

* index.html --> Estructura principal de la aplicación
* style.css --> Estilos visuales 
* app.js --> Lógica de programación (JS)


---

 Funcionalidades

Agregar amigos  
- El usuario escribe un nombre en el campo de texto.  
- Se valida que no esté vacío.  
- Se añade el nombre al arreglo amigos y se muestra en la lista.  

Mostrar lista de amigos  
- Cada vez que se agrega un nombre, la lista se actualiza en pantalla.  
- Se limpia la lista anterior para evitar duplicados.  

Sortear amigo secreto 
- Comprueba que haya amigos disponibles.  
- Usa Math.random() y Math.floor() para seleccionar un índice aleatorio.  
- Muestra en pantalla el amigo secreto elegido.

---

