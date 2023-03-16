require('colors');
const fs = require('fs');
const crearArchivoTabla = async( base = 5, listar = false, hasta = 10) => {
    try {
        let salida = "", salidaEnriquecida = "";
        for (let i = 1; i <= hasta; i++) {
            salida += `${ base } x ${ i } = ${ base * i }\n` ;
            salidaEnriquecida += `${ base } ${ 'x'.green } ${ i } ${'='.red} ${ base * i }\n` ;
        }
        
        if ( listar ) {            
            console.log("===========================".bgBrightGreen);
            console.log(`       Tabla del: `.bold, base.toString().bold.red);
            console.log("===========================".bgBrightRed);
            console.log( salidaEnriquecida ) 
       } 
        const dirSalida = './salida/';
        const nombreArchivo = `tabla-${ base }.txt`; 
        fs.writeFileSync( dirSalida + nombreArchivo, salida );
        return nombreArchivo;
        
    } catch (error) {
        throw error;
    }
}

module.exports = {
    crearArchivoTabla
}