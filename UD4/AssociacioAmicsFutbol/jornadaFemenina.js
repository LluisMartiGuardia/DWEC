//Agafem les dades de la jornada masculina emmagatzemada al localstorage
let jf = localStorage.getItem("Jornada Femenina");
let jornadaFemenina=[jf.split(",")];
let resultats = [];

//Mentre hi hagi jornades, es van generant els resultats aleatoriament des de 0 fins a 4 i es mostren les jornades a la pagina
for(let i=0;i<jornadaFemenina[0].length;i++){
    document.getElementById("jornades").innerHTML += "<li>"+jornadaFemenina[0][i]+"</li><br>";
    resultats.push(Math.floor(Math.random() * 4)+" - "+Math.floor(Math.random() * 4));
    localStorage.setItem("resultatsFemeni", resultats);
}