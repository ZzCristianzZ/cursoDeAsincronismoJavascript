// AJAX = Asynchonous javascript and JSON

/* Lenguaje de Marcado extensible */

// AJAX = Asynchonous javascript and JSON (estandar que reemplazo o lo esta reemplazando al XML, es una forma de estructurar tus datos)

// El formato JSON trabaja (Propiedades - Valores)

/* 1. Abrir y Cerrar la Llave,  */


// Vamos a Pedir datos de una API de STARWARS https://swapi.dev/


// Primero se declara una constante a la cual denominamos <primerReq>, que es igual a un nuevo objeto.
const primerReq = new XMLHttpRequest();

// Luego con este objeto <primerReq>, llamamos al .addEventListener, y que escuche el <load> (Estado del objeto con el servidor de si se pudo conectar, estado 0,1,2,3 y 4). 

primerReq.addEventListener('load', (datos) => {
    console.log('Datos recibidos')
    // aqui ejecutamos una funciion flecha donde el parametro son los datos que recibimos como 'load', mostrar <console.log>.
    console.log(datos); // Es para mostrar los datos 

    // Sin embarbargo a la hora de ejecutar el codigo en la consola nos estamostrando demasiada informacion y la que necesitamos acceder es a al de los objetos como tal, y estos se encuentran en datos/target/response, sin embargo si los llamamos asi, datos.target.response, el tipo de dato que veremos seran string y esto se ve muy desordenado.Y para eso lo convertimos a formato JSON con el metodo <JSON.parse()>
    
    console.log(JSON.parse(datos.target.response));

});

// Nuevamente se llama el objeto con el addEventListener al igual con su funcion pero en este caso es cuando se recibe un error con el objeto a la hora de conectar con el servidor.

primerReq.addEventListener('error',() => {
    console.log('Error, imposible acceder los datos');
})

// Esto viene siendo la manera anterior de hacer promesas siendo 'load' = resolve y 'error' = reject.
// Con este objeto no se pueden utilizar Promesas


// Despues de esto lo que hacemos es llamar el objeto con el metodo <.open>,que lo que hace es posibilitarnos el acceso por alguno de los metodos (GET,POST...), seguido de la direccion de la API al servidor que deseamos.
// Dicho de otro modo su sintaxis seria objeto.open(MetodoCrud, UrlApi);

primerReq.open('GET','https://swapi.dev/api/people/');


// La siguiente linea es para ya realizar la peticion del objecto con el estado de si conecto o no y el llamado de la informacion solicitada y SIEMPRE DEBE IR AL FINAL

primerReq.send(); // Datos recibidos




