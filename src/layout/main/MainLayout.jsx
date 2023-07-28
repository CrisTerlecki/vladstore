import { Link, NavLink } from "react-router-dom"
import "./MainLayout.scss"

const MainLayout = ({children, titulo}) => 
{
    return(
        <>
            <header>
                <div className="titulo">
                    <h2>{titulo}</h2>
                </div>
                Cabecera
            </header>
            <hr />

            <nav>
                <ul>
                    <li><NavLink className={'link'} to='/'>Home</NavLink></li>
                    <li><NavLink className={'link'} to='/nosotros'>Nosotros</NavLink></li>
                    <li><NavLink className={'link'} to='/contacto'>Contacto</NavLink></li>
                    <li><NavLink className={'link'} to='/alta'>Alta</NavLink></li>
                </ul>
            </nav>
            <hr />

            <main>
                <div>Main</div>
                <br />
                {children}
            </main>
            <hr />

            <footer>
                Pie de pagina
            </footer>  
        </>
    )
}

export default MainLayout

// Se puede reemplazar "props" por "{children}" asi evito escribir {props.children}
// y escribo directamente {children}