//Evento para el boton jugar
const btnJugar = document.getElementById("jugar").addEventListener("click", juego, false);

//Variables necesarias para el juego
let resposta = "";
let nom;
const possiblesOpcions = ['piedra', 'papel', 'tijeras', 'lagarto', 'spock'];
let opcio;
let capturaOpcio = [];
let arrRespuestas;
let rondas = 5;
//Si esta variable es 0 quiere decir que no ha introducido aun ninguna palabra
let bool=0;
let posicio = [];
let puntosRU=0;
let puntosRM=0;

function buscaEleccion(){        
    //Reiniciamos el array siempre a cero para que no haya conflictos
    capturaOpcio = [];

    //bucle para encontrar las palabras escritas por el usuario
    for(i=0;i<arrRespuestas.length;i++){
        switch(arrRespuestas[i]){
            case "papel":
                mostraResultat();
                break;
            case "piedra":
                mostraResultat();
                break;
            case "tijeras":
                mostraResultat();
                break;
            case "lagarto":
                mostraResultat();
                break;
            case "spock":
                mostraResultat();
                break;

            //Al principi em funcionava be, pero despres al passar de l'ordinador de classe i despres al meu, va deixar de funcionar
            //I ara nomes funciona si li llevo l'accio que ha de fer quant no te cap paraula correcte.
            // default:
            //     console.log(arrRespuestas);
            //     console.log(capturaOpcio);
            //     alert("La palabra que has escrito no es correcta!");
            //     juego();
            //     break;
        };
    };

    bool=1;
};

function juego(){

    //Si bool esta a 0 quiere decir que aun no ha pedido ningun valor por pantalla por lo que ha de pedir primero el nombre y luego que empiece el juego
    if(bool==0){
        cogerNombre();
        juego();
        
    }else{
        //Aqui ya tiene el nombre del usuario, y puede empezar a pedir las frases al usuario
        let eleccio = prompt("Que opcion escoges?");
        eleccio.toString();
        eleccio.trim();
        eleccio.toLowerCase();
        //Metemos las palabras separadas por espacios en el array arrRespuestas para que sea mas facil encontrar la correcta
        arrRespuestas = eleccio.split(" ");
        
        //Llamamos a las demas funciones necesarias
        buscaEleccion();

        let eleccioMaquina = getRandomInt(0, possiblesOpcions.length);

        document.getElementById("contingut").innerHTML = "Has elegido "+capturaOpcio[0]+", y la maquina ha elegido "+eleccioMaquina;

        resultados(capturaOpcio[0], eleccioMaquina);    
    }
}

//Funcion para pedir el nombre al usuario
function cogerNombre(){
    let nom = prompt("Escribe tu nombre");
    document.getElementById("nom").innerHTML = "Bienvenido al juego " + nom;
    //Como ya ha pedido el nombre, declaramos esta variable a 1 para que empiece el juego
    bool=1;
}

//Funcion para obtener una palabra aleatoria que sera la que va a elegir la maquina
function getRandomInt(min, max){
    let calcul = Math.floor(Math.random()*(max-min))+min;
    return possiblesOpcions[calcul];
}

//Por ultimo una funcion que va a mostrar los resultados de la partida a por pantalla, si ha ganado la maquina, el usuario o ha habido empate
function resultados(ru, rm){


    let resultat;

    if((ru =="tijeras" && (rm == "papel" || rm == "lagarto")) ||
        (ru =="papel" && (rm == "piedra" || rm == "spock")) || 
        (ru =="piedra" && (rm == "lagarto" || rm == "tijeras")) || 
        (ru =="lagarto" && (rm == "spock" || rm == "papel")) || 
        (ru =="spock" && (rm == "tijeras" || rm == "piedra"))){
            puntosRU+=1;
            resultat = "Has ganado la ronda!!!";

    }else if((rm =="tijeras" && (ru == "papel" || ru == "lagarto")) ||
            (rm =="papel" && (ru == "piedra" || ru == "spock")) ||
            (rm =="piedra" && (ru == "lagarto" || ru == "tijeras")) ||
            (rm =="lagarto" && (ru == "spock" || ru == "papel")) ||
            (rm =="spock" && (ru == "tijeras" || ru == "piedra"))){
        puntosRM+=1;
        resultat = "Has perdido la ronda!!!";
    }
    else if((rm =="tijeras" &&  ru == "tijeras") ||
            (rm =="papel" && ru == "papel") ||
            (rm =="piedra" && ru == "piedra") ||
            (rm =="lagarto" && ru == "lagarto") ||
            (rm =="spock" && ru == "spock")){
        puntosRM+=0;
        puntosRU+=0;
        resultat = "Has empatado con la maquina!!!";
    }

    let final = resultat+" Resultado "+puntosRU+" - "+puntosRM;
    document.getElementById("puntuacio").innerHTML = final;
}

function mostraResultat(){
    console.log("ArrRespuestas: "+arrRespuestas[i]);
    console.log(arrRespuestas.indexOf(arrRespuestas[i]));
    capturaOpcio.push(arrRespuestas[i]);
    console.log("captura opcio: "+capturaOpcio);
}