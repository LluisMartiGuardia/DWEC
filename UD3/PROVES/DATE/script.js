

    //setTimeout(funcion_a_llamar, milisegundos) --> Ejecutara la funcion "funcion_a_llamar" despues de que pasen los "milisegundos"

    //setInterval(funcion_a_llamar, milisegundos) --> la funcion "funcion_a_llamar" se va a llamar vez tras vez de los "milisegundos" que se le indican

    //clearInterval() --> Para la ejecucion de setInterval(funcion_setInterval)

    //clearTimeout() --> Para la ejecucion iniciada con setTimeout().



function crono(){

    let elCrono;
    let laMevaData = new Date();
    let horas = laMevaData.getHours();
    let minutos = laMevaData.getMinutes();
    let segundos = laMevaData.getSeconds();
    let coletilla = "";
    let ampm = '';

    // QUE NO SAQUE 20:00 SINO 08:00 AM/P
    if(horas>12){
        horas -=12;
        ampm = 'pm';
    }else{
        ampm = 'am';
    }

    if(horas < 10){ horas = '0'+horas; }
    if(minutos < 10){ minutos = '0'+minutos; }
    if(segundos < 10){ segundos = '0'+segundos; } 

    let text = document.getElementById('hora');

    text.innerHTML = horas + ':' + minutos + ':' + segundos + ampm;

}

let elCrono;
window.onload = function() {
    elCrono = setInterval(crono, 1000);
}