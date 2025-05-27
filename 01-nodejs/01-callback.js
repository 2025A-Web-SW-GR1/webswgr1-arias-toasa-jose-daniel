const fs = require('fs'); // IMPORTAR LRIBERIA 
console.log("Primero");
fs.readFile(
    './a.txt', // PATH
    'utf-8', // CODIFICACIÓN
    (errorLectura, contenido) =>{ // Callbacks!
        if(errorLectura){
            console.log('Error lectura 1');
        }else{
            console.log('TERCERO', contenido);
        }
    }
);

fs.writeFile(
    './a.txt', // PATH
    'Hola Mundo!!' + new Date().toString(), // nuevo contenido
    (errorEscritura) =>{ // Callbacks!
        if(errorEscritura){
            console.log('Error escritura');
        }else{
            console.log('Archivo escrito');
        }
    }
);

console.log('Segundo');