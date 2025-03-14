const fs = require ('fs');
const { resolve } = require('path');

//Mi solucion:
/* const crearArchivo = ( base = 5) => {

    console.log('====================================================');

    console.log('TABLA DEL', base);

    console.log('====================================================');


    let salida = '';
    for (let i = 1; i <= 10; i++) {
        salida += `${base} x ${i} = ${base * i} \n`;
    }

    console.log(salida)

    fs.writeFileSync(`tabla${base}.txt`, salida);

    console.log(`Archivo tabla${base}.txt creado con exito`);
}*/

/*const crearTablaMultiplicar = ( base = 5 ) => {
    console.log('====================================================');

    console.log('TABLA DEL', base);

    console.log('====================================================');


    let salida = '';
    for (let i = 1; i <= 10; i++) {
        salida += `${base} x ${i} = ${base * i} \n`;
    }

    console.log(salida)

    return salida;
}

const crearArchivo = (base) => {
    return new Promise((resolve, reject) => {
        try {
            const salida = crearTablaMultiplicar(base);
            fs.writeFileSync(`tabla${base}.txt`, salida);
            resolve(`tabla${base}.txt`);
        } catch (err) {
            reject(err);
        }
    });
}; */

//Solucion del instructor:

const crearArchivo = async( base = 5, listar = false, hasta = 10) => {

    try {
        /* console.log('====================================================');

        console.log('TABLA DEL', base);

        console.log('====================================================');
        */

        let salida = '==================================================== \n' + 
                      `TABLA DEL ${base} \n`+  
                     '==================================================== \n' 
        for (let i = 1; i <= hasta; i++) {
            salida += `${base} x ${i} = ${base * i} \n`;
        }

        if (listar) {
            console.log(salida)    
        }
    
        fs.writeFileSync(`./salida/tabla${base}.txt`, salida);

        return `tabla-${ base }.txt`;
    } catch (error) {
        throw error;
    }
}


module.exports = {
    crearArchivo
}