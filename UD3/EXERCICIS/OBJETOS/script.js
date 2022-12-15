//DECLARACION DE OBJETOS EN JS  
//MANERA 1
let coche = {
    marca: "Ford",
    modelo: "Mustang",
    color: "Rojo",
    puertas: 3,
    kms: 270000,
    automatico: false,
    propietario: {
        nombre: "Joan",
        apellido: "Melsion"
    }
};

//MANERA 2 
let coche2 = new Object();
coche2.marca = "Ferrari";
coche2.modelo = "LaFerrari";
coche2.color = "Rojo";
coche2.puertas = 2;
coche2.kms = 5;
coche2.automatico = false;

//FOREACH
//nombreObjeto[valorAAcceder] --> Se obtiene el valor de un objeto
for(campo in coche){
    console.log(campo + " : " + coche[campo]);
  //console.log(clave + " : " + valor);
}

//MANERAS DE ACCEDER A UN OBJETO
console.log(coche.propietario.nombre);
console.log(coche["propietario"]["apellido"]);

