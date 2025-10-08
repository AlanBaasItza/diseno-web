function calcularSuma() {
    let x = parseInt(document.getElementById('campo1').value);
    let y = parseInt(document.getElementById('campo2').value);
    let resultado = x + y;
    imprimirResultado(resultado);
}
function calcularMultiplicacion() {
    let x = parseInt(document.getElementById('campo1').value);
    let y = parseInt(document.getElementById('campo2').value);
    let resultado = x * y;
    imprimirResultado(resultado);
}
function imprimirResultado(valor) {
    let campoResultado = document.getElementById('txt_resultado');
    campoResultado.value = valor;
    console.log(valor);
}
document.addEventListener('DOMContentLoaded', function() {
    let btnSumar = document.getElementById('btn_sumar');
    let btnMultiplicar = document.getElementById('btn_multiplicar');
    btnSumar.addEventListener('click', calcularSuma);
    btnMultiplicar.addEventListener('click', calcularMultiplicacion);
});