let jm = localStorage.getItem("Jornada Masculina");
let jf = localStorage.getItem("Jornada Femenina");
let resultats = [];
let jornadaMasculina=[jm.split(",")];
let jornadaFemenina=[jf.split(",")];
let j1 = [];
let j2 = [];
let rf1 = localStorage.getItem("resultatsFemeni");
let rf2 = [rf1.split(",")];
let rf3 = [];
let rm1 = localStorage.getItem("ResultatsMasculi");
let rm2 = [rm1.split(",")];
let rm3 = [];

//En aquests bucles separem cada jornada per els guions per poder afegirlos a les opcions dels selects
for(let i=0;i<jornadaMasculina[0].length;i++){
    j1.push(jornadaMasculina[0][i].split(" - "));
}
for(let i=0;i<jornadaFemenina[0].length;i++){
    j2.push(jornadaFemenina[0][i].split(" - "));
}

//Bucle per mostrar per pantalla totes les jornades masculines i les seves valoracions dins de la taula
for(let i=0;i<jornadaMasculina[0].length;i++){
    document.getElementById("afegirContingut").innerHTML += '<tr><th class="idTable">'+(i+1)+'</th>'+
                                                            '<th>'+jornadaMasculina[0][i]+'</th>'+
                                                            '<th>'+
                                                                '<form>'+
                                                                    '<select class="selects" id="q'+i+'">'+
                                                                        '<option value="1">'+j1[i][0]+'</option>'+
                                                                        '<option value="X">Empate</option>'+
                                                                        '<option value="2">'+j1[i][1]+'</option>'+
                                                                    '</select>'+
                                                                '</form>'+
                                                            '</th>'+
                                                            '<th id="r'+(i+1)+'"></th></tr>';
}

//Bucle per mostrar per pantalla totes les jornades femenines i les seves valoracions dins de la taula
for(let i=3;i<jornadaFemenina[0].length;i++){
    document.getElementById("afegirContingut").innerHTML += '<tr><th class="idTable">'+(i+8)+'</th>'+
                                                            '<th>'+jornadaFemenina[0][i]+'</th>'+
                                                            '<th>'+
                                                                '<form>'+
                                                                    '<select class="selects" id="q'+(i+8)+'">'+
                                                                        '<option value="1">'+j2[i][0]+'</option>'+
                                                                        '<option value="X">Empate</option>'+
                                                                        '<option value="2">'+j2[i][1]+'</option>'+
                                                                    '</select>'+
                                                                '</form>'+
                                                            '</th>'+
                                                            '<th id="r'+(i+8)+'"></th></tr>';
}

//Guardem tots els resultats de la quiniela(1, X, 2) en un array per poder tratarlos mes tard
function mostrar(){
    let quiniela = [];
    for(let i=0;i<10;i++){
        quiniela.push(document.getElementById("q"+i).value); 
    }
    for(let i=11;i<15;i++){  
        quiniela.push(document.getElementById("q"+i).value); 
    }
    console.log(quiniela);
    return quiniela;
};


//Separem els dos arrays dels resultats pels guions
for(let i=0;i<rf2[0].length;i++){
    rf3.push(rf2[0][i].split(" - "));
};

for(let i=0;i<rm2[0].length;i++){
    rm3.push(rm2[0][i].split(" - "));
};


//Convertim els resultats de la jornada en 1, X o 2
function convertirResultatAValor(array){
    for(let i=0;i<array.length;i++){
        if(array[i][0] > array[i][1]){
            resultats.push("1");
        }
        else if(array[i][0] == array[i][1]){
            resultats.push("X");
        }
        else if(array[i][0] < array[i][1]){
            resultats.push("2");
        };
    }   
    return resultats; 
};

//Sobreescrivim la variable perque guardi tant els resultats masculins com els femenins
let arrayResultat = convertirResultatAValor(rm3);
arrayResultat = convertirResultatAValor(rf3);

//Llevem 3 valors als resultats, de les jornades femenines. D'aquesta manera tenim 10 jornades masculines, i 4 femenines
arrayResultat.splice(14, 3);
console.log(arrayResultat);

//Aquesta funcio escriura en la taula els resultats de les jornades, i marcara en blau els acerts.
function mostrarAcerts(){
    let contador = 0;
    let quiniela = mostrar();
    // alert("Els acerts es mostren al final de la página");
    //Mostrem en la taula els resultats de les jornades
    for(let i=0;i<arrayResultat.length;i++){
        document.getElementById("r"+(i+1)).innerHTML = arrayResultat[i];
        //Si has acertat en la quiniela, augmenta a un el contador per poder mostrar el missatge mes tard
        //A més, si has acertat en la quiniela es posara el resultat de la jornada de color verd
        if(arrayResultat[i] === quiniela[i]){
            contador += 1;
            document.getElementById("r"+(i+1)).classList.add("resultatCorrecte");
        }else{
            document.getElementById("r"+(i+1)).classList.remove("resultatCorrecte");
        };
    }
    //Finalment mostrem un missatge que mostra quants acerts hi ha hagut
    document.getElementById("encerts").innerHTML = "Has encertat "+contador+" caselles";
};

//Cridem als metodes mostrear, i mostrarAcerts
document.getElementById("confirmarQuiniela").addEventListener("click", mostrar, true);
document.getElementById("confirmarQuiniela").addEventListener("click", mostrarAcerts, true);