// Quant carrega la pagina comprova si hi ha les jornades fetes o no per cambiar les funcionalitats dels botons
window.onload = function(){
    if(localStorage.getItem("Jornada Masculina") && localStorage.getItem("Jornada Femenina")){
        document.getElementById("jornadaMasc").classList.remove("amagat");
        document.getElementById("jornadaFem").classList.remove("amagat");
        document.getElementById("travesses").classList.remove("amagat");
        document.getElementById("generarJornada").disabled=true;
    }else{
        document.getElementById("generarJornada").disabled=false;        
        document.getElementById("jornadaMasc").classList.add("amagat");
        document.getElementById("jornadaFem").classList.add("amagat");
        document.getElementById("travesses").classList.add("amagat");
    };

    if(!localStorage.getItem("ResultatsMasculi") || !localStorage.getItem("resultatsFemeni")){
        document.getElementById("travesses").disabled=true;
        console.log("Falta generar els resultats dels partits. Entra a cada jornada per fer-ho");
    }else{
        document.getElementById("travesses").disabled=false;
    }
}

//Afegir un event que escolti quant es fa click per cridar a la funcio "generar"
document.getElementById("generarJornada").addEventListener('click', generar, true);

let JM = [];
let JF = [];

//Aquesta funcio es per generar les jornades masculines i femenines
function generar(){
    //Jornada Masculina
    let jornadaMasc = ["Almería", "Athletic Club", "Atlético de Madrid", "FC Barcelona", "Real Betis",
    "Cádiz", "Celta de Vigo", "Elche", "Espanyol", "Getafe", "Girona", "Real Mallorca", "Osasuna",
    "Rayo Vallecano", "Real Madrid", "Real Sociedad", "Sevilla", "Valencia", "Valladolid", "Villarreal"];

    //Jornada femenina
    let jornadaFem= ["Alavés", "Alhama", "Atlético Fem", "Barcelona Fem", "Tenerife",
    "Levante Fem", "Madrid CFF", "Betis Fem", "R. Madrid Fem", "R. Sociedad Fem", "Sevilla Fem",
    "Huelva Fem", "Valencia Fem", "Villarreal Fem"];


    alert("Jornades generades correctament!");
    //Cridem a la funcio que cambia de posicio els valors de l'array
    let canviMasc = cambiarPosicioValorsArray(jornadaMasc);
    let canviFem = cambiarPosicioValorsArray(jornadaFem);
    //Guardem en un altre array l'array desordenat que se'ns ha creat 
    JM.push(generarJornades(canviMasc));
    //Guardem al localstorage la jornada masculina
    localStorage.setItem("Jornada Masculina", JM);
    //Guardem en un altre array l'array desordenat que se'ns ha creat 
    JF.push(generarJornades(canviFem));
    //Guardem al localstorage la jornada femenina
    localStorage.setItem("Jornada Femenina", JF);         
    document.getElementById("jornadaMasc").classList.remove("amagat");
    document.getElementById("jornadaFem").classList.remove("amagat");
    document.getElementById("travesses").classList.remove("amagat");
}



//Funció per colocar aleatoriament els valors de l'array
function cambiarPosicioValorsArray(array) {
    let longitutArray = array.length;
    let numeroRandom;
    let arrayAlternatiu = [];
    //comprovem que mentre hi hagi valors a l'array, es guardin de manera aleatoria en un array alternatiu
    while(longitutArray!=0){    
        numeroRandom = Math.floor(Math.random() * longitutArray);
        arrayAlternatiu.push(array[numeroRandom]);
        array.splice(numeroRandom, 1);
        longitutArray--;
    }

    return arrayAlternatiu;
};


// Funció per obtenir les jornades generades aleatoriament;
function generarJornades(array){
    let array1 = array.slice(0, array.length / 2);
    let array2 = array.slice(array.length / 2);
    let resultats = [];

    for(i=0;i<array1.length;i++){
        resultats.push(array1[i] +" - "+ array2[i]);    
        console.log(resultats[i]);
    }
    return resultats;
};

//Aço s'empra per agafar les dades de l'API
// $i=1;
// while($i<=10){
//     fetch("https://v3.football.api-sports.io/teams?id="+$i, {
//         "method": "GET",
//         "headers": {
//             "x-rapidapi-host": "v3.football.api-sports.io",
//             "x-rapidapi-key": "4d0c557cbf327919581a4fdd92211067"
//         }
//     })
//     .then((response) =>  {
//         return response.json();
//     })
//     .then((res) => {
//         // console.log(res['response'][0]['teams']['away']['name']);
//         console.log(res['response'][0]['team']['name']);
//         // document.getElementById("mostraDeApi").innerHTML += res['response'][$i]['teams']['away']['name'];
//         // console.log(res['response'][$i]['team']['name']);
//     })
//     .catch(err => {
//         console.log(err);
//     });
//     $i++;
// };