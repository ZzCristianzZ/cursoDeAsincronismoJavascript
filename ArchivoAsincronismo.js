// const  XMLHttpRequest = require ('xmlhttprequest').XMLHttpRequest;
// const API = 'https//api.escuelajs.co/api/v1';

// function fetchData (urlApi, callback){
//     let xhhtp = new XMLHttpRequest();

//     xhhtp.open ('GET', urlApi, true);

//     xhhtp.onreadystatechange = function(event){
//         if (xhhtp.onreadystatechange === 4){
//             if (xhhtp.status === 200){
//                 callback(null, JSON.parse(xhhtp.responseText))
//             }else{
//                 const error = new Error('Error' + urlApi);
//                 return callback(error, null);
//             }
//         }
//     }
//     xhhtp.send();
// }

// fetchData(`${API}/products`, function(error1,data1){
//     if (error1) return console.error(error1);

//     fetchData(`${API}/products/${data1[0].id}`, function (error2, data2){
//         if (error2) return console.error(error2);

//         fetchData(`${API}/categories/${data2?.category?.id}`, function(error3, data3){
//             if (error3) return console.error(error3);
            
//             console.log(data1[0]);
//             console.log(data2.title);
//             console.log(data3.name);
//         });
//     });
// });

// CALLBACK HELL
// Se traduce en el uso de de varias llamadas o peticiones a la API con el condicional If

// PROMISES

// Un callback devuelve una funcion en los parametros, cuando llamamos varias veces un callback, estaremos colocando muchas lineas de codigo y seria engorroso, por eso nacen las promesas, estas optimizan y permiten leer mejor el codigo en menos lineas.

// Las promesas son asincronas, por lo que el codigo continuara su ejecucion normalmente y luego dira si la promesa  se resolvio o se rechazo. Por lo que varias promesas pueden llegar a entrar en ejecucion al mismo tiempo. Las promesas  pueden ocurrir, ahora, en el futuro o nunca.

// Para crear una promesa utilizamos la palabra reservada : new, seguida de la palabra : promise, que es el constructor de la promesa. 

// Que es un constructor ?
// Un constructor en JavaScript es un metodo especial que se usa para crear y inicializar un objeto creado a partir de una clase o funcion constructora.Se usa la palabra clave "new" para crear un objeto  partir de la clase.El constructor es la parte primordial de la programacion orientada a objetos (OOP), ya que contiene la logica necesaria para crear una instancia de una clase. El constructor es llamado automaticamente cada vez que se crea una instancia de una clase.


// Este constructor recibe un unico parametro que es una funcion, la cual a su vez, recibe otros dos parametros : Resolve : cuando la promesa devuelve un valor correctamente, y reject : para en caso de que no funcione.

// Una promesa puede estar en tres estados : Pendiente (pending)=> Una promesa inicia en este estado : no cumplida, no rechazada.Cumplida(fulfilled) => significa que la operacion se completo .Then (despues), despues de que se resuelve correctamente la promesa despues de puede hacer... Rechazada (reject) => Significa que a operacion fallo .catch (error=>..).si llamamos a reject pasamos a llamar .catch que nos muestra la razon del mal funcionamiento.

//con solo .then se obtiene el resultado de la promesa de acuerdo a resolve o reject
//con .catch podemos obtener más información de un futuro error que se presente
//con .finally podemos imprimir un mensaje que indica que ya se ejecutó la promesa.
//------------------------------------------------------------

//QUE ES FETCH?
// Fetch : Es una API (Interfas de Programacion Grafica), Que proporciona una forma estandar y mas sencilla para realizar solicitudes HTTP por medio de promesas de ECMAScript 6. Sirve para asincrono como sincrono. Y Permite recuperar recursos en forma binaria(Imagenes, audios y videos).

// INSTALACION DE FETCH
// Ir a la terminal y escribir <npm i node-fetch>
// Para compilar desde Visual Studio Code, debemos registrar el modulo en el archivo package.json. Se abre el archivo y se agrega al final "type" : "module". Importante agregar una coma a la llave que cierra las dependencies.


// import fetch from 'node-fetch';
// const API = 'https://api.escuelajs.co/api/v1';

// function fetchData (urlApi){
//     return fetch(urlApi);
// };

// fetchData (`${API}/products`)
//     .then(response => response.json())
//     .then(products => {
//         console.log('products');
//     })
//     .then(() => {
//         console.log('Hola');
//     })
//     .catch(error => console.log(error));

