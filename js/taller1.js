let resultado = document.getElementById('resultado');
let formulario = document.getElementById('formTaller1');

formulario.addEventListener("submit", par_impar);

function par_impar(event){
    event.preventDefault();
    let numero = document.getElementById('numero').valueAsNumber;
    
    if ( numero == 0 || isNaN(numero) ) {
        resultado.innerText = "Escribe un número";
        return;
    }

    if ( !Number.isInteger(numero) ) {
        resultado.innerText = "El numero debe ser entero"
        return;
    }
    
    if ( numero % 2 == 0 ) {
        resultado.innerText = "El numero es par"
    } else {
        resultado.innerText = "El numero es impar"
    }
}