// 1) Ejercicio de suma de números con elección de operación.

// Objetivo: Crear un programa que opere dos números, según la elección del usuario.
//Con base en los ejercicios anteriores, desglosa este.  

alert("Este programa hace operaciones aritméticas entre dos números");

var operacion = prompt("¿Qué operación quiere hacer?\n1 - Suma\n2 - Resta\n3 - División\n4 - Producto");

// Inicia condicional

if(operacion == 1)
{
    alert("Eligió suma");
    var a = (prompt("Ingrese el primer número"));
    var b = (prompt("Ingrese el segundo número"));
    var c = a + b;
    console.log("Este es el resultado de su suma: " + c);
}

else if(operacion == 2)
{
    alert("Eligió resta")
    var a = parseFloat(prompt("Ingrese el primer número"));
    var b = parseFloat(prompt("Ingrese el segundo número"));
    var c = a - b;
    console.log("Este es el resultado de su resta: " + c);
}
else if(operacion ==3)
{
    alert("Eligió división")
    var a = parseFloat(prompt("Ingrese el primer número"));
    var b = parseFloat(prompt("Ingrese el segundo número"));
    var c = a / b
    console.log("Este es el resultado de su división: " + c);
}
else if(operacion ==4)
{
    alert("Eligió producto")
    var a = parseFloat(prompt("Ingrese el primer número"));
    var b = parseFloat(prompt("Ingrese el segundo número"));
    var c = a * b
    console.log("Este es el resultado de su producto: " + c);    
}
alert("Podras ver tu resultado en la consola")