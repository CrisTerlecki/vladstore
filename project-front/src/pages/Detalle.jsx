import { useEffect, useState } from "react";
import MainLayout from "../layout/main/MainLayout";
import { useParams } from "react-router-dom";
import Preloader from "../components/preloader/Preloader";
import CardDetalle from "../components/card/CardDetalle";

export default function Detalle()
{
    const {id} = useParams()
    const [item, setItem] = useState(null)

    useEffect(() =>
    {
        if (item === null){
            fetch(`http://localhost:5000/catalogo/${id}`)
                .then((res) => res.json())
                .then((datos) => setItem(datos))
                .catch((error) => console.error('Error al obtener el detalle:', error))
        }
    }, [id]) 

    return(
        <MainLayout>
            {item === null ? <Preloader/> : (
            <CardDetalle item={item} />
            )}            
        </MainLayout>
    )
}