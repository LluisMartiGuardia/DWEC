let crear = document.getElementById("crear");
let mostrar = document.getElementById("mostrar");
let elimina = document.getElementById("eliminar");
let miLocalStorage = document.getElementById("miLocalStorage");


// Functions
// Crea les LocalStorage
function creaLocalStorage() {
    //Crear un local storage(clave:valor)
    localStorage.setItem("usuario", "Juan");
    localStorage.setItem("password", "1234");


}

// Mostra les LocalStorage
function mostrarLocalStorage(){
    //Buscamos la local storage por su clave usuario
    //miLocalStorage.innerHTML = localStorage.getItem("usuario");
    for (let index = 0; index < localStorage.length; index++) {
        
        //const element = localStorage.key(index);
        const element = localStorage.getItem(localStorage.key(index));
        miLocalStorage.innerHTML += element;

    }
}
// Elimina les LocalStorage
function eliminaLocalStorage() {
    localStorage.removeItem("usuario");
}

// Events
crear.addEventListener("click", creaLocalStorage, false);
mostrar.addEventListener("click", mostrarLocalStorage, false);
elimina.addEventListener("click", eliminaLocalStorage, false);


/* METODOS DE BORRADO DE LocalStorage

    1- Poner una fecha ya pasada
    
    2- Linea 21
    
*/