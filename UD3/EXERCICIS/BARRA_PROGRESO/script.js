
let btnStart = document.getElementById('start');
let display = document.getElementById('display');
let vueltas = document.getElementById('vueltas');

let elCrono;
let laMevaData = new Date();


laMevaData.setHours(0,0,0,0);
display.innerHTML = "00:00:00";



function crono(){

    let horas = laMevaData.getHours();
    let minutos = laMevaData.getMinutes();
    let segundos = laMevaData.getSeconds();
    
    segundos +=1;

    if(segundos == 60){
        segundos = 0;
        minutos+=1;
        laMevaData.setMinutes(minutos);
    }



    if(horas < 10){ horas = '0'+horas; }
    if(minutos < 10){ minutos = '0'+minutos; }
    if(segundos < 10){ segundos = '0'+segundos; } 

    laMevaData.setSeconds(segundos);

    if(segundos == 10){
        document.getElementById("seients").style.backgroundColor = black;
    } 

    display.innerHTML = horas + ':' + minutos + ':' + segundos;
}

function start() { 
    elCrono = setInterval(crono, 1000); 
    btnStart.disabled = true;
    btnStop.disabled = false;
    btnReset.disabled = true;
    btnLap.disabled = false;
}



function lap(){

    vueltas.innerHTML += laMevaData.getHours() +":"+
                        laMevaData.getMinutes()+":"+
                        laMevaData.getSeconds()+"<br>";
                        
}


//EVENTS
btnStart.addEventListener('click', start, false);






//Cronometro que guarde lo que ha tardado la partida

//10 segundos para poner la palabra. Sino quita un intento de los 7