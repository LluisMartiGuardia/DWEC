//Agafem les dades de la jornada masculina emmagatzemada al localstorage
let jm = localStorage.getItem("Jornada Masculina");
let resultats = [];
let jornadaMasculina=[jm.split(",")];

//Mentre hi hagi jornades, es van generant els resultats aleatoriament des de 0 fins a 4 i es mostren les jornades a la pagina
for(let i=0;i<jornadaMasculina[0].length;i++){
    document.getElementById("jornades").innerHTML += "<li>"+jornadaMasculina[0][i]+"</li><br>";
    resultats.push(Math.floor(Math.random() * 4)+" - "+Math.floor(Math.random() * 4));
    localStorage.setItem("ResultatsMasculi", resultats);
}