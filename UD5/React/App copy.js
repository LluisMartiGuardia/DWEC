import './App.css';
import NavBar from './navBar';

function App() {
  const titulo = "Bienvenidos al Blog de DWEC"; //Declaracion de variables
  let meGusta = 1029;
  const persona = {
    nombre: "Lluis",
    apellido: "Marti"
  };
  const link = "https://www.google.es/";
    const links = [
      "https://www.google.es/", 
      "https://github.com/", 
      "https://css-tricks.com/"
    ];

  return (
    <div className="App">
      <div className="contenido">
        <h1>{ titulo }</h1> {/*Llamar a una variable*/}

        { 10 }

        <p>{ "Hola a todos" }</p>
        <p>{ "Me gusta: " + meGusta }</p>
        <p>{persona.nombre}</p>
        <p>{[1, 2, 3, 4, 5, 6, 7]}</p> 
        <a href={link}>Google</a>

        {/* Recorrer un array */}
        <ul>
          {
            links.map((value, index) =>{
              return <li>
                <a href={ value }>{ index +1 } - { value }</a>
              </li>
            })
          }
        </ul>

      </div>
    </div>
  );
}

export default App;
