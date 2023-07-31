import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Index from './pages/Index';
import Contacto from './pages/Contacto';
import Alta from './pages/Alta';
import Nosotros from './pages/Nosotros';
import Detalle from './pages/Detalle';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Index />
    },
    {
        path: '/detalle/:id',
        element: <Detalle />
    },
    {
        path: '/contacto',
        element: <Contacto />
    },
    {
        path: '/alta',
        element: <Alta />
    },
    {
        path: '/nosotros',
        element: <Nosotros />
    },
])

const App = () => 
{
    return(    
        <>
            <RouterProvider 
                router={router} 
                fallbackElement={<Nosotros />} /* Es el elemento que se va a estar renderizando cuando no haya 'macho',es decir cuando no exista la ruta establecida */
            />
        </>
    )
}

export default App;