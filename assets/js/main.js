// Declaración de funciones de flecha usando ES6
const calcularValorCuota = (monto, interes, cuotas) => ((monto * (1 + interes / 100)) / cuotas).toFixed(2);
const calcularInteres = (monto, interes) => (monto * (interes / 100)).toFixed(2);
const formatearMonto = monto => monto.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');

document.getElementById('calcular-btn').addEventListener('click', () => {
    const monto = parseFloat(document.getElementById('monto').value);
    const interes = parseFloat(document.getElementById('interes').value);
    const cuotas = parseInt(document.getElementById('cuotas').value, 10);

    if (isNaN(monto) || isNaN(interes) || isNaN(cuotas)) {
        alert('Por favor, completa todos los campos con valores válidos.');
        return;
    }

    const valorCuota = calcularValorCuota(monto, interes, cuotas);
    const valorCuotaFormateado = formatearMonto(valorCuota);

    document.getElementById('resultado').innerHTML = `¡NO TE PREOCUPES! PUEDES PAGARLO EN ${cuotas} CUOTAS DE $${valorCuotaFormateado}`;
});
