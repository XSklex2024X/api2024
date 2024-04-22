import { useEffect, useState } from "react";

export const App = () => {
  const [informacion, setInformacion] = useState([]);
  const [counter, setCounter] = useState(1)

  useEffect(() => {

    const conexion = async () => {
    const resp = await fetch(`https://futuramaapi.com/api/characters?page=${counter}&size=12`);
    const datos = await resp.json();
    setInformacion(datos.items);

    };

    return conexion

  }, [ counter ]);

//Codigo JSX
  return (
    <>
    
    
    <div className="padreTodos">


        { informacion.map(  ({ id, image, name, status, species })  => 
            <div key={ id } className="tarjeta">
            { !image ? "" : <img src={ image } alt="" width="419px" height="314px" /> }
            <main className="hijo">
              <p className="text"> Especie: { species }</p>
              <p className="text"> Estado: { status }</p>
            </main>

            <div className="hijoDos">

            <a className="texth3" href={`https://futuramaapi.com/api/characters/${id}`}> Ver </a>

            <p className="text">{ name }</p>
              </div>
        </div>
        ) }
 

  </div>






<button onClick={() => setCounter(counter + 1) }>CAMBIAR</button>




    </>
  )

}
  
