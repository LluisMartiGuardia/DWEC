
let btnStart = document.getElementById('start');
let btnStop = document.getElementById('stop');
let btnReset = document.getElementById('reset');
let btnLap = document.getElementById('lap');
let display = document.getElementById('display');
let vueltas = document.getElementById('vueltas');

let elCrono;
let laMevaData = new Date();


laMevaData.setHours(0,0,0,0);
display.innerHTML = "00:00:00:00";



function crono(){

    let horas = laMevaData.getHours();
    let minutos = laMevaData.getMinutes();
    let segundos = laMevaData.getSeconds();
    let milisegundos = laMevaData.getMilliseconds();
    
    milisegundos +=1;


    
    if(milisegundos == 60){
        milisegundos = 0;
        segundos+=1;
        laMevaData.setSeconds(segundos);
    }



    if(segundos == 60){
        segundos = 0;
        minutos+=1;
        laMevaData.setMinutes(minutos);
    }



    if(horas < 10){ horas = '0'+horas; }
    if(minutos < 10){ minutos = '0'+minutos; }
    if(segundos < 10){ segundos = '0'+segundos; } 

    laMevaData.setMilliseconds(milisegundos);

    

    display.innerHTML = horas + ':' + minutos + ':' + segundos + ':' + milisegundos;

}

function start() { 
    elCrono = setInterval(crono, 100000); 
    btnStart.disabled = true;
    btnStop.disabled = false;
    btnReset.disabled = true;
    btnLap.disabled = false;
}

function parar(){
    clearInterval(elCrono);
    btnStop.disabled = true;
    btnStart.disabled = false;
    btnReset.disabled = false;
    btnStart.innerHTML = "CONTINUE";
    btnLap.disabled = true;

}

function reset(){
    laMevaData.setHours(0,0,0,0);
    display.innerHTML = "00:00:00";
    btnStart.disabled = false;
    btnReset.disabled = true;
    btnStop.disabled = true;
    btnStart.innerHTML = "START";
    vueltas.innerHTML = "";
    btnLap.disabled = true;
}



function lap(){

    vueltas.innerHTML += laMevaData.getHours() +":"+
                        laMevaData.getMinutes()+":"+
                        laMevaData.getSeconds()+"<br>";
                        
}


//EVENTS
btnStart.addEventListener('click', start, false);
btnStop.addEventListener('click', parar, false);
btnReset.addEventListener('click', reset, false);
btnLap.addEventListener('click', lap, false);





//CUENTA ATRAS(00:00:00:00)
//TIENES QUE INTENTAR PARAR LA CUENTA ATRAS EN UN TIEMPO QUE TENGA 00 MILISEGUNDOS
//SI LO HAS CLAVADO, QUE TE MUESTRE REDONDO, SINO QUE TE MUESTRE A CUANTOS MILISEGUNDOS TE HAS QUEDADO.