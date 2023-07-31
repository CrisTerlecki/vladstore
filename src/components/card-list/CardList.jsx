import {useEffect, useState} from "react";
import Card from "../card/Card";
import Preloader from "../preloader/Preloader";

/*
Contexto: RouterProvider
*/

const CardList = () => 
{
    const [items, setItems] = useState([])

    useEffect(() =>
    {
        if (items.length == 0)
            fetch('https://645ec9f5f9c0732c342fcddc.mockapi.io/Productos')
                .then(res => res.json())
                .then(datos => setItems(datos))
    })

    return(
        <div>
            {
                items.length == 0 ? <Preloader/> : (
                    <>
                        {items.map(
                            (item, i) => <Card item={item} key={i} />
                        )}
                    </>
                )
            }            
        </div>
    )
}

export default CardList;