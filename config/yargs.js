const yargs = require('yargs');

const argv = require('yargs/yargs')(process.argv.slice(2))
    .option('b',{
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'valor numerico que sera la tabla de multiplicar creada'
    })
    .option('l',{
        alias: 'listar',
        type: 'boolean',
        demandOption:false,
        describe: 'Muestra el resultado en consola',
        default: false,
    })
    .option('h',{
        alias: 'hasta',
        type: 'number',
        demandOption:false,
        describe: 'Limite de tabla de multiplicar',
        default: 10,
    })
    .check((argv, options) => {
        if(isNaN(argv.b)){
            throw ("La base tiene que ser un número")  
        }
         else {
            return true // tell Yargs that the arguments passed the check
          }
    })
    .argv;

    module.exports = argv;