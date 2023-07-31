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
                <h1 class="section__title">Bienvenido a VladStore!</h1>    
                <h2 class="section__subTitle">Los más vendidos</h2>   
                
                <div>{busqueda}</div>
                <input className="search-bar" type="search" placeholder="Buscar" value={busqueda} onChange={
                    (e) => 
                    {
                        searchParams.set('q', e.target.value)
                        setSearchParams(searchParams)
                    }
                }/>   
                     
                <CardList/>
            </div>
        </MainLayout>
    )
}