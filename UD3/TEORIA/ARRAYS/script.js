let datos = [13, -5, -9, 1, 8, 2, 10, -2];

//filter --> Devuelve un array con elementos que pasen un test

function natural(dato){
    //Devuelve un boolean
    return dato<=5;
}

console.log(datos.filter(natural));


//INCLUDES() --> Comprueba si un array incluye un determinado elemento
console.log(datos.includes(8));


//FIND() --> Devuelve el primer elemento que pasa el test
console.log(datos.find(natural));


//INDEXOF --> Busca la posicion de un elemento
console.log(datos.indexOf(11));

//LASTINDEXOF --> Busca la posicion de la ultima coincidencia del numero
console.log(datos.lastIndexOf(13));

//POP--> Elimina el elemento de la ultima posicion del array pero lo podemos guardar en un array
let ultimo = datos.pop();
console.log(ultimo);
console.log(datos);

//foreach() --> Llama a una funcion para cada elemento del array
let dias = ["lunes", "martes", "miercoles", "jueves", "viernes", "sabado", "donmingo"];
let texto = document.getElementById("texto");

function miTexto(item, index){
    texto.innerHTML += "index[" + index + "]: " + item + "<br>";
}
dias.forEach(miTexto);


//PUSH --> Añade un nuevo elemento al array
let insertar = datos.push(87);
console.log(datos);

// let datos2 = [100, 200, 300];
// datos.push(...datos2);
console.log(datos);
// console.log("insertar: "+insertar);

//SHIFT --> Quita el primer elemento
let primero = datos.shift();
console.log(datos);
console.log(primero);

//slice() --> Coge todos los elementos desde la posicion indicada
let datos2 = datos.slice(1, 2);
console.log(datos);
console.log(datos2);

//sort() --> devuelve un array  ordenado
console.log(datos.sort(function(a, b){return a - b}));