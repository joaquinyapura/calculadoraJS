let expresion="";

// Función para actualizar la pantalla con el contenido dado
function actualizarPantalla(contenido) {
    document.getElementById('pantalla').innerText = contenido;
}



//Funcion para agregar numeros 
//y Operadores a la función encargada de actualizar la pantalla
function agregarNumero(numero) {
    expresion+=numero;
    actualizarPantalla(expresion)
}
function agregarOperador(operador) {
    expresion+=operador;
    actualizarPantalla(expresion)
}

function calcular() {
    console.log(expresion);
    let resultado = eval(expresion)
    expresion=resultado


    actualizarPantalla(resultado)
}




console.log("holamundo");


