import {useEffect, useState} from "react";
import Card from "../card/Card";
import Preloader from "../preloader/Preloader";

const CardList = () => 
{
    const [items, setItems] = useState([])

    useEffect(() =>
    {
        if (items.length === 0)
            fetch('http://localhost:5000/catalogo')
                .then(res => res.json())
                .then(datos => setItems(datos))
    })

    return(
        <div>
            {items.length === 0 ? <Preloader/> : (
                <>
                    {items.map(
                        (item, i) => <Card item={item} key={i} />
                    )}
                </>
            )}            
        </div>
    )
}

export default CardList;