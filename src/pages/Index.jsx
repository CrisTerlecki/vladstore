import { useSearchParams } from "react-router-dom";
import CardList from "../components/card-list/CardList";
import MainLayout from "../layout/main/MainLayout";

/*
Dependencias: RouterProvider
*/

export default function Index()
{
    const [searchParams, setSearchParams] = useSearchParams();

    const busqueda = searchParams.get('q')

    return(        
        <MainLayout>
            <div>
                <div>{busqueda}</div>
                <input type="search" onInput={
                    (e) => 
                    {
                        searchParams.set('q', e.target.value)
                        setSearchParams(searchParams)
                    }
                }/>  
                <h2>Cards</h2>         
                <CardList/>
            </div>
        </MainLayout>
    )
}