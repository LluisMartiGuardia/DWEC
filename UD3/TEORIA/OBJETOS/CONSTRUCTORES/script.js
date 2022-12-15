function coche(marca, modelo, color, kms, combustible){
    this.marca = marca;
    this.modelo = modelo;
    this.color = color;
    this.kms = kms;
    this.combustible = combustible;
}


let miCoche = new coche("Ferrari", "LaFerrari", "Rojo", 1, "Gasolina");

let tuCoche = new coche("Ford", "Mustang", "Negro", 10000, "Gasolina");

//Apunta a otra variable
let otroCoche = miCoche;

miCoche.color = "Rosa";

//Pierde su valor y apunta a otro objeto
tuCoche = miCoche;

console.log(miCoche);
console.log(tuCoche);
console.log(otroCoche);

