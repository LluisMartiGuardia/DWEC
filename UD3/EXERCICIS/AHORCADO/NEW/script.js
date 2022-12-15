        let btnStart = document.getElementById('start');
        let display  = document.getElementById('display');
        let buttons  = document.getElementById('botonsLletres');
        let elCrono;
        let laMevaData = new Date();
        
        laMevaData.setHours(0,0,0,0);
        display.innerHTML = "00:00:00";
        
        function crono(){
            let horas = laMevaData.getHours();
            let minutos = laMevaData.getMinutes();
            let segundos = laMevaData.getSeconds();
            
            segundos +=1;
        
            if(segundos == 60){
                segundos = 0;
                minutos+=1;
                laMevaData.setMinutes(minutos);
            }
        
            if(horas < 10){ horas = '0'+horas; }
            if(minutos < 10){ minutos = '0'+minutos; }
            if(segundos < 10){ segundos = '0'+segundos; } 
        
            laMevaData.setSeconds(segundos);
            display.innerHTML = horas + ':' + minutos + ':' + segundos;
        }
        
        function start() { 
            elCrono = setInterval(crono, 1000); 
            btnStart.disabled = true;
            buttons.disabled = false;
        }
        btnStart.addEventListener('click', start, false);
        let value;
        const getValue = (event) => {
            value = document.getElementById(event.srcElement.id).getAttribute('value');
            console.log(value);
        }

        let cosa;
        let lletres = document.getElementsByClassName("botonsLletres");
        for(i=0;i<lletres.length;i++){
            console.log(lletres[i].value);
            document.getElementById(lletres[i]).addEventListener("", function(){
                alert(lletres[i].value);
            }), false;
        };

        //VARIABLES
        var solucions =["supercalifragilisticoespialidoso", "pilota", "patata", "cosa", "requete", "boquepasa"];
        var elegirParaula = (Math.random()*solucions.length);
        elegirParaula = Math.floor(elegirParaula);
        let paraula = solucions[elegirParaula];
        let signe="";
        var i;
        const sonIguals = (a, b) => JSON.stringify(a) === JSON.stringify(b);
        var intents = 7;
        const paraulesIncorrectes = [];
        const arrParaulaSeparada = [];
        const arrSignes = [];

        //UN BUCLE PER POSAR ELS "_" DINS L'ARRAY
        for(i=0;i<=paraula.length-1;i++){
            signe+=" _ ";
            arrParaulaSeparada.push(paraula.charAt(i));
            arrSignes.push("_");
        };        

        //EN EL BUCLE FOR REPETIREM L'ACCIO FINS LA LONGITUT DE LA PARAULA
        //EN LA CONDICIO IF ELSE ES MIRA SI LA LLETRA QUE ESCRIUS COINCIDEIX AMB ALGUNA LLETRA
        //DE LA PARAULA CORRECTA. EN CAS AFIRMATIU, LA POSA EN UN ARRAY.
        //EN CAS NEGATIU LA MOSTRA A LA CONSOLA
        do{
            document.getElementById('contingut').innerHTML = ("<br><br>La paraula: "+arrSignes+"<br><br> Et queden "+intents+" intents");

            for(i=0;i<=arrParaulaSeparada.length;i++){
                if(sonIguals(arrParaulaSeparada, arrSignes)){
                    alert("ENHORABONA, HAS GUANYAT!");
                    break;

                }else{  
                    ////////////////////////////////////////
                    if(paraula == arrParaulaSeparada[i]){

                        arrSignes[i] = paraula.charAt(0);
                        console.log(arrSignes);
                        continue;
                    }else{

                        paraulesIncorrectes.push(paraula);
                        continue;
                    }
                }
                i+1;
            }
            intents = intents-1;
        }while(intents >0);
        
        //MOSTREM ELS RESULTATS FINALS        
        console.log("Paraula separada: "+arrParaulaSeparada);
        console.log("array signes: "+arrSignes);
        console.log("SIGNES AMB LLETRES: "+JSON.stringify(arrSignes));
        console.log("ARRAY SOLUCIOns: "+JSON.stringify(arrParaulaSeparada));
        console.log("LLETRES INCORRECTES: "+paraulesIncorrectes);
        // alert("La paraula correcta era "+solucions);