// los requires siempre van al inicio
// esta libreria es el file system
//let fs = require('fs'); // este require es de una libreria propia de node y solo hay que definirla y nada mas
// hay tres tipos de requires
// let fs = require('express'); esto es un paquete que se instala, paquetes no nativos de node
// let fs = require('./fs'); requires de archivos que nosotros definimos en el proyecto


// el modulo es un objeto global que esta disponible a lo largo de toda la aplicacion
// en el exports del modulo podemos agregar todos los objetos que queramos utilizar de forma global

//requerimos de nuestro archivo multiplicar para usar su funcion
// usamos {} para indicar que solo requerimos de esa funcion y no todo el archivo esto gracias a la destructuracion
// const multiplicar = require('./multiplicar/multiplicar');
const opts = {
    base: {
        demand: true, //indicamos que sea un flag obligatorio
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10 //indicamos un valor default en caso de que no se reciba un valor
    }
}
const argv = require('yargs').command('listar', 'Este comando lista la tabla en consola', opts)
    .command('crear', 'Este comando crea un archivo txt con la tabla indicada', opts).argv;

//Exportamos nuestro objeto para poder usarlo
module.exports = {
    argv
};