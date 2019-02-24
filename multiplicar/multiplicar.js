let fs = require('fs');
const colors = require('colors');
let data = '';

let crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {

        if (!Number(base) || (!Number(limite))) {
            reject('no es un numero');
            return;
        }

        for (let i = 1; i <= limite; i++) {
            data += (`${base} * ${i} = ${base * i} \n`);
        }


        fs.writeFile(`tablas/tabla_de_${base}_al_${limite}.txt`, data, (err) => {
            if (err) reject(err);
            else resolve(`el archivo tabla${base}-${limite} ha sido creado`);
        });
    });
};

let listarTabla = (base, limite) => {
    return new Promise((resolve, reject) => {
        if (!Number(base) || (!Number(limite))) {
            reject('no es un numero');
            return;
        }

        for (let i = 1; i <= limite; i++) {
            console.log(`${base} * ${i} = ${base * i} \n`.green);
        }
    });
};

//Agregamos al exports
module.exports =   {
    crearArchivo, //Se escribe asi gracias a ECS6  de lo contrario crearArchivo: crearArchivo
    listarTabla
};