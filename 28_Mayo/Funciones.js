// 1. Crear una función que reciba por parámetros 2 números y los sume. 
// Imprimir por console.log diferentes sumas.

var x = document.getElementById("num_1");
var y = document.getElementById("num_2");
var boton = document.getElementById("sumar1+2");
boton.addEventListener("click", suma);

function suma(a, b)
{
    a = parseInt(x.value);
    b = parseInt(y.value);
    var resultado = parseInt(a) + parseInt(b)
    console.log("El resultado de tu suma es: " + resultado);
}

// 2. Crear un arreglo de meses y por console.log imprimir los meses.

let meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
console.log(meses);

// 3. Crear un ciclo en donde se imprima el arreglo de meses.

var boton2 = document.getElementById("imprimir");
boton2.addEventListener("click", imprimir_meses);

function imprimir_meses()
{
    for (var i = 0; i < meses.length; i++) 
    {
        console.log(meses[i]);
    }
}