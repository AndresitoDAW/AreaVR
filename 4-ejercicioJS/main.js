function setCookie(nombre, valor, dias) {
    const fecha = new Date();
    fecha.setTime(fecha.getTime() + (dias * 24 * 60 * 60 * 1000));
    const expiracion = "expires=" + fecha.toUTCString();
    document.cookie = nombre + "=" + valor + ";" + expiracion + ";path=/";
}

function getCookie(nombre) {
    const nombreEQ = nombre + "=";
    const ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i].trim();
        if (c.indexOf(nombreEQ) === 0) {
            return c.substring(nombreEQ.length, c.length);
        }
    }
    return null;
}


window.addEventListener("DOMContentLoaded", iniciar);

function iniciar() {
    const formulario = document.getElementById("formulario");
    const nombre = document.getElementById("nombre");
    const apellido = document.getElementById("apellidos");
    const edad = document.getElementById("edad");
    const dni = document.getElementById("dni");
    const email = document.getElementById("email");
    const provincia = document.getElementById("provincia");
    const telefono = document.getElementById("telefono");
    const hora = document.getElementById("hora");
    const error = document.getElementById("error");
    const numIntentos = document.getElementById("numIntentos");

    nombre.addEventListener("blur", () => {
        nombre.value = nombre.value.toUpperCase();
    });

    apellido.addEventListener("blur", () => {
        apellido.value = apellido.value.toUpperCase();
    });

    
    let intento = parseInt(getCookie("intentos")) || 0;
    numIntentos.innerHTML = "Número de intentos: " + intento;


    formulario.addEventListener("submit", e=> {
        e.preventDefault();
        let msj_error = "";
        let existe_error = false;
        let foco = null;
        let expRegDni = /^\d{8}-*[A-Za-z]$/;
        let expRegEmail = /^[a-zA-Z0-9._]+@[a-zA-Z]+\.+[a-zA-Z]{2,3}$/;

        if (nombre.value.trim().length === 0) {
            msj_error = "El nombre no puede estar vacio.<br>";
            existe_error = true;
            foco = nombre;
        }

        if (apellido.value.trim().length === 0) {
            msj_error = "El apellido no puede estar vacio.<br>";
            existe_error = true;
            foco = apellido;
        }

        if (edad.value.trim().length === 0 || isNaN(edad.value) || edad.value < 0 || edad.value > 110) {
            msj_error += "La edad debe ser un número entre 0 y 110.<br>";
            existe_error = true;
            foco = edad;
        }

        if (dni.value.match(expRegDni) === null) {
            msj_error += "El DNI no es válido.<br>";
            existe_error = true;
            foco = dni;
        }

        if (email.value.match(expRegEmail) === null) {
            msj_error += "El Email no es válido.<br>";
            existe_error = true;
            foco = email;
        }

        if(provincia.value === "") {
            msj_error += "Debe seleccionar una provincia.<br>";
            existe_error = true;
            foco = provincia;
        }

        if (telefono.value.trim().length === 0 || isNaN(telefono.value) || telefono.value.length != 9) {
            msj_error += "El teléfono no es válido.<br>";
            existe_error = true;
            foco = telefono;
        }

        if (hora.value === "") {
            msj_error += "Debe seleccionar una hora.<br>";
            existe_error = true;
            foco = hora;
        }

        if (existe_error) {
            error.innerHTML = msj_error;
            intento++;
            setCookie("intentos", intento, 7); // guarda por 7 días
            numIntentos.innerHTML = "Número de intentos: " + intento;
            foco.focus();
;
        } else {
            error.innerHTML = "";
            numIntentos.innerHTML = "";
            alert("Formulario enviado correctamente.");
            formulario.reset();
        }

    });
}