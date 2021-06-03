var salario = document.getElementById("txt_salario");
var botonQuincenal = document.getElementById("BQuincenal");
var botonMensual = document.getElementById("BMensual");
botonQuincenal.addEventListener("click", quincenal ); // Activa la funcion quincenal al dar click en el boton "Quincenal"
botonMensual.addEventListener("click", mensual ); // Activa la funcion mensual al dar click en el boton "Mensual"

function quincenal() //Calcula el salario quincenal
{
    var salarioQuincenal = parseInt(salario.value) * 15 * .6
    alert("Tu salario quincenal es de $" + salarioQuincenal)
}

function mensual() //Calcula el salario mensual
{
    var salarioMensual = parseInt(salario.value) * 30 * .6
    alert("Tu salario mensual es de $" + salarioMensual)
}
