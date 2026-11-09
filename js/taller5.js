let resultado = document.getElementById('resultado');
let formulario = document.getElementById('formTaller5');

formulario.addEventListener("submit", taller5);

function taller5(event){
    event.preventDefault();
    let numero1Input = document.getElementById('numero1').value;
    let numero2Input = document.getElementById('numero2').value;
    let operacion = document.getElementById("operacion").value
    let total;
    let operador;

    if (numero1Input === "" || numero2Input === "") {
        resultado.innerText = "Ingrese los 2 números";
        return;
    }

    if (operacion === "") {
        resultado.innerText = "Seleccione una operación";
        return;
    }

    let numero1 = Number(numero1Input);
    let numero2 = Number(numero2Input);

    switch (operacion) {
        case "suma":
            total = numero1 + numero2;
            operador = "+";
            break;
        case "resta":
            total = numero1 - numero2;
            operador = "-";
            break;
        case "multiplicacion":
            total = numero1 * numero2;
            operador = "*";
            break;
        case "division":
            if (numero2 === 0) {
                resultado.innerText = "No se puede dividir por 0";
                return;
            }
            total = numero1 / numero2;
            operador = "/";
            break;
        default:
            resultado.innerText = "Seleccione una operación válida";
            return;
    }

    resultado.innerText = `${numero1} ${operador} ${numero2} = ${total}`;
    resultado.classList.add('exito');
    
}