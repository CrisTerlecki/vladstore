const CardDetalle = ({item}) => 
{
    return(
        <div className="card">
            <div class="card__index">
                <div class="card__image">                
                    <img src={item.imagen} alt={item.titulo} />
                </div>
                <div class="card__content">
                    <h1 class="card__title">{item.titulo}</h1>
                    <p class="card__description">{item.descripcion}</p>
                    <span class="card__price">${item.precio}</span>                    
                    <div class="card__actions">
                        <a href="#" class="card__cart">Al carrito</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardDetalle;