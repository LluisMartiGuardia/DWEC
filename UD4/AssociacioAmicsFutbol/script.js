function generarJornadaMasculina(){
    let jornada = ["Almería", "Athletic Club", "Atlético de Madrid", "FC Barcelona", "Real Betis",
        "Cádiz", "Celta de Vigo", "Elche", "Espanyol", "Getafe", "Girona", "Real Mallorca", "Osasuna",
        "Rayo Vallecano", "Real Madrid", "Real Sociedad", "Sevilla", "Valencia", "Valladolid", "Villarreal"];

    for(i=0;i<jornada.length;i++){
        document.getElementById("jornadesMasculines").innerHTML += jornada[i]+" - "+jornada[i+1]+"<br><br>";
        i+=1;
    };
}

function generarJornadaFemenina(){
    let jornada = ["Alavés", "Alhama", "Atlético Fem", "Barcelona Fem", "Tenerife",
        "Levante Fem", "Madrid CFF", "Betis Fem", "R. Madrid Fem", "R. Sociedad Fem", "Sevilla Fem",
        "Huelva Fem", "Valencia Fem", "Villarreal Fem"];

    for(i=0;i<jornada.length;i++){
        document.getElementById("jornadesFemenines").innerHTML += jornada[i]+" - "+jornada[i+1]+"<br><br>";
        i+=1; 
    };
}

generarJornadaMasculina();
generarJornadaFemenina();