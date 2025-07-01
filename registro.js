
// Mostrar alerta al seleccionar una especialidad
document.getElementById("especialidad").onchange = function () {
    let seleccion = this.value;
    if (seleccion !== "") {
        alert("Has seleccionado la especialidad: " + seleccion);
    }
};

// Confirmar envío del formulario
document.querySelector(".formulario-artista").onsubmit = function (e) {
    let confirmar = confirm("¿Estás seguro de enviar tu registro?");
    if (!confirmar) {
        e.preventDefault(); // Cancela el envío
        alert("Envío cancelado.");
    } else {
        alert("¡Gracias por registrarte!");
    }
};

// Vista previa de la imagen seleccionada
document.getElementById("archivo").onchange = function (event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            const preview = document.getElementById("preview");
            preview.src = e.target.result;
            preview.style.display = "block";
        };
        reader.readAsDataURL(file);
    }
};

const telefonoInput = document.getElementById("telefono");

telefonoInput.addEventListener("input", function () {
    const valor = telefonoInput.value;
    const esValido = /^\d{9}$/.test(valor);

    // Si hay algo escrito y es inválido
    if (valor.length > 0 && !esValido) {
        telefonoInput.setCustomValidity("El número debe tener exactamente 9 dígitos.");
        telefonoInput.reportValidity(); // Muestra mensaje nativo del navegador
    } else {
        telefonoInput.setCustomValidity(""); // Limpia el error
    }
});

// Evento al cambiar el nivel de experiencia
document.getElementById("experiencia").onchange = function () {
    console.log("Nivel de experiencia cambiado a:", this.value);
};

document.querySelector(".formulario-artista").onsubmit = function (e) {
    // Verificar si los términos están marcados
    if (!document.getElementById("terminos").checked) {
        alert("Debes aceptar los términos y condiciones.");
        e.preventDefault();
        return;
    }

    // Confirmación del usuario
    const confirmar = confirm("¿Estás seguro de enviar tu registro?");
    if (!confirmar) {
        e.preventDefault();
        alert("Envío cancelado.");
    } else {
        alert("¡Gracias por registrarte!");
        window.location.href = "index.html";
    }
};


