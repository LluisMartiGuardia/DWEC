const Home = () => {
    const handleClick = (nombre) => {
        console.log("Dale "+nombre);
    }
    const handleClick2 = (array) => {

        const aleatorio = Math.floor(Math.random() * array.length);
        let arrVacio = [];

        //Mostrar un valor aleatorio del array
        // console.log(array[aleatorio]);

        //Mostrar todos los valores con un bucle for
        for (let index = aleatorio; index < array.length; index++) {

            arrVacio.push(array[index]);
            array.splice(index,1);

            if( array[index] == arrVacio[index]){
                console.log("Array normal: "+array);
                console.log("Array Vacio: "+arrVacio);
            }else{
                console.log(array[index]);
            }
        };
    }
    
    return ( 

        <div className="home">
            <h2>Pagina principal</h2>

            {/* function() --> Invocar */}
            {/* function --> Referenciar */}
            <div>
                <button onClick = {() => handleClick('Lluis') }>Dale!</button>

                <button onClick = {() => handleClick2(['Lluis', 'Susana', 'Hola', 'Adeu']) } >No le des!</button>                
            </div>
        </div>
     );
}

export default Home;