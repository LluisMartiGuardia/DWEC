// function mensaje()
// {
//     alert("Boquepasa");
// }
// mensaje();




var fecha = new Date();
var fechaCadena = fecha.toDateString();

console.log(fechaCadena);







// //SUMA
// function suma(a, b){

    

//     return a+b;
// }

// var c = suma(4,5);

// var textSuma = "La suma es " +c;

// console.log(textSuma);

let a;  
a= 10;

function suma(){
    c=20;
    var b= 5;
    
    return a+b;

}
console.log(suma());
console.log(c);

//RESTA
function resta(a, b){
    return a-b;

}
var d = resta(4,5);

var textResta = "La resta es " +d;

console.log(textResta);


//MULTIPLICACIO
function multiplicacio(a,b){
    return a*b;
}
var e = multiplicacio(4,5);
var textMultiplicacio = "EL valor de e sera ahora "+e;
console.log(textMultiplicacio);


//Divisio
function divisio(a,b){
    return a/b;
}
var f = divisio(4,5);
var textDivisio = "EL valor de e sera ahora "+f;
console.log(textDivisio);


var perro = {
    raza:"Labrador", peso:12, altura:58, color:"Beige"
}


console.log(perro);

//PERSONA, Nombre, edad, altura.
var persona =  
{
    nombre: "Alfredo",
    edad: 40,
    altura: 173,
    saludar:function(){ return "hola" },
    peso:304
};

var textoPersona = "El usuario "+persona.nombre+" tiene "+persona.edad+" ,mide "+persona.altura+" y te dice "+persona.saludar();

persona.despedir = function(){
    return "adeu";
}

console.log(textoPersona);
console.log(persona.saludar());
console.log(persona.despedir());

persona.devuelvePeso = function(){
    return this.peso
}

console.log(persona.devuelvePeso());
