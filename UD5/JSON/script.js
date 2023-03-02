import jsonFile from './json.json' assert { type : 'json' };
//Se escribe como en JS
//Los datos aparecen en formato nombre-valor
//Los diferentes datos se separan por coma
//Las llaves separan JSobjetos

//VENTAJAS
//No necesita ningun documento mas que sobrecargue la informacion
//Se puede interpretar en diferentes lenguajes
//Mas rapido de leer y escribir
//Se pueden utilizar arrays

//SIMILITUDES JSON Y XML
//Mas legibles
//Jerarquicos
//Interpretables por diferentes leguajes de programacion
//Se puede obtener por HTMLRequest


// const text = '[{"nom":"Pere", "ciutat":"Mao"}, {"nom":"Joan", "ciutat":"Alaior"}, {"nom":"Adria", "ciutat":"Ciutadella"}, {"nom":"Ana", "ciutat":"Es castell"}]';
// const JSobj = JSON.parse(text);
const exemple = document.getElementById("exemple");
for(var i=0;i<jsonFile.persona.length;i++){
    exemple.innerHTML += jsonFile.persona[i].nom + "<br>" + jsonFile.persona[i].ciutat+"<br><br>";
}