const deadpool = {
    nombre: 'Wade',
    apellido: 'Winston',
    poder: 'Regeneración',
    // edad: 50,
    getNombre() {
        return `${this.nombre} ${this.apellido} ${this.poder}`;
    }
}

//console.log(deadpool.getNombre());


//nst nombre = deadpool.nombre;
//nst apellido = deadpool.apellido;
//nst poder = deadpool.poder;

function imprimeHeroe ( { nombre, apellido, poder, edad = 0 }) {
    // const { } = heroe
    nombre = 'fernando'
    console.log(nombre, apellido, poder, edad);
}

//imprimeHeroe(deadpool);


const heroes = ['Deadpool', 'Superman', 'Batman'];

//const h1 = heroes[0];
//const h2 = heroes[1];
//const h3 = heroes[2];

const [ , , h3] = heroes;

console.log( h3);