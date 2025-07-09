//1. AGREGAR OBRA
document.getElementById("agregar-obra").addEventListener("click", function () {
  const titulo = document.getElementById("nombre-obra").value.trim();
  const archivoInput = document.getElementById("archivo-obra");
  const archivo = archivoInput.files[0];

  if (!titulo || !archivo) {
    alert("Por favor, ingresa el título y selecciona una imagen o video.");
    return;
  }

  const nuevaObra = document.createElement("div");
  nuevaObra.className = "obra";

  // Crear tooltip
  const tooltip = document.createElement("div");
  tooltip.className = "tooltip";
  tooltip.textContent = titulo;
  tooltip.style.display = "none";

  // Crear elemento multimedia según el tipo
  let elemento;
  const tipoArchivo = archivo.type;

  const reader = new FileReader();
  reader.onload = function (e) {
    if (tipoArchivo.startsWith("image/")) {
      elemento = document.createElement("img");
      elemento.src = e.target.result;
      elemento.alt = titulo;
    } else if (tipoArchivo.startsWith("video/")) {
      elemento = document.createElement("video");
      elemento.src = e.target.result;
      elemento.controls = true;
    }
    mostrar = () => {
      tooltip.style.display = "block"
    }
    ocultar = () => {
      tooltip.style.display = "none"
    }

    // Eventos para mostrar tooltip
    elemento.addEventListener("mouseover", mostrar);
    elemento.addEventListener("mouseout", ocultar);

    nuevaObra.appendChild(elemento);
    nuevaObra.appendChild(tooltip);

    document.querySelector(".galeria-columna").appendChild(nuevaObra);

    // Reset
    document.getElementById("nombre-obra").value = "";
    archivoInput.value = "";
    // Mostrar modal de obra guardada con exito
    const modalExito = document.getElementById("modalExito");
    const cerrarExito = document.getElementById("cerrarExito");

    modalExito.style.display = "block";

    cerrarExito.onclick = () => modalExito.style.display = "none";

    window.onclick = (e) => {
      if (e.target === modalExito) {
        modalExito.style.display = "none";
      }
    };

  };

  reader.readAsDataURL(archivo);
});




// 2. Mostrar una salida de texto 
window.onload = function () {
  const nombre = prompt("¡Bienvenido a ArteUTP! ¿Cuál es tu nombre?");
  if (nombre) {
    alert("Hola " + nombre + ", disfruta de nuestra galería.");
  }
};

// Pausar el video al salir del área
const video = document.querySelector("video");
if (video) {
  video.addEventListener("mouseleave", () => {
    video.pause();
  });
}

// Mostrar información flotante sobre cada imagen
const obras = document.querySelectorAll(".obra img, .obra video");
obras.forEach((el) => {
  const texto = document.createElement("div");
  texto.className = "tooltip";
  texto.textContent = el.alt || el.dataset.alt || "Obra sin descripción";
  el.parentElement.appendChild(texto);

  el.addEventListener("mouseover", () => {
    texto.style.display = "block";
  });

  el.addEventListener("mouseout", () => {
    texto.style.display = "none";
  });
});

// Búsqueda de obras
const galeria = document.querySelector(".galeria-columna");
const inputBusqueda = document.createElement("input");
inputBusqueda.placeholder = "Buscar por título o artista...";
inputBusqueda.style.margin = "20px";
inputBusqueda.style.padding = "10px";
inputBusqueda.style.width = "300px";
document.querySelector(".galeria").insertBefore(inputBusqueda, galeria);

inputBusqueda.addEventListener("input", function () {
  const texto = this.value.toLowerCase();
  const obras = document.querySelectorAll(".obra");

  obras.forEach((obra) => {
    const descripcion = obra.querySelector("p").textContent.toLowerCase();
    obra.style.display = descripcion.includes(texto) ? "block" : "none";
  });
});

// MENÚ RESPONSIVO
document.getElementById("btnMenu").addEventListener("click", () => {
  document.getElementById("menu").classList.toggle("mostrar");
});

// MODAL
const modal = document.getElementById("modal");
const btnAbrir = document.getElementById("btnAbrirModal");
const btnCerrar = document.getElementById("cerrarModal");

btnAbrir.onclick = () => modal.style.display = "block";
btnCerrar.onclick = () => modal.style.display = "none";
window.onclick = (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
};

document.getElementById("btnMenu").addEventListener("mouseover", () => {
  document.getElementById("menu").classList.toggle("mostrar");
});

// Cierra el menú cuando se hace clic en un enlace (opcional)
document.querySelectorAll("#menu a").forEach(link => {
  link.addEventListener("mouseover", () => {
    document.getElementById("menu").classList.remove("mostrar");
  });
});
