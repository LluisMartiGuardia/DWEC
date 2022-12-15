/*RegExp --> /Patro/modificadors */
//Busca en una cadena esa expresion, y que con la i no sea casesensitive;
let patro = /dwec/i;

let cadena = "hodwresRC la requetedwec boquepasa DWEC y que tal i talDWeC";
let posicio = cadena.search(patro);

/* PATRONES */
//\w --> devuelve un array
//\d --> devuelve solo los numeros
//\W --> Devuelve simbolos
//\S --> Devuelve todo lo de la cadena menos los espacios
//r+ --> Devuelve todas las R en formato array
//\d{x}/ --> Digitos que tengan x pares
//\d{x,y} --> Devuelve digitos que tengan x o y digitos
/* MODIFICADORES */
//g  --> Los caracteres pueden ser encontrados varias veces
//i --> No es casesensitive

// cadena = "lmarti18333@iesjoanramis.org";
// patro =/\w/g;
// patro =/\d/g;
// patro =/\W/g;
// patro =/\S/g;
// patro = /r+/gi;

// cadena = "cada 10 o 100 o cada 1000 vegades";

// patro = /\d{2,3}/g;

let re = new RegExp(/hodwres/, 'gi');
let resultat = cadena.match(patro);
console.log(resultat);
console.log("Regexp: "+re.exec(cadena));