import fetch from 'node-fetch';
// Esta linea importa el metodo fetch desde el paquete node-fetch
const API = 'https://api.escuelajs.co/api/v1';
// Esta linea crea una constante llamada API que contiene la Url de la Api de la Escuela Js

function fetchData (urlApi){
    return fetch(urlApi);
    // esta es una funcion que retorna la funcion Fetch con la urlApi. La funcion fetch permite hacer peticiones HTTP .Devuelve una promesa que se puede encadenar con los metodos then(), y catch para manejar errores
};

// fetchData (`${API}/products`)
// // se hace llamado a la Funcion fetchData 
//     .then(response => response.json())
//     // coge el resultado de la funcion y la tranforma en un objeto .json
//     .then(products => {
//         console.log('products');
//     // Este linea imprime el resultado, es decir el objeto, en consola.
//     })
//     .then(() => {
//         console.log('Hola');
//     })
//     .catch(error => console.log(error));
    // esta linea toma los errores que puedan ocurrir y los imprime en consola.

// SEGUNDO EJEMPLO, HACER VARIOS LLAMADOS O PETICIONES Y TRAER  LO MISMO QUE HICIMOS CON LA API XMLHTTPRequest

//Esta serie de líneas de código intenta realizar una solicitud a una API para obtener la información de productos y categorías.
fetchData(`${API}/products`)
//Primero se hace una llamada a la API con la dirección especificada por la constante API y se almacena el resultado en una variable.
    .then(response => response.json()) //se hace la conversión a un objeto json
    .then(products => {
        console.log(products);
        return fetchData(`${API}/products/${products[0].id}`) // solo se quiere mostrar el primer elemento de la primera solicitud
        // Luego, se hace una solicitud con el identificador del primer elemento de la primera solicitud.
        
    })
    .then(response => response.json()) //se vuelve traer la data
    .then(product => {
        console.log(product.title);
        return fetchData(`${API}/categories/${product.category.id}`) //se quiere mostrar la categoria de un producto en particular// Se solicita la categoría de un producto en particular.
        
    })
    .then(response => response.json())
    .then(category => {
        console.log(category.name);//Se imprime el nombre de la categoría 
    })
    .catch(err => console.log(err)) //detectar un error
    .finally(() => console.log('Finally')); //es opcional para mostrar que se terminó la solicitud

//-----------------------------------------------------------------
    // METODO FETCH POST, En el que enviamos informacion al servidor.

// Se utilizan los verbos que indican acciones, Get => Sirve para solicitar un recurso, POST => sirve para la creacion de recursos en el servidor.PUT => Sirve actualizar por completo un recurso. DELETE => sirve para eliminar un recurso.


// A la hora de enviar datos (POST), se debe tener en cuenta varias cosa cmo los permisos para que el intercambio sea seguro, hay que especificar el modo (mode).

// QUE ES UN ORIGEN CRUZADO
// Un origen tiene dominio/protocolo/puerto, un origen cruzado denominado "Cross Origin", es la palabra que se utiliza para denominar el tipo de peticiones que se realizan a un dominio diferente de origen desde donde se realiza la peticion. Asi que se coloca cors, indica que se permiten solicitudes predeterminadas de origen cruzado como GET y POST.



import fetch from 'node-fetch';
//const API = 'https://api.escuelajs.co/api/v1';
// Esta es la misma API que definimos mas arriba.

function postData(urlApi, data) {
    //ya no se solicita informarción si no se guardará información
    //Esta función se encarga de realizar una petición POST a una URL especificada. Esa URL se recibe como parámetro (urlApi), al igual que los datos a enviar (data).
    const response = fetch(urlApi, {
        //Esta función se encarga de realizar una petición POST a una URL especificada. Esa URL se recibe como parámetro (urlApi), al igual que los datos a enviar (data).
        method: 'POST', //tiene que ir en mayúscula
        mode: 'cors', //cors es el permiso que va a tener, por defecto va estar siempre en cors
        credentials: 'same-origin', //es opcional
        headers:{
            'Content-Type': 'application/json' //necesario indicar que lo que se está enviando es de tipo json
        },
        body: JSON.stringify(data) //El body de la petición será los datos que se reciben como parámetro, los cuales se convierten a formato JSON.el método JSON.stringify() convierte un objeto o valor de JavaScript en una cadena de texto JSON
    });
    return response;//Una vez creado el objeto de respuesta, se devuelve como resultado de la función.

}

