import { useState } from "react";

const Home = () => {
    
    const [blogs, setBlogs] = useState([
        { 
            titulo: 'Mi nueva web 1',
            body: 'un texto a mostrar',
            autor: 'Lluis',
            id: 1 
        },

        { 
            titulo: 'Mi nueva web 2',
            body: 'un texto a mostrar',
            autor: 'Joan',
            id: 2 
        },

        { 
            titulo: 'Mi nueva web 3',
            body: 'un texto a mostrar',
            autor: 'Pepito',
            id: 3 
        },
    ]);
    
    return ( 
        <div className="home">

            { 
                blogs.map((blog) => (
                    <div className="blog-preview" key={blog.id}>
                        <h2> { blog.titulo } </h2>
                        <p> Escrito por { blog.autor } </p>
                    </div>
                ))
            }

        </div>
    );
}

export default Home;