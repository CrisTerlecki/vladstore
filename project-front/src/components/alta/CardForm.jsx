import {useState} from 'react'

const CardForm = () => 
{
    const [formData, setFormData] = useState({
        id: '',
        titulo: '',
        precio: '',
        descripcion: '',
        imagen: ''
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({...formData, [name]: value})
    }

    const handleSubmit = async (e) => 
    {
        e.preventDefault()
        if (!formData.titulo || !formData.precio || !formData.descripcion || !formData.id || !formData.imagen) {
            alert('Todos los campos son obligatorios.')
            return
        } else {
            alert('Formulario Enviado Correctamente')
        }

        try {
            await fetch('http://localhost:5000/catalogo', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
        })
        } catch (error) {
            console.error('Error al conectar con el servidor:', error)
        }
    }

    return(
        <form onSubmit={handleSubmit}>
            <div className="card__form">
                <label>ID:</label>
                <input
                    type="number"
                    name="id"
                    placeholder='ID del Articulo'
                    value={formData.id}
                    onChange={handleChange}
                />
                <label>Título:</label>
                <input
                    type="text"
                    name="titulo"
                    placeholder='Nombre del Articulo'
                    value={formData.titulo}
                    onChange={handleChange}
                />
                <label>Precio:</label>
                <input
                    type="number"
                    name="precio"
                    placeholder='Precio'
                    value={formData.precio}
                    onChange={handleChange}
                />
                <label>Descripción:</label>
                <textarea
                    rows={4}
                    type="text"
                    name="descripcion"
                    placeholder='Descripcion'
                    value={formData.descripcion}
                    onChange={handleChange}
                />
                <label>LINK de imagen:</label>
                <input
                    type="text"
                    name="imagen"
                    placeholder='Link de imagen'
                    value={formData.imagen}
                    onChange={handleChange}
                />
                <button type="submit">Enviar</button> 
            </div>
            
        </form>
    )
}

export default CardForm;