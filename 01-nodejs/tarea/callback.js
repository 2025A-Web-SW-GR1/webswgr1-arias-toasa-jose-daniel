const fs = require('fs');

fs.readFile('../a.txt', 'utf-8', (errorLectura, contenido) => {
    if (errorLectura) {
        console.log('Error lectura');
    } else {
        console.log('Archivo leido con éxito');
        const contenidoNuevo = contenido + new Date().toString();
        fs.writeFile('../a.txt', contenidoNuevo, (errorEscritura) => {
            if (errorEscritura) {
                console.log('Error escritura');
            } else {
                console.log('Archivo escrito con éxito');
            }
        });
    }
});

