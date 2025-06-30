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
  texto.textContent = el.alt|| el.dataset.alt || "Obra sin descripción";
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
