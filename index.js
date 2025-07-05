
const txtNumero = document.getElementById('txtNumero');

function marcarNumeros() {
    console.log(txtNumero)
    const numero = txtNumero.value;
    console.log(numero)
    const numeros = document.querySelectorAll(`div[data-number="${numero}"]`)
    console.log(numeros)
    for(const cellNumero of numeros){
        const condition = cellNumero.classList.contains('checked')
        if(!condition){
            cellNumero.classList.add('checked')
        }
    }
    txtNumero.value = '';
}
function desmarcarNumeros() {
    console.log(txtNumero)
    const numero = txtNumero.value;
    console.log(numero)
    const numeros = document.querySelectorAll(`div[data-number="${numero}"]`)
    console.log(numeros)
    for(const cellNumero of numeros){
        const condition = cellNumero.classList.contains('checked')
        if(condition){
            cellNumero.classList.remove('checked')
        }
    }
    txtNumero.value = '';
}