const argv = require('yargs')
            .option('b', {
                alias: 'base',
                type: 'number',
                describe: "Es la base de la tabla de multiplicar",
                demandOption: true
            })
            .option('l', {
                alias: 'listar',
                type: 'boolean',
                default: false,
                describe: "Muestra la tabla en consola",
            })
            .option('h', {
                alias: 'hasta',
                type: 'number',
                default: 10,
                describe: "Establece hasta que número mostrar la tabla",
            })
            .check((argv, opions) => {
                if ( isNaN( argv.b ) ) {
                    throw 'El argumento --base debe ser un número'
                }
                return true;
            })
            .check((argv, opions) => {
                if ( isNaN( argv.h ) ) {
                    throw 'El argumento --hasta debe ser un número'
                }
                return true;
            })
            .argv;
module.exports = argv;