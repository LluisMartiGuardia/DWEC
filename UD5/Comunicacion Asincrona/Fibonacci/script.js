// WEB WORKER
// Proceso de JS que se ejecuta en 2ndo plano

const botones = document.getElementsByTagName("button");

resultat = document.getElementById("resultat");

let w;

function startWebWorker() {
    // Si no es undefined, quiere decir que existe en el sistema
    if(typeof(Worker) !== "undefined"){
        // Si nuestro webwoeker es undefined, lo creamos
        if(typeof(w) == "undefined"){
            //Creamos un nuevo worker llamando a un documento JS
            w = new Worker("treballador.js");
        }

        w.onmessage = function(event){
            resultat.innerHTML = event.data;
        };

    }else{
        resultat.innerHTML = "Fallo al ejecutar el Worker!";
    };
}    
function stopWebWorker(){
    //Para que cuando acabe, vuelva a empezar del principio.
    w.terminate();
    w = undefined;
}

//Eventos
botones[0].addEventListener("click", ()=>{
    // console.log("b1");
    startWebWorker();
}, false);

botones[1].addEventListener("click", ()=>{
    // console.log("b2");
    stopWebWorker();
}, false);