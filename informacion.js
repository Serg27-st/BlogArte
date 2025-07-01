// 1. Entrada y salida
window.onload = () => {
    document.getElementById("modal").style.display = "block";
};

// 2. Modal
document.getElementById("cerrarModal").onclick = () => {
    document.getElementById("modal").style.display = "none";
};

window.onclick = (e) => {
    if (e.target === document.getElementById("modal")) {
        document.getElementById("modal").style.display = "none";
    }
};

// 3. Menú hamburguesa
document.getElementById("btnMenu").addEventListener("click", () => {
    document.getElementById("menu").classList.toggle("mostrar");
});

