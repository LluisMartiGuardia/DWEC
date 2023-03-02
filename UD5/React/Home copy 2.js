import { useState } from "react";

const Home = () => {


    //PRIMERA PRUEBA
    // let nombre = "Joan";

    // const handleClick = () => {
    //     //El valor no cambia porque no es reactivo
    //     nombre = "Ariadna";
    //     console.log(nombre);
    // }


    //SEGUNDA PRUEBA
    //Variable tipo array, con una variable y una funcion como parametros
    const [nombre, setNombre] = useState('Joan');
    
    const [edad, setEdad] = useState(20);

    const handleClick = () => {
        //Renderiza de nuevo el contenido porque es reactivo
        setNombre('Ariadna');
        setEdad(30);
    }

    const handleCumple = () => {
        setEdad(edad+1);
    }

    
    return ( 

        <div className="home">
            <h2>Pagina principal</h2>

            <div>
                <button onClick = {() => handleClick() }>Mostrar info</button>
                <button onClick = {() => handleCumple() }>Sumar años</button>
                <p>{nombre} tiene { edad } años </p>
            </div>
        </div>
    );
}

export default Home;