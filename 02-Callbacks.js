// CALL BACKS : Es una funcion que recibe como argumento en otra funcion. Ejemplo :


// Esto seria una funcion normal, como ya conocemos :

function FuncionqueRecibeOtraFuncion (nombre,callbackParametro){
    // pero en ves de recibir un string como parametro podemos establecer una funcion como parametro.Esto se le conoce como callback por lo que podemos utilizar este nombre mas sin embargo puede ser cualquier otro.
    callbackParametro(); // aqui ejecutamos esa funcion que vamos a recibir como argumento.
    console.log("Hola ", nombre);
}

// la siguiente funcion es la que vamos a dar como argumento a nuesta funcion mensaje y que recibe como parametro una funcion callback, la vamos a llamar callbackargumento

function callbackArgumento (){
    console.log ("Yo soy un Callback");
}

FuncionqueRecibeOtraFuncion ("luis",callbackArgumento); // Yo soy un Callback  - Hola luis

// ENTONCES, CUANDO SE NECESITA UN CALLBACK 

/*function function1(){
    console.log("mensaje 1");
}

function function2(){
    console.log("mensaje 2");
}

function1();
function2(); // Mensaje 1 - Mensaje 2/*

// Pero que pasa si utilizamos la funcion setTimeOut para simular la peticion de datos a un servidor y que esto no afecte el orden de mensaje 1 y mensaje 2*/

/* function function1(){ 
    setTimeout(function(){
        console.log("mensaje 1");
    }, 2000);
}

function function2(){
    console.log("mensaje 2");
}

function1();
function2(); // de esta manera va a mostrar primero mensaje 2  y luego mensaje 2/*

// Para evitar eso vamos a pasar Function2 como argumento de Function1, y a si no afectar el orden de nuestros mensajes */

function function1 (funcioncomoParametro){
    setTimeout(function(){
        console.log("mensaje 1");
        funcioncomoParametro(); // Hasta que no se ejecute nuestra funcion del mensaje 1 no muestra el mensaje 2.
    }, 2000);
}

function function2(){
    console.log("mensaje 2");
}

function1(function2); // Mensaje 1 - Mensaje 2


