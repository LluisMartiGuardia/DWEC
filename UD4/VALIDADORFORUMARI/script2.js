const form = document.getElementById("form");
const nomusuari = document.getElementById("nomusuari");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");


//Functions
function mostraError(input, missatge){
    const formcontrol = input.parentElement;
    formcontrol.className = "form-control error";
    const label = formcontrol.querySelector("label");
    const small = formcontrol.querySelector("small");
    small.innerText = label.innerText + ' ' + missatge;
}

function mostraCorrecte(input){
    const formcontrol = input.parentElement;
    formcontrol.className = "form-control correcto";
}

function esEmailValid(email){
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    //test --> Boolean
    return re.test(String(email).toLocaleLowerCase());
}


//EventListeners
form.addEventListener("submit", function(e) {
    //Evita que realice el evento por defecto que tenga.
    e.preventDefault();

    if(nomusuari.value === ""){
        mostraError(nomusuari, "és obligatori");
    }else{
        mostraCorrecte(nomusuari);
    }

    if(email.value === ""){
        mostraError(email, "és obligatori");
    }else if(!esEmailValid(email.value)){
        mostraError(email, "no es valid");
    }else{
        mostraCorrecte(email);
    }

    if(password.value === ""){
        mostraError(password, "és obligatori");
    }else{
        mostraCorrecte(password);
    }

    if(password2.value === ""){
        mostraError(password2, "és obligatori");
    }else{
        mostraCorrecte(password2);
    }

    
}, false);
