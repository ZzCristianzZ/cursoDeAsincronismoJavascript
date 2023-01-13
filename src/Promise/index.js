// PROMESAS : Es usado para computaciones asincronicas.Una promesa representa un valor que puede estar disponible ahora, en el futuru o nunca.

// Una promesa tiene 3 estados, Pendiente : Cuando se esta ejecutando, Cumplido : Ha regresado la informacion deseada, o rechazado .

//Las promesas se crean con la palabra reservada <promise>, y en ella vienen otras dos funciones que son (resolve, reject)

const promise = new Promise(function (resolve, reject){
   resolve('Hey!!')   
});

// vamos a crear una bueva promesa que nos ayudara a entender mejor el tema, tambien asi mismo vamos a utilizar el catch y el then

// Creamos la variable que nos va a decir el numero de vacas que tenemos y si podemos contarlas y segun el caso del numero de vacas podemos ver si podemos ordeñar y cumplir con un standar de litros de leche que necesitaremos o si de plano no podemos cumplir con la demanda 

const cows = 9 ;

const countCows = new Promise(function(resolve, reject){
    //Si tenemos 15 vacas podemos tener  el acumulado de leche para la demanda 
    if (cows > 10 ) {
        resolve ('We have '+ cows + ' cows on the farm');
    }else{
        reject ("There is no cows on the farm")
    }
});// se llama a ejecutar la funcion pero como en teoria no sabemos si hay o no las suficientes vacas, ejecutamos la funcion que nos muestre despues de analizar, en la variable result.
countCows.then((result) => {
    console.log(result)
})// Ya que cambiamos el numero de vacas y no se va cumplir el numero de vacas para la demanda entonces utilizamos un catch
.catch((error) => {
    console.log(error);
} )// tenemos el otro estado que es finaly (cuando ya termino)
.finally(()=> console.log('Finally'));

