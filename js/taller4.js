let resultado = document.getElementById('resultado');
let formulario = document.getElementById('formTaller4');

formulario.addEventListener("submit", taller4);

function taller4(event) {
    event.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    const edad = document.getElementById("edad").value.trim();
    const correo = document.getElementById("correo").value.trim();
    const clave = document.getElementById("clave").value;
    const confirmar = document.getElementById("confirmar").value;

    if (nombre === "") {
        resultado.innerHTML = '<span style="color: red;">Escribe tu nombre.</span>';
        return;
    }

    if (edad === "") {
        resultado.innerHTML = '<span style="color: red;">Escribe tu edad.</span>';
        return;
    }

    const edadNumero = Number(edad);

    if (!Number.isInteger(edadNumero) || edadNumero < 18 || edadNumero > 100) {
        resultado.innerHTML = '<span style="color: red;">La edad debe ser un número entero entre 18 y 100.</span>';
        return;
    }

    if (!correo.includes("@") || !correo.includes(".")) {
        resultado.innerHTML = '<span style="color: red;">Escribe un correo válido.</span>';
        return;
    }

    if ( clave === "" || confirmar === ""){
        resultado.innerHTML = '<span style="color: red;">Ingrese una</span>';
        return;
    }

    if (clave !== confirmar) {
        resultado.innerHTML = '<span style="color: red;">Las contraseñas no coinciden.</span>';
        return;
    }

    resultado.innerText = `Registro exitoso. Bienvenido(a), ${nombre}.`
    resultado.classList.add('exito')
}