const contenidor = document.querySelector('.contenidor');
const seients = document.querySelectorAll('.fila .seient:not(.ocupat)');
const contador = document.getElementById('contador');
const total = document.getElementById('total');
const peliculaSelect = document.getElementById('pelicula');
let preuDelTicket = +peliculaSelect.value;

ompleUI();

//Actualitza els totals
function actualitzaSeleccioSeients(){
    const seientsSeleccionats = document.querySelectorAll('.fila .seient.seleccionat');

    //[...nombreArray] --> Añade los elementos de un array a otr de uno en uno al final de la coleccion 
    //MAP --> Como un foreach que al final devuelve un array
    //MAP --> Tiene una funcion como parametro que es item

    // const seientsIndex = [...seientsSeleccionats].map(function(seient){
    //     //Ordenar los asientos
    //     //Coger los indices de los asientos seleccionados para volver a marcar los asientos
    //     return [...seients].indexOf(seient);
    // });

    //Pasar de nodelist a array mapeandolo
    const seientsIndex = [...seientsSeleccionats].map((seient) =>  [...seients].indexOf(seient));


    localStorage.setItem('seientsSeleccionats', JSON.stringify(seientsIndex));


    //Guardem la longitut del query dins una constant
    const contadorSeientsSeleccionats = seientsSeleccionats.length;

    contador.innerText = contadorSeientsSeleccionats;

    total.innerText = contadorSeientsSeleccionats * preuDelTicket;
}

//Guarda a local storage l'index i el preu de la pelicula seleccionada
function guardaInfoPelicula(indexPelicula, preuPelicula){

    localStorage.setItem('indexPeliculaSeleccionada', indexPelicula);
    localStorage.setItem('preuPeliculaSeleccionada', preuPelicula);
    
}


//Recupera info del local storage i omple UI
function ompleUI(){
    //Devuelve el formato como un array
    const seientsSeleccionats = JSON.parse(localStorage.getItem('seientsSeleccionats'));

    //Guarda los asientos seleccionados
    if(seientsSeleccionats !== null && seientsSeleccionats.length > 0){
        seients.forEach((seient, index) => {
            // console.log("Seient: "+seient);
            // console.log("Index: "+index);

            //BUSCAR ASIENTOS SELECCIONADOS DE ENTRE TODOS LOS ASIENTOS
            if(seientsSeleccionats.indexOf(index) > -1){
                seient.classList.add('seleccionat');
            }
        })
    }

    const indexPeliculaSeleccionada = localStorage.getItem('indexPeliculaSeleccionada');

    //Guarda la pelicula
    if(indexPeliculaSeleccionada !== null){
        peliculaSelect.selectedIndex = indexPeliculaSeleccionada;
    }

    const preuPeliculaSeleccionada = localStorage.getItem('preuPeliculaSeleccionada');
    if(preuPeliculaSeleccionada !== null){
        preuDelTicket = +preuPeliculaSeleccionada;
    }
}


/* EVENTOS */
contenidor.addEventListener('click', (e) => {
    if(e.target.classList.contains('seient')
        && !e.target.classList.contains('ocupat')) {
        e.target.classList.toggle('seleccionat');


        actualitzaSeleccioSeients();
    }
});


peliculaSelect.addEventListener('change', (e)=>{
    preuDelTicket =  +e.target.value;

    guardaInfoPelicula(e.target.selectedIndex, e.target.value);

    actualitzaSeleccioSeients();

})


actualitzaSeleccioSeients();