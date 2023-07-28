import { Link } from "react-router-dom";

/*
Contexto: RouterProvider
*/

const Card = ({item}) => 
{
    return(
        <div>
            {item.titulo}

            <p>{item.descripcion}</p>

            <img src={item.imagen} alt={item.titulo} />
            
            <Link to={`/detalle/${item.id}`}>Ver mas</Link>
        </div>
    )
}

export default Card;