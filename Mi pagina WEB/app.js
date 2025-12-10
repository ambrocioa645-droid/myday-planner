/* ============================================================
   CHAT FLOTANTE
============================================================ */

const chatBubble = document.getElementById("chat-bubble");
const chatBox = document.getElementById("chat-box");
const closeChat = document.getElementById("close-chat");

chatBubble?.addEventListener("click", () => {
    chatBox.classList.toggle("active");
});

closeChat?.addEventListener("click", () => {
    chatBox.classList.remove("active");
});


/* ============================================================
   GALERÍA – Agregar imágenes dinámicas
============================================================ */

const inputImagen = document.getElementById("inputImagen");
const btnAgregarImagen = document.getElementById("btnAgregarImagen");
const galeria = document.getElementById("galeria");

btnAgregarImagen?.addEventListener("click", function () {
  
  const url = inputImagen.value.trim();

  if (!url) {
    alert("Por favor ingresa una URL válida.");
    return;
  }

  const col = document.createElement("div");
  col.classList.add("col-md-4");

  const img = document.createElement("img");
  img.src = url;
  img.alt = "Imagen agregada por el usuario";
  img.classList.add("img-fluid", "rounded", "shadow");

  col.appendChild(img);
  galeria.appendChild(col);

  inputImagen.value = "";
});
/* ============================================================
   LISTA DE TAREAS WARRIOR
============================================================ */

const listaTareas = document.getElementById("listaTareas");
const btnEliminarPrimero = document.getElementById("btnEliminarPrimero");
const inputNuevaTarea = document.getElementById("inputNuevaTarea");
const btnAgregarTarea = document.getElementById("btnAgregarTarea");

// Eliminar primera tarea
btnEliminarPrimero?.addEventListener("click", () => {
  const primeraTarea = listaTareas.firstElementChild;

  if (primeraTarea) {
    primeraTarea.remove();
  } else {
    alert("No hay tareas para eliminar.");
  }
});

// Agregar tarea nueva
btnAgregarTarea?.addEventListener("click", () => {
  const textoTarea = inputNuevaTarea.value.trim();

  if (textoTarea === "") {
    alert("Escribe una tarea antes de agregar.");
    return;
  }

  const nuevaTarea = document.createElement("li");
  nuevaTarea.classList.add("list-group-item");
  nuevaTarea.innerText = textoTarea;

  listaTareas.appendChild(nuevaTarea);

  inputNuevaTarea.value = "";
});
