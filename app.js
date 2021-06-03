const {crearArchivo} = require("./helpers/multriplicar");
const argv = require("./config/yargs");
 require("colors");



crearArchivo(argv.b,argv.l,argv.h)
    .then(valor => console.log(valor.rainbow) )
    .catch(error => console.log(error) );
    