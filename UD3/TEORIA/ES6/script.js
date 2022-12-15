const nombres = [];
// console.log(nombres);
nombres.push("Jander");

// console.log(nombres[0]);

//array.pop --> Quita el ultimo elemento del array
const ultimoNombre = nombres.pop();
// console.log(ultimoNombre);
// console.log(nombres);

// //NO SE PUEDE ASIGNAR ( = ) EN CONSTANTES
// const otrosNombre = [];
// otrosNombre = nombres;


//DESESTRUCTURACION
const personaje = ["Sam", "Gimli", "Frodo", "Legolas", "Pippin"];
const [leal, heroe, , , pillo] = personaje;

// console.log(personaje);
// console.log(leal);
// console.log(pillo);

const masPersonaje = {
    nombre : "Gandalf",
    apodo : "El gris",
    edad : 1024,
    armas : ["Glamdring", "Magia"]
}
const {nombre, apodo, armas} = masPersonaje;
// console.log(armas);

const [espada, poder] = armas;
// console.log(espada);


const nombrePersonaje = "Legolas";
const razaPersonaje = "Elfo";
const armasPersonaje = [
    {
        tipo : "Arco",
        cantidad : 1
    },
    {
        tipo : "flecha",
        cantidad : 10
    }
];

const requetePersonaje = {
    nombre : nombrePersonaje,
    raza : razaPersonaje,
    armas : armasPersonaje,
    edad : 123
};

// console.log(requetePersonaje);

const requetePersonaje2 = {
    nombrePersonaje,
    razaPersonaje,
    armasPersonaje,
    edad : 123
};

console.log(requetePersonaje2);
