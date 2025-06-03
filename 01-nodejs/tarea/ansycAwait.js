const fs = require('fs');

 async function leerYEscribirArchivo() {
    try {
        const contenido = await fs.promises.readFile('../a.txt', 'utf-8');
        console.log('Archivo leido con éxito');
        await fs.promises.writeFile('../a.txt', 
            contenido + new Date().toString());
        console.log('Archivo escrito con éxito');
    } catch(error) {
        console.log('Ocurrio un error')
    }
}

leerYEscribirArchivo(); 