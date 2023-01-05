function sum(num1, num2){
    return num1 + num2;
}

function calc(num1, num2, callback){
    return callback(num1,num2);
};

console.log( calc(2, 2, sum));// No es necesario pasar la funcion como argumento con los parentesis
// 4

// --- SetTimeOut

setTimeout(function (){
    console.log("Hola Javascript");
}, 5000) // 5 segundos despues muestra el Hola Javascript

// -- Ejemplo de uso y Callback

function saludo (name) {
    console.log(`Hola ${name}`);
}

setTimeout(saludo, 2000, 'Oscar'); // se utiliza la funcion setTimeout para hacer uso de otra funcion (saludo), y recibir otros parametros :
// Hola oscar 