//En https://fakeapi.platzi.com/doc/products se consigue la estructura de como debe ser el objeto que se quiere crear con POST.A continuación se crea un objeto "data" el cual contendrá los datos a enviar.
const data = {
    "title": "Nunca pares de aprender",
    "price": 2,
    "description": "A description",
    "categoryId": 1,
    "images": ["https://placeimg.com/640/480/any"]
}

//podemos usar el postData como una promesa y con .then obtener la respuesta como un objeto json y mostrarlo después en la consola

//Por último se realiza la petición POST a la URL recibida junto con los datos.
//El resultado de la petición se convierte a formato JSON y se imprime en consola.

postData(`${API}/products`, data)
    .then(response => response.json())
    .then(data => console.log(data));


// ----------------------------------------------------------------------------------------
// FUNCIONES ASINCRONAS
// La declaracion de la Funcion Async, define una funcion asincrona que devuelve un objeto, lo cual permite a un programa correr una funcion sin congelar todo la compilacion. Se hace para simplificar el comportamiento sincrono de las promesas.La estructura de las funciones asicncronas es : 

// La palabra async que va antes de la funcion que devuelve una promesa.
// La palabra await que va dentro de las funciones async que espera hasta que la promesa se resuelve para continuar 

// QUE ES EL IF TERNARIO 
// sintaxis : condicion ? expresion1 : expresion2;
//  EJEMPLO DE LAS FUNCIONES ASINCRONAS 

const fnAsync = () =>{
    return new Promise((resolve, reject) =>{
        (true) //se usó operador ternario y se está forzando con true que se cumpla la condición
            ? setTimeout(() => resolve('Async!!', 2000))
            : reject(new Error('Error!')); //arroja "error" en caso de que la condición sea false
    });
}

const anotherFn = async () => { //la palabra async es para el cuerpo de la función
    //la palabra await estará dentro de la lógica a implementar
    const something = await fnAsync(); //aquí nos está regresando una promesa
    console.log(something); //se imprime mientras se espera
    console.log('Hello!');
}

console.log('Before'); //al ser la primera orden con solo console.log, 'Before' se imprime primero
anotherFn();//es el segundo en llamar, pero aún así no se imprimen los console de su lógica y tarda 2 s en ser ejecutada
console.log('After'); //aparece justo después de 'Before' porque anotherFn() está esperando una promesa y aún así el programa no se detiene, sino que sigue y así tenemos 'After' de segundo al imprimir

/*La salida al correr con Run Code queda:
Before
After
Async!!
Hello!
*/

// ---------------------------------------------------------------
 // TRY AND CATCH 
 // Es una estructura de control en JavaScript que permite recuperar errores o exepciones que se produzcan durante la ejecucion de un programa.
 //TRY => Se usa para contener el codigo que se quiere ejecutar y que podria generar algun tipo de error.
 // CATCH => Se utilica para atrapar cualquier error que se genere en el bloque TRY, Que recibe como argumento un objeto de error que contiene informacion sobre el mismo.
 //  QUE ES UNA ESTRUCTURA DE CONTROL?
 // Es una secuencia de instrucciones que le dice al navegador como ejecutar una accion particular, Estas pueden contener bucles, condicionales y otros elementos que permitan a los desarrolladores controlar el flujo de ejecucion de la aplicacion.

 //Ejemplo:

try {
  // Aquí va el código que se quiere ejecutar 
  // y que puede generar un error
  var x = y + z;
} catch (error) {
  // Esta parte se ejecuta si se produce algún error
  console.log(error); 
}

// Importante recordar que la estructura de async/await se compone por las palabras reservadas async y await:
// .

// La palabra async se coloca antes de la función (la otra forma es con funciones flecha en que el async va antes que los argumentos).
// La palabra await se utiliza dentro de las funciones async.
// .
// 🖇️ Otra forma de hacer que async/await espere a varios llamados a la vez es con la estructura: Try /Catch:
// .

