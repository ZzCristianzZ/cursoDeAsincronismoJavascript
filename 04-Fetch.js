// FETCH : Que hace parte de las APIs, que te permite hacer peticiones a diferentes Url, con diferentes acciones, por defecto la accion mas comun es GET.Tambien puedes pasar dentro de su sintaxis filtros para obtener mas en especifico la informacion que necesitas

// Vamos a utilizar la misma api de starwars del ejercicio de XMLHttpRequest.js

fetch("https://swapi.dev/api/people/")
      
    // El fetch trabaja con promesas y para eso utilizamos el <then>,que significa = despues

    .then(respuesta => respuesta.json()) //varios Datos del servidor pero que el estado del la respuesta es 200
    // Solo lo transformamos a formato Json y nuevamente nos da un promesa por lo que utilizamos nuevamente el then
    
    .then(response => {
        console.log(response)
    })


    // Imagen video - explicacion 

// El fecth puedes filtrar y dirigirte a los datos que deseas especificamente sin embargo existen unas Apis que te permiten el acceso a ciertos sectores en especificos y otros sectores no, por lo que en este caso debemos establecer unas cabeceras o <headers> nos guian a los sectores permitidos.    