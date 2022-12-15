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
// console.log(coche.propietario.nombre);
// console.log(coche["propietario"]["apellido"]);

//Creacion de objetos vacios
// let objetoVacio = {};
// console.log(objetoVacio);

//Comillas al usar caracteres no ascii, espacios en blanco, o caracteres especiales
let unCliente = {
    nombre: "Jander Clander",
    "direccion del cliente": "su casa",
    "+-+-+-+-+-+-+-+-": "wtf",
    pavos:{
        tipo: "visa",
        "numero de la tarjeta": "ES9419299239439439",
        "fecha de caducidad de la tarjeta": "nunca"
    }
};

// console.log(unCliente["direccion del cliente"]);




let estudiante =  {
    id: 2,
    nombre: "Pep",
    diHola: () => "gola"
};

estudiante.edad = 222;
estudiante.diAdios = () => "Adeu Bona tarda";


console.log(estudiante.nombre);
console.log(estudiante.diHola());
console.log(estudiante.edad);
console.log(estudiante.diAdios());


let factura = {
    descripcion: "Factura con comillas",
    precio: 100.000,
    iva: 21.00,
    subtotal: () => this.precio,
    total: function(){
        return this.precio + ((this.precio*this.iva)/100);
    }
};

console.log(factura);
console.log(factura.total());

//Funciones auxiliares
function muestraCamposYValores(miObjeto){
    for(campo in miObjeto){
        if(typeof(miObjeto[campo]) == 'object' ){
            muestraCamposYValores(miObjeto[campo]);
        }else{
            console.log(campo+ " : "+ miObjeto[campo]);
        }
    }
}

//muestraCamposYValores(unCliente);
//console.log(unCliente.pavos["fecha de caducidad de la tarjeta"]);