// La palabra reservada try consiste en un bloque que contiene una o más sentencias, como hacíamos con resolve.
// Su cuerpo está conformado por las llaves {} las cuales se deben utilizar siempre, incluso para un bloque de una sola sentencia.
// También puede estar presente un bloque con la palabra reservada catch.
// Un bloque catch es opcional (como hacíamos con reject) y contiene sentencias que especifican que hacer si una excepción es lanzada en el bloque try.
// Si no se lanza ninguna excepción en el bloque try, el bloque catch se omite.




// EJEMPLO LAS PETICIONES DE LAS ANTERIORES CLASES
//  En este ejemplo lo que queremos es consumir la API, y traer todos los productos, filtrar el nombre de un producto y categoria a la que pertenece.

// En primera parte, estamos creando una funcion "principal", para consumir la API. Recordemos que la variable API, es solo la url Base, es decir que si deseamos algun recurso (como products, categories, etc), necesitamo un endpoint.

import fetch from 'node-fetch';
//const API  = 'https://api.escuelajs.co/api/v1'; Esta es la misma variable que contiene la direccion API de la Fake API de Platzi, pero que dejamos comentada ya que en los anteriores ejemplos ya esta declarada.

async function fetchData(urlApi){
    const response = await fetch (urlApi);// Consumimos la API, nos devuelve un formato que no podemos trabajar en JS
    const data = await response.json();// convertimos es formato json (objetos y arrays) para manipularlo. JSON => JavaScript Object Notation, esun formato de texto ligero y facil de leer para intercambiar datos.
    return data;
}
//Esta seria la segunda parte en donde creamos la segunda funcion que es donde iremos haciendo los llamados, PRIMERO => traemos todos los productos que contiene la API, por eso se hace el llamado a la funcion "fetchData", y agregamos el enpoint anteriormente mencionado.

const anotherFunction = async (urlApi) => {
    try {
        const products = await fetchData(`${urlApi}/products`);// PRIMERO
        const product = await fetchData(`${urlApi}/products/${products[0].id}`);//En este llamado necesitamos de todos los productos uno solo, por lo que agregamos el Id 0 que indica el primer producto de las base de productos que tiene el mismo nombre en la variable 
        const category = await fetchData(`${urlApi}/categories/${product.category.id}`);// toda la informacion para acceder a los diferentes endpoint esta en la documentacion de la API.En este caso estamos llamando el obj category, dentro del obj producto por el id.

        console.log(products);
        console.log(product.title);
        console.log(category.name);

    } catch{
        console.error(error);
    }
}

anotherFunction(API);

// EJEMPLO SIN LA EXPLICACION

// //import fetch from 'node-fetch';
// //const API  = 'https://api.escuelajs.co/api/v1'; Esta es la misma variable que contiene la direccion API de la Fake API de Platzi, pero que dejamos comentada ya que en los anteriores ejemplos ya esta declarada.

// async function fetchData(urlApi){
//     const response = await fetch (urlApi);
//     const data = await response.json();
//     return data;
// }

// const anotherFunction = async (urlApi){
//     try {
//         const products = await fetchData(`${urlApi}/products`);
//         const product = await fetchData(`${urlApi}/products/${products[0].id}`);
//         const category = await fetchData(`${urlApi}/categories/${product.category.id}`);
//     } catch{
//         console.error(error);
//     }
// }

// anotherFunction(API);

// GENERADORES 
// Son funciones que permiten el flujo de control mas flexible.Estas permiten una pausa en la ejecucion y renaduar en el punto que quedo.

// Su estructura consta de la palabras clave function seguido del *, y el resultado que se quiere obtener se coloca al derecho de la palabra clave yield.

// Para poder Iterar con un generador, se puede inicializar un valor con la funcion generadora
// const tg =  gen();

// Uso del metodo next en el objeto del generador
// next() permite acceder a la funcion generadora y obtener con yield el siguiente valor.

//Declaración de la función del Generador pasando un argumento
function* iterate(array){
    for(let value of array){ //El loop del for revisa cada elemento del array
        yield value; //value es asignado en cada ciclo
    }
}

const it = iterate(['Oscar', 'Omar', 'Ana', 'Lucia', 'Juan']); // Se llama la funcion con el array dentro que va a iterar nuestro bucle.

//la diferencia con el ejemplo anterior es que el iterador se le pasa un argumento
console.log(it.next().value); //Imprime el primer elemento del array: Oscar
console.log(it.next().value); //Imprime el segundo elemento del array: Omar
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value); //Si se coloca un sexto console, la consola indica "Undefined"