import { useSearchParams } from "react-router-dom";
import CardList from "../components/card-list/CardList";
import MainLayout from "../layout/main/MainLayout";

/*
Dependencias: RouterProvider
*/

export default function Index()
{
    return(        
        <MainLayout>
            <div>
                <h1 class="section__title">Bienvenido a VladStore!</h1>    
                <h2 class="section__subTitle">Los más vendidos</h2>                      
                <CardList/>
            </div>
        </MainLayout>
    )
}