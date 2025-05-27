const fs = require('fs');

function promesaEsPar(numero){
    const miPrimerPromesa = new Promise(
        (resolve,reject)=>{
            if(numero % 2 === 0){
                resolve(numero); // RETURN
            }else{
                reject('No es par!'); // THROW
            }
        }
    );
    return miPrimerPromesa
}
function promesaElevarAlCuadrado(numero){
    return new Promise(res=>res(numero * numero));
}

promesaEsPar(4)
    .then( // continuo async
        (respuestaEsPar)=>{
            console.log('Es par', respuestaEsPar);
            return promesaElevarAlCuadrado(
                respuestaEsPar
            );
        }
    )
    .then( // try
        (respuestaElevarCuadrado)=>{
            console.log('Elevado: ', 
                respuestaElevarCuadrado);
        }
    )
    .catch( // catch
        (respuestaError)=>{
            console.log(respuestaError);
        }
    );

function leerArchivoPromesa(nombreArchivo){
    return new Promise(
        (res, rej)=>{
            fs.readFile(
                nombreArchivo, // PATH
                'utf-8', // CODIFICACIÓN
                (errorLectura, contenido) =>{ // Callbacks!
                    if(errorLectura){
                        rej(errorLectura);
                    }else{
                        res(contenido);
                    }
                }
            );
        }
    );
}

leerArchivoPromesa('./a.txt')
    .then(
        (contenidoArchivo)=>{
            console.log('Contenido:', contenidoArchivo);
        }
    ).catch(
        (error)=>{
            console.error('ERROR:', error);
        }
    )

/*  const correrLogicaPromesa2 = async ()=>{} //Lo mismo de abajo
    ASYNC AWAIT
    Reglas:
    1) Estamos dentro de una funcion nombrad, anonima o fat arrow
    2) Agregar la palabra 'ASYNC' antes de la declaracion de la funcion
    3) Agregar 'AWAIT' dentro de un bloque TRY CATCH antes de la promesa
 */    
async function correrLogicaPromesas(){
    try {
        const respuestaLeerArchivo = await leerArchivoPromesa('./a.txt');
        console.log('1) Respuesta archivo', respuestaLeerArchivo);
        const respuestaLeerArchivo2 = await leerArchivoPromesa('./a.txt');
        console.log('2) Respuesta archivo', respuestaLeerArchivo2);
        await leerArchivoPromesa('./a123.txt');
    } catch(error){
        console.log('3) ERROR', error);
    }
}
correrLogicaPromesas().then().catch(); // async await transforma a la funcion en una PROMESA

