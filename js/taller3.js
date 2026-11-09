let resultado = document.getElementById('resultado');
let formulario = document.getElementById('formTaller3');

formulario.addEventListener("submit", taller3);

function taller3(event){
    event.preventDefault();
    let numero1 = document.getElementById('numero1').valueAsNumber;
    let numero2 = document.getElementById('numero2').valueAsNumber;
    let numero3 = document.getElementById('numero3').valueAsNumber;
    
    if ( isNaN(numero1) || isNaN(numero2) || isNaN(numero3)) {
        resultado.innerText = "Ingrese numeros validos"
        return;
    }

    if ( numero1 > numero2 || numero1 > numero3 ){
        resultado.innerText = `El número ${numero1} es el mayor`
    } else if ( numero2 > numero3 ){
        resultado.innerText = `El número ${numero2} es el mayor`
    } else {
        resultado.innerText = `El número ${numero3} es el mayor`
    }
}