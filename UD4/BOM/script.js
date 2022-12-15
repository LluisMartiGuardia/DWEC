const comprova = document.getElementById("apagaelmovil");
const missatge = document.getElementById("missatge");
const aqui = document.getElementById("aqui");

comprova.addEventListener("click", (e) => {
    missatge.innerHTML = "";
    let x = aqui.value;

    try {
        if(x == "") throw "Esta buit";
        if(isNaN(x)) throw "No es un numero"
        if(x<5) throw "No arriba";
        if(x>10) throw "Massa gros";
    
    } catch (error) {
        missatge.innerHTML = "Hi ha hagut un error: "+error;
    }
} ,false);