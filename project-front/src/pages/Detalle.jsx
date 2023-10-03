import { useEffect, useState } from "react";
import MainLayout from "../layout/main/MainLayout";
import Card from "../components/card/Card";
import { useParams } from "react-router-dom";
import Preloader from "../components/preloader/Preloader";

export default function Detalle()
{
    const [item, setItem] = useState(null)

    const params = useParams()

    const id = params.id

    useEffect(() =>
    {
        if (item === null)
            fetch('https://645ec9f5f9c0732c342fcddc.mockapi.io/Productos/'+id)
                .then(res => res.json())
                .then(datos => setItem(datos))
    })

    return(
        <MainLayout>
            <div>Detalle</div>
            {
                item === null ? <Preloader/> : (
                    <Card item={item} />
                )
            }            
        </MainLayout>
    )
}