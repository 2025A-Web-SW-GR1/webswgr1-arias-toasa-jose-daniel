const fs = require('fs');

fs.promises.readFile('../a.txt', 'utf-8')
    .then(
        (contenido)=>{
            console.log('Archivo leido con éxito');
            return fs.promises.writeFile('../a.txt', 
                contenido + new Date().toString());
        }
    )
    .then(()=>{
            console.log('Archivo escrito con éxito');
        }
    )
    .catch((error)=>{
            console.log('Ocurrio un error')
        }
    ); 