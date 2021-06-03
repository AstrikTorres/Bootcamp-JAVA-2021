// EJERCICIOS DE OBJETOS  

/** Crear un objeto que se llame persona, el ejemplo debe tener 
un nombre, sus apellidos, edad 
y debe tener un método para saludar. 
Otro método donde diga su edad.
En consola imprimir el resultado de ambos métodos*/

 var persona = {
    nombre: 'Astrik',
    apellidos: 'Torres',
    edad: 19,
    saludo: function()
    {
        return console.log('Mucho gusto, mi nombre es ' + this.nombre + ' ' + this.apellidos);
    },
    mi_edad: function()
    {
        return console.log('Tengo ' + this.edad + ' años');
    }
}

persona.saludo();
persona.mi_edad();

/* Hacer una función donde le pasemos los parametros (nombre, apellidos, edad)
   esta funcion tendrá dentro un objeto
   los datos que reciba la función llenarán el objeto.
   La función debe retornar el objeto.
 */
var nombre  = prompt('Ingresa tu nombre o nombres');
var apellidos2 = prompt('Ingresa tus apellidos');
var edad = prompt('Ingresa tu edad');

function persona2 (a,b,c) 
{
    persona.nombre = a;
    persona.apellidos = b;
    persona.edad = c;
    return console.log('Hola, ' + a + ' ' + b + ' con ' + c + ' años')
}

persona2(nombre, apellidos2, edad);

