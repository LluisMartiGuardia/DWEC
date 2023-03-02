const equipo = document.getElementById("equipo");
const sugerencia = document.getElementById("sugerencia");

// Eventos
equipo.addEventListener("keyup", (e) => {
    let str = e.target.value;

    if(str.length == 0){
        sugerencia.innerHTML = "";
        return;
    }else{
        let xmlhttp = new XMLHttpRequest();

        xmlhttp.onreadystatechange = function() {
            if(e.target.readyState == 4 /*Peticion completada*/ && e.target.status == 200 /*Respuesta de peticion correcta*/) {
                sugerencia.innerHTML = e.target.responseText;
            }
        };
        xmlhttp.open("GET", )
    }
})