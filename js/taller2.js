let resultado = document.getElementById('resultado');
let formulario = document.getElementById('formTaller2');

formulario.addEventListener("submit", taller2);

function taller2(event){
    event.preventDefault();
    let nota = document.getElementById('nota').value;
    let aprueba;
    let rendimiento;
    
    if (nota > 5 || nota < 0 ) {
        resultado.innerText = "Ingrese una nota valida de 1 a 5";
        return;
    }
    
    if ( nota < 3 ) {
        aprueba = "No aprueba";
    } else if ( nota >= 3 ) {
        aprueba = "Aprueba";
    }

    if ( nota < 3 ) {
        rendimiento = "Bajo";
    } else if ( nota >= 3 && nota < 4 ) {
        rendimiento = "Basico"
    } else if ( nota >= 4 && nota < 4.5 ) {
        rendimiento = "Alto";
    } else {
        rendimiento = "Superior";
    }

    resultado.innerHTML = 
    `
    Nota: ${nota}
    <br>
    Rendimiento: ${rendimiento}
    <br>
    ${aprueba}
    `
}