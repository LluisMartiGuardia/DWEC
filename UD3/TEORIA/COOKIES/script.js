let crear = document.getElementById("crear");
let mostrar = document.getElementById("mostrar");
let elimina = document.getElementById("eliminar");
let misCookies = document.getElementById("misCookies");


// Functions
// Crea les cookies
function creaCookies() {
    let usuarioCookie = "Alejandro";
    document.cookie = "usuario="+encodeURIComponent(usuarioCookie);
    document.cookie = "color=Marron;expires=29 Oct 2022 12:00:00 GMT";
}

// Mostra les cookies
function mostrarCookies(){
    misCookies.innerHTML = document.cookie;
}

// Elimina les cookies
function eliminaCookies() {
    document.cookie = "usuario=; max-age=0";
}

// Events
crear.addEventListener("click", creaCookies, false);
mostrar.addEventListener("click", mostrarCookies, false);
elimina.addEventListener("click", eliminaCookies, false);


/* METODOS DE BORRADO DE COOKIES

    1- Poner una fecha ya pasada
    
    2- Linea 21
    
*/