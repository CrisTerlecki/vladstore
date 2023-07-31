import { Link, NavLink } from "react-router-dom"

const MainLayout = ({children, titulo}) => 
{
    return(
        <>
            <header>
                <nav>
                    <a href="/" class="brand">
                    <img class="img-brand" src="./logo.png" alt="vladstore"/>
                    </a>
                    <ul class="nav-ul">
                        <li class="nav-list"><NavLink className={'nav-link'} to='/'>Home</NavLink></li>
                        <li class="nav-list"><NavLink className={'nav-link'} to='/nosotros'>Nosotros</NavLink></li>
                        <li class="nav-list"><NavLink className={'nav-link'} to='/contacto'>Contacto</NavLink></li>
                        <li class="nav-list"><NavLink className={'nav-link'} to='/alta'>Alta</NavLink></li>
                    </ul>
                    <div class="cart">
                        <a href="#"><img class="cart-img" src="./img/carrito.png" alt="Carrito de compra"/></a>
                        <span class="cart-counter">0</span>
                    </div>
                </nav>                
            </header>

            <main>
                {children}
            </main>
            <hr />

            <footer>
                <div class="footer-content">
                    <div class="social-icons">
                        <a href="#" class="social-icon"><img src="./img/facebook_icon.png" alt="Facebook"/></a>
                        <a href="#" class="social-icon"><img src="./img/twitter_icon.png" alt="Twitter"/></a>
                        <a href="#" class="social-icon"><img src="./img/instagram_icon.png" alt="Instagram"/></a>
                        <a href="#" class="social-icon"><img src="./img/linkedin_icon.png" alt="LinkedIn"/></a>
                    </div>
                    <div class="footer-links">
                        <a href="#">Términos y condiciones</a>
                        <a href="#">Política de privacidad</a>
                        <a href="/contacto">Contacto</a>
                    </div>
                    <div class="footer-info">
                        <p>&copy; 2023 VladStore. Todos los derechos reservados.</p>
                    </div>
                </div>
            </footer>  
        </>
    )
}

export default MainLayout

// Se puede reemplazar "props" por "{children}" asi evito escribir {props.children}
// y escribo directamente {children}