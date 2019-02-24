const argv = require('./config/yargs').argv;
const colors = require('colors');
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');


//obtenemos los comandos que recibimos desde la consola
let comando = argv._[0] // si hacemos console log de argv vemos que los comandos estan dentro de un arreglo []

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite).catch(err => {
            console.log(err);
        })
        break;
    case 'crear':
        //mandamos llamar nuestra funcion
        crearArchivo(argv.base, argv.limite).then(archivo => {
            console.log(`archivo creado: ${archivo}`);
        }).catch(err => {
            console.log(err);
        });
        break;
    default:
        console.log('conmando no reconocido');
        break;
}