// Declaracion de la funcion generadora

function* gen() {
    yield 1;
    yield 2;
    yield 3;
}

// se almacena en una variable el llamado de la funcion

const  g = gen();
console.log(g.next().value); // El metodo next nos permite continuar con el siguiente valor que nos ofrece la funcion generadora 

// 1
// 2
// 3

// Ejemplo 2 con un Ciclo FOR y donde recibimos un array

function*  iterate(array) {
    for(let value of array){
        yield value 
    }
    
}

const it = iterate (['oscar','omar','ana','lucia','juan']);

console.log(it.next());

// oscar

console.log(it.next());

// omar

console.log(it.next());

// ana




