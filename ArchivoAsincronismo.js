const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest; // instanciamos xmlhttprequest.
const API = 'https://api.escuelajs.co/api/v1'; // API donde vamos a traer los datos.
// estados: 0 no iniciado - 1 cargando, aún no se llama a send - 2 cuando ya se ejecuto send
// 3 interactuando con la solicitud - 4 se ha completado la llamada.
// status: 200 solicitud correcta - 400 errores - 500 errores del servidor.
function fetchData(urlApi, callback) { // función donde generamos la conexión, recibe urlApi y un callback.
    let xhttp = new XMLHttpRequest(); // generamos una nueva instancia más corta en xhttp.
    xhttp.open('GET', urlApi, true); // abrimos una conexión con el método GET, urlApi y true para asincronismo.
    xhttp.onreadystatechange = function (event) { // cuando este cambio suceda, escuchamos el estado:
        if (xhttp.readyState === 4) { // comparamos el estado que sea igual a 4 (completado).
            if (xhttp.status === 200) { // comparamos el estatus sea igual a 200 (solicitud correcta).
                callback(null, JSON.parse(xhttp.responseText)); // retornamos callback null en error. Parse de datos.
            } 
        }else { // si lo anterior no ocurre:
            const error = new Error('Error' + urlApi); // generamos un nuevo error + urlApi.
            return callback(error, null); // retornamos callback con el error y null(para los datos).
        };
    };
    xhttp.send(); // Enviamos el llamado o solitud.
};

fetchData(`${API}/products`, function(error1,data1){
    if (error1) return console.error(error1);

    fetchData(`${API}/products/${data1[0].id}`, function (error2, data2){
        if (error2) return console.error(error2);

        fetchData(`${API}/categories/${data2?.category?.id}`, function(error3, data3){
            if (error3) return console.error(error3);
            
            console.log(data1[0]);
            console.log(data2.title);
            console.log(data3.name);
        });
    });
});

